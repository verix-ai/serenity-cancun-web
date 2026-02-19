"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage, type Language } from "../context/LanguageContext";

const languages: { code: Language; label: string; flag: string }[] = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "it", label: "Italiano", flag: "🇮🇹" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export default function LanguageSelector({ mobile = false }: { mobile?: boolean }) {
    const { language, setLanguage } = useLanguage();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const current = languages.find((l) => l.code === language) || languages[0];

    if (mobile) {
        return (
            <div ref={dropdownRef} className="relative py-3 border-t border-gray-800 mt-4">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-3 w-full px-4 py-3 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-primary transition-colors cursor-pointer"
                >
                    <span className="material-icons text-primary text-xl">translate</span>
                    <span>{current.flag} {current.label}</span>
                    <span className={`material-icons text-primary text-sm ml-auto transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
                        expand_more
                    </span>
                </button>

                {open && (
                    <div className="mt-1 mx-2 border border-primary/30 rounded-lg bg-charcoal-dark overflow-hidden">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors cursor-pointer ${language === lang.code
                                    ? "bg-primary/10 text-primary"
                                    : "text-gray-300 hover:bg-gray-800"
                                    }`}
                            >
                                <span className="text-lg">{lang.flag}</span>
                                <span>{lang.label}</span>
                                {language === lang.code && (
                                    <span className="material-icons text-primary text-sm ml-auto">check</span>
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div ref={dropdownRef} className="relative ml-4 border-l border-gray-300 dark:border-gray-700 pl-4 h-6 flex items-center">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 hover:text-primary transition-colors cursor-pointer"
            >
                <span className="material-icons text-primary text-base">translate</span>
                <span className="hidden sm:inline">{current.flag} {current.label}</span>
                <span className="sm:hidden">{current.flag}</span>
                <span className={`material-icons text-sm transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
                    expand_more
                </span>
            </button>

            {open && (
                <div className="absolute top-full right-0 mt-3 bg-white dark:bg-charcoal-dark border border-primary/30 rounded-lg shadow-xl z-50 min-w-[160px] overflow-hidden">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                setLanguage(lang.code);
                                setOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors cursor-pointer ${language === lang.code
                                ? "bg-primary/10 text-primary"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                                }`}
                        >
                            <span className="text-lg">{lang.flag}</span>
                            <span>{lang.label}</span>
                            {language === lang.code && (
                                <span className="material-icons text-primary text-sm ml-auto">check</span>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
