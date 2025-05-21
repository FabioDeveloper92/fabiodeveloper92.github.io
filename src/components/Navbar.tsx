
import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { navLinks } from "@/data/navLinks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine if we're on the home page
  const isHomePage = location.pathname === '/';

  // Function to handle navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
    if (isExternal) {
      // For external links, let the default behavior happen (open in new tab)
      return;
    }
    
    e.preventDefault();
    // Close menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    // For home link, navigate to home and scroll to top
    if (href === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Extract section ID from href if it contains a hash
    const hasSection = href.includes('#');
    const sectionId = hasSection ? href.split('#')[1] : null;
    
    // If we're not on the home page, navigate to home first
    if (!isHomePage) {
      navigate('/');
      // Need to wait for navigation to complete before scrolling
      if (sectionId) {
        // Use setTimeout to ensure navigation has completed
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const yOffset = -80; // Adjust this value for header height
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (sectionId) {
      // If already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -80; // Adjust for header height
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="font-mono text-xl font-bold text-primary">
              &lt;Fabio<span className="text-secondary">/</span>&gt;
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.nameKey}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center"
                  >
                    {t(link.nameKey)}
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                ) : (
                  <a
                    key={link.nameKey}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, false)}
                    className="text-gray-700 hover:text-primary transition-colors font-medium"
                  >
                    {t(link.nameKey)}
                  </a>
                )
              ))}
              <LanguageSwitcher />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <Button variant="ghost" onClick={toggleMenu} size="icon">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.nameKey}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary flex items-center"
                >
                  {t(link.nameKey)}
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              ) : (
                <a
                  key={link.nameKey}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                >
                  {t(link.nameKey)}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

