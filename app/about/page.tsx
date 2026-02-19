"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function AboutPage() {
    const { translations } = useLanguage();
    const t = translations.about;

    return (
        <>
            <Navbar />
            <PageHero
                title={t.hero.title}
                subtitle={t.hero.subtitle}
                backgroundImage="/assets/photo-gallery/building-slantview.jpg"
            />

            {/* Who We Are — mirrored from homepage */}
            <section className="py-24 bg-white dark:bg-deep-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                                {t.philosophy.label}
                            </span>
                            <h2 className="font-display text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                                {t.philosophy.title}
                            </h2>
                            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                <p>
                                    {t.philosophy.p1}
                                </p>
                                <p>
                                    {t.philosophy.p2}
                                </p>
                            </div>
                            <div className="mt-10 grid grid-cols-3 gap-8">
                                <div>
                                    <span className="block font-display text-4xl font-bold text-primary">
                                        14
                                    </span>
                                    <span className="text-xs uppercase tracking-widest text-gray-500">
                                        {t.philosophy.stats.units}
                                    </span>
                                </div>
                                <div>
                                    <span className="block font-display text-4xl font-bold text-primary">
                                        10
                                    </span>
                                    <span className="text-xs uppercase tracking-widest text-gray-500">
                                        {t.philosophy.stats.amenities}
                                    </span>
                                </div>
                                <div>
                                    <span className="block font-display text-4xl font-bold text-primary">
                                        2026
                                    </span>
                                    <span className="text-xs uppercase tracking-widest text-gray-500">
                                        {t.philosophy.stats.completion}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden shadow-2xl relative">
                                <Image
                                    src="/assets/livingroom.png"
                                    alt="Serenity Luxury Condo Interior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-primary p-8 hidden md:block">
                                <p className="font-script text-white text-3xl">
                                    {t.philosophy.timeless}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extended About Section */}
            <section className="py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl relative">
                                <Image
                                    src="/assets/photo-gallery/building-front.jpg"
                                    alt="Serenity Luxury Condos nestled in the Mayan jungle"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                                {t.extended.label}
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                                {t.extended.title}
                            </h2>
                            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                <p>
                                    {t.extended.p1}
                                </p>
                                <p>
                                    {t.extended.p2}
                                </p>
                                <p>
                                    {t.extended.p3}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
