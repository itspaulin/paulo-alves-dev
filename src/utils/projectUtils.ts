import { Project, projects } from "@/data/projects";

export const getProjectsByType = (
  type: "frontend" | "backend" | "websites"
): Project[] => {
  return projects.filter((project) => project.type === type);
};

export const getAllProjects = (): Project[] => {
  return projects;
};

export const getFilteredProjects = (type: string): Project[] => {
  if (type === "all") return projects;
  return projects.filter((project) => project.type === type);
};

export const getProjectByTitle = (title: string): Project | undefined => {
  return projects.find((project) => project.title === title);
};

export const getFeaturedProjects = (limit?: number): Project[] => {
  // Aqui você pode implementar lógica para projetos em destaque
  return limit ? projects.slice(0, limit) : projects;
};

export const getProjectCategories = (): string[] => {
  return [...new Set(projects.map((project) => project.category))];
};

export const getTechnologies = (): string[] => {
  const allTechs = projects.flatMap((project) => project.technologies);
  return [...new Set(allTechs)];
};

export const getProjectTypes = (): string[] => {
  return [...new Set(projects.map((project) => project.type))];
};
