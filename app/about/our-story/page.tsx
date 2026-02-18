import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Story | Serenity Luxury Condos – From Vision to Reality",
    description:
        "Explore the story behind Serenity Luxury Condos, born from a passion for merging modern luxury with the natural allure of Mexico's Riviera Maya. Discover our journey of innovation and excellence.",
};

export default function OurStoryPage() {
    return (
        <>
            <Navbar />
            <PageHero
                title="Our Story"
                subtitle="The Journey"
                backgroundImage="/assets/photo-gallery/building-front.jpg"
            />

            {/* Origin Story */}
            <section className="py-24 bg-white dark:bg-deep-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                                How It All Began
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                                A Vision Born in Paradise
                            </h2>
                            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                <p>
                                    Serenity Luxury Condos was born from a singular vision: to
                                    create extraordinary living spaces where contemporary luxury
                                    and the raw, captivating beauty of Mexico&apos;s Riviera Maya
                                    exist as one.
                                </p>
                                <p>
                                    What started as a passion-fueled concept quickly matured into
                                    a distinguished real estate brand, one committed to developing
                                    exclusive residential properties in the region&apos;s most
                                    coveted locations, including the pristine shores of Isla Mujeres
                                    and the untouched landscapes of Isla Blanca.
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
                                    Where It Began
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
                                Built With Purpose
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                                Crafting Community
                            </h2>
                            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                <p>
                                    Fueled by a deep reverence for architecture, design, and
                                    sustainable development, we&apos;ve devoted ourselves to
                                    building communities that seamlessly blend serenity with
                                    sophistication.
                                </p>
                                <p>
                                    Every project in our portfolio reflects an uncompromising
                                    commitment to excellence, from thoughtfully designed living
                                    spaces and world-class amenities to an emphasis on eco-conscious
                                    practices that honor the environment we call home.
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
                        The Road Ahead
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                        Continuing the Legacy
                    </h2>
                    <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg max-w-3xl mx-auto">
                        <p>
                            Today, Serenity Luxury Condos continues to raise the bar for
                            upscale living in Mexico, welcoming discerning homeowners and
                            visionary investors who seek a lifestyle as refined as it is
                            inspiring.
                        </p>
                        <p>
                            Our journey is defined by relentless innovation, unwavering
                            dedication, and an enduring pursuit of perfection, one stunning
                            development at a time.
                        </p>
                    </div>
                    <div className="w-24 h-1 bg-primary mx-auto mt-12"></div>
                </div>
            </section>

            <Footer />
        </>
    );
}
