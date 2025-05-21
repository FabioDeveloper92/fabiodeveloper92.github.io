
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-br from-white to-blue-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[25%] right-[10%] w-64 h-64 bg-accent/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[5%] w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center md:text-left md:max-w-3xl animate-fade-in">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
              <span className="mr-2">{t('hero.greetingPrefix')}</span>
              <span className="mr-2">{t('hero.greetingConnector')}</span>
              <span className="text-primary">{t('hero.name')}</span>
            </h1>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-mono text-secondary mb-6">
            &lt;Software Developer /&gt;
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 rounded-md"
              asChild
            >
              <a href="#contact">{t('hero.contactButton')}</a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 px-8 rounded-md"
              asChild
            >
              <a href="#projects">{t('hero.projectsButton')}</a>
            </Button>
          </div>
        </div>
      </div>
      
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-600 hover:text-primary transition-colors"
      >
        <span className="mb-2 text-sm">{t('hero.learnMore')}</span>
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
