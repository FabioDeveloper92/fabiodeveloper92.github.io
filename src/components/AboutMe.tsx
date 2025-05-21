
import { FileCode, Contact, Mail, Phone } from "lucide-react";
import { aboutContent } from "@/data/content";
import { useLanguage } from "@/contexts/LanguageContext";
import { technologies } from "@/data/technologies";

const AboutMe = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-heading">{t('about.title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-gray-700">
              <span className="highlight">Software Developer</span> {aboutContent.intro[language]}
            </p>
            
            <p className="text-lg text-gray-700">
              {aboutContent.current[language]}
            </p>

            <p className="text-lg text-gray-700">
              {aboutContent.goal[language]}
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold mb-3">{t('about.personalInfo')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Contact className="text-primary h-5 w-5" />
                  <span>{t('about.name')}: {aboutContent.personalInfo.name}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="text-primary h-5 w-5" />
                  <span>Email: {aboutContent.personalInfo.email}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="text-primary h-5 w-5" />
                  <span>{t('about.phone')}: {aboutContent.personalInfo.phone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <FileCode className="text-primary h-5 w-5" />
                  <span>{aboutContent.personalInfo.availability[language]}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-bold mb-4">{t('about.skills')}</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {technologies.map((tech) => (
                <div 
                  key={tech.name}
                  className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 mb-2 flex items-center justify-center">
                    <img src={tech.logo} alt={tech.name} className="max-w-full max-h-full" />
                  </div>
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
