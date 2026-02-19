"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const categoryIcons = ["info", "payments", "spa", "villa", "security", "calendar_today"];

function AccordionItem({
    question,
    answer,
    number,
    isOpen,
    onToggle,
}: {
    question: string;
    answer: string;
    number: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div
            className={`border-b border-primary/15 transition-colors duration-300 ${isOpen ? "bg-charcoal-dark/50" : ""}`}
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center gap-4 py-6 px-6 text-left group hover:bg-charcoal-dark/30 transition-colors duration-300"
            >
                <span className="font-display text-sm text-primary/40 font-bold tracking-wider min-w-[28px]">
                    {String(number).padStart(2, "0")}
                </span>
                <span className="font-display text-lg font-bold text-white uppercase tracking-wide flex-1 group-hover:text-primary transition-colors duration-300">
                    {question}
                </span>
                <span
                    className={`material-icons text-primary text-2xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                    expand_more
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="px-6 pb-6 pl-[60px]">
                    <p className="font-body text-gray-400 leading-relaxed text-base">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function FAQsPage() {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
    const { translations } = useLanguage();
    const t = translations.faqs;

    const toggleItem = (key: string) => {
        setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    let globalNumber = 0;

    return (
        <>
            <Navbar />
            <PageHero
                title={t.hero.title}
                subtitle={t.hero.subtitle}
                backgroundImage="/assets/photo-gallery/building-slantview.jpg"
            />

            {/* FAQ Categories */}
            <section className="py-24 bg-deep-dark">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                            {t.intro.label}
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase mb-6">
                            {t.intro.titlePrefix}{" "}
                            <span className="text-primary">{t.intro.titleSuffix}</span>
                        </h2>
                        <div className="w-20 h-0.5 bg-primary mx-auto mb-6" />
                        <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto">
                            {t.intro.description}
                        </p>
                    </div>

                    {/* Category Sections */}
                    <div className="space-y-12">
                        {t.categories.map((cat: { category: string; faqs: { question: string; answer: string }[] }, catIndex: number) => (
                            <div key={cat.category}>
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <span className="material-icons text-primary text-2xl">
                                            {categoryIcons[catIndex]}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider">
                                        {cat.category}
                                    </h3>
                                    <div className="h-px flex-1 bg-primary/20" />
                                </div>

                                {/* Accordion items */}
                                <div className="bg-charcoal-dark/30 border border-primary/15">
                                    {cat.faqs.map((faq: { question: string; answer: string }) => {
                                        globalNumber++;
                                        const key = `${cat.category}-${globalNumber}`;
                                        return (
                                            <AccordionItem
                                                key={key}
                                                question={faq.question}
                                                answer={faq.answer}
                                                number={globalNumber}
                                                isOpen={!!openItems[key]}
                                                onToggle={() =>
                                                    toggleItem(key)
                                                }
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-background-dark">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="font-script text-primary text-4xl md:text-5xl block mb-6">
                        {t.cta.still}
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-8">
                        {t.cta.contact}
                    </h2>
                    <p className="font-body text-lg text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
                        {t.cta.description}
                    </p>

                    {/* Contact Details */}
                    <div className="flex flex-col sm:flex-row gap-8 justify-center mb-10">
                        <a
                            href="tel:+12096891052"
                            className="flex items-center gap-3 justify-center text-gray-300 hover:text-primary transition-colors"
                        >
                            <span className="material-icons text-primary text-2xl">
                                phone
                            </span>
                            <span className="font-body text-lg">
                                +1 209-689-1052
                            </span>
                        </a>
                        <a
                            href="mailto:info@serenityluxurycondos.com"
                            className="flex items-center gap-3 justify-center text-gray-300 hover:text-primary transition-colors"
                        >
                            <span className="material-icons text-primary text-2xl">
                                email
                            </span>
                            <span className="font-body text-lg">
                                info@serenityluxurycondos.com
                            </span>
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/inquiry"
                            className="bg-primary text-white px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all inline-block"
                        >
                            {t.cta.send}
                        </Link>
                        <Link
                            href="/residences"
                            className="border-2 border-primary text-primary px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all inline-block"
                        >
                            {t.cta.explore}
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
