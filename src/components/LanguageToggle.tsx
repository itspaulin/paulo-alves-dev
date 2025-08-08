import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pt" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="ml-4 flex items-center gap-2"
    >
      <Globe className="w-4 h-4" />
      {i18n.language === "en" ? "PT" : "EN"}
    </Button>
  );
};

export default LanguageToggle;
