import { Project, useProjects } from "@/data/projects";

// Hook para pegar projetos por tipo
export const useProjectsByType = (
  type: "frontend" | "backend" | "websites"
): Project[] => {
  const projects = useProjects();
  return projects.filter((project) => project.type === type);
};

// Hook para pegar todos os projetos
export const useAllProjects = (): Project[] => {
  return useProjects();
};

// Hook para projetos filtrados (incluindo "all")
export const useFilteredProjects = (type: string): Project[] => {
  const projects = useProjects();
  if (type === "all") return projects;
  return projects.filter((project) => project.type === type);
};

// Hook para pegar projeto por título
export const useProjectByTitle = (title: string): Project | undefined => {
  const projects = useProjects();
  return projects.find((project) => project.title === title);
};

// Hook para projetos em destaque
export const useFeaturedProjects = (limit?: number): Project[] => {
  const projects = useProjects();
  return limit ? projects.slice(0, limit) : projects;
};

// Hook para categorias únicas
export const useProjectCategories = (): string[] => {
  const projects = useProjects();
  return [...new Set(projects.map((project) => project.category))];
};

// Hook para todas as tecnologias
export const useTechnologies = (): string[] => {
  const projects = useProjects();
  const allTechs = projects.flatMap((project) => project.technologies);
  return [...new Set(allTechs)];
};

// Hook para tipos de projeto
export const useProjectTypes = (): string[] => {
  const projects = useProjects();
  return [...new Set(projects.map((project) => project.type))];
};

// Versões não-hook para casos específicos onde você já tem os projetos
export const getProjectsByType = (
  projects: Project[],
  type: "frontend" | "backend" | "websites"
): Project[] => {
  return projects.filter((project) => project.type === type);
};

export const getFilteredProjects = (
  projects: Project[],
  type: string
): Project[] => {
  if (type === "all") return projects;
  return projects.filter((project) => project.type === type);
};

export const getProjectByTitle = (
  projects: Project[],
  title: string
): Project | undefined => {
  return projects.find((project) => project.title === title);
};

export const getFeaturedProjects = (
  projects: Project[],
  limit?: number
): Project[] => {
  return limit ? projects.slice(0, limit) : projects;
};

export const getProjectCategories = (projects: Project[]): string[] => {
  return [...new Set(projects.map((project) => project.category))];
};

export const getTechnologies = (projects: Project[]): string[] => {
  const allTechs = projects.flatMap((project) => project.technologies);
  return [...new Set(allTechs)];
};

export const getProjectTypes = (projects: Project[]): string[] => {
  return [...new Set(projects.map((project) => project.type))];
};
