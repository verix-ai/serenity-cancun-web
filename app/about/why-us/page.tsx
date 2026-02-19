"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

const featureIcons = ["location_on", "architecture", "pool", "security", "eco", "trending_up"];

export default function WhyUsPage() {
    const { translations } = useLanguage();
    const t = translations.whyUs;

    return (
        <>
            <Navbar />
            <PageHero
                title={t.hero.title}
                subtitle={t.hero.subtitle}
                backgroundImage="/assets/photo-gallery/pool-3.png"
            />

            {/* Intro */}
            <section className="py-24 bg-white dark:bg-deep-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                                {t.intro.label}
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                                {t.intro.title}
                            </h2>
                            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                <p>
                                    {t.intro.p1}
                                </p>
                                <p>
                                    {t.intro.p2}
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl relative">
                                <Image
                                    src="/assets/photo-gallery/pool-3.png"
                                    alt="Serenity Luxury Condos infinity pool at sunset"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Feature Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t.features.map((feature: { title: string; description: string }, i: number) => (
                            <div
                                key={feature.title}
                                className="bg-background-light dark:bg-charcoal-dark p-8 border-t-4 border-primary shadow-lg hover:shadow-xl transition-shadow group"
                            >
                                <span className="material-icons text-primary text-4xl mb-6 block group-hover:scale-110 transition-transform">
                                    {featureIcons[i]}
                                </span>
                                <h3 className="font-display text-xl font-bold uppercase mb-4 text-deep-dark dark:text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
