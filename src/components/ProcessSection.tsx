import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Search, Code, TestTube, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Planning",
    description:
      "Understanding requirements, analyzing business goals, and defining technical architecture for optimal solutions.",
    details: [
      "Requirements analysis",
      "Technical planning",
      "Architecture design",
      "Timeline estimation",
    ],
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Clean, efficient code development using modern technologies and best practices for maintainable solutions.",
    details: [
      "Clean code principles",
      "Modern frameworks",
      "Responsive design",
      "Performance optimization",
    ],
  },
  {
    icon: TestTube,
    title: "Testing & Quality",
    description:
      "Comprehensive testing ensuring performance, reliability, and exceptional user experience across all devices.",
    details: [
      "Unit testing",
      "Integration testing",
      "Performance testing",
      "Cross-browser compatibility",
    ],
  },
  {
    icon: Rocket,
    title: "Deployment & Maintenance",
    description:
      "Scalable deployment solutions with ongoing support and maintenance for long-term success.",
    details: [
      "CI/CD pipelines",
      "Cloud deployment",
      "Monitoring setup",
      "Ongoing support",
    ],
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the connecting line
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate cards
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
    <section
      id="process"
      ref={sectionRef}
      className="section-padding bg-neutral-50"
    >
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-section gradient-text mb-4">
            My Development Process
          </h2>
          <p className="text-body-large text-neutral-600 max-w-2xl mx-auto">
            A systematic approach to delivering exceptional results from concept
            to deployment
          </p>
        </div>

        <div className="relative">
          {/* Connecting line - hidden on mobile */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-neutral-300 transform origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={step.title}
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  className="relative p-8 text-center hover-shadow group"
                >
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-neutral-900 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-neutral-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-body text-neutral-600 mb-6">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-2"></div>
                        <span className="text-sm text-neutral-500">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
