import { useState, useEffect } from 'react';

export function useLanguage() {
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en';
    }
    return 'en';
  });

  const setLanguage = (lang) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      window.dispatchEvent(new Event('languageChange'));
    }
    setLanguageState(lang);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setLanguageState(localStorage.getItem('language') || 'en');
    };
    
    window.addEventListener('languageChange', handleStorageChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('languageChange', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return [language, setLanguage];
}
