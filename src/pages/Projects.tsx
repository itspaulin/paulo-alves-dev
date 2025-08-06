import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const allProjects = [
  // Frontend Projects
  {
    title: "E-commerce Platform",
    description: "Full-stack marketplace application with real-time features, payment integration, and admin dashboard. Built for scalability and performance.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Stripe"],
    category: "SaaS Platform",
    type: "frontend",
    link: "#",
    github: "#"
  },
  {
    title: "Educational Management System", 
    description: "Comprehensive platform for educational institutions with student management, course tracking, and interactive learning modules.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "Redux", "Material-UI"],
    category: "Web Application",
    type: "frontend",
    link: "#",
    github: "#"
  },
  {
    title: "Real Estate Portal",
    description: "Modern property listing platform with advanced search, virtual tours, and integrated CRM for real estate professionals.",
    image: "/api/placeholder/600/400", 
    technologies: ["Next.js", "Tailwind", "React Query", "Framer Motion"],
    category: "Frontend Application",
    type: "frontend",
    link: "#",
    github: "#"
  },
  {
    title: "Dashboard Analytics",
    description: "Interactive analytics dashboard with real-time data visualization, charts, and customizable widgets for business insights.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "D3.js", "Chart.js"],
    category: "Dashboard",
    type: "frontend",
    link: "#",
    github: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with kanban boards, time tracking, team collaboration, and deadline management.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Next.js", "Zustand", "Tailwind"],
    category: "Productivity App",
    type: "frontend",
    link: "#",
    github: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "Multi-platform social media management tool with scheduling, analytics, and engagement tracking features.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "React Query", "Recharts"],
    category: "Dashboard",
    type: "frontend",
    link: "#",
    github: "#"
  },
  // Backend Projects
  {
    title: "API Gateway Service",
    description: "Microservices architecture with authentication, rate limiting, and monitoring. Handles 10k+ requests per minute efficiently.",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "NestJS", "Redis", "Docker", "AWS"],
    category: "Backend Service",
    type: "backend",
    link: "#",
    github: "#"
  },
  {
    title: "Payment Processing API",
    description: "Secure payment processing system with multiple gateway integrations, fraud detection, and real-time transaction monitoring.",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "Express", "PostgreSQL", "Stripe", "JWT"],
    category: "Financial API",
    type: "backend",
    link: "#",
    github: "#"
  },
  {
    title: "Content Management API",
    description: "Headless CMS with RESTful APIs, file upload handling, role-based permissions, and automated content moderation.",
    image: "/api/placeholder/600/400",
    technologies: ["NestJS", "TypeScript", "MongoDB", "AWS S3", "Bull"],
    category: "CMS Backend",
    type: "backend",
    link: "#",
    github: "#"
  },
  {
    title: "Real-time Chat System",
    description: "Scalable messaging system with WebSocket connections, message encryption, file sharing, and presence indicators.",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "Socket.io", "Redis", "PostgreSQL", "Docker"],
    category: "Real-time Service",
    type: "backend",
    link: "#",
    github: "#"
  },
  {
    title: "E-learning Platform API",
    description: "Comprehensive backend for online learning with course management, progress tracking, video streaming, and assessment tools.",
    image: "/api/placeholder/600/400",
    technologies: ["NestJS", "PostgreSQL", "Redis", "AWS", "FFmpeg"],
    category: "Education API",
    type: "backend",
    link: "#",
    github: "#"
  },
  {
    title: "IoT Data Processing Service",
    description: "High-performance data ingestion and processing service for IoT devices with real-time analytics and alerting.",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "Apache Kafka", "TimescaleDB", "Docker"],
    category: "Data Service",
    type: "backend",
    link: "#",
    github: "#"
  },
  // Website Projects
  {
    title: "Corporate Website - TechCorp",
    description: "Modern corporate website with interactive animations, responsive design, and optimized performance for business presentation.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Tailwind", "GSAP", "Framer Motion"],
    category: "Corporate Site",
    type: "websites",
    link: "#",
    github: "#"
  },
  {
    title: "Restaurant Chain Website",
    description: "Multi-location restaurant website with online ordering, menu management, reservation system, and delivery integration.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Next.js", "Stripe", "Google Maps API"],
    category: "Business Website",
    type: "websites",
    link: "#",
    github: "#"
  },
  {
    title: "Portfolio - Creative Agency",
    description: "Stunning portfolio website for creative agency showcasing projects with immersive galleries and smooth animations.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Three.js", "GSAP", "Tailwind"],
    category: "Portfolio Site",
    type: "websites",
    link: "#",
    github: "#"
  },
  {
    title: "Healthcare Clinic Website",
    description: "Professional healthcare website with appointment booking, doctor profiles, service information, and patient portal.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Next.js", "Tailwind", "Calendar API"],
    category: "Healthcare Site",
    type: "websites",
    link: "#",
    github: "#"
  },
  {
    title: "E-commerce Store - Fashion",
    description: "High-converting fashion e-commerce website with product showcase, size guides, wishlist, and seamless checkout experience.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Shopify", "Tailwind", "Algolia"],
    category: "E-commerce Site",
    type: "websites",
    link: "#",
    github: "#"
  },
  {
    title: "SaaS Landing Page",
    description: "Conversion-optimized landing page for SaaS product with pricing tables, feature showcases, and lead generation forms.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Tailwind", "Framer Motion", "Analytics"],
    category: "Landing Page",
    type: "websites",
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredProjects = selectedType === "all" 
    ? allProjects 
    : allProjects.filter(project => project.type === selectedType);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section ref={sectionRef} className="section-padding pt-24">
        <div className="container-width">
          <div className="flex items-center mb-8">
            <Link to="/" className="flex items-center text-neutral-600 hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-section gradient-text mb-4">
              All Projects & Work
            </h1>
            <p className="text-body-large text-neutral-600 max-w-2xl mx-auto mb-8">
              Explore my complete portfolio of frontend applications, backend services, and websites across different industries and technologies
            </p>
            
            <ToggleGroup 
              type="single" 
              value={selectedType} 
              onValueChange={(value) => value && setSelectedType(value)}
              className="justify-center mb-8"
            >
              <ToggleGroupItem 
                value="all" 
                variant="outline" 
                className="px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                All Projects
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="frontend" 
                variant="outline" 
                className="px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                Frontend
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="backend" 
                variant="outline" 
                className="px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                Backend
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="websites" 
                variant="outline" 
                className="px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                Websites
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={`${project.title}-${index}`}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group overflow-hidden hover-shadow"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                    <div className="text-neutral-400 text-sm">Project Preview</div>
                  </div>
                  <div className="absolute inset-0 bg-neutral-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" variant="secondary" className="bg-white text-neutral-900 hover:bg-neutral-100">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                      <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-neutral-900">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs capitalize">
                      {project.type}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-body text-neutral-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-neutral-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-neutral-500">No projects found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;