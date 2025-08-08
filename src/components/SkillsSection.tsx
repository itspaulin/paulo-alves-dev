import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Svelte"],
    icon: "🎨",
  },
  {
    category: "Backend",
    technologies: ["Node.js", "NestJS", "PostgreSQL", "REST APIs", "SQL"],
    icon: "⚙️",
  },
  {
    category: "Infrastructure",
    technologies: ["Docker", "AWS", "Git", "Clean Architecture", "CI/CD"],
    icon: "🚀",
  },
  {
    category: "Practices",
    technologies: [
      "Clean Code",
      "Testing",
      "Scalable Apps",
      "API Design",
      "Performance",
    ],
    icon: "💎",
  },
];

const SkillsSection = () => {
  const { t } = useTranslation();
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
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-section gradient-text mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-body-large text-neutral-600 max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={skill.category}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="p-8 text-center hover-shadow group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                {t(`skills.${skill.category.toLowerCase()}`)}
              </h3>
              <div className="space-y-2">
                {skill.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-1 bg-neutral-100 rounded-full text-sm text-neutral-700"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
