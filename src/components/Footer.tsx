import { useTranslation } from "react-i18next";
import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-width">
        <div className="py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="font-mono font-semibold text-xl mb-4">
                Paulo Alves
              </div>
              <p className="text-neutral-400 mb-6">{t("footer.tagline")}</p>
              <div className="flex space-x-4">
                <a
                  href="mailto:pauloalvescode@gmail.com"
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/paulobarbosacode"
                  target="_blank"
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/itspaulin"
                  target="_blank"
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">{t("footer.quickLinks")}</h3>
              <div className="space-y-3">
                <a
                  href="#about"
                  className="block text-neutral-400 hover:text-white transition-colors"
                >
                  {t("nav.about")}
                </a>
                <a
                  href="#experience"
                  className="block text-neutral-400 hover:text-white transition-colors"
                >
                  {t("nav.experience")}
                </a>
                <a
                  href="#portfolio"
                  className="block text-neutral-400 hover:text-white transition-colors"
                >
                  {t("nav.work")}
                </a>
                <a
                  href="#contact"
                  className="block text-neutral-400 hover:text-white transition-colors"
                >
                  {t("nav.contact")}
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">{t("footer.services")}</h3>
              <div className="space-y-3">
                <div className="text-neutral-400">{t("footer.service1")}</div>
                <div className="text-neutral-400">{t("footer.service2")}</div>
                <div className="text-neutral-400">{t("footer.service3")}</div>
                <div className="text-neutral-400">{t("footer.service4")}</div>
                <div className="text-neutral-400">{t("footer.service5")}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-400 text-sm mb-4 md:mb-0">
              © {currentYear} Paulo Alves. {t("footer.rights")}
            </div>
            <div className="flex items-center text-neutral-400 text-sm">
              {t("footer.madeWith")}{" "}
              <Heart className="w-4 h-4 text-red-500 mx-1" />{" "}
              {t("footer.inBrazil")}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
