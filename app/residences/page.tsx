import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";

export const metadata: Metadata = {
    title: "Residences | Serenity Luxury Condos – Exclusive Living in the Riviera Maya",
    description:
        "Explore the exclusive residences at Serenity Luxury Condos. Choose from Quetzal, Quetzal Plus, and Jaguar Plus units, each offering contemporary design, premium finishes, and breathtaking surroundings in the Riviera Maya.",
};

const residences = [
    {
        name: "Quetzal",
        tier: "Classic Residence",
        units: 6,
        tagline: "Refined Comfort, Naturally Inspired",
        description:
            "The Quetzal residence brings together spacious, open living with natural elegance. Designed for those who appreciate thoughtful simplicity paired with luxury finishes, every corner of this home feels warm, inviting, and distinctly yours.",
        image: "/assets/photo-gallery/livingroom-1.png",
        icon: "apartment",
        features: [
            { icon: "bed", label: "2 Bedrooms", detail: "Spacious and inviting layouts designed for restful living" },
            { icon: "bathroom", label: "1 Full Bathroom", detail: "Elegant fixtures and premium finishes throughout" },
            { icon: "local_laundry_service", label: "Laundry Room", detail: "In-unit convenience for effortless everyday living" },
            { icon: "weekend", label: "Living Area", detail: "A warm, open space perfect for relaxation and entertaining" },
            { icon: "restaurant", label: "Kitchen & Dining", detail: "Modern and fully equipped for all your culinary needs" },
            { icon: "balcony", label: "Private Balcony", detail: "Take in sweeping views of the lush tropical surroundings" },
        ],
        signature: {
            icon: "water",
            title: "Signature Waterfall Feature",
            description: "A cascading waterfall flows through the center of each unit, bringing the soothing sounds of nature directly into your home.",
        },
    },
    {
        name: "Quetzal Plus",
        tier: "Premium Residence",
        units: 4,
        tagline: "Elevated Living, Unmatched Detail",
        description:
            "The Quetzal Plus takes the beloved Quetzal layout and enhances it with additional space, privacy, and luxury. With a dedicated master suite, extra restrooms, and premium appointments throughout, this residence is designed for those who demand more from their home.",
        image: "/assets/photo-gallery/bedroom-1.jpg",
        icon: "villa",
        features: [
            { icon: "bed", label: "2 Bedrooms", detail: "Thoughtfully designed with generous proportions for total comfort" },
            { icon: "spa", label: "Master En-Suite", detail: "Your own private oasis with a dedicated luxury bathroom" },
            { icon: "bathroom", label: "2 Restrooms", detail: "Extra convenience for residents and guests alike" },
            { icon: "local_laundry_service", label: "Laundry Room", detail: "Ensuring effortless and efficient everyday routines" },
            { icon: "restaurant", label: "Kitchen & Dining", detail: "Designed for entertaining and daily culinary enjoyment" },
            { icon: "weekend", label: "Living Area", detail: "Spacious, stylish, and made for gathering" },
            { icon: "balcony", label: "Private Balcony", detail: "Breathtaking views right at your fingertips" },
        ],
        signature: {
            icon: "water",
            title: "Signature Waterfall Feature",
            description: "A signature indoor waterfall adds a unique and soothing ambiance, creating a one-of-a-kind atmosphere inside your residence.",
        },
    },
    {
        name: "Jaguar Plus",
        tier: "Exclusive Residence",
        units: 3,
        tagline: "The Pinnacle of Serenity Living",
        description:
            "The Jaguar Plus represents the very best that Serenity has to offer. With three private balconies, a personal hot tub, and elegant finishes in every room, this exclusive residence is crafted for those who settle for nothing less than extraordinary.",
        image: "/assets/photo-gallery/pool-3.png",
        icon: "diamond",
        features: [
            { icon: "bed", label: "2 Bedrooms", detail: "Elegantly designed for maximum comfort and privacy" },
            { icon: "bathroom", label: "1.5 Restrooms", detail: "Stylish, practical, and finished to the highest standard" },
            { icon: "balcony", label: "3 Private Balconies", detail: "Unparalleled panoramic views from every angle of your home" },
            { icon: "weekend", label: "Living Area", detail: "A perfect blend of contemporary style and total relaxation" },
            { icon: "restaurant", label: "Kitchen & Dining", detail: "Equipped with premium appliances and designer finishes" },
            { icon: "local_laundry_service", label: "Laundry Room", detail: "Designed for modern convenience and efficiency" },
        ],
        signature: {
            icon: "hot_tub",
            title: "Private Hot Tub",
            description: "Your personal haven for relaxation and luxury. Unwind under the stars in the privacy of your own residence.",
        },
    },
];

