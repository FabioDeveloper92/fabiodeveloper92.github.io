import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { projectsContent } from "@/data/content";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleViewAllProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/progetti");
    // Scroll to top after navigation
    window.scrollTo(0, 0);
  };

  return (
    <section id="projects" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-heading">{t("projects.title")}</h2>
        <p className="text-lg text-gray-700 mb-8 w-100">
          {t("projects.description")}
          <br />
          {t("projects.description_row2")}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsContent.map((project) => (
            <div key={project.id} className="project-card animate-fade-in">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title[language]}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {project.title[language]}
                  </h3>
                  <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-700 mb-4">
                  {project.description[language]}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="default" size="sm" asChild>
                    <Link to={`/progetto/${project.slug}`}>
                      <FileText className="mr-1 h-4 w-4" />
                      {t("projects.caseStudy")}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            asChild
          >
            <a href="/progetti" onClick={handleViewAllProjects}>
              {t("projects.viewAll")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
