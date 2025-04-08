import { useMemo, useRef, useState } from "react";
import type { ProjectsDataType, ProjectType } from "../types";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection({
  projectsData,
}: {
  projectsData: ProjectsDataType;
}) {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Extract unique technologies
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projectsData.proyectos.forEach((project) => {
      project.tecnologias.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (!selectedTech) return projectsData.proyectos;
    return projectsData.proyectos.filter((project) =>
      project.tecnologias.includes(selectedTech)
    );
  }, [selectedTech]);

  // Determine how many projects to display
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section ref={sectionRef}>
      <div className="container px-4 mx-auto">
        {/* Technology Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={selectedTech === null ? "default" : "outline"}
            onClick={() => setSelectedTech(null)}
            className="mb-2 bg-azul-cielo hover:bg-azul-cielo/80 text-white border-azul-cielo hover:text-white"
          >
            Todos
          </Button>
          {allTechnologies.map((tech) => (
            <Button
              key={tech}
              variant={selectedTech === tech ? "default" : "outline"}
              onClick={() => setSelectedTech(tech)}
              className={`mb-2 ${
                selectedTech === tech
                  ? "bg-azul-cielo hover:bg-azul-cielo/80 text-white hover:text-white"
                  : "bg-transparent border-gray-600 text-gray-300 hover:text-white hover:border-azul-cielo hover:bg-gray-700"
              }`}
            >
              {tech}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && !showAll && (
          <div className="text-center mt-12">
            <Button 
            onClick={() => setShowAll(true)}
            className="bg-azul-cielo hover:bg-azul-cielo/80 text-white hover:text-white"
            >Ver más proyectos</Button>
          </div>
        )}

        {/* Show Less Button */}
        {showAll && (
          <div className="text-center mt-12">
            <Button 
            onClick={() => {
              setShowAll(false)
              // Scroll to the top of the component with smooth behavior
              sectionRef.current?.scrollIntoView({ behavior: "smooth" })
            }}
            className="bg-azul-cielo hover:bg-azul-cielo/80 text-white hover:text-white"
            >Ver menos</Button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="bg-gray-800/70 rounded-lg shadow-md overflow-hidden border border-transparent transition-all duration-300 hover:shadow-lg hover:border-azul-cielo">
      <div className="relative h-48 w-full">
        <img src={project.img} alt={project.titulo} className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.titulo}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{project.descripcion}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tecnologias.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 mt-4 text-gray-100">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 py-1 px-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </a>
          )}

          {project.LinkGithub && (
            <a
              href={project.LinkGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 py-1 px-2"
            >
              <Github className="w-4 h-4" />
              <span>Github</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
