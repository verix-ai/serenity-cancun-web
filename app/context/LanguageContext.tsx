"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, type Translations } from "../constants/translations";

export type Language = "en" | "es" | "fr" | "it" | "de";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    t: (key: string) => string;
    translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>("en");

    // Persist language preference
    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang && ["en", "es", "fr", "it", "de"].includes(savedLang)) {
            setLanguage(savedLang);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    const toggleLanguage = () => {
        const langs: Language[] = ["en", "es", "fr", "it", "de"];
        const idx = langs.indexOf(language);
        setLanguage(langs[(idx + 1) % langs.length]);
    };

    const currentTranslations = translations[language];

    const t = (path: string): string => {
        const keys = path.split(".");
        let current: any = currentTranslations;

        for (const key of keys) {
            if (current[key] === undefined) {
                console.warn(`Translation missing for key: ${path}`);
                return path;
            }
            current = current[key];
        }

        return current as string;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, translations: currentTranslations }}>
            {children}
        </LanguageContext.Provider>
    );
};
