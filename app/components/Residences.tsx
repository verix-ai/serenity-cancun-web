"use client";

import { useLanguage } from "../context/LanguageContext";

const icons = ["location_on", "eco", "invest"];

export default function Residences() {
    const { translations } = useLanguage();
    const cards = translations.home.residences.cards;

    return (
        <section id="residences" className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12">
                    {cards.map((card: { title: string; description: string }, i: number) => (
                        <div key={card.title} className="bg-white dark:bg-deep-dark p-10 shadow-xl border-t-4 border-primary">
                            <span className="material-icons text-primary text-4xl mb-6">{icons[i]}</span>
                            <h3 className="font-display text-2xl font-bold uppercase mb-4 dark:text-white">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
