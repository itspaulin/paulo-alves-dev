import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectDetails: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [formRef.current, infoRef.current],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.projectDetails) {
      toast({
        title: t("contact.form.validation.title"),
        description: t("contact.form.validation.description"),
        variant: "destructive",
      });
      return;
    }

    try {
      const serviceId = "service_05i5mno";
      const templateId = "template_0ljg32k";
      const publicKey = "gh2j6zPhRWhZXFAZp";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || t("contact.form.defaultSubject"),
        message: formData.projectDetails,
        to_email: "pauloalvescode@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: t("contact.form.success.title"),
        description: t("contact.form.success.description"),
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        projectDetails: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: t("contact.form.error.title"),
        description: t("contact.form.error.description"),
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-section gradient-text mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-body-large text-neutral-600 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card ref={formRef} className="p-8 hover-shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">{t("contact.form.name")} *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder={t("contact.form.namePlaceholder")}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">{t("contact.form.email")} *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder={t("contact.form.emailPlaceholder")}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject">{t("contact.form.subject")}</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  placeholder={t("contact.form.subjectPlaceholder")}
                />
              </div>

              <div>
                <Label htmlFor="projectDetails">
                  {t("contact.form.project")} *
                </Label>
                <Textarea
                  id="projectDetails"
                  value={formData.projectDetails}
                  onChange={(e) =>
                    handleInputChange("projectDetails", e.target.value)
                  }
                  placeholder={t("contact.form.projectPlaceholder")}
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3 text-lg hover-shadow"
              >
                {t("contact.form.send")}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div ref={infoRef} className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                {t("contact.info.title")}
              </h3>
              <p className="text-body text-neutral-600 mb-8">
                {t("contact.info.description")}
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-6 flex items-center space-x-4 hover-shadow group">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center group-hover:bg-neutral-900 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="font-medium text-neutral-900">
                    {t("contact.info.email")}
                  </div>
                  <div className="text-neutral-600">
                    pauloalvescode@gmail.com
                  </div>
                </div>
              </Card>

              <a
                href="https://linkedin.com/in/paulobarbosacode"
                target="_blank"
              >
                <Card className="p-6 flex items-center space-x-4 hover-shadow group cursor-pointer">
                  <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center group-hover:bg-neutral-900 transition-colors duration-300">
                    <Linkedin className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-neutral-900">LinkedIn</div>
                    <div className="text-neutral-600">
                      {t("contact.info.linkedinDesc")}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-400" />
                </Card>
              </a>

              <a href="https://github.com/itspaulin" target="_blank">
                <Card className="p-6 flex items-center space-x-4 hover-shadow group cursor-pointer">
                  <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center group-hover:bg-neutral-900 transition-colors duration-300">
                    <Github className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-neutral-900">GitHub</div>
                    <div className="text-neutral-600">
                      {t("contact.info.githubDesc")}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-400" />
                </Card>
              </a>
            </div>

            <div className="bg-neutral-50 rounded-lg p-6">
              <h4 className="font-semibold text-neutral-900 mb-3">
                {t("contact.info.responseTime.title")}
              </h4>
              <p className="text-body text-neutral-600">
                {t("contact.info.responseTime.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
