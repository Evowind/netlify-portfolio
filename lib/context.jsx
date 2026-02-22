'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext({
    lang: 'en',
    setLang: () => {},
    theme: 'dark',
    setTheme: () => {},
});

export function AppProvider({ children }) {
    const [lang, setLangState] = useState('en');
    const [theme, setThemeState] = useState('dark');
    const [mounted, setMounted] = useState(false);

    // Read from localStorage on mount
    useEffect(() => {
        const savedLang  = localStorage.getItem('lang')  || 'en';
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setLangState(savedLang);
        setThemeState(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
        document.documentElement.setAttribute('data-lang', savedLang);
        setMounted(true);
    }, []);

    const setLang = (l) => {
        setLangState(l);
        localStorage.setItem('lang', l);
        document.documentElement.setAttribute('data-lang', l);
    };

    const setTheme = (t) => {
        setThemeState(t);
        localStorage.setItem('theme', t);
        document.documentElement.setAttribute('data-theme', t);
    };

    // Avoid flash of wrong theme before hydration
    if (!mounted) return (
        <div style={{ visibility: 'hidden' }}>{children}</div>
    );

    return (
        <AppContext.Provider value={{ lang, setLang, theme, setTheme }}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    return useContext(AppContext);
}

// Convenience hook that returns the right strings for current lang
export function useT(translations) {
    const { lang } = useApp();
    return translations[lang] || translations['en'];
}