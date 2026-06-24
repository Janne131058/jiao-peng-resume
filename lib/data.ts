export const profile = {
  name: "Jiao Peng",
  title: "Software & Systems Engineer",
  tagline:
    "IT infrastructure, networking, and full-stack software — building secure, compliant systems from the ground up.",
  email: "pengjiaous0812@gmail.com",
  phone: "650-431-8146",
  location: "Menlo Park, CA",
};

export const skillGroups = [
  {
    label: "Infrastructure & Networking",
    items: [
      "Windows Server",
      "Active Directory",
      "VMware / vSphere",
      "LAN / WAN",
      "VLAN",
      "VPN",
      "Firewall",
      "Wi-Fi",
      "Azure",
      "AWS",
    ],
  },
  {
    label: "Security & Compliance",
    items: [
      "Cybersecurity frameworks",
      "Penetration testing",
      "Security audits",
      "21 CFR Part 11",
      "cGMP",
      "HIPAA",
      "Zero Trust",
      "MFA",
      "Backup & disaster recovery",
    ],
  },
  {
    label: "Programming & Scripting",
    items: [
      "Python",
      "Bash",
      "Java",
      "JavaScript",
      "Automation",
      "Test scripting",
      "Data analysis",
    ],
  },
  {
    label: "Databases & Tools",
    items: [
      "MySQL",
      "MongoDB",
      "Redis",
      "PostgreSQL",
      "JIRA",
      "Git",
      "Linux",
      "Microsoft 365",
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "CSBio",
    role: "Software & Systems Engineer",
    location: "Menlo Park, CA",
    period: "Jan 2024 – Present",
    bullets: [
      "Sole IT engineer responsible for designing, deploying, and managing full IT infrastructure across two office locations, supporting both on-site and remote users via VPN.",
      "Owned Windows Server administration, Active Directory user and access management, Microsoft 365, VMware virtualization, and multi-site LAN/WAN networking including VLAN configuration, firewall, and Wi-Fi segmentation.",
      "Managed cloud infrastructure on AWS; implemented and maintained VPN for remote workforce connectivity and secure access across all sites.",
      "Led cybersecurity program: deployed and monitored security frameworks, conducted regular penetration testing and security assessments, implemented data backup and disaster recovery in compliance with 21 CFR Part 11 and cGMP standards.",
      "Managed vendor relationships, software licensing, SOP documentation, and system diagrams; provided escalated help desk support to all staff.",
      "Contributed to 503B-compliant facility build-out including IT infrastructure setup, system implementation, and compliance documentation.",
      "Developed Python-based automation scripts and test plans for QC lab software; managed instrument control software (Agilent OpenLAB, Waters Empower) and maintained lab instrument qualification records.",
    ],
  },
  {
    company: "Ryzlink",
    role: "Software Engineer",
    location: "San Jose, CA",
    period: "Mar 2023 – Sep 2023",
    bullets: [
      "Built a report generator using Spring Boot, MySQL, and MongoDB deployed on AWS EC2; implemented REST microservices with Spring Boot and Swagger.",
      "Enabled automated notifications via AWS Lambda and SNS; implemented fault tolerance with Spring Cloud and a Kafka message broker.",
    ],
  },
  {
    company: "Supermicro Computer, Inc.",
    role: "System Engineer",
    location: "San Jose, CA",
    period: "Jun 2022 – Feb 2023",
    bullets: [
      "Defined and executed system test plans to validate server systems against functional specifications and industry standards across Linux and Windows environments.",
      "Automated test procedures with scripting; tracked work items with JIRA and managed repositories with Git.",
    ],
  },
  {
    company: "Peep Tech",
    role: "Software Engineer",
    location: "San Jose, CA",
    period: "Oct 2021 – Jun 2022",
    bullets: [
      "Developed RESTful web services and EJB components using J2EE design patterns; built applications using Java Server Faces (JSF).",
    ],
  },
  {
    company: "Jointer",
    role: "Software Engineer",
    location: "Los Altos, CA",
    period: "Apr 2020 – Oct 2021",
    bullets: [
      "Developed a React.js frontend with Redux state management; product gained 10,000+ users within five days of launch.",
    ],
  },
];

export type Project = {
  name: string;
  period: string;
  bullets: string[];
};

export const projects: Project[] = [
  {
    name: "Food Court Network Infrastructure Deployment (Freelance)",
    period: "2025",
    bullets: [
      "Designed and deployed large-scale network infrastructure for an outdoor food court supporting 30–50 food trucks and up to 1,000 concurrent users.",
      "Configured Wi-Fi coverage, network segmentation, and connectivity for POS systems and operational devices across the entire venue.",
    ],
  },
  {
    name: "Mobile Cardiac Screening Vehicle Network Deployment",
    period: "2026",
    bullets: [
      "Designed and deployed network infrastructure for a Siemens mobile cardiac screening vehicle, providing reliable connectivity in remote locations via Starlink satellite internet.",
      "Configured on-board Wi-Fi, a VPN tunnel back to the CSBio corporate network, and connected 5 medical devices, ensuring secure and compliant data transmission under cGMP and 21 CFR Part 11 standards.",
    ],
  },
  {
    name: "CSBio New Office Network Infrastructure Build-out",
    period: "2024",
    bullets: [
      "Designed and deployed end-to-end network infrastructure for a new office from the ground up, supporting 50–100 users and 500+ devices including lab instruments.",
      "Configured Cisco switches, routers, and servers; deployed Cisco and Fortinet firewalls with VLAN segmentation, Wi-Fi access points, and VPN for secure multi-site connectivity.",
      "Implemented network security policies and access controls ensuring full compliance with cGMP and 21 CFR Part 11 standards.",
    ],
  },
  {
    name: "Internal Database Station Metric Platform",
    period: "Jun 2022 – Mar 2023",
    bullets: [
      "Built a monitoring platform for 20,000+ database servers using Python, Java Spring Boot, MongoDB, and a React/Node.js dashboard for real-time tracking and remote control.",
    ],
  },
  {
    name: "AI-Powered Real-Time Speech Assistant",
    period: "Mar 2023 – Sep 2023",
    bullets: [
      "Developed an AI speech assistant with real-time translation, Q&A, and meeting productivity tools using Python, TensorFlow, Hugging Face Transformers, and Docker.",
    ],
  },
];

export type Education = {
  school: string;
  detail: string;
  degree: string;
  note?: string;
};

export const education: Education[] = [
  {
    school: "Sofia University",
    detail: "GPA: 3.92 / 4.00",
    degree: "Master of Science, Computer Science",
    note: "Relevant coursework: Data Structures & Algorithms, Software Engineering, Server-side Web.",
  },
  {
    school: "South-Central Minzu University",
    detail: "Wuhan, China · GPA: 3.9 / 4.0",
    degree: "Bachelor of Accounting",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
