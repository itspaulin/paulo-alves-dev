export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  type: "frontend" | "backend" | "websites";
  link: string;
  github: string;
}

export const projects: Project[] = [
  // Frontend Projects
  {
    title: "E-commerce Platform",
    description:
      "Full-stack marketplace application with real-time features, payment integration, and admin dashboard. Built for scalability and performance.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Stripe"],
    category: "SaaS Platform",
    type: "frontend",
    link: "#",
    github: "#",
  },
  {
    title: "Educational Management System",
    description:
      "Comprehensive platform for educational institutions with student management, course tracking, and interactive learning modules.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "Redux", "Material-UI"],
    category: "Web Application",
    type: "frontend",
    link: "#",
    github: "#",
  },
  {
    title: "Real Estate Portal",
    description:
      "Modern property listing platform with advanced search, virtual tours, and integrated CRM for real estate professionals.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Tailwind", "React Query", "Framer Motion"],
    category: "Frontend Application",
    type: "frontend",
    link: "#",
    github: "#",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Interactive analytics dashboard with real-time data visualization, charts, and customizable widgets for business insights.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "D3.js", "Chart.js"],
    category: "Dashboard",
    type: "frontend",
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with kanban boards, time tracking, team collaboration, and deadline management.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Next.js", "Zustand", "Tailwind"],
    category: "Productivity App",
    type: "frontend",
    link: "#",
    github: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Multi-platform social media management tool with scheduling, analytics, and engagement tracking features.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "React Query", "Recharts"],
    category: "Dashboard",
    type: "frontend",
    link: "#",
    github: "#",
  },
  // Backend Projects
  {
    title: "API Gateway Service",
    description:
      "Microservices architecture with authentication, rate limiting, and monitoring. Handles 10k+ requests per minute efficiently.",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "NestJS", "Redis", "Docker", "AWS"],
    category: "Backend Service",
    type: "backend",
    link: "#",
    github: "#",
  },
  {
    title: "Payment Processing API",
    description:
      "Secure payment processing system with multiple gateway integrations, fraud detection, and real-time transaction monitoring.",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "Express", "PostgreSQL", "Stripe", "JWT"],
    category: "Financial API",
    type: "backend",
    link: "#",
    github: "#",
  },
  {
    title: "Content Management API",
    description:
      "Headless CMS with RESTful APIs, file upload handling, role-based permissions, and automated content moderation.",
    image: "/api/placeholder/600/400",
    technologies: ["NestJS", "TypeScript", "MongoDB", "AWS S3", "Bull"],
    category: "CMS Backend",
    type: "backend",
    link: "#",
    github: "#",
  },
  {
    title: "Real-time Chat System",
    description:
      "Scalable messaging system with WebSocket connections, message encryption, file sharing, and presence indicators.",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "Socket.io", "Redis", "PostgreSQL", "Docker"],
    category: "Real-time Service",
    type: "backend",
    link: "#",
    github: "#",
  },
  {
    title: "E-learning Platform API",
    description:
      "Comprehensive backend for online learning with course management, progress tracking, video streaming, and assessment tools.",
    image: "/api/placeholder/600/400",
    technologies: ["NestJS", "PostgreSQL", "Redis", "AWS", "FFmpeg"],
    category: "Education API",
    type: "backend",
    link: "#",
    github: "#",
  },
  {
    title: "IoT Data Processing Service",
    description:
      "High-performance data ingestion and processing service for IoT devices with real-time analytics and alerting.",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "Apache Kafka", "TimescaleDB", "Docker"],
    category: "Data Service",
    type: "backend",
    link: "#",
    github: "#",
  },
  // Website Projects
  {
    title: "Corporate Website - TechCorp",
    description:
      "Modern corporate website with interactive animations, responsive design, and optimized performance for business presentation.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Tailwind", "GSAP", "Framer Motion"],
    category: "Corporate Site",
    type: "websites",
    link: "#",
    github: "#",
  },
  {
    title: "Restaurant Chain Website",
    description:
      "Multi-location restaurant website with online ordering, menu management, reservation system, and delivery integration.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Next.js", "Stripe", "Google Maps API"],
    category: "Business Website",
    type: "websites",
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio - Creative Agency",
    description:
      "Stunning portfolio website for creative agency showcasing projects with immersive galleries and smooth animations.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Three.js", "GSAP", "Tailwind"],
    category: "Portfolio Site",
    type: "websites",
    link: "#",
    github: "#",
  },
  {
    title: "Healthcare Clinic Website",
    description:
      "Professional healthcare website with appointment booking, doctor profiles, service information, and patient portal.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Next.js", "Tailwind", "Calendar API"],
    category: "Healthcare Site",
    type: "websites",
    link: "#",
    github: "#",
  },
  {
    title: "E-commerce Store - Fashion",
    description:
      "High-converting fashion e-commerce website with product showcase, size guides, wishlist, and seamless checkout experience.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Shopify", "Tailwind", "Algolia"],
    category: "E-commerce Site",
    type: "websites",
    link: "#",
    github: "#",
  },
  {
    title: "SaaS Landing Page",
    description:
      "Conversion-optimized landing page for SaaS product with pricing tables, feature showcases, and lead generation forms.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Tailwind", "Framer Motion", "Analytics"],
    category: "Landing Page",
    type: "websites",
    link: "#",
    github: "#",
  },
];
