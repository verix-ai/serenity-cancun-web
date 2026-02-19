"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";


export default function Hero() {
    const { translations } = useLanguage();
    const t = translations.home.hero;

    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/assets/Serenity_Promo-Vid.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 hero-gradient"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
                <div className="max-w-2xl">
                    <h2 className="font-script text-primary text-5xl md:text-6xl mb-4">
                        {t.subtitle}
                    </h2>
                    <h1 className="font-display text-6xl md:text-8xl font-bold text-white uppercase leading-tight mb-8">
                        {t.title} <span className="text-primary">{t.titleHighlight}</span> {t.titleEnd}
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-lg leading-relaxed">
                        {t.description}
                    </p>
                    <div className="flex space-x-4">
                        <Link
                            href="#about"
                            className="bg-primary text-white px-8 py-4 font-display text-xl uppercase tracking-widest hover:translate-y-[-2px] transition-transform inline-block"
                        >
                            {t.explore}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <span className="material-icons text-white text-3xl">expand_more</span>
            </div>
        </section>
    );
}

