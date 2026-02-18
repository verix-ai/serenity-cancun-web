import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";

export const metadata: Metadata = {
    title: "Amenities | Serenity Luxury Condos – Premium Living in the Riviera Maya",
    description:
        "Explore the exclusive amenities at Serenity Luxury Condos, from beach club access and VIP dining to resort-style pools, barbecue patios, and more. Discover the lifestyle you deserve.",
};

const featuredAmenities = [
    {
        title: "Exclusive Beach Club Access",
        description:
            "Step outside your door and into paradise. As a Serenity resident, you enjoy privileged access to a private beach club on the Caribbean coast, complete with cabanas, oceanfront lounging, and signature cocktails steps from the turquoise sea.",
        image: "/assets/beach-club1.jpg",
        icon: "beach_access",
    },
    {
        title: "VIP Dining at 16+ Restaurants",
        description:
            "Savor the best of the Riviera Maya with exclusive VIP access to over 16 partner restaurants. From authentic Mexican cuisine to world-class international fare, every meal becomes an unforgettable experience, with priority seating and curated dining privileges.",
        image: "/assets/vip-food1.jpg",
        icon: "restaurant",
    },
];

const amenityCards = [
    {
        title: "Resort-Style Community Pool",
        description:
            "Dive into relaxation at our stunning resort-style pool, a lush, open-air retreat surrounded by tropical gardens. Whether you're swimming laps or lounging poolside with a cold drink, this is where everyday living feels like vacation.",
        image: "/assets/photo-gallery/pool-3.png",
        icon: "pool",
    },
    {
        title: "Sun Terrace & Lounge Deck",
        description:
            "Soak up the warm Mexican sun from our beautifully appointed sun terrace. Designed with premium loungers and shaded nooks, it's the perfect place to unwind, read, or simply bask in the golden Caribbean light.",
        image: "/assets/photo-gallery/birdeye-pool.png",
        icon: "wb_sunny",
    },
    {
        title: "Gourmet Barbecue & Patio",
        description:
            "Host unforgettable evenings at our fully equipped barbecue station and open-air patio. With built-in grills, generous seating, and ambient lighting, it's the ideal setting for intimate dinners or lively gatherings with friends and family.",
        image: "/assets/bbq.png",
        icon: "outdoor_grill",
    },
    {
        title: "Private Resident Parking",
        description:
            "Enjoy hassle-free access with a secure, gated 6-car parking lot reserved exclusively for Serenity residents. Designed for both convenience and peace of mind, your vehicle is always safe and accessible.",
        image: "/assets/photo-gallery/building-front.jpg",
        icon: "directions_car",
    },
    {
        title: "On-Site Guest Restrooms",
        description:
            "Thoughtfully placed communal restrooms on the ground floor ensure comfort and convenience for residents and guests alike, whether you're coming from the pool, the patio, or an afternoon in the sun.",
        image: "/assets/photo-gallery/livingroom-1.png",
        icon: "spa",
    },
    {
        title: "Yoga & Wellness Area",
        description:
            "Center your mind and body in our dedicated open-air yoga space. Surrounded by lush greenery and the sounds of nature, it's the perfect sanctuary for morning flows, meditation, and total rejuvenation.",
        image: "/assets/photo-gallery/birdeye-pool.png",
        icon: "self_improvement",
    },
    {
        title: "Hot Tub & Hydrotherapy",
        description:
            "Melt away the day in our luxurious hot tub, the perfect complement to the pool. Whether under the stars or after a workout, the warm, bubbling waters offer deep relaxation and therapeutic comfort.",
        image: "/assets/photo-gallery/pool-3.png",
        icon: "hot_tub",
    },
    {
        title: "Lush Tropical Grounds",
        description:
            "Wander through meticulously landscaped gardens and pathways that weave through native tropical flora. Every corner of Serenity is designed to immerse you in the natural beauty of the Riviera Maya.",
        image: "/assets/photo-gallery/building-slantview.jpg",
        icon: "park",
    },
];

export default function AmenitiesPage() {
    return (
        <>
            <Navbar />
            <PageHero
                title="Amenities"
                subtitle="The Serenity Lifestyle"
                backgroundImage="/assets/photo-gallery/birdeye-pool.png"
            />

            {/* Intro Section */}
            <section className="py-24 bg-white dark:bg-deep-dark">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                        Elevated Living
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                        Where Luxury Meets Lifestyle
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-10"></div>
                    <p className="font-body text-lg text-charcoal-dark dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        At Serenity Luxury Condos, true luxury is measured by the quality of life you experience every single day.
                        Our thoughtfully curated amenities are designed to deliver comfort, relaxation, and an unparalleled
                        Caribbean lifestyle, whether you crave tranquility, entertainment, or total rejuvenation.
                        Every space has been crafted with intention, so you can live the life you've always envisioned.
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
                                    Exclusive to Serenity Residents
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
                        First-Floor Living
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white uppercase mb-6">
                        Amenities at Your Doorstep
                    </h2>
                    <p className="font-body text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        Our ground-level amenities create the perfect balance of leisure and convenience,
                        creating a welcoming atmosphere where resort-style comfort meets everyday living.
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
                        Experience It Firsthand
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                        Ready to Live the Serenity Lifestyle?
                    </h2>
                    <p className="font-body text-lg text-charcoal-dark dark:text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
                        Schedule a private tour today and experience our world-class amenities in person.
                        Discover why Serenity Luxury Condos is the premier residential destination in Mexico's Riviera Maya.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#inquiry"
                            className="inline-block bg-primary text-white font-display tracking-widest uppercase text-sm px-10 py-4 hover:bg-primary/90 transition-colors"
                        >
                            Book a Tour
                        </a>
                        <a
                            href="/about"
                            className="inline-block border-2 border-primary text-primary font-display tracking-widest uppercase text-sm px-10 py-4 hover:bg-primary hover:text-white transition-colors"
                        >
                            Learn More About Us
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
