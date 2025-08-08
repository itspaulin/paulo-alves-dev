import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useProjectsByType } from "@/utils/projectUtils";

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);
  const [selectedType, setSelectedType] = useState<
    "frontend" | "backend" | "websites"
  >("frontend");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filteredProjects = useProjectsByType(selectedType);

  // Função para animar saída dos cards existentes
  const animateCardsOut = () => {
    return new Promise<void>((resolve) => {
      if (!cardsRef.current.length) {
        resolve();
        return;
      }

      gsap.to(cardsRef.current, {
        opacity: 0,
        y: -30,
        scale: 0.95,
        rotationX: -15,
        duration: 0.4,
        ease: "power2.in",
        stagger: 0.05,
        onComplete: resolve,
      });
    });
  };

  // Função para animar entrada dos novos cards - SIMPLIFICADA
  const animateCardsIn = () => {
    if (!cardsRef.current.length) return;

    // Limpa animações anteriores
    if (ctxRef.current) {
      ctxRef.current.kill();
    }

    // Animação básica de entrada sem hover complexo
    ctxRef.current = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
        }
      );
    }, sectionRef);
  };

  // Função principal de transição entre seções
  const handleSectionTransition = async (
    newType: "frontend" | "backend" | "websites"
  ) => {
    if (isTransitioning || newType === selectedType) return;

    setIsTransitioning(true);

    // Anima saída dos cards atuais
    await animateCardsOut();

    // Muda o tipo (isso vai triggear re-render com novos projetos)
    setSelectedType(newType);
  };

  // Header animation (executada apenas uma vez)
  useEffect(() => {
    if (!headerRef.current) return;

    const headerCtx = gsap.context(() => {
      const headerElements = headerRef.current?.children;
      if (!headerElements) return;

      gsap.fromTo(
        headerElements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => headerCtx.revert();
  }, []);

  // Effect para animar entrada quando filteredProjects muda
  useEffect(() => {
    cardsRef.current = [];

    const timer = setTimeout(() => {
      animateCardsIn();
      setIsTransitioning(false);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [filteredProjects]);

  // Cleanup geral
  useEffect(() => {
    return () => {
      if (ctxRef.current) {
        ctxRef.current.revert();
      }
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger && sectionRef.current?.contains(trigger.trigger)) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="section-padding">
      <div className="container-width">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-section gradient-text mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-body-large text-neutral-600 max-w-2xl mx-auto mb-8">
            {t("portfolio.subtitle")}
          </p>

          <ToggleGroup
            type="single"
            value={selectedType}
            onValueChange={(value) => {
              if (value) {
                handleSectionTransition(
                  value as "frontend" | "backend" | "websites"
                );
              }
            }}
            className="justify-center mb-8"
            disabled={isTransitioning}
          >
            <ToggleGroupItem
              value="frontend"
              variant="outline"
              className={`px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground transition-all duration-300 ${
                isTransitioning ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {t("portfolio.frontend")}
            </ToggleGroupItem>
            <ToggleGroupItem
              value="backend"
              variant="outline"
              className={`px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground transition-all duration-300 ${
                isTransitioning ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {t("portfolio.backend")}
            </ToggleGroupItem>
            <ToggleGroupItem
              value="websites"
              variant="outline"
              className={`px-6 py-2 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground transition-all duration-300 ${
                isTransitioning ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {t("portfolio.websites")}
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]"
        >
          {filteredProjects.map((project, index) => (
            <Card
              key={`${project.title}-${selectedType}-${index}`}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group overflow-hidden hover-shadow card-content transform-gpu hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML =
                          '<div class="text-neutral-400 text-sm">Project Preview</div>';
                      }
                    }}
                  />
                </div>
                {/* OVERLAY COM HOVER PURO CSS - SEM GSAP */}
                <div className="absolute inset-0 bg-neutral-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.link && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-neutral-900 hover:bg-neutral-100 transform hover:scale-105 transition-all duration-200"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t("projects.viewLive")}
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white text-neutral-900 hover:bg-neutral-100 hover:text-neutral-900 transform hover:scale-105 transition-all duration-200"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        {t("projects.code")}
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary transition-colors duration-300">
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
                      className="text-xs border-neutral-300 hover:border-primary hover:text-primary transition-colors duration-200"
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
              className="border-neutral-300 hover:bg-neutral-50 transform hover:scale-105 transition-all duration-300"
            >
              {t("portfolio.viewAll")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
