import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Serenity Luxury Condos – Riviera Maya Living",
    description:
        "Discover Serenity Luxury Condos, where modern elegance meets the natural splendor of Mexico's Riviera Maya. Explore our exclusive residences in Isla Mujeres and Isla Blanca.",
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <PageHero
                title="About Us"
                subtitle="Discover Serenity"
                backgroundImage="/assets/photo-gallery/building-slantview.jpg"
            />

            {/* Who We Are — mirrored from homepage */}
            <section className="py-24 bg-white dark:bg-deep-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                                Our Philosophy
                            </span>
                            <h2 className="font-display text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                                Who We Are
                            </h2>
                            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                <p>
                                    Welcome to{" "}
                                    <span className="text-primary font-semibold">
                                        Serenity Luxury Condos
                                    </span>
                                    , where we redefine opulent living in the heart of
                                    Mexico&apos;s most coveted destinations. With a commitment
                                    to excellence, we specialize in crafting luxurious
                                    condominiums that blend modern sophistication with the
                                    enchanting beauty of Quintana Roo, Mexico.
                                </p>
                                <p>
                                    Our project offers an exclusive blend of modern elegance
                                    and natural serenity. Each residence is designed to be a
                                    private sanctuary, harmonizing with the surrounding lush
                                    tropical landscape.
                                </p>
                            </div>
                            <div className="mt-10 grid grid-cols-3 gap-8">
                                <div>
                                    <span className="block font-display text-4xl font-bold text-primary">
                                        14
                                    </span>
                                    <span className="text-xs uppercase tracking-widest text-gray-500">
                                        Premium Units
                                    </span>
                                </div>
                                <div>
                                    <span className="block font-display text-4xl font-bold text-primary">
                                        10
                                    </span>
                                    <span className="text-xs uppercase tracking-widest text-gray-500">
                                        Amenities
                                    </span>
                                </div>
                                <div>
                                    <span className="block font-display text-4xl font-bold text-primary">
                                        2026
                                    </span>
                                    <span className="text-xs uppercase tracking-widest text-gray-500">
                                        Completion
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
                                    Timeless Design
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
                                Where Luxury Meets Nature
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                                Redefining Luxury in the Riviera Maya
                            </h2>
                            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                <p>
                                    Serenity Luxury Condos brings together the finest in contemporary
                                    design with the breathtaking natural beauty of Mexico&apos;s
                                    Riviera Maya. Thoughtfully positioned in the coveted destinations
                                    of Isla Mujeres and Isla Blanca, our residences are crafted for
                                    those who refuse to compromise between sophistication and serenity.
                                </p>
                                <p>
                                    Every detail, from striking architectural lines and premium
                                    finishes to eco-forward engineering, is designed to elevate your
                                    everyday experience. Whether you envision a full-time residence, a
                                    private vacation retreat, or a high-return investment property,
                                    Serenity delivers an unrivaled standard of comfort, privacy, and
                                    refined living.
                                </p>
                                <p>
                                    Step into a world where the lush Mayan jungle is your backyard,
                                    world-class amenities are at your doorstep, and every sunrise
                                    reminds you that luxury was always meant to feel this natural.
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
