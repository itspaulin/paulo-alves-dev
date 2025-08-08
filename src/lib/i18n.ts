import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // Navigation
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.work": "Work",
      "nav.contact": "Contact",
      "nav.letsTalk": "Let's Talk",

      // Hero Section
      "hero.title": "Paulo Alves",
      "hero.subtitle":
        "Building scalable web applications and performant APIs with React, Next.js, and Node.js for 3+ years. Transforming ideas into digital solutions for clients worldwide.",
      "hero.viewWork": "View My Work",
      "hero.letsTalk": "Let's Talk",

      // About Section
      "about.title": "Transforming Ideas into Digital Solutions",
      "about.description":
        "With 3+ years of Full Stack development experience and a Software Engineering degree from UniCesumar, I specialize in creating scalable web applications. Enhanced by Rocketseat's intensive bootcamp, I focus on solving real problems with simple, efficient solutions while constantly seeking technical challenges for growth.",
      "about.experience": "3+ Years Experience",
      "about.projects": "50+ Projects Delivered",
      "about.clients": "International Clients",

      // Skills Section
      "skills.title": "Technical Expertise",
      "skills.subtitle":
        "Modern technologies and best practices for building exceptional digital experiences",
      "skills.frontend": "Frontend",
      "skills.backend": "Backend",
      "skills.infrastructure": "Infrastructure",
      "skills.practices": "Practices",

      // Experience Section
      "experience.title": "Professional Experience",
      "experience.subtitle":
        "Building exceptional digital solutions across diverse industries and technologies",
      "experience.current": "Current",
      "experience.keyAchievements": "Key Achievements",
      "experience.technologies": "Technologies",

      // VesalStudio
      "experience.vesalstudio.title": "Full Stack Developer",
      "experience.vesalstudio.company": "VesalStudio",
      "experience.vesalstudio.period": "Oct 2022 - Present",
      "experience.vesalstudio.type": "Full-time",
      "experience.vesalstudio.description":
        "Leading fullstack web application development with modern technologies",
      "experience.vesalstudio.achievement1":
        "Developed dynamic interfaces with React.js and Next.js",
      "experience.vesalstudio.achievement2":
        "Built scalable RESTful APIs using Node.js",
      "experience.vesalstudio.achievement3":
        "Designed and optimized SQL database architectures",
      "experience.vesalstudio.achievement4":
        "Implemented TypeScript for enhanced code quality",
      "experience.vesalstudio.achievement5":
        "Containerized applications with Docker for consistent deployments",

      // Super1
      "experience.super1.title": "Frontend Developer",
      "experience.super1.company": "Super1",
      "experience.super1.period": "Feb 2025 - Aug 2025",
      "experience.super1.type": "Contract",
      "experience.super1.description":
        "Marketplace platform development with focus on user experience",
      "experience.super1.achievement1":
        "Built interactive marketplace components using Svelte",
      "experience.super1.achievement2":
        "Created responsive and dynamic user interfaces",
      "experience.super1.achievement3":
        "Optimized performance for high-traffic applications",

      // Agência Gentileza
      "experience.gentileza.title": "Frontend Developer",
      "experience.gentileza.company": "Agência Gentileza",
      "experience.gentileza.period": "Nov 2023 - Feb 2025",
      "experience.gentileza.type": "Contract",
      "experience.gentileza.description":
        "Educational platform development and legacy system modernization",
      "experience.gentileza.achievement1":
        "Developed educational platform interfaces with React.js",
      "experience.gentileza.achievement2":
        "Modernized legacy systems with improved UX/UI",
      "experience.gentileza.achievement3":
        "Integrated third-party APIs for enhanced functionality",
      "experience.gentileza.achievement4":
        "Applied best practices in frontend development",

      // Portfolio Section
      "portfolio.title": "Selected Work & Projects",
      "portfolio.subtitle":
        "The development process that solves business problems",
      "portfolio.viewAll": "View All Projects",
      "portfolio.frontend": "Frontend",
      "portfolio.backend": "Backend",
      "portfolio.websites": "Websites",
      "portfolio.viewProject": "View Project",
      "portfolio.github": "GitHub",

      // Process Section
      "process.title": "My Development Process",
      "process.subtitle":
        "A systematic approach to building exceptional digital solutions",
      "process.discovery.title": "Discovery & Planning",
      "process.discovery.description":
        "Understanding requirements, defining architecture, and creating detailed project roadmaps for successful execution.",
      "process.development.title": "Development",
      "process.development.description":
        "Writing clean, maintainable code using modern technologies and best practices for optimal performance.",
      "process.testing.title": "Testing & Quality",
      "process.testing.description":
        "Comprehensive testing strategies ensuring reliability, performance, and seamless user experiences.",
      "process.deployment.title": "Deployment & Maintenance",
      "process.deployment.description":
        "Scalable deployment solutions with ongoing support and continuous improvement strategies.",

      // Contact Section
      "contact.title": "Get In Touch",
      "contact.subtitle": "Ready to bring your idea to life? Let's talk!",

      // FORM LABELS:
      "contact.form.name": "Name",
      "contact.form.email": "Email",
      "contact.form.subject": "Subject",
      "contact.form.project": "Project Details",
      "contact.form.send": "Send Message",

      "contact.form.namePlaceholder": "Your full name",
      "contact.form.emailPlaceholder": "your@email.com",
      "contact.form.subjectPlaceholder": "Subject",
      "contact.form.projectPlaceholder":
        "Tell me about your project, goals, and requirements...",
      "contact.form.defaultSubject": "New contact from portfolio",
      "contact.form.validation.title": "Missing Information",
      "contact.form.validation.description":
        "Please fill in all required fields.",
      "contact.form.success.title": "Message Sent!",
      "contact.form.success.description":
        "Thank you for your message. I'll get back to you within 24 hours.",
      "contact.form.error.title": "Error",
      "contact.form.error.description":
        "Failed to send message. Please try again.",
      "contact.info.title": "Let's Connect",
      "contact.info.description":
        "I'm always excited to discuss new projects and opportunities. Whether you need a full-stack application, API development, or technical consultation, I'm here to help bring your vision to life.",
      "contact.info.email": "Email",
      "contact.info.linkedinDesc": "Connect professionally",
      "contact.info.githubDesc": "View my open source work",
      "contact.info.responseTime.title": "Response Time",
      "contact.info.responseTime.description":
        "I typically respond to all inquiries within 24 hours. For urgent projects, don't hesitate to mention it in your message.",

      // Footer
      "footer.quickLinks": "Quick Links",
      "footer.services": "Services",
      "footer.service1": "Frontend Development",
      "footer.service2": "Backend Development",
      "footer.service3": "Full-Stack Applications",
      "footer.service4": "API Development",
      "footer.service5": "Technical Consulting",
      "footer.madeWith": "Made with",
      "footer.inBrazil": "in Brazil",
      "footer.tagline":
        "Full Stack Developer specializing in React, Next.js, and Node.js. Building scalable solutions for clients worldwide.",
      "footer.rights": "All rights reserved.",

      // Projects Page
      "projects.title": "All Projects",
      "projects.subtitle":
        "A comprehensive showcase of my work across different technologies and industries",
      "projects.filter.all": "All Projects",
      "projects.filter.frontend": "Frontend",
      "projects.filter.backend": "Backend",
      "projects.filter.websites": "Websites",
      "projects.backToHome": "Back to Home",
      "projects.viewLive": "View Live",
      "projects.code": "Code",

      // Individual Projects
      "projects.menuSystem.title": "Menu system",
      "projects.menuSystem.description":
        "Online menu system developed with user registration, authentication, product creation and editing, shopping cart, and integrated payment processing — ideal for restaurants or delivery services.",
      "projects.menuSystem.category": "Delivery Platform",

      "projects.leJardin.title": "Le Jardin Noir",
      "projects.leJardin.description":
        "A refined and fully responsive landing page designed for a fictional high-end French restaurant specializing in contemporary cuisine.",
      "projects.leJardin.category": "Restaurant Site",

      "projects.automotiveManagement.title": "Automotive Management System",
      "projects.automotiveManagement.description":
        "A robust backend system for managing automotive operations — including vehicles, services, customers, and maintenance workflows. Built with NestJS, DDD, and Clean Architecture principles.",
      "projects.automotiveManagement.category": "Backend Service",

      "projects.bioxRecipes.title": "Biox Recipes",
      "projects.bioxRecipes.description":
        "A recipe management system built with NestJS following Domain-Driven Design (DDD) principles. This application provides a comprehensive solution for managing recipes, ingredients, and cooking instructions.",
      "projects.bioxRecipes.category": "View Recipes",

      "projects.forumCore.title": "ForumCore API",
      "projects.forumCore.description":
        "A fully modular backend system for managing a modern Q&A forum — built with NestJS, Clean Architecture, and Domain-Driven Design. CleanForum handles questions, answers, comments, user auth, and file uploads.",
      "projects.forumCore.category": "API Backend",

      "projects.amelisConecta.title": "Amelis Conecta",
      "projects.amelisConecta.description":
        "Modern healthcare landing page for 'Amelis' with purple/pink design, featuring patient care solutions, testimonials, chatbot interface, and corporate wellness services with clean UX.",
      "projects.amelisConecta.category": "Business Website",

      "projects.bloomStudio.title": "Bloom Studio",
      "projects.bloomStudio.description":
        "Bloom Beauty Studio offers premium organic products, 8+ years of expertise, and personalized care in a relaxing space. Book your appointment and feel confident, renewed, and truly pampered.",
      "projects.bloomStudio.category": "Business Website",

      "projects.cupCode.title": "CupCode",
      "projects.cupCode.description":
        "Discover your ideal co-working space in Austin. Cup & Code offers flexible desks, fresh coffee, and a vibrant community to boost your productivity and creativity. Book your spot today.",
      "projects.cupCode.category": "Business Website",

      "projects.sterlingArchitecture.title": "Sterling Architecture Website",
      "projects.sterlingArchitecture.description":
        "Sterling Architecture delivers award-winning residential and commercial designs with precision, creativity, and over $120M in completed projects. Start your vision with expert guidance today.",
      "projects.sterlingArchitecture.category": "Business Website",

      "projects.mountainView.title": "Mountain View Auto Repair",
      "projects.mountainView.description":
        "Trusted auto repair in Boulder, CO for 15+ years. Family-owned, ASE certified, free estimates, and 24/7 support. Experience honest service and quality repairs you can rely on.",
      "projects.mountainView.category": "Business Website",

      "projects.stoqFacil.title": "StoqFácil",
      "projects.stoqFacil.description":
        "StoqFácil is a trusted distributor of electrical auto parts in Rio Grande do Norte, offering quality service, fast delivery, and tailored solutions for workshops and retailers.",
      "projects.stoqFacil.category": "Landing Page",

      "projects.feitoPotiguar.title": "Feito Potiguar",
      "projects.feitoPotiguar.description":
        "Feito Potiguar is a platform that promotes local producers from Rio Grande do Norte, highlighting their origin and quality. It features a product catalog, informational content, and a contact form.",
      "projects.feitoPotiguar.category": "Landing Page",

      "projects.cacioPaiva.title": "Cacio Paiva Odontopediatria",
      "projects.cacioPaiva.description":
        "A colorful and family-friendly website created for a real pediatric dentistry clinic. The design focuses on building trust with parents while creating a fun and welcoming experience for children.",
      "projects.cacioPaiva.category": "Landing Page",

      "projects.usgExames.title": "USG Exames",
      "projects.usgExames.description":
        "A modern and professional website developed for a medical clinic specialized in vascular ultrasound diagnostics and treatment. The design emphasizes trust, precision, and accessibility, tailored to a health-focused audience.",
      "projects.usgExames.category": "Landing Page",
    },
  },
  pt: {
    translation: {
      // Navigation
      "nav.about": "Sobre",
      "nav.experience": "Experiência",
      "nav.work": "Trabalhos",
      "nav.contact": "Contato",
      "nav.letsTalk": "Vamos Conversar",

      // Hero Section
      "hero.title": "Paulo Alves",
      "hero.subtitle":
        "Construindo aplicações web escaláveis e APIs performáticas com React, Next.js e Node.js há mais de 3 anos. Transformando ideias em soluções digitais para clientes no mundo todo.",
      "hero.viewWork": "Ver Meus Trabalhos",
      "hero.letsTalk": "Vamos Conversar",

      // About Section
      "about.title": "Transformando Ideias em Soluções Digitais",
      "about.description":
        "Com mais de 3 anos de experiência em desenvolvimento Full Stack e formação em Engenharia de Software pela UniCesumar, me especializo na criação de aplicações web escaláveis. Aprimorado pelo bootcamp intensivo da Rocketseat, foco em resolver problemas reais com soluções simples e eficientes, sempre buscando desafios técnicos para crescimento.",
      "about.experience": "3+ Anos de Experiência",
      "about.projects": "50+ Projetos Entregues",
      "about.clients": "Clientes Internacionais",

      // Skills Section
      "skills.title": "Expertise Técnica",
      "skills.subtitle":
        "Tecnologias modernas e melhores práticas para construir experiências digitais excepcionais",
      "skills.frontend": "Frontend",
      "skills.backend": "Backend",
      "skills.infrastructure": "Infraestrutura",
      "skills.practices": "Práticas",

      // Experience Section
      "experience.title": "Experiência Profissional",
      "experience.subtitle":
        "Construindo soluções digitais excepcionais em diversas indústrias e tecnologias",
      "experience.current": "Atual",
      "experience.keyAchievements": "Principais Conquistas",
      "experience.technologies": "Tecnologias",

      // VesalStudio
      "experience.vesalstudio.title": "Desenvolvedor Full Stack",
      "experience.vesalstudio.company": "VesalStudio",
      "experience.vesalstudio.period": "Out 2022 - Presente",
      "experience.vesalstudio.type": "Tempo Integral",
      "experience.vesalstudio.description":
        "Liderando o desenvolvimento de aplicações web fullstack com tecnologias modernas",
      "experience.vesalstudio.achievement1":
        "Desenvolvi interfaces dinâmicas com React.js e Next.js",
      "experience.vesalstudio.achievement2":
        "Construí APIs RESTful escaláveis usando Node.js",
      "experience.vesalstudio.achievement3":
        "Projetei e otimizei arquiteturas de banco de dados SQL",
      "experience.vesalstudio.achievement4":
        "Implementei TypeScript para melhor qualidade de código",
      "experience.vesalstudio.achievement5":
        "Containerizei aplicações com Docker para deployments consistentes",

      // Super1
      "experience.super1.title": "Desenvolvedor Frontend",
      "experience.super1.company": "Super1",
      "experience.super1.period": "Fev 2025 - Ago 2025",
      "experience.super1.type": "Contrato",
      "experience.super1.description":
        "Desenvolvimento de plataforma marketplace com foco na experiência do usuário",
      "experience.super1.achievement1":
        "Construí componentes de marketplace interativos usando Svelte",
      "experience.super1.achievement2":
        "Criei interfaces de usuário responsivas e dinâmicas",
      "experience.super1.achievement3":
        "Otimizei performance para aplicações de alto tráfego",

      // Agência Gentileza
      "experience.gentileza.title": "Desenvolvedor Frontend",
      "experience.gentileza.company": "Agência Gentileza",
      "experience.gentileza.period": "Nov 2023 - Fev 2025",
      "experience.gentileza.type": "Contrato",
      "experience.gentileza.description":
        "Desenvolvimento de plataforma educacional e modernização de sistemas legados",
      "experience.gentileza.achievement1":
        "Desenvolvi interfaces de plataforma educacional com React.js",
      "experience.gentileza.achievement2":
        "Modernizei sistemas legados com melhor UX/UI",
      "experience.gentileza.achievement3":
        "Integrei APIs de terceiros para funcionalidades aprimoradas",
      "experience.gentileza.achievement4":
        "Apliquei melhores práticas em desenvolvimento frontend",

      // Portfolio Section
      "portfolio.title": "Trabalhos & Projetos Selecionados",
      "portfolio.subtitle":
        "O processo de desenvolvimento que resolve problemas de negócio",
      "portfolio.viewAll": "Ver Todos os Projetos",
      "portfolio.frontend": "Frontend",
      "portfolio.backend": "Backend",
      "portfolio.websites": "Websites",
      "portfolio.viewProject": "Ver Projeto",
      "portfolio.github": "GitHub",

      // Process Section
      "process.title": "Meu Processo de Desenvolvimento",
      "process.subtitle":
        "Uma abordagem sistemática para construir soluções digitais excepcionais",
      "process.discovery.title": "Descoberta & Planejamento",
      "process.discovery.description":
        "Entendendo requisitos, definindo arquitetura e criando roadmaps detalhados do projeto para execução bem-sucedida.",
      "process.development.title": "Desenvolvimento",
      "process.development.description":
        "Escrevendo código limpo e sustentável usando tecnologias modernas e melhores práticas para performance otimizada.",
      "process.testing.title": "Testes & Qualidade",
      "process.testing.description":
        "Estratégias abrangentes de testes garantindo confiabilidade, performance e experiências de usuário perfeitas.",
      "process.deployment.title": "Deploy & Manutenção",
      "process.deployment.description":
        "Soluções de deploy escaláveis com suporte contínuo e estratégias de melhoria contínua.",

      // Contact Section
      "contact.title": "Entre em Contato",
      "contact.subtitle":
        "Pronto para transformar sua ideia em realidade? Vamos conversar!",

      // LABELS DOS FORMULÁRIOS:
      "contact.form.name": "Nome",
      "contact.form.email": "E-mail",
      "contact.form.subject": "Assunto",
      "contact.form.project": "Detalhes do Projeto",
      "contact.form.send": "Enviar Mensagem",

      "contact.form.namePlaceholder": "Seu nome completo",
      "contact.form.emailPlaceholder": "seu@email.com",
      "contact.form.subjectPlaceholder": "Assunto",
      "contact.form.projectPlaceholder":
        "Conte-me sobre seu projeto, objetivos e requisitos...",
      "contact.form.defaultSubject": "Novo contato através do portfólio",
      "contact.form.validation.title": "Campos Obrigatórios",
      "contact.form.validation.description":
        "Por favor, preencha todos os campos obrigatórios.",
      "contact.form.success.title": "Mensagem Enviada!",
      "contact.form.success.description":
        "Obrigado pela sua mensagem. Entrarei em contato em até 24 horas.",
      "contact.form.error.title": "Erro no Envio",
      "contact.form.error.description":
        "Não foi possível enviar a mensagem. Tente novamente.",
      "contact.info.title": "Vamos Conversar",
      "contact.info.description":
        "Estou sempre empolgado para discutir novos projetos e oportunidades. Se você precisa de uma aplicação full-stack, desenvolvimento de API ou consultoria técnica, estou aqui para ajudar a transformar sua visão em realidade.",
      "contact.info.email": "E-mail",
      "contact.info.linkedinDesc": "Conecte-se profissionalmente",
      "contact.info.githubDesc": "Veja meu trabalho open source",
      "contact.info.responseTime.title": "Tempo de Resposta",
      "contact.info.responseTime.description":
        "Normalmente respondo a todas as consultas em até 24 horas. Para projetos urgentes, não hesite em mencionar na sua mensagem.",

      // Footer
      "footer.quickLinks": "Links Rápidos",
      "footer.services": "Serviços",
      "footer.service1": "Desenvolvimento Frontend",
      "footer.service2": "Desenvolvimento Backend",
      "footer.service3": "Aplicações Full-Stack",
      "footer.service4": "Desenvolvimento de APIs",
      "footer.service5": "Consultoria Técnica",
      "footer.madeWith": "Feito com",
      "footer.inBrazil": "no Brasil",
      "footer.tagline":
        "Desenvolvedor Full Stack especializado em React, Next.js e Node.js. Construindo soluções escaláveis para clientes ao redor do mundo.",
      "footer.rights": "Todos os direitos reservados.",

      // Projects Page
      "projects.title": "Todos os Projetos",
      "projects.subtitle":
        "Uma vitrine abrangente do meu trabalho em diferentes tecnologias e indústrias",
      "projects.filter.all": "Todos os Projetos",
      "projects.filter.frontend": "Frontend",
      "projects.filter.backend": "Backend",
      "projects.filter.websites": "Websites",
      "projects.backToHome": "Voltar ao Início",
      "projects.viewLive": "Ver Projeto",
      "projects.code": "Código",

      // Individual Projects
      "projects.menuSystem.title": "Sistema de Menu",
      "projects.menuSystem.description":
        "Sistema de menu online desenvolvido com cadastro de usuários, autenticação, criação e edição de produtos, carrinho de compras e processamento de pagamento integrado — ideal para restaurantes ou serviços de delivery.",
      "projects.menuSystem.category": "Plataforma de Delivery",

      "projects.leJardin.title": "Le Jardin Noir",
      "projects.leJardin.description":
        "Uma landing page refinada e totalmente responsiva projetada para um restaurante francês fictício de alta gastronomia especializado em culinária contemporânea.",
      "projects.leJardin.category": "Site de Restaurante",

      "projects.automotiveManagement.title": "Sistema de Gestão Automotiva",
      "projects.automotiveManagement.description":
        "Um sistema backend robusto para gerenciar operações automotivas — incluindo veículos, serviços, clientes e fluxos de manutenção. Construído com NestJS, DDD e princípios de Clean Architecture.",
      "projects.automotiveManagement.category": "Serviço Backend",

      "projects.bioxRecipes.title": "Biox Recipes",
      "projects.bioxRecipes.description":
        "Um sistema de gerenciamento de receitas construído com NestJS seguindo os princípios de Domain-Driven Design (DDD). Esta aplicação fornece uma solução abrangente para gerenciar receitas, ingredientes e instruções de cozinha.",
      "projects.bioxRecipes.category": "Visualizar Receitas",

      "projects.forumCore.title": "ForumCore API",
      "projects.forumCore.description":
        "Um sistema backend totalmente modular para gerenciar um fórum moderno de perguntas e respostas — construído com NestJS, Clean Architecture e Domain-Driven Design. CleanForum gerencia perguntas, respostas, comentários, autenticação de usuários e upload de arquivos.",
      "projects.forumCore.category": "API Backend",

      "projects.amelisConecta.title": "Amelis Conecta",
      "projects.amelisConecta.description":
        "Landing page moderna de saúde para 'Amelis' com design roxo/rosa, apresentando soluções de cuidados com pacientes, depoimentos, interface de chatbot e serviços de bem-estar corporativo com UX limpo.",
      "projects.amelisConecta.category": "Site Empresarial",

      "projects.bloomStudio.title": "Bloom Studio",
      "projects.bloomStudio.description":
        "Bloom Beauty Studio oferece produtos orgânicos premium, mais de 8 anos de expertise e cuidados personalizados em um espaço relaxante. Agende seu horário e sinta-se confiante, renovado e verdadeiramente mimado.",
      "projects.bloomStudio.category": "Site Empresarial",

      "projects.cupCode.title": "CupCode",
      "projects.cupCode.description":
        "Descubra seu espaço de coworking ideal em Austin. Cup & Code oferece mesas flexíveis, café fresco e uma comunidade vibrante para aumentar sua produtividade e criatividade. Reserve seu local hoje.",
      "projects.cupCode.category": "Site Empresarial",

      "projects.sterlingArchitecture.title": "Site Sterling Architecture",
      "projects.sterlingArchitecture.description":
        "Sterling Architecture entrega projetos residenciais e comerciais premiados com precisão, criatividade e mais de $120M em projetos concluídos. Inicie sua visão com orientação especializada hoje.",
      "projects.sterlingArchitecture.category": "Site Empresarial",

      "projects.mountainView.title": "Mountain View Auto Repair",
      "projects.mountainView.description":
        "Reparo automotivo confiável em Boulder, CO há mais de 15 anos. Familiar, certificado ASE, orçamentos gratuitos e suporte 24/7. Experimente serviço honesto e reparos de qualidade nos quais você pode confiar.",
      "projects.mountainView.category": "Site Empresarial",

      "projects.stoqFacil.title": "StoqFácil",
      "projects.stoqFacil.description":
        "StoqFácil é um distribuidor confiável de peças elétricas automotivas no Rio Grande do Norte, oferecendo serviço de qualidade, entrega rápida e soluções personalizadas para oficinas e varejistas.",
      "projects.stoqFacil.category": "Landing Page",

      "projects.feitoPotiguar.title": "Feito Potiguar",
      "projects.feitoPotiguar.description":
        "Feito Potiguar é uma plataforma que promove produtores locais do Rio Grande do Norte, destacando sua origem e qualidade. Apresenta catálogo de produtos, conteúdo informativo e formulário de contato.",
      "projects.feitoPotiguar.category": "Landing Page",

      "projects.cacioPaiva.title": "Cacio Paiva Odontopediatria",
      "projects.cacioPaiva.description":
        "Um site colorido e amigável para famílias criado para uma clínica real de odontopediatria. O design foca em construir confiança com os pais enquanto cria uma experiência divertida e acolhedora para as crianças.",
      "projects.cacioPaiva.category": "Landing Page",

      "projects.usgExames.title": "USG Exames",
      "projects.usgExames.description":
        "Um site moderno e profissional desenvolvido para uma clínica médica especializada em diagnósticos e tratamentos de ultrassom vascular. O design enfatiza confiança, precisão e acessibilidade, direcionado para um público focado em saúde.",
      "projects.usgExames.category": "Landing Page",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
