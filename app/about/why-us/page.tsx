import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Why Choose Us | Serenity Luxury Condos – Your Ideal Investment",
    description:
        "Discover why Serenity Luxury Condos is the premier choice for luxury living and smart real estate investment in Mexico's Riviera Maya. Prime locations, world-class amenities, and unmatched quality.",
};

const features = [
    {
        icon: "location_on",
        title: "Prime Locations",
        description:
            "Strategically situated in Isla Mujeres and Tulum, our properties place you steps from pristine Caribbean beaches, vibrant cultural destinations, and essential lifestyle amenities.",
    },
    {
        icon: "architecture",
        title: "Architectural Excellence",
        description:
            "Every Serenity residence is a masterwork of modern design, blending clean contemporary aesthetics with sustainable materials to create spaces that exist in perfect harmony with nature.",
    },
    {
        icon: "pool",
        title: "World-Class Amenities",
        description:
            "From rooftop infinity pools and private lounges to state-of-the-art fitness centers and dedicated yoga spaces, our communities are purpose-built for relaxation, wellness, and refined living.",
    },
    {
        icon: "security",
        title: "Uncompromised Security & Privacy",
        description:
            "Gated communities with 24/7 professional security provide absolute peace of mind, ensuring a safe, serene, and private environment for every resident.",
    },
    {
        icon: "eco",
        title: "Sustainability & Eco-Conscious Living",
        description:
            "Our developments integrate lush green spaces, energy-efficient systems, and eco-friendly building practices, promoting responsible development that respects and preserves the natural landscape.",
    },
    {
        icon: "trending_up",
        title: "Exceptional Investment Potential",
        description:
            "With prime positioning in Mexico's fastest-growing luxury real estate market, a Serenity property delivers strong rental yields, consistent appreciation, and long-term value.",
    },
];

export default function WhyUsPage() {
    return (
        <>
            <Navbar />
            <PageHero
                title="Why Choose Us"
                subtitle="The Serenity Difference"
                backgroundImage="/assets/photo-gallery/pool-3.png"
            />

            {/* Intro */}
            <section className="py-24 bg-white dark:bg-deep-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                                Why Serenity
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                                The Epitome of Refined Living
                            </h2>
                            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                <p>
                                    Serenity Luxury Condos stands apart as the gold standard in
                                    Caribbean luxury, delivering an unrivaled fusion of comfort,
                                    elegance, and convenience that discerning buyers and investors
                                    have come to expect.
                                </p>
                                <p>
                                    Here&apos;s exactly why we are the preferred choice for those
                                    who demand nothing less than extraordinary.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl relative">
                                <Image
                                    src="/assets/photo-gallery/pool-3.png"
                                    alt="Serenity Luxury Condos infinity pool at sunset"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Feature Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-background-light dark:bg-charcoal-dark p-8 border-t-4 border-primary shadow-lg hover:shadow-xl transition-shadow group"
                            >
                                <span className="material-icons text-primary text-4xl mb-6 block group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </span>
                                <h3 className="font-display text-xl font-bold uppercase mb-4 text-deep-dark dark:text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
