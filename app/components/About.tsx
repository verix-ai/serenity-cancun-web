"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
    const { translations } = useLanguage();
    const t = translations.home.about;

    return (
        <section id="about" className="py-24 bg-white dark:bg-deep-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                            {t.label}
                        </span>
                        <h2 className="font-display text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                            {t.title}
                        </h2>
                        <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            <p>
                                {t.p1Start}
                                <span className="text-primary font-semibold">
                                    {t.brand}
                                </span>
                                {t.p1End}
                            </p>
                            <p>
                                {t.p2}
                            </p>
                        </div>
                        <div className="mt-10 grid grid-cols-3 gap-8">
                            <div>
                                <span className="block font-display text-4xl font-bold text-primary">
                                    14
                                </span>
                                <span className="text-xs uppercase tracking-widest text-gray-500">
                                    {t.units}
                                </span>
                            </div>
                            <div>
                                <span className="block font-display text-4xl font-bold text-primary">
                                    10
                                </span>
                                <span className="text-xs uppercase tracking-widest text-gray-500">
                                    {t.amenities}
                                </span>
                            </div>
                            <div>
                                <span className="block font-display text-4xl font-bold text-primary">
                                    2026
                                </span>
                                <span className="text-xs uppercase tracking-widest text-gray-500">
                                    {t.completion}
                                </span>
                            </div>
                        </div>
                        <div className="mt-10">
                            <Link
                                href="/about"
                                className="bg-primary text-white px-8 py-4 font-display text-xl uppercase tracking-widest hover:translate-y-[-2px] transition-transform inline-block"
                            >
                                {t.moreAbout}
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden shadow-2xl relative">
                            <Image
                                src="/assets/livingroom.png"
                                alt="Condo Design"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 -left-8 bg-primary p-8 hidden md:block">
                            <p className="font-script text-white text-3xl">{t.timeless}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
