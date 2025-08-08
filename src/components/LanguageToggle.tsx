import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-neutral-600 hover:text-neutral-900 transition-colors"
    >
      <Globe className="w-4 h-4 mr-1" />
      {i18n.language === 'en' ? 'PT' : 'EN'}
    </Button>
  );
};

export default LanguageToggle;