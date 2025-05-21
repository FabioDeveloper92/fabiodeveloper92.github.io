
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProjectBySlug, projectFullDescriptions } from "@/data/projectsData";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();

  // Add useEffect to scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get project by slug
  const project = getProjectBySlug(slug || "");

  // If the project doesn't exist, show a message
  if (!project) {
    return (
      <>
        <Navbar />
        <div className="section-container min-h-[70vh] flex flex-col items-center justify-center mt-16">
          <h1 className="text-3xl font-bold mb-4">{t('projectDetail.notFound')}</h1>
          <p className="mb-6">{t('projectDetail.notFoundDesc')}</p>
          <Button asChild>
            <Link to="/#projects">{t('projectDetail.backToProjects')}</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  // Get the full description based on current language
  const fullDescription = projectFullDescriptions[slug as keyof typeof projectFullDescriptions]?.[language as 'en' | 'it'] || "";

  return (
    <>
      <Navbar />
      <section className="pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="section-container pt-0 md:pt-0">
          <Link 
            to="/#projects" 
            className="flex items-center text-primary hover:text-primary/80 mb-4 md:mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('projectDetail.backToProjects')}
          </Link>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="md:col-span-2">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                {t(project.titleKey)}
              </h1>
              
              <div className="mb-6 md:mb-8">
                <img 
                  src={project.image} 
                  alt={t(project.titleKey)} 
                  className="w-full h-auto rounded-lg shadow-lg" 
                />
              </div>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: fullDescription }}
              />
            </div>
            
            <div className="md:col-span-1 order-first md:order-last mb-6 md:mb-0">
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{t('projectDetail.details')}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">{t('projectDetail.client')}:</h4>
                    <p>{project.client?.[language as 'en' | 'it'] || ""}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700">{t('projectDetail.year')}:</h4>
                    <p>{project.year}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700">{t('projectDetail.duration')}:</h4>
                    <p>{project.duration?.[language as 'en' | 'it'] || ""}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700">{t('projectDetail.category')}:</h4>
                    <p>{t(project.categoryKey)}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700">{t('projectDetail.technologies')}:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectDetail;
