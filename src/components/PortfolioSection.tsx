import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
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
  }
];

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [selectedType, setSelectedType] = useState<string>("frontend");

  const filteredProjects = projects.filter(project => project.type === selectedType);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-section gradient-text mb-4">
            Selected Work & Projects
          </h2>
          <p className="text-body-large text-neutral-600 max-w-2xl mx-auto mb-8">
            The development process that solves business problems through scalable, modern solutions
          </p>
          
          <ToggleGroup 
            type="single" 
            value={selectedType} 
            onValueChange={(value) => value && setSelectedType(value)}
            className="justify-center mb-8"
          >
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
          </ToggleGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
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

        <div className="text-center mt-12">
          <Link to="/projects">
            <Button variant="outline" className="border-neutral-300 hover:bg-neutral-50">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;