export default function ResidencesPage() {
    return (
        <>
            <Navbar />
            <PageHero
                title="Our Residences"
                subtitle="Residences at Serenity Luxury Condos"
                backgroundImage="/assets/photo-gallery/building-slantview.jpg"
            />

            {/* Intro Section */}
            <section className="py-24 bg-white dark:bg-deep-dark">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                        Discover Your Home
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                        Experience Luxury Like Never Before
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-10"></div>
                    <p className="font-body text-lg text-charcoal-dark dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
                        Welcome to Serenity Luxury Condos, where modern design meets nature&apos;s serenity. Our exclusive
                        residences offer a seamless blend of contemporary architecture, high-end finishes, and breathtaking
                        surroundings, all designed to deliver an unparalleled living experience in the heart of the Riviera Maya.
                    </p>
                    <p className="font-body text-lg text-charcoal-dark dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        Whether you&apos;re seeking a tranquil retreat or a smart investment opportunity, our thoughtfully designed
                        residences provide the ideal balance of comfort, luxury, and everyday functionality. Explore our three
                        unique residence types and find your perfect home in paradise.
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
                                    {res.units} Units Available
                                </span>
                                <div className="mt-4 flex items-center justify-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="font-display text-xs tracking-widest uppercase">Explore</span>
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
                                {res.units} Units Available
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
                                    About the {res.name}
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
                                    className="group bg-white dark:bg-deep-dark p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800"
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
                                Crafted for You
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                                Unparalleled Living, Unmatched Comfort
                            </h2>
                            <div className="space-y-6 text-charcoal-dark dark:text-gray-300 leading-relaxed text-lg">
                                <p>
                                    Every Serenity residence is built with premium materials, contemporary aesthetics, and
                                    sustainable design principles, creating a harmonious environment where sophistication
                                    meets everyday comfort. From the moment you step inside, you&apos;ll feel the difference
                                    that intentional craftsmanship makes.
                                </p>
                                <p>
                                    Thoughtfully designed interiors, breathtaking views of the surrounding jungle, and
                                    access to world-class amenities ensure that every moment spent at Serenity is one
                                    of true luxury and tranquility. This is more than a home; it&apos;s the lifestyle
                                    you&apos;ve been searching for.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-background-light dark:bg-background-dark p-8 rounded-xl text-center">
                                <span className="material-icons text-primary text-4xl mb-3 block">verified</span>
                                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-deep-dark dark:text-white mb-1">Premium Materials</h4>
                                <p className="font-body text-xs text-gray-500">Quality you can see and feel</p>
                            </div>
                            <div className="bg-background-light dark:bg-background-dark p-8 rounded-xl text-center">
                                <span className="material-icons text-primary text-4xl mb-3 block">eco</span>
                                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-deep-dark dark:text-white mb-1">Sustainable Design</h4>
                                <p className="font-body text-xs text-gray-500">Built with the earth in mind</p>
                            </div>
                            <div className="bg-background-light dark:bg-background-dark p-8 rounded-xl text-center">
                                <span className="material-icons text-primary text-4xl mb-3 block">landscape</span>
                                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-deep-dark dark:text-white mb-1">Stunning Views</h4>
                                <p className="font-body text-xs text-gray-500">Nature at every turn</p>
                            </div>
                            <div className="bg-background-light dark:bg-background-dark p-8 rounded-xl text-center">
                                <span className="material-icons text-primary text-4xl mb-3 block">auto_awesome</span>
                                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-deep-dark dark:text-white mb-1">Modern Interiors</h4>
                                <p className="font-body text-xs text-gray-500">Contemporary elegance throughout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Your Dream Home Awaits Section */}
            <section className="py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="font-script text-4xl text-primary block mb-6">
                        Your Dream Home Awaits
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                        Live in Serene Opulence
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-10"></div>
                    <p className="font-body text-lg text-charcoal-dark dark:text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
                        Whether you&apos;re searching for a permanent residence, a private vacation retreat, or a
                        high-value investment property, Serenity Luxury Condos offers a rare opportunity to live
                        surrounded by nature&apos;s beauty without sacrificing modern luxury.
                    </p>
                    <p className="font-body text-lg text-charcoal-dark dark:text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
                        Discover your perfect space and become part of an exclusive community in the heart of
                        the Riviera Maya. Your new chapter starts here.
                    </p>
                    <a
                        href="#inquiry"
                        className="inline-flex items-center gap-2 bg-primary text-white font-display tracking-widest uppercase text-sm px-10 py-4 hover:bg-primary/90 transition-colors"
                    >
                        <span className="material-icons text-lg">calendar_month</span>
                        Schedule a Visit Today
                    </a>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-deep-dark text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <span className="font-script text-4xl text-primary block mb-4">
                        Find Your Perfect Residence
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white uppercase mb-8">
                        Ready to Call Serenity Home?
                    </h2>
                    <p className="font-body text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
                        Schedule a private tour to experience the quality and craftsmanship of our residences firsthand.
                        Let us help you discover the home that perfectly fits your lifestyle.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#inquiry"
                            className="inline-block bg-primary text-white font-display tracking-widest uppercase text-sm px-10 py-4 hover:bg-primary/90 transition-colors"
                        >
                            Schedule a Tour
                        </a>
                        <a
                            href="/amenities"
                            className="inline-block border-2 border-primary text-primary font-display tracking-widest uppercase text-sm px-10 py-4 hover:bg-primary hover:text-white transition-colors"
                        >
                            Explore Amenities
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
