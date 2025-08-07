export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  type: "frontend" | "backend" | "websites";
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Menu system",
    description:
      "Online menu system developed with user registration, authentication, product creation and editing, shopping cart, and integrated payment processing — ideal for restaurants or delivery services.",
    image: "/assets/foodex.png",
    technologies: [
      "React",
      "JavaScript",
      "SQL",
      "Knex.js",
      "Styled-Components",
      "Toast",
    ],
    category: "Delivery Platform",
    type: "frontend",
    link: "https://sval-food-explorer.netlify.app/",
    github: "https://github.com/itspaulin/food-explorer",
  },
  {
    title: "Le Jardin Noir",
    description:
      "A refined and fully responsive landing page designed for a fictional high-end French restaurant specializing in contemporary cuisine.",
    image: "/assets/lejardin.png",
    technologies: ["React", "JavaScript", "Tailwind", "Toast", "GSAP"],
    category: "Restaurant Site",
    type: "frontend",
    link: "https://jardin-noir-eta.vercel.app/",
  },
  {
    title: "Automotive Management System",
    description:
      "A robust backend system for managing automotive operations — including vehicles, services, customers, and maintenance workflows. Built with NestJS, DDD, and Clean Architecture principles.",
    image: "/assets/backend.avif",
    technologies: ["Node.js", "NestJS", "Docker", "PostgreSQL", "Prisma"],
    category: "Backend Service",
    type: "backend",
    github: "https://github.com/itspaulin/automotive-management/",
  },
  {
    title: "Biox Recipes",
    description:
      "A recipe management system built with NestJS following Domain-Driven Design (DDD) principles. This application provides a comprehensive solution for managing recipes, ingredients, and cooking instructions..",
    image: "/assets/backend.avif",
    technologies: ["Node.js", "NestJS", "Docker", "PostgreSQL", "Prisma"],
    category: "View Recipes",
    type: "backend",
    github: "https://github.com/itspaulin/biox-recipes",
  },
  {
    title: "ForumCore API",
    description:
      "A fully modular backend system for managing a modern Q&A forum — built with NestJS, Clean Architecture, and Domain-Driven Design. CleanForum handles questions, answers, comments, user auth, and file uploads..",
    image: "/assets/backend.avif",
    technologies: [
      "Node.js",
      "NestJS",
      "Docker",
      "PostgreSQL",
      "Prisma",
      "Redis",
    ],
    category: "API Backend",
    type: "backend",
    github: "https://github.com/itspaulin/ForumCore",
  },
  {
    title: "Amelis Conecta",
    description:
      "Modern healthcare landing page for 'Amelis' with purple/pink design, featuring patient care solutions, testimonials, chatbot interface, and corporate wellness services with clean UX.RetryClaude can make mistakes. Please double-check responses.",
    image: "/assets/amelis.png",
    technologies: ["Wordpress", "Elementor", "CSS"],
    category: "Business Website",
    type: "websites",
    link: "https://amelisconecta.com.br/",
  },
  {
    title: "Bloom Studio",
    description:
      "Bloom Beauty Studio offers premium organic products, 8+ years of expertise, and personalized care in a relaxing space. Book your appointment and feel confident, renewed, and truly pampered.",
    image: "/assets/bloom.png",
    technologies: ["Wordpress", "Elementor", "CSS"],
    category: "Business Website",
    type: "websites",
    link: "https://bloom-studio.netlify.app/",
  },
  {
    title: "CupCode",
    description:
      "Discover your ideal co-working space in Austin. Cup & Code offers flexible desks, fresh coffee, and a vibrant community to boost your productivity and creativity. Book your spot today.",
    image: "/assets/cup.png",
    technologies: ["React.js", "GSAP", "Tailwind"],
    category: "Business Website",
    type: "websites",
    link: "https://cupandcode.vercel.app/",
  },
  {
    title: "Sterling Architecture Website",
    description:
      "Sterling Architecture delivers award-winning residential and commercial designs with precision, creativity, and over $120M in completed projects. Start your vision with expert guidance today.",
    image: "/assets/sterling.png",
    technologies: ["React.js", "GSAP", "Tailwind"],
    category: "Business Website",
    type: "websites",
    link: "https://sterling-reveal.vercel.app/",
  },
  {
    title: "Mountain View Auto Repair",
    description:
      "Trusted auto repair in Boulder, CO for 15+ years. Family-owned, ASE certified, free estimates, and 24/7 support. Experience honest service and quality repairs you can rely on.",
    image: "/assets/mountain.png",
    technologies: ["Next.js", "Shopify", "Tailwind", "Algolia"],
    category: "Business Website",
    type: "websites",
    link: "https://mountain-view-auto-repair.netlify.app/",
  },
  {
    title: "StoqFácil",
    description:
      "StoqFácil is a trusted distributor of electrical auto parts in Rio Grande do Norte, offering quality service, fast delivery, and tailored solutions for workshops and retailers.",
    image: "/assets/stoq facil.png",
    technologies: ["Wordpress", "Elementor", "CSS"],
    category: "Landing Page",
    type: "websites",
    link: "https://stoqfacil.com/",
  },
  {
    title: "Feito Potiguar",
    description:
      "Feito Potiguar is a platform that promotes local producers from Rio Grande do Norte, highlighting their origin and quality. It features a product catalog, informational content, and a contact form.",
    image: "/assets/feito potiguar.png",
    technologies: ["Wordpress", "Elementor", "CSS"],
    category: "Landing Page",
    type: "websites",
    link: "https://feitopotiguar.com.br/",
  },
  {
    title: "Cacio Paiva Odontopediatria",
    description:
      "A colorful and family-friendly website created for a real pediatric dentistry clinic. The design focuses on building trust with parents while creating a fun and welcoming experience for children.",
    image: "/assets/cacio.png",
    technologies: ["Wordpress", "Elementor", "CSS"],
    category: "Landing Page",
    type: "websites",
    link: "https://caciopaiva.com.br/",
  },
  {
    title: "USG Exames",
    description:
      "A modern and professional website developed for a medical clinic specialized in vascular ultrasound diagnostics and treatment. The design emphasizes trust, precision, and accessibility, tailored to a health-focused audience.",
    image: "/assets/usg.png",
    technologies: ["Wordpress", "Elementor", "CSS"],
    category: "Landing Page",
    type: "websites",
    link: "https://usgexames.com.br/",
  },
];
