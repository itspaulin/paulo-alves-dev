import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImage from "/assets/paulo-profile.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Verificar se é mobile
      const isMobile = window.innerWidth < 768;

      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: isMobile ? 0 : -50,
          y: isMobile ? 30 : 0,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          x: isMobile ? 0 : 50,
          y: isMobile ? 30 : 0,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          delay: isMobile ? 0.3 : 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-neutral-50"
    >
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={imageRef} className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden elegant-shadow">
                <img
                  src={profileImage}
                  alt="Paulo Alves"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-neutral-900 rounded-full flex items-center justify-center">
                <div className="text-white font-mono text-sm">3+</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-section gradient-text mb-4">
                Transforming Ideas into Digital Solutions
              </h2>
              <div className="w-20 h-1 bg-neutral-900 mb-6"></div>
            </div>

            <div className="space-y-6 text-body text-neutral-600">
              <p>
                With 3+ years of Full Stack development experience and a
                Software Engineering degree from UniCesumar, I specialize in
                building scalable web applications that solve real business
                problems.
              </p>

              <p>
                My journey was accelerated through Rocketseat's intensive
                bootcamp, where I mastered modern technologies and best
                practices. I focus on creating simple, efficient solutions while
                constantly seeking technical challenges that drive my growth.
              </p>

              <p>
                I believe in clean code, scalable architecture, and delivering
                exceptional user experiences that drive business results for
                clients across the globe.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center hover-shadow">
                <div className="text-2xl font-bold text-neutral-900 mb-2">
                  3+
                </div>
                <div className="text-caption">Years Experience</div>
              </Card>
              <Card className="p-6 text-center hover-shadow">
                <div className="text-2xl font-bold text-neutral-900 mb-2">
                  15+
                </div>
                <div className="text-caption">Projects Delivered</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
