"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const reasonIcons = ["location_on", "payments", "trending_up", "apartment", "support_agent", "tune"];
const reasonNumbers = ["01", "02", "03", "04", "05", "06"];

const highlightIcons = ["pool", "balcony", "self_improvement", "security", "outdoor_grill", "directions_car"];

export default function InvestmentPage() {
    const { translations } = useLanguage();
    const t = translations.investment;

    return (
        <>
            <Navbar />
            <PageHero
                title={t.hero.title}
                subtitle={t.hero.subtitle}
                backgroundImage="/assets/photo-gallery/building-slantview.jpg"
            />

            {/* Intro Section */}
            <section className="py-24 bg-deep-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                                {t.intro.label}
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase mb-8">
                                {t.intro.titlePrefix}{" "}
                                <span className="text-primary">{t.intro.titleSuffix}</span>
                            </h2>
                            <p className="font-body text-lg text-gray-300 leading-relaxed mb-6">
                                {t.intro.p1}
                            </p>
                            <p className="font-body text-lg text-gray-400 leading-relaxed">
                                {t.intro.p2}
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-charcoal-dark p-10">
                                <span className="font-script text-primary text-3xl block mb-6">{t.intro.whySerenity}</span>
                                <div className="space-y-4">
                                    {t.intro.list.map((item: string, i: number) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <span className="material-icons text-primary text-xl mt-0.5">check_circle</span>
                                            <p className="font-body text-gray-300">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Invest Section */}
            <section className="py-24 bg-background-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                            {t.whyInvest.label}
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase mb-6">
                            {t.whyInvest.titlePrefix}{" "}
                            <span className="text-primary">{t.whyInvest.titleSuffix}</span>
                        </h2>
                        <div className="w-20 h-0.5 bg-primary mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t.whyInvest.reasons.map((reason: { title: string; description: string }, i: number) => (
                            <div
                                key={reasonNumbers[i]}
                                className="bg-charcoal-dark p-8 hover:bg-charcoal-dark/80 transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="material-icons text-primary text-3xl group-hover:scale-110 transition-transform duration-300">
                                        {reasonIcons[i]}
                                    </span>
                                    <span className="font-display text-5xl font-bold text-white/10 transition-colors">
                                        {reasonNumbers[i]}
                                    </span>
                                </div>
                                <h3 className="font-display text-xl font-bold text-white uppercase mb-4">
                                    {reason.title}
                                </h3>
                                <p className="font-body text-gray-400 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Amenity Highlights */}
            <section className="py-24 bg-deep-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                            {t.highlights.label}
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-6">
                            {t.highlights.title}
                        </h2>
                        <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto">
                            {t.highlights.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {t.highlights.items.map((label: string, i: number) => (
                            <div
                                key={i}
                                className="bg-charcoal-dark p-6 text-center hover:bg-charcoal-dark/80 transition-all duration-300 group"
                            >
                                <span className="material-icons text-primary text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                                    {highlightIcons[i]}
                                </span>
                                <p className="font-body text-sm text-gray-300 font-semibold uppercase tracking-wider">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gateway CTA Section */}
            <section className="py-24 bg-background-dark">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="font-script text-primary text-4xl md:text-5xl block mb-6">
                        {t.cta.label}
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-8">
                        {t.cta.title}
                    </h2>
                    <p className="font-body text-lg text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
                        {t.cta.p1}
                    </p>
                    <p className="font-body text-xl text-primary font-semibold mb-10">
                        {t.cta.p2}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#contact"
                            className="bg-primary text-white px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all inline-block"
                        >
                            {t.cta.explore}
                        </Link>
                        <Link
                            href="#contact"
                            className="border-2 border-primary text-primary px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all inline-block"
                        >
                            {t.cta.schedule}
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
