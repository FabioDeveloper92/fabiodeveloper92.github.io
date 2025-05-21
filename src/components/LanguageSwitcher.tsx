
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1.5 px-2.5 border-primary/20 hover:bg-primary/5"
        >
          <span className="font-medium text-primary">
            {language === 'it' ? '🇮🇹' : '🇬🇧'}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 animate-in fade-in-80">
        <DropdownMenuItem 
          className={`flex items-center gap-2 ${language === 'it' ? 'bg-primary/10 text-primary font-medium' : ''}`}
          onClick={() => setLanguage('it')}
        >
          <span className="text-base">🇮🇹</span> {t('language.italian')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          className={`flex items-center gap-2 ${language === 'en' ? 'bg-primary/10 text-primary font-medium' : ''}`}
          onClick={() => setLanguage('en')}
        >
          <span className="text-base">🇬🇧</span> {t('language.english')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
