"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

export default function ResidencesPage() {
    const { translations } = useLanguage();
    const t = translations.residences;
    const tf = t.features; // Feature labels

    const residences = [
        {
            ...t.list[0], // Quetzal
            units: 6,
            image: "/assets/photo-gallery/livingroom-1.png",
            icon: "apartment",
            features: [
                { icon: "bed", label: tf.bedrooms, detail: t.list[0].features[0].detail },
                { icon: "bathroom", label: tf.bathroom, detail: t.list[0].features[1].detail },
                { icon: "local_laundry_service", label: tf.laundry, detail: t.list[0].features[2].detail },
                { icon: "weekend", label: tf.living, detail: t.list[0].features[3].detail },
                { icon: "restaurant", label: tf.kitchen, detail: t.list[0].features[4].detail },
                { icon: "balcony", label: tf.balcony, detail: t.list[0].features[5].detail },
            ],
            signature: {
                icon: "water",
                title: t.list[0].signatureTitle,
                description: t.list[0].signatureDesc,
            },
        },
        {
            ...t.list[1], // Quetzal Plus
            units: 3,
            image: "/assets/photo-gallery/bedroom-1.jpg",
            icon: "villa",
            features: [
                { icon: "bed", label: tf.bedrooms, detail: t.list[1].features[0].detail },
                { icon: "spa", label: tf.masterSuite, detail: t.list[1].features[1].detail },
                { icon: "bathroom", label: tf.restrooms, detail: t.list[1].features[2].detail },
                { icon: "local_laundry_service", label: tf.laundry, detail: t.list[1].features[3].detail },
                { icon: "restaurant", label: tf.kitchen, detail: t.list[1].features[4].detail },
                { icon: "weekend", label: tf.living, detail: t.list[1].features[5].detail },
                { icon: "balcony", label: tf.balcony, detail: t.list[1].features[6].detail },
            ],
            signature: {
                icon: "water",
                title: t.list[1].signatureTitle,
                description: t.list[1].signatureDesc,
            },
        },
        {
            ...t.list[2], // Jaguar Plus
            units: 3,
            image: "/assets/photo-gallery/bedroom 2.jpg",
            icon: "diamond",
            features: [
                { icon: "bed", label: tf.bedrooms, detail: t.list[2].features[0].detail },
                { icon: "bathroom", label: "1.5 " + tf.restrooms, detail: t.list[2].features[1].detail }, // "1.5 Restrooms"
                { icon: "balcony", label: "3 " + tf.balcony, detail: t.list[2].features[2].detail }, // "3 Private Balconies" - slight approximation on pluralization for spanish but acceptable
                { icon: "weekend", label: tf.living, detail: t.list[2].features[3].detail },
                { icon: "restaurant", label: tf.kitchen, detail: t.list[2].features[4].detail },
                { icon: "local_laundry_service", label: tf.laundry, detail: t.list[2].features[5].detail },
            ],
            signature: {
                icon: "hot_tub",
                title: t.list[2].signatureTitle,
                description: t.list[2].signatureDesc,
            },
        },
    ];

    return (
        <>
            <Navbar />
            <PageHero
                title={t.hero.title}
                subtitle={t.hero.subtitle}
                backgroundImage="/assets/photo-gallery/building-slantview.jpg"
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
                    <p className="font-body text-lg text-charcoal-dark dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
                        {t.intro.p1}
                    </p>
                    <p className="font-body text-lg text-charcoal-dark dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        {t.intro.p2}
                    </p>
                </div>
            </section>

            {/* Residence Quick Overview */}
            <section className="py-16 bg-deep-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        {residences.map((res) => (
                            <a
                                key={res.name}
                                href={`#${res.name.toLowerCase().replace(/\s+/g, "-")}`}
                                className="group relative bg-charcoal-dark p-8 text-center hover:bg-charcoal-dark/80 transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                    <span className="material-icons text-primary text-3xl">
                                        {res.icon}
                                    </span>
                                </div>
                                <h3 className="font-display text-2xl font-bold text-white uppercase mb-1">
                                    {res.name}
                                </h3>
                                <span className="text-primary font-display tracking-[0.2em] uppercase text-xs block mb-3">
                                    {res.tier}
                                </span>
                                <span className="text-gray-400 font-body text-sm">
                                    {res.units} {t.unitsAvailable}
                                </span>
                                <div className="mt-4 flex items-center justify-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="font-display text-xs tracking-widest uppercase">{t.explore}</span>
                                    <span className="material-icons text-sm">arrow_downward</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Individual Residence Showcases */}
            {residences.map((res, index) => (
                <section
                    key={res.name}
                    id={res.name.toLowerCase().replace(/\s+/g, "-")}
                    className={`py-24 ${index % 2 === 0
                        ? "bg-background-light dark:bg-background-dark"
                        : "bg-white dark:bg-deep-dark"
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-6">
                        {/* Residence Header */}
                        <div className="text-center mb-16">
                            <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-2 block">
                                {res.tier}
                            </span>
                            <h2 className="font-display text-4xl md:text-6xl font-bold text-deep-dark dark:text-white uppercase mb-3">
                                {res.name}
                            </h2>
                            <span className="inline-block bg-primary/10 text-primary font-display tracking-widest uppercase text-xs px-4 py-2 mb-6">
                                {res.units} {t.unitsAvailable}
                            </span>
                            <p className="font-script text-3xl text-primary mt-2">
                                {res.tagline}
                            </p>
                        </div>

                        {/* Image + Description */}
                        <div className={`grid md:grid-cols-2 gap-16 items-center mb-20 ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                            }`}>
                            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src={res.image}
                                    alt={`${res.name} residence interior`}
                                    width={800}
                                    height={600}
                                    className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/50 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                                            <span className="material-icons text-white text-2xl">
                                                {res.icon}
                                            </span>
                                        </div>
                                        <span className="font-display text-white text-lg font-bold uppercase tracking-wider">
                                            {res.name}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <span className="material-icons text-primary text-3xl">
                                            {res.icon}
                                        </span>
                                    </div>
                                    <div className="h-px flex-1 bg-primary/20"></div>
                                </div>
                                <h3 className="font-display text-3xl md:text-4xl font-bold text-deep-dark dark:text-white uppercase mb-6">
                                    {t.aboutPrefix} {res.name}
                                </h3>
                                <p className="font-body text-lg text-charcoal-dark dark:text-gray-300 leading-relaxed mb-8">
                                    {res.description}
                                </p>

                                {/* Signature Feature Callout */}
                                <div className="bg-deep-dark dark:bg-charcoal-dark p-6 rounded-xl">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="material-icons text-primary text-2xl">
                                            {res.signature.icon}
                                        </span>
                                        <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                                            {res.signature.title}
                                        </h4>
                                    </div>
                                    <p className="font-body text-sm text-gray-400 leading-relaxed">
                                        {res.signature.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {res.features.map((feature) => (
                                <div
                                    key={feature.label}
                                    className="group bg-white dark:bg-deep-dark p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-primary/30"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                            <span className="material-icons text-primary text-xl">
                                                {feature.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-display text-base font-bold text-deep-dark dark:text-white uppercase mb-1 group-hover:text-primary transition-colors">
                                                {feature.label}
                                            </h4>
                                            <p className="font-body text-sm text-charcoal-dark dark:text-gray-400 leading-relaxed">
                                                {feature.detail}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Unparalleled Living Section */}
            <section className="py-24 bg-white dark:bg-deep-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                                {t.unparalleled.label}
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                                {t.unparalleled.title}
                            </h2>
                            <div className="space-y-6 text-charcoal-dark dark:text-gray-300 leading-relaxed text-lg">
                                <p>
                                    {t.unparalleled.p1}
                                </p>
                                <p>
                                    {t.unparalleled.p2}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-background-light dark:bg-background-dark p-8 rounded-xl text-center">
                                <span className="material-icons text-primary text-4xl mb-3 block">verified</span>
                                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-deep-dark dark:text-white mb-1">{t.unparalleled.highlight1}</h4>
                                <p className="font-body text-xs text-gray-500">{t.unparalleled.highlight1Desc}</p>
                            </div>
                            <div className="bg-background-light dark:bg-background-dark p-8 rounded-xl text-center">
                                <span className="material-icons text-primary text-4xl mb-3 block">eco</span>
                                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-deep-dark dark:text-white mb-1">{t.unparalleled.highlight2}</h4>
                                <p className="font-body text-xs text-gray-500">{t.unparalleled.highlight2Desc}</p>
                            </div>
                            <div className="bg-background-light dark:bg-background-dark p-8 rounded-xl text-center">
                                <span className="material-icons text-primary text-4xl mb-3 block">landscape</span>
                                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-deep-dark dark:text-white mb-1">{t.unparalleled.highlight3}</h4>
                                <p className="font-body text-xs text-gray-500">{t.unparalleled.highlight3Desc}</p>
                            </div>
                            <div className="bg-background-light dark:bg-background-dark p-8 rounded-xl text-center">
                                <span className="material-icons text-primary text-4xl mb-3 block">auto_awesome</span>
                                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-deep-dark dark:text-white mb-1">{t.unparalleled.highlight4}</h4>
                                <p className="font-body text-xs text-gray-500">{t.unparalleled.highlight4Desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Your Dream Home Awaits Section */}
            <section className="py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="font-script text-4xl text-primary block mb-6">
                        {t.dreamHome.subtitle}
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                        {t.dreamHome.title}
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-10"></div>
                    <p className="font-body text-lg text-charcoal-dark dark:text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
                        {t.dreamHome.p1}
                    </p>
                    <p className="font-body text-lg text-charcoal-dark dark:text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
                        {t.dreamHome.p2}
                    </p>
                    <a
                        href="#inquiry"
                        className="inline-flex items-center gap-2 bg-primary text-white font-display tracking-widest uppercase text-sm px-10 py-4 hover:bg-primary/90 transition-colors"
                    >
                        <span className="material-icons text-lg">calendar_month</span>
                        {t.dreamHome.schedule}
                    </a>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-deep-dark text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <span className="font-script text-4xl text-primary block mb-4">
                        {t.cta.subtitle}
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white uppercase mb-8">
                        {t.cta.title}
                    </h2>
                    <p className="font-body text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
                        {t.cta.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#inquiry"
                            className="inline-block bg-primary text-white font-display tracking-widest uppercase text-sm px-10 py-4 hover:bg-primary/90 transition-colors"
                        >
                            {t.cta.scheduleTour}
                        </a>
                        <a
                            href="/amenities"
                            className="inline-block border-2 border-primary text-primary font-display tracking-widest uppercase text-sm px-10 py-4 hover:bg-primary hover:text-white transition-colors"
                        >
                            {t.cta.exploreAmenities}
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
