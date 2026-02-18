import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mission & Vision | Serenity Luxury Condos – Our Purpose",
    description:
        "Learn about the mission and vision driving Serenity Luxury Condos. We blend modern architecture, sustainability, and world-class amenities to redefine luxury living in Mexico.",
};

export default function MissionVisionPage() {
    return (
        <>
            <Navbar />
            <PageHero
                title="Mission & Vision"
                subtitle="Our Purpose"
                backgroundImage="/assets/photo-gallery/livingroom-1.png"
            />

            {/* Mission Section */}
            <section className="py-24 bg-white dark:bg-deep-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                                What Drives Us
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                                Our Mission
                            </h2>
                            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                <p>
                                    At Serenity Luxury Condos, we exist to redefine what luxury
                                    living means. Not through excess, but through intentional
                                    design that honors both modern sophistication and Mexico&apos;s
                                    most spectacular natural landscapes.
                                </p>
                                <p>
                                    We are dedicated to crafting exclusive residential experiences
                                    where exceptional craftsmanship, forward-thinking architecture,
                                    and thoughtful sustainability converge. Every space we create
                                    is engineered to deliver enduring comfort, understated elegance,
                                    and a lifestyle that consistently exceeds expectations.
                                </p>
                                <p>
                                    Our residents don&apos;t just live in luxury. They live in
                                    harmony with the world around them.
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
                                    Purpose-Driven Design
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
                                Where We&apos;re Headed
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                                Our Vision
                            </h2>
                            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                <p>
                                    Our vision is to become the definitive choice for luxury
                                    condominium living across Mexico&apos;s most sought-after
                                    destinations, setting a new benchmark for residential
                                    developments that exist in true harmony with their surroundings.
                                </p>
                                <p>
                                    We aspire to build communities where innovation meets
                                    environmental stewardship, where world-class service is the
                                    standard, and where every resident experiences the perfect
                                    equilibrium between contemporary living and the timeless beauty
                                    of nature.
                                </p>
                                <p>
                                    Through unwavering commitment to quality, sustainability, and
                                    thoughtful placemaking, we are shaping the future of luxury
                                    real estate, one extraordinary development at a time.
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
