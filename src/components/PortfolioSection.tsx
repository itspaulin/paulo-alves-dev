import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack marketplace application with real-time features, payment integration, and admin dashboard. Built for scalability and performance.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe"],
    category: "Full-Stack Application",
    link: "#",
    github: "#"
  },
  {
    title: "Educational Management System", 
    description: "Comprehensive platform for educational institutions with student management, course tracking, and interactive learning modules.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "NestJS", "Docker"],
    category: "Web Application",
    link: "#",
    github: "#"
  },
  {
    title: "Real Estate Portal",
    description: "Modern property listing platform with advanced search, virtual tours, and integrated CRM for real estate professionals.",
    image: "/api/placeholder/600/400", 
    technologies: ["Next.js", "Tailwind", "Node.js", "AWS"],
    category: "SaaS Platform",
    link: "#",
    github: "#"
  },
  {
    title: "API Gateway Service",
    description: "Microservices architecture with authentication, rate limiting, and monitoring. Handles 10k+ requests per minute efficiently.",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "NestJS", "Redis", "Docker", "AWS"],
    category: "Backend Service",
    link: "#",
    github: "#"
  }
];

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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
          <p className="text-body-large text-neutral-600 max-w-2xl mx-auto">
            The development process that solves business problems through scalable, modern solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
          <Button variant="outline" className="border-neutral-300 hover:bg-neutral-50">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;