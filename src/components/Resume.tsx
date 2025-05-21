
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { resumeContent } from "@/data/content";
import { useLanguage } from "@/contexts/LanguageContext";

const Resume = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="resume" className="bg-blue-50 py-16 md:py-24">
      <div className="section-container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-heading">Curriculum Vitae</h2>
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <a href="#" download>
              <FileText className="mr-2 h-5 w-5" />
              {t('resume.downloadCV')}
            </a>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
              </span>
              {t('resume.education')}
            </h3>
            
            <div className="space-y-8">
              {resumeContent.education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-bold text-primary">
                      {edu.degree[language]}
                    </h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 rounded">{edu.period}</span>
                  </div>
                  <p className="text-secondary font-medium mb-2">
                    {edu.institution[language]}
                  </p>
                  <p className="text-gray-600">
                    {edu.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                  <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                  <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                  <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                </svg>
              </span>
              {t('resume.experience')}
            </h3>
            
            <div className="space-y-8">
              {resumeContent.experience.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-bold text-primary">
                      {exp.role[language]}
                    </h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 rounded">
                      {exp.period[language] || exp.period}
                    </span>
                  </div>
                  <p className="text-secondary font-medium mb-2">
                    {exp.company[language]}
                  </p>
                  <p className="text-gray-600 mb-3">
                    {exp.description[language]}
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.achievements[language].map((achievement, i) => (
                      <li key={i} className="text-gray-600 text-sm">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
