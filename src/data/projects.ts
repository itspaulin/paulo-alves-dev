import { useTranslation } from "react-i18next";

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  type: "frontend" | "backend" | "websites";
  link?: string;
  github?: string;
}

export const useProjects = (): Project[] => {
  const { t } = useTranslation();

  return [
    {
      title: t("projects.menuSystem.title"),
      description: t("projects.menuSystem.description"),
      image: "/assets/foodex.png",
      technologies: [
        "React",
        "JavaScript",
        "SQL",
        "Knex.js",
        "Styled-Components",
        "Toast",
      ],
      category: t("projects.menuSystem.category"),
      type: "frontend",
      link: "https://sval-food-explorer.netlify.app/",
      github: "https://github.com/itspaulin/food-explorer",
    },
    {
      title: t("projects.leJardin.title"),
      description: t("projects.leJardin.description"),
      image: "/assets/lejardin.png",
      technologies: ["React", "JavaScript", "Tailwind", "Toast", "GSAP"],
      category: t("projects.leJardin.category"),
      type: "frontend",
      link: "https://jardin-noir-eta.vercel.app/",
    },
    {
      title: t("projects.automotiveManagement.title"),
      description: t("projects.automotiveManagement.description"),
      image: "/assets/backend.avif",
      technologies: ["Node.js", "NestJS", "Docker", "PostgreSQL", "Prisma"],
      category: t("projects.automotiveManagement.category"),
      type: "backend",
      github: "https://github.com/itspaulin/automotive-management/",
    },
    {
      title: t("projects.bioxRecipes.title"),
      description: t("projects.bioxRecipes.description"),
      image: "/assets/backend.avif",
      technologies: ["Node.js", "NestJS", "Docker", "PostgreSQL", "Prisma"],
      category: t("projects.bioxRecipes.category"),
      type: "backend",
      github: "https://github.com/itspaulin/biox-recipes",
    },
    {
      title: t("projects.forumCore.title"),
      description: t("projects.forumCore.description"),
      image: "/assets/backend.avif",
      technologies: [
        "Node.js",
        "NestJS",
        "Docker",
        "PostgreSQL",
        "Prisma",
        "Redis",
      ],
      category: t("projects.forumCore.category"),
      type: "backend",
      github: "https://github.com/itspaulin/ForumCore",
    },
    {
      title: t("projects.amelisConecta.title"),
      description: t("projects.amelisConecta.description"),
      image: "/assets/amelis.png",
      technologies: ["Wordpress", "Elementor", "CSS"],
      category: t("projects.amelisConecta.category"),
      type: "websites",
      link: "https://amelisconecta.com.br/",
    },
    {
      title: t("projects.bloomStudio.title"),
      description: t("projects.bloomStudio.description"),
      image: "/assets/bloom.png",
      technologies: ["Wordpress", "Elementor", "CSS"],
      category: t("projects.bloomStudio.category"),
      type: "websites",
      link: "https://bloom-studio.netlify.app/",
    },
    {
      title: t("projects.cupCode.title"),
      description: t("projects.cupCode.description"),
      image: "/assets/cup.png",
      technologies: ["React.js", "GSAP", "Tailwind"],
      category: t("projects.cupCode.category"),
      type: "websites",
      link: "https://cupandcode.vercel.app/",
    },
    {
      title: t("projects.sterlingArchitecture.title"),
      description: t("projects.sterlingArchitecture.description"),
      image: "/assets/sterling.png",
      technologies: ["React.js", "GSAP", "Tailwind"],
      category: t("projects.sterlingArchitecture.category"),
      type: "websites",
      link: "https://sterling-reveal.vercel.app/",
    },
    {
      title: t("projects.mountainView.title"),
      description: t("projects.mountainView.description"),
      image: "/assets/mountain.png",
      technologies: ["Next.js", "Shopify", "Tailwind", "Algolia"],
      category: t("projects.mountainView.category"),
      type: "websites",
      link: "https://mountain-view-auto-repair.netlify.app/",
    },
    {
      title: t("projects.stoqFacil.title"),
      description: t("projects.stoqFacil.description"),
      image: "/assets/stoq facil.png",
      technologies: ["Wordpress", "Elementor", "CSS"],
      category: t("projects.stoqFacil.category"),
      type: "websites",
      link: "https://stoqfacil.com/",
    },
    {
      title: t("projects.feitoPotiguar.title"),
      description: t("projects.feitoPotiguar.description"),
      image: "/assets/feito potiguar.png",
      technologies: ["Wordpress", "Elementor", "CSS"],
      category: t("projects.feitoPotiguar.category"),
      type: "websites",
      link: "https://feitopotiguar.com.br/",
    },
    {
      title: t("projects.cacioPaiva.title"),
      description: t("projects.cacioPaiva.description"),
      image: "/assets/cacio.png",
      technologies: ["Wordpress", "Elementor", "CSS"],
      category: t("projects.cacioPaiva.category"),
      type: "websites",
      link: "https://caciopaiva.com.br/",
    },
    {
      title: t("projects.usgExames.title"),
      description: t("projects.usgExames.description"),
      image: "/assets/usg.png",
      technologies: ["Wordpress", "Elementor", "CSS"],
      category: t("projects.usgExames.category"),
      type: "websites",
      link: "https://usgexames.com.br/",
    },
  ];
};
