import {
  ArrowUp,
  X,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { socialLinks } from "@/data/socialLinks";
import { contactData } from "@/data/contactData";
import { navLinks } from "@/data/navLinks";

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to get the appropriate icon component based on icon name
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        return <Linkedin size={16} className="mr-2" />;
      case "github":
        return <Github size={16} className="mr-2" />;
      case "twitter":
        return <Twitter size={16} className="mr-2" />;
      case "x":
        return <X size={16} className="mr-2" />;
      case "instagram":
        return <Instagram size={16} className="mr-2" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="font-mono text-xl font-bold">
              &lt;Fabio<span className="text-secondary">/</span>&gt;
            </a>
            <p className="text-gray-400 mt-2">{t("hero.subtitle")}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div>
              <h4 className="font-bold mb-3"></h4>
              <ul className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      {getSocialIcon(link.icon)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Fabio. {t("footer.rights")}
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center justify-center w-10 h-10 bg-primary/20 hover:bg-primary/40 text-primary rounded-full transition-colors"
            aria-label={t("footer.backToTop")}
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
