import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

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
      className="ml-4"
    >
      {i18n.language === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
    </Button>
  );
};

export default LanguageToggle;
