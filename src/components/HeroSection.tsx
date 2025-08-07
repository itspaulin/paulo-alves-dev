import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ThreeBackground } from "./ThreeBackground";
import gsap from "gsap";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial state
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 0,
        y: 50,
      });

      // Animation sequence
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* Three.js Background */}
      <ThreeBackground />

      {/* Content */}
      <div className="container-width text-center z-10 relative">
        <h1
          ref={titleRef}
          className="text-display gradient-text mb-6 leading-tight"
        >
          Paulo Alves
        </h1>

        <p
          ref={subtitleRef}
          className="text-body-large text-neutral-600 max-w-2xl mx-auto mb-12"
        >
          Building scalable web applications and performant APIs with React,
          Next.js, and Node.js for 3+ years. Transforming ideas into digital
          solutions for clients worldwide.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("portfolio")}
            className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 text-lg hover-shadow"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-neutral-300 hover:bg-neutral-50 px-8 py-3 text-lg hover-shadow"
          >
            Let's Talk
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
