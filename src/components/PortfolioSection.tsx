import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getProjectsByType } from "@/utils/projectUtils";

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [selectedType, setSelectedType] = useState<"frontend" | "backend">(
    "frontend"
  );

  const filteredProjects = getProjectsByType(selectedType);

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
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProjects]); // Atualiza quando os projetos filtrados mudam

  return (
    <section id="portfolio" ref={sectionRef} className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-section gradient-text mb-4">
            Selected Work & Projects
          </h2>
          <p className="text-body-large text-neutral-600 max-w-2xl mx-auto mb-8">
            The development process that solves business problems through
            scalable, modern solutions
          </p>

          <ToggleGroup
            type="single"
            value={selectedType}
            onValueChange={(value) =>
              value && setSelectedType(value as "frontend" | "backend")
            }
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
                  <div className="text-neutral-400 text-sm">
                    Project Preview
                  </div>
                </div>
                <div className="absolute inset-0 bg-neutral-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-neutral-900 hover:bg-neutral-100"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-black hover:bg-neutral-100 hover:text-neutral-900"
                    >
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
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-neutral-300"
                    >
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
            <Button
              variant="outline"
              className="border-neutral-300 hover:bg-neutral-50"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
