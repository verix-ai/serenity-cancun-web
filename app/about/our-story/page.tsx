"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export default function OurStoryPage() {
    const { translations } = useLanguage();
    const t = translations.story;

    return (
        <>
            <Navbar />
            <PageHero
                title={t.hero.title}
                subtitle={t.hero.subtitle}
                backgroundImage="/assets/photo-gallery/building-front.jpg"
            />

            {/* Origin Story */}
            <section className="py-24 bg-white dark:bg-deep-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                                {t.origin.label}
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                                {t.origin.title}
                            </h2>
                            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                <p>
                                    {t.origin.p1}
                                </p>
                                <p>
                                    {t.origin.p2}
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl relative">
                                <Image
                                    src="/assets/photo-gallery/building-front.jpg"
                                    alt="Serenity Luxury Condos building exterior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-primary p-8 hidden md:block">
                                <p className="font-script text-white text-3xl">
                                    {t.origin.highlight}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth & Values */}
            <section className="py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl relative">
                                <Image
                                    src="/assets/photo-gallery/building-slantview.jpg"
                                    alt="Architectural view of Serenity Luxury Condos"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                                {t.growth.label}
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                                {t.growth.title}
                            </h2>
                            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                <p>
                                    {t.growth.p1}
                                </p>
                                <p>
                                    {t.growth.p2}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Where We Are Today */}
            <section className="py-24 bg-white dark:bg-deep-dark">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                        {t.today.label}
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                        {t.today.title}
                    </h2>
                    <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg max-w-3xl mx-auto">
                        <p>
                            {t.today.p1}
                        </p>
                        <p>
                            {t.today.p2}
                        </p>
                    </div>
                    <div className="w-24 h-1 bg-primary mx-auto mt-12"></div>
                </div>
            </section>

            <Footer />
        </>
    );
}
