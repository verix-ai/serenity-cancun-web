"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export default function MissionVisionPage() {
    const { translations } = useLanguage();
    const t = translations.mission;

    return (
        <>
            <Navbar />
            <PageHero
                title={t.hero.title}
                subtitle={t.hero.subtitle}
                backgroundImage="/assets/photo-gallery/livingroom-1.png"
            />

            {/* Mission Section */}
            <section className="py-24 bg-white dark:bg-deep-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                                {t.mission.label}
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                                {t.mission.title}
                            </h2>
                            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                <p>
                                    {t.mission.p1}
                                </p>
                                <p>
                                    {t.mission.p2}
                                </p>
                                <p>
                                    {t.mission.p3}
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl relative">
                                <Image
                                    src="/assets/mission-vision.png"
                                    alt="Serenity sustainable luxury courtyard design"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-primary p-8 hidden md:block">
                                <p className="font-script text-white text-3xl">
                                    {t.mission.purpose}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl relative">
                                <Image
                                    src="/assets/photo-gallery/birdeye-pool.png"
                                    alt="Aerial view of Serenity Luxury Condos pool and grounds"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                                {t.vision.label}
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                                {t.vision.title}
                            </h2>
                            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                <p>
                                    {t.vision.p1}
                                </p>
                                <p>
                                    {t.vision.p2}
                                </p>
                                <p>
                                    {t.vision.p3}
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
