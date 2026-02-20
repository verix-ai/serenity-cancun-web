"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

export default function AmenitiesPage() {
    const { translations } = useLanguage();
    const t = translations.amenities;

    const featuredAmenities = [
        {
            ...t.featured[0],
            image: "/assets/beach-club1.jpg",
            icon: "beach_access",
        },
        {
            ...t.featured[1],
            image: "/assets/vip-food1.jpg",
            icon: "restaurant",
        },
    ];

    const amenityCards = [
        {
            ...t.cards[0],
            image: "/assets/photo-gallery/pool-3.png",
            icon: "pool",
        },
        {
            ...t.cards[1],
            image: "/assets/photo-gallery/birdeye-pool.png",
            icon: "wb_sunny",
        },
        {
            ...t.cards[2],
            image: "/assets/bbq.png",
            icon: "outdoor_grill",
        },
        {
            ...t.cards[3],
            image: "/assets/photo-gallery/building-front.jpg",
            icon: "directions_car",
        },
        {
            ...t.cards[4],
            image: "/assets/photo-gallery/livingroom-1.png",
            icon: "spa",
        },
        {
            ...t.cards[5],
            image: "/assets/yoga.jpeg",
            icon: "self_improvement",
        },
        {
            ...t.cards[6],
            image: "/assets/photo-gallery/pool-3.png",
            icon: "hot_tub",
        },
        {
            ...t.cards[7],
            image: "/assets/photo-gallery/building-slantview.jpg",
            icon: "park",
        },
        {
            ...t.cards[8],
            image: "/assets/photo-gallery/yacht.png",
            icon: "sailing",
        },
    ];

    return (
        <>
            <Navbar />
            <PageHero
                title={t.hero.title}
                subtitle={t.hero.subtitle}
                backgroundImage="/assets/photo-gallery/birdeye-pool.png"
            />

            {/* Intro Section */}
            <section className="py-24 bg-white dark:bg-deep-dark">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                        {t.intro.label}
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                        {t.intro.title}
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-10"></div>
                    <p className="font-body text-lg text-charcoal-dark dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        {t.intro.description}
                    </p>
                </div>
            </section>

            {/* Featured Amenities — Large Showcase */}
            {featuredAmenities.map((amenity, index) => (
                <section
                    key={amenity.title}
                    className={`py-24 ${index % 2 === 0
                        ? "bg-background-light dark:bg-background-dark"
                        : "bg-white dark:bg-deep-dark"
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div
                            className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                                }`}
                        >
                            {/* Image */}
                            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src={amenity.image}
                                    alt={amenity.title}
                                    width={800}
                                    height={600}
                                    className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/40 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                    <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <span className="material-icons text-white text-2xl">
                                            {amenity.icon}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <span className="material-icons text-primary text-3xl">
                                            {amenity.icon}
                                        </span>
                                    </div>
                                    <div className="h-px flex-1 bg-primary/20"></div>
                                </div>
                                <h3 className="font-display text-3xl md:text-4xl font-bold text-deep-dark dark:text-white uppercase mb-6">
                                    {amenity.title}
                                </h3>
                                <p className="font-body text-lg text-charcoal-dark dark:text-gray-300 leading-relaxed mb-8">
                                    {amenity.description}
                                </p>
                                <div className="flex items-center gap-2 text-primary font-display tracking-widest uppercase text-sm">
                                    <span className="material-icons text-lg">verified</span>
                                    {t.exclusive}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Divider */}
            <section className="py-20 bg-deep-dark text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                        {t.divider.label}
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white uppercase mb-6">
                        {t.divider.title}
                    </h2>
                    <p className="font-body text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        {t.divider.description}
                    </p>
                </div>
            </section>

            {/* Amenity Cards Grid */}
            <section className="py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {amenityCards.map((card) => (
                            <div
                                key={card.title}
                                className="group bg-white dark:bg-deep-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Card Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/60 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <span className="material-icons text-white text-2xl">
                                                {card.icon}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6">
                                    <h3 className="font-display text-xl font-bold text-deep-dark dark:text-white uppercase mb-3 group-hover:text-primary transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="font-body text-sm text-charcoal-dark dark:text-gray-400 leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white dark:bg-deep-dark">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="font-script text-4xl text-primary block mb-4">
                        {t.cta.experience}
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                        {t.cta.ready}
                    </h2>
                    <p className="font-body text-lg text-charcoal-dark dark:text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
                        {t.cta.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#inquiry"
                            className="inline-block bg-primary text-white font-display tracking-widest uppercase text-sm px-10 py-4 hover:bg-primary/90 transition-colors"
                        >
                            {t.cta.book}
                        </a>
                        <a
                            href="/about"
                            className="inline-block border-2 border-primary text-primary font-display tracking-widest uppercase text-sm px-10 py-4 hover:bg-primary hover:text-white transition-colors"
                        >
                            {t.cta.learn}
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
