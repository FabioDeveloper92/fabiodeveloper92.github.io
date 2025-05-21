
import en from './en';
import it from './it';

// Define available languages
export type Language = 'it' | 'en';

// Export translations object
export const translations: Record<string, Record<string, string>> = {
  en,
  it
};
