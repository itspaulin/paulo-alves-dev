import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

const Navigation = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-neutral-200"
          : "bg-transparent"
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between py-4 px-4">
          <div className="font-mono font-semibold text-lg">
            <a href="/">Paulo Alves</a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {t("nav.experience")}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {t("nav.work")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {t("nav.contact")}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-neutral-900 hover:bg-neutral-800 text-white"
            >
              {t("nav.letsTalk")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
