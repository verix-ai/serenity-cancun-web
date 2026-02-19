"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageSelector({ mobile = false }: { mobile?: boolean }) {
    const { language, setLanguage } = useLanguage();

    if (mobile) {
        return (
            <div className="flex items-center gap-4 py-3 border-t border-gray-100 dark:border-gray-800 mt-4">
                <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">Language</span>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setLanguage("en")}
                        className={`px-3 py-1 text-xs font-bold rounded transition-colors ${language === "en"
                                ? "bg-primary text-white"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200"
                            }`}
                    >
                        ENG
                    </button>
                    <button
                        onClick={() => setLanguage("es")}
                        className={`px-3 py-1 text-xs font-bold rounded transition-colors ${language === "es"
                                ? "bg-primary text-white"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200"
                            }`}
                    >
                        ESP
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-1 ml-4 border-l border-gray-300 dark:border-gray-700 pl-4 h-6">
            <button
                onClick={() => setLanguage("en")}
                className={`text-xs font-bold transition-colors hover:text-primary ${language === "en" ? "text-primary" : "text-gray-400"
                    }`}
            >
                EN
            </button>
            <span className="text-gray-300 text-xs">/</span>
            <button
                onClick={() => setLanguage("es")}
                className={`text-xs font-bold transition-colors hover:text-primary ${language === "es" ? "text-primary" : "text-gray-400"
                    }`}
            >
                ES
            </button>
        </div>
    );
}
