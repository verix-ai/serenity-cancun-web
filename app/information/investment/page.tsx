import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Investment Opportunities | Serenity Luxury Condos – Riviera Maya Real Estate",
    description:
        "Discover lucrative investment opportunities at Serenity Luxury Condos in the Riviera Maya. Strong rental income, appreciating property values, and premium amenities in Isla Mujeres and Isla Blanca.",
};

const investmentReasons = [
    {
        icon: "location_on",
        number: "01",
        title: "Prime Locations in High-Demand Markets",
        description:
            "Strategically positioned in Isla Mujeres and Isla Blanca, two of Mexico's fastest-growing coastal destinations. With pristine beaches, rich cultural heritage, and a flourishing hospitality sector, these locations attract a steady stream of visitors and prospective renters throughout the year.",
    },
    {
        icon: "payments",
        number: "02",
        title: "Strong Rental Income Potential",
        description:
            "The Riviera Maya welcomes millions of travelers annually, making it one of Mexico's premier vacation markets. High demand for short-term Airbnb rentals and long-term leases positions Serenity Luxury Condos as an outstanding vehicle for generating consistent passive income.",
    },
    {
        icon: "trending_up",
        number: "03",
        title: "Appreciating Property Values",
        description:
            "Mexico's coastal real estate market continues to deliver steady appreciation, particularly in sought-after corridors like Isla Blanca and Isla Mujeres. Investing in Serenity means securing a property with long-term capital growth and compelling resale potential.",
    },
    {
        icon: "apartment",
        number: "04",
        title: "Luxury Features and World-Class Amenities",
        description:
            "Every Serenity residence is designed for comfort, elegance, and exclusivity. From infinity pools and private terraces to wellness spaces and concierge services, these premium features elevate the living experience while increasing rental appeal and resale value.",
    },
    {
        icon: "support_agent",
        number: "05",
        title: "Hassle-Free Property Management",
        description:
            "Our in-house property management team handles everything from guest check-ins and maintenance to housekeeping and concierge coordination. Enjoy effortless rental income without the day-to-day responsibilities of property ownership.",
    },
    {
        icon: "tune",
        number: "06",
        title: "Flexible Ownership Options",
        description:
            "Whether you envision a vacation retreat, a rental investment, or a permanent residence, Serenity offers ownership plans tailored to your goals. Financing options and legal assistance are available to make the entire process seamless and stress-free.",
    },
];

const amenityHighlights = [
    { icon: "pool", label: "Infinity & Community Pools" },
    { icon: "balcony", label: "Private Balconies & Terraces" },
    { icon: "self_improvement", label: "Yoga & Wellness Spaces" },
    { icon: "security", label: "24/7 Security & Concierge" },
    { icon: "outdoor_grill", label: "Barbecue & Social Areas" },
    { icon: "directions_car", label: "Transportation & Chauffeur" },
];

export default function InvestmentPage() {
    return (
        <>
            <Navbar />
            <PageHero
                title="Investment Opportunities"
                subtitle="Your Future Starts Here"
                backgroundImage="/assets/photo-gallery/building-slantview.jpg"
            />

            {/* Intro Section */}
            <section className="py-24 bg-deep-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                                A Smart Investment in Paradise
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase mb-8">
                                More Than a Property,{" "}
                                <span className="text-primary">A Legacy</span>
                            </h2>
                            <p className="font-body text-lg text-gray-300 leading-relaxed mb-6">
                                Investing in Serenity Luxury Condos goes beyond acquiring real estate. It means securing a piece of paradise in one of the world&apos;s most coveted destinations. Nestled in the heart of the Riviera Maya near Isla Mujeres and Isla Blanca, Serenity delivers both an extraordinary lifestyle and a compelling financial opportunity in Mexico&apos;s thriving real estate market.
                            </p>
                            <p className="font-body text-lg text-gray-400 leading-relaxed">
                                With rising tourism, appreciating coastal property values, and premium amenities that set your investment apart, Serenity represents the intersection of luxury living and smart financial planning.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-charcoal-dark p-10">
                                <span className="font-script text-primary text-3xl block mb-6">Why Serenity?</span>
                                <div className="space-y-4">
                                    {[
                                        "Prime coastal locations with year-round demand",
                                        "High rental yields from vacation and long-term tenants",
                                        "Consistent property value appreciation",
                                        "Turnkey property management included",
                                        "Flexible ownership and financing options",
                                    ].map((item, i) => (
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
                            Why Invest
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase mb-6">
                            Six Reasons to Invest in{" "}
                            <span className="text-primary">Serenity</span>
                        </h2>
                        <div className="w-20 h-0.5 bg-primary mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {investmentReasons.map((reason) => (
                            <div
                                key={reason.number}
                                className="bg-charcoal-dark p-8 hover:bg-charcoal-dark/80 transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="material-icons text-primary text-3xl group-hover:scale-110 transition-transform duration-300">
                                        {reason.icon}
                                    </span>
                                    <span className="font-display text-5xl font-bold text-white/10 transition-colors">
                                        {reason.number}
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
                            Premium Amenities
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-6">
                            Features That Elevate Your Investment
                        </h2>
                        <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto">
                            Every amenity at Serenity is designed to enhance both your living experience and the rental appeal of your property.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {amenityHighlights.map((amenity, i) => (
                            <div
                                key={i}
                                className="bg-charcoal-dark p-6 text-center hover:bg-charcoal-dark/80 transition-all duration-300 group"
                            >
                                <span className="material-icons text-primary text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                                    {amenity.icon}
                                </span>
                                <p className="font-body text-sm text-gray-300 font-semibold uppercase tracking-wider">
                                    {amenity.label}
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
                        Your Gateway to Exclusive Living
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-8">
                        Smart Investment, Extraordinary Returns
                    </h2>
                    <p className="font-body text-lg text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
                        Serenity Luxury Condos presents a rare opportunity to invest in a high-end, sustainable, and income-generating property in the heart of Mexico&apos;s most vibrant coastal destinations. With stunning architectural design, prime beachside locations, and year-round rental demand, now is the time to secure your dream investment.
                    </p>
                    <p className="font-body text-xl text-primary font-semibold mb-10">
                        Don&apos;t just invest. Experience luxury, tranquility, and financial growth with Serenity.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#contact"
                            className="bg-primary text-white px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all inline-block"
                        >
                            Explore Available Units
                        </Link>
                        <Link
                            href="#contact"
                            className="border-2 border-primary text-primary px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all inline-block"
                        >
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
