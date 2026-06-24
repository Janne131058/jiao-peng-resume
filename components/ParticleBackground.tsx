"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * A lightweight Three.js particle field with connecting lines — a subtle
 * "network" motif that nods to Jiao's infrastructure/networking background.
 * Runs on a single requestAnimationFrame loop and cleans up on unmount.
 */
export default function ParticleBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      mount.clientWidth / mount.clientHeight,
      1,
      1000
    );
    camera.position.z = 320;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Particle field
    const COUNT = window.innerWidth < 768 ? 60 : 120;
    const SPREAD = 600;
    const positions = new Float32Array(COUNT * 3);
    const velocities: THREE.Vector3[] = [];

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * SPREAD;
      positions[i * 3 + 1] = (Math.random() - 0.5) * SPREAD;
      positions[i * 3 + 2] = (Math.random() - 0.5) * SPREAD;
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.25,
          (Math.random() - 0.5) * 0.25,
          (Math.random() - 0.5) * 0.25
        )
      );
    }

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 3,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    // Connecting lines (rebuilt each frame for nearby particles)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.25,
    });
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(COUNT * COUNT * 3);
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const LINK_DIST = 110;

    // Gentle parallax toward the pointer
    const target = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 40;
      target.y = (e.clientY / window.innerHeight - 0.5) * 40;
    };
    window.addEventListener("pointermove", onPointerMove);

    let frameId = 0;
    const half = SPREAD / 2;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const pos = pointsGeometry.attributes.position
        .array as Float32Array;

      if (!prefersReducedMotion) {
        for (let i = 0; i < COUNT; i++) {
          const v = velocities[i];
          pos[i * 3] += v.x;
          pos[i * 3 + 1] += v.y;
          pos[i * 3 + 2] += v.z;
          // bounce within the cube
          for (let a = 0; a < 3; a++) {
            const idx = i * 3 + a;
            if (pos[idx] > half || pos[idx] < -half) {
              if (a === 0) v.x = -v.x;
              if (a === 1) v.y = -v.y;
              if (a === 2) v.z = -v.z;
            }
          }
        }
        pointsGeometry.attributes.position.needsUpdate = true;
      }

      // Rebuild link segments between nearby particles
      let ptr = 0;
      for (let i = 0; i < COUNT; i++) {
        const ax = pos[i * 3];
        const ay = pos[i * 3 + 1];
        const az = pos[i * 3 + 2];
        for (let j = i + 1; j < COUNT; j++) {
          const dx = ax - pos[j * 3];
          const dy = ay - pos[j * 3 + 1];
          const dz = az - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < LINK_DIST) {
            linePositions[ptr++] = ax;
            linePositions[ptr++] = ay;
            linePositions[ptr++] = az;
            linePositions[ptr++] = pos[j * 3];
            linePositions[ptr++] = pos[j * 3 + 1];
            linePositions[ptr++] = pos[j * 3 + 2];
          }
        }
      }
      lineGeometry.setDrawRange(0, ptr / 3);
      lineGeometry.attributes.position.needsUpdate = true;

      // ease camera toward parallax target
      camera.position.x += (target.x - camera.position.x) * 0.03;
      camera.position.y += (-target.y - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      scene.rotation.y += prefersReducedMotion ? 0 : 0.0006;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 h-full w-full"
    />
  );
}
