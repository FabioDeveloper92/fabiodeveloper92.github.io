
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { socialLinks } from "@/data/socialLinks";
import { aboutContent } from "@/data/content";

const Contact = () => {
  const { t } = useLanguage();

  // Function to get the appropriate icon component based on icon name
  const getSocialIcon = (iconName: string) => {
    switch(iconName) {
      case 'linkedin':
        return <Linkedin size={18} />;
      case 'github':
        return <Github size={18} />;
      case 'twitter':
        return <Twitter size={18} />;
        case 'x':
          return <X size={18} />;
      case 'instagram':
        return <Instagram size={18} />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="bg-blue-50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-heading">{t('contact.title')}</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl">
          {t('contact.description')}
        </p>
        
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <a href={`mailto:${aboutContent.personalInfo.email}`} className="text-primary hover:underline">
                    {aboutContent.personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{t('contact.phone')}</h3>
                  <a href={`tel:${aboutContent.personalInfo.phone.replace(/\s+/g, '')}`} className="text-primary hover:underline">
                    {aboutContent.personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{t('contact.location')}</h3>
                  <p className="text-gray-700">
                    {aboutContent.personalInfo.location.city}, {aboutContent.personalInfo.location.country}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-gray-800 mb-4">Social Media</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center p-3 rounded-lg transition-colors hover:bg-gray-100"
                    >
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-3"
                        style={{ backgroundColor: link.bgColor }}
                      >
                        {getSocialIcon(link.icon)}
                      </div>
                      <span className="font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
