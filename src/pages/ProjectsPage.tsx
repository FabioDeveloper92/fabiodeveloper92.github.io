
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectsContent } from "@/data/content";

const ProjectsPage = () => {
  const { t, language } = useLanguage();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-white py-16 md:py-24">
        <div className="section-container">
          <Link 
            to="/" 
            className="flex items-center text-primary hover:text-primary/80 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('projectsPage.backHome')}
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{t('projectsPage.title')}</h1>
          
          <p className="text-lg text-gray-700 mb-10 max-w-3xl">
            {t('projectsPage.description')}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <h3 className="text-xl font-bold text-gray-800">{project.title[language]}</h3>
                    <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-2">
                     {project.description[language]}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <Button variant="default" size="sm" asChild>
                    <Link to={`/project/${project.slug}`}>
                      <FileText className="mr-1 h-4 w-4" />
                      {t('projects.caseStudy')}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectsPage;
