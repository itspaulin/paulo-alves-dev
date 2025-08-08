import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

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
      "hero.subtitle": "Building scalable web applications and performant APIs with React, Next.js, and Node.js for 3+ years. Transforming ideas into digital solutions for clients worldwide.",
      "hero.viewWork": "View My Work",
      "hero.letsTalk": "Let's Talk",

      // About Section
      "about.title": "Transforming Ideas into Digital Solutions",
      "about.description": "With 3+ years of Full Stack development experience and a Software Engineering degree from UniCesumar, I specialize in creating scalable web applications. Enhanced by Rocketseat's intensive bootcamp, I focus on solving real problems with simple, efficient solutions while constantly seeking technical challenges for growth.",
      "about.experience": "3+ Years Experience",
      "about.projects": "50+ Projects Delivered", 
      "about.clients": "International Clients",

      // Skills Section
      "skills.title": "Technical Expertise",
      "skills.subtitle": "Modern technologies and best practices for building exceptional digital experiences",
      "skills.frontend": "Frontend",
      "skills.backend": "Backend",
      "skills.infrastructure": "Infrastructure",
      "skills.practices": "Practices",

      // Experience Section
      "experience.title": "Professional Experience",
      "experience.subtitle": "Building robust applications and leading technical solutions",
      "experience.current": "Current",
      "experience.vesalstudio.title": "Full Stack Developer",
      "experience.vesalstudio.company": "VesalStudio",
      "experience.vesalstudio.period": "Oct 2022 - Present",
      "experience.vesalstudio.description": "Fullstack web application development with React.js and Next.js for dynamic interfaces, Node.js for RESTful APIs, SQL database design and modeling, TypeScript implementation for code quality, and Docker containerization for consistent deployments.",
      
      "experience.super1.title": "Frontend Developer", 
      "experience.super1.company": "Super1",
      "experience.super1.period": "Feb 2025 - Aug 2025",
      "experience.super1.description": "Marketplace platform development with Svelte, creating interactive and responsive components with focus on user experience.",
      
      "experience.gentileza.title": "Frontend Developer",
      "experience.gentileza.company": "Agência Gentileza", 
      "experience.gentileza.period": "Nov 2024 - Jun 2025",
      "experience.gentileza.description": "Educational platform development with React.js, legacy system maintenance and modernization, API integration and UX/UI best practices implementation.",

      // Portfolio Section
      "portfolio.title": "Selected Work & Projects",
      "portfolio.subtitle": "The development process that solves business problems",
      "portfolio.viewAll": "View All Projects",
      "portfolio.frontend": "Frontend",
      "portfolio.backend": "Backend",
      "portfolio.websites": "Websites",
      "portfolio.viewProject": "View Project",
      "portfolio.github": "GitHub",

      // Process Section
      "process.title": "My Development Process",
      "process.subtitle": "A systematic approach to building exceptional digital solutions",
      "process.discovery.title": "Discovery & Planning",
      "process.discovery.description": "Understanding requirements, defining architecture, and creating detailed project roadmaps for successful execution.",
      "process.development.title": "Development",
      "process.development.description": "Writing clean, maintainable code using modern technologies and best practices for optimal performance.",
      "process.testing.title": "Testing & Quality",
      "process.testing.description": "Comprehensive testing strategies ensuring reliability, performance, and seamless user experiences.",
      "process.deployment.title": "Deployment & Maintenance", 
      "process.deployment.description": "Scalable deployment solutions with ongoing support and continuous improvement strategies.",

      // Contact Section
      "contact.title": "Ready to Build Something Amazing?",
      "contact.subtitle": "Let's discuss your next project and bring your ideas to life",
      "contact.form.name": "Name",
      "contact.form.email": "Email",
      "contact.form.company": "Company (Optional)",
      "contact.form.project": "Tell me about your project",
      "contact.form.budget": "Budget Range",
      "contact.form.budget.placeholder": "Select budget range",
      "contact.form.budget.under5k": "Under $5,000",
      "contact.form.budget.5k10k": "$5,000 - $10,000", 
      "contact.form.budget.10k25k": "$10,000 - $25,000",
      "contact.form.budget.25k50k": "$25,000 - $50,000",
      "contact.form.budget.over50k": "Over $50,000",
      "contact.form.send": "Send Message",
      "contact.form.sending": "Sending...",
      "contact.form.success": "Message sent successfully!",
      "contact.form.error": "Failed to send message. Please try again.",
      "contact.alternative": "Or reach out directly:",

      // Footer
      "footer.tagline": "Building digital solutions that drive business growth.",
      "footer.rights": "All rights reserved.",

      // Projects Page
      "projects.title": "All Projects",
      "projects.subtitle": "A comprehensive showcase of my work across different technologies and industries",
      "projects.filter.all": "All Projects",
      "projects.filter.frontend": "Frontend",
      "projects.filter.backend": "Backend", 
      "projects.filter.websites": "Websites",
      "projects.backToHome": "Back to Home",
    }
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
      "hero.subtitle": "Construindo aplicações web escaláveis e APIs performáticas com React, Next.js e Node.js há mais de 3 anos. Transformando ideias em soluções digitais para clientes no mundo todo.",
      "hero.viewWork": "Ver Meus Trabalhos",
      "hero.letsTalk": "Vamos Conversar",

      // About Section
      "about.title": "Transformando Ideias em Soluções Digitais",
      "about.description": "Com mais de 3 anos de experiência em desenvolvimento Full Stack e formação em Engenharia de Software pela UniCesumar, me especializo na criação de aplicações web escaláveis. Aprimorado pelo bootcamp intensivo da Rocketseat, foco em resolver problemas reais com soluções simples e eficientes, sempre buscando desafios técnicos para crescimento.",
      "about.experience": "3+ Anos de Experiência",
      "about.projects": "50+ Projetos Entregues",
      "about.clients": "Clientes Internacionais",

      // Skills Section
      "skills.title": "Expertise Técnica",
      "skills.subtitle": "Tecnologias modernas e melhores práticas para construir experiências digitais excepcionais",
      "skills.frontend": "Frontend",
      "skills.backend": "Backend", 
      "skills.infrastructure": "Infraestrutura",
      "skills.practices": "Práticas",

      // Experience Section
      "experience.title": "Experiência Profissional",
      "experience.subtitle": "Construindo aplicações robustas e liderando soluções técnicas",
      "experience.current": "Atual",
      "experience.vesalstudio.title": "Desenvolvedor Full Stack",
      "experience.vesalstudio.company": "VesalStudio",
      "experience.vesalstudio.period": "Out 2022 - Presente",
      "experience.vesalstudio.description": "Desenvolvimento de aplicações web fullstack com React.js e Next.js para interfaces dinâmicas, Node.js para APIs RESTful, design e modelagem de banco de dados SQL, implementação de TypeScript para qualidade de código, e containerização Docker para deployments consistentes.",
      
      "experience.super1.title": "Desenvolvedor Frontend",
      "experience.super1.company": "Super1", 
      "experience.super1.period": "Fev 2025 - Ago 2025",
      "experience.super1.description": "Desenvolvimento de plataforma marketplace com Svelte, criando componentes interativos e responsivos com foco na experiência do usuário.",
      
      "experience.gentileza.title": "Desenvolvedor Frontend",
      "experience.gentileza.company": "Agência Gentileza",
      "experience.gentileza.period": "Nov 2024 - Jun 2025", 
      "experience.gentileza.description": "Desenvolvimento de plataforma educacional com React.js, manutenção e modernização de sistemas legados, integração de APIs e implementação de melhores práticas de UX/UI.",

      // Portfolio Section
      "portfolio.title": "Trabalhos & Projetos Selecionados",
      "portfolio.subtitle": "O processo de desenvolvimento que resolve problemas de negócio",
      "portfolio.viewAll": "Ver Todos os Projetos",
      "portfolio.frontend": "Frontend",
      "portfolio.backend": "Backend",
      "portfolio.websites": "Websites",
      "portfolio.viewProject": "Ver Projeto",
      "portfolio.github": "GitHub",

      // Process Section
      "process.title": "Meu Processo de Desenvolvimento",
      "process.subtitle": "Uma abordagem sistemática para construir soluções digitais excepcionais",
      "process.discovery.title": "Descoberta & Planejamento",
      "process.discovery.description": "Entendendo requisitos, definindo arquitetura e criando roadmaps detalhados do projeto para execução bem-sucedida.",
      "process.development.title": "Desenvolvimento",
      "process.development.description": "Escrevendo código limpo e sustentável usando tecnologias modernas e melhores práticas para performance otimizada.",
      "process.testing.title": "Testes & Qualidade",
      "process.testing.description": "Estratégias abrangentes de testes garantindo confiabilidade, performance e experiências de usuário perfeitas.",
      "process.deployment.title": "Deploy & Manutenção",
      "process.deployment.description": "Soluções de deploy escaláveis com suporte contínuo e estratégias de melhoria contínua.",

      // Contact Section
      "contact.title": "Pronto para Construir Algo Incrível?",
      "contact.subtitle": "Vamos discutir seu próximo projeto e dar vida às suas ideias",
      "contact.form.name": "Nome",
      "contact.form.email": "Email",
      "contact.form.company": "Empresa (Opcional)",
      "contact.form.project": "Conte-me sobre seu projeto",
      "contact.form.budget": "Faixa de Orçamento",
      "contact.form.budget.placeholder": "Selecione a faixa de orçamento",
      "contact.form.budget.under5k": "Menos de $5.000",
      "contact.form.budget.5k10k": "$5.000 - $10.000",
      "contact.form.budget.10k25k": "$10.000 - $25.000", 
      "contact.form.budget.25k50k": "$25.000 - $50.000",
      "contact.form.budget.over50k": "Mais de $50.000",
      "contact.form.send": "Enviar Mensagem",
      "contact.form.sending": "Enviando...",
      "contact.form.success": "Mensagem enviada com sucesso!",
      "contact.form.error": "Falha ao enviar mensagem. Tente novamente.",
      "contact.alternative": "Ou entre em contato diretamente:",

      // Footer
      "footer.tagline": "Construindo soluções digitais que impulsionam o crescimento do negócio.",
      "footer.rights": "Todos os direitos reservados.",

      // Projects Page
      "projects.title": "Todos os Projetos",
      "projects.subtitle": "Uma vitrine abrangente do meu trabalho em diferentes tecnologias e indústrias",
      "projects.filter.all": "Todos os Projetos",
      "projects.filter.frontend": "Frontend",
      "projects.filter.backend": "Backend",
      "projects.filter.websites": "Websites", 
      "projects.backToHome": "Voltar ao Início",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;