import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Simulando GSAP e ScrollTrigger (remova estas linhas se tiver GSAP instalado)
const gsap = {
  context: (callback, ref) => {
    const cleanup = callback();
    return { revert: cleanup || (() => {}) };
  },
  fromTo: (element, from, to) => {
    // Simular animação GSAP com ScrollTrigger
    if (element) {
      // Definir estado inicial
      Object.assign(element.style, {
        opacity: from.opacity,
        transform: `translateX(${from.x || 0}px) translateY(${from.y || 0}px)`,
        transition: `all ${
          to.duration || 1
        }s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${to.delay || 0}s`,
      });

      // Se tem scrollTrigger, usar Intersection Observer
      if (to.scrollTrigger) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  Object.assign(element.style, {
                    opacity: to.opacity,
                    transform: `translateX(${to.x || 0}px) translateY(${
                      to.y || 0
                    }px)`,
                  });
                }, (to.delay || 0) * 1000);
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: "-20% 0px -20% 0px",
          }
        );

        observer.observe(element);

        // Retornar cleanup para o observer
        return () => observer.disconnect();
      } else {
        // Animação simples sem scroll trigger
        setTimeout(() => {
          Object.assign(element.style, {
            opacity: to.opacity,
            transform: `translateX(${to.x || 0}px) translateY(${to.y || 0}px)`,
          });
        }, 50);
      }
    }
    return () => {};
  },
  registerPlugin: () => {},
};

const ScrollTrigger = {};

// Simulando o registro do plugin (remova se tiver GSAP real)
gsap.registerPlugin();

const ExperienceSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Dados das experiências usando as chaves de tradução
  const experiences = [
    {
      company: t("experience.vesalstudio.company"),
      role: t("experience.vesalstudio.title"),
      period: t("experience.vesalstudio.period"),
      type: t("experience.vesalstudio.type"),
      description: t("experience.vesalstudio.description"),
      achievements: [
        t("experience.vesalstudio.achievement1"),
        t("experience.vesalstudio.achievement2"),
        t("experience.vesalstudio.achievement3"),
        t("experience.vesalstudio.achievement4"),
        t("experience.vesalstudio.achievement5"),
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "TypeScript",
        "SQL",
        "Docker",
      ],
    },
    {
      company: t("experience.super1.company"),
      role: t("experience.super1.title"),
      period: t("experience.super1.period"),
      type: t("experience.super1.type"),
      description: t("experience.super1.description"),
      achievements: [
        t("experience.super1.achievement1"),
        t("experience.super1.achievement2"),
        t("experience.super1.achievement3"),
      ],
      technologies: [
        "Svelte",
        "JavaScript",
        "CSS",
        "HTML",
        "Docker",
        "Tailwind",
      ],
    },
    {
      company: t("experience.gentileza.company"),
      role: t("experience.gentileza.title"),
      period: t("experience.gentileza.period"),
      type: t("experience.gentileza.type"),
      description: t("experience.gentileza.description"),
      achievements: [
        t("experience.gentileza.achievement1"),
        t("experience.gentileza.achievement2"),
        t("experience.gentileza.achievement3"),
        t("experience.gentileza.achievement4"),
      ],
      technologies: ["React.js", "JavaScript", "API Integration", "UX/UI"],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        // Verificar se é mobile
        const isMobile = window.innerWidth < 768;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: isMobile ? 0 : index % 2 === 0 ? -50 : 50, // No mobile, x = 0
            y: isMobile ? 30 : 0, // No mobile, usar movimento vertical
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            delay: index * 0.3,
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
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding bg-neutral-50"
    >
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-section gradient-text mb-4">
            {t("experience.title")}
          </h2>
          <p className="text-body-large text-neutral-600 max-w-2xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={`${exp.company}-${exp.period}`}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="p-8 hover-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                        {exp.role}
                      </h3>
                      <div className="text-lg font-medium text-neutral-700">
                        {exp.company}
                      </div>
                      <div className="text-sm text-neutral-500 mt-1">
                        {exp.period}
                      </div>
                    </div>
                    <Badge variant="secondary" className="ml-4">
                      {exp.type}
                    </Badge>
                  </div>
                  <p className="text-body text-neutral-600 mb-4">
                    {exp.description}
                  </p>
                </div>

                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <h4 className="font-medium text-neutral-900 mb-3">
                      {t("experience.keyAchievements")}
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-body text-neutral-600">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-neutral-900 mb-3">
                      {t("experience.technologies")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-neutral-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
