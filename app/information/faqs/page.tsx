"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { useState } from "react";
import Link from "next/link";

const faqCategories = [
    {
        category: "General Information",
        icon: "info",
        faqs: [
            {
                question: "Where is Serenity Luxury Condos located?",
                answer: "Serenity Luxury Condos is located in the heart of the Riviera Maya, with properties in Isla Mujeres and Isla Blanca. These prime locations offer breathtaking landscapes, stunning beaches, and a tranquil yet luxurious lifestyle.",
            },
            {
                question: "What makes Serenity Luxury Condos unique?",
                answer: "Serenity offers a blend of modern architecture, luxurious amenities, and sustainable living in some of Mexico's most sought-after locations. Our properties include infinity pools, yoga areas, hot tubs, barbecue patios, and world-class security services.",
            },
            {
                question: "Are the condos available for purchase or rental?",
                answer: "Serenity Luxury Condos offers both purchase and rental options. Whether you're looking for a permanent home, a vacation property, or an investment opportunity, we have options to suit your needs.",
            },
        ],
    },
    {
        category: "Buying & Investment",
        icon: "payments",
        faqs: [
            {
                question: "What are the benefits of investing in Serenity Luxury Condos?",
                answer: "Investing in Serenity properties offers high appreciation value, strong rental income potential, and access to a growing luxury real estate market in the Riviera Maya. Our properties are designed for both comfort and profitability.",
            },
            {
                question: "What financing options are available for buyers?",
                answer: "We provide flexible financing options and legal assistance to ensure a seamless buying process. Contact our sales team to learn more about the financing plans we offer.",
            },
            {
                question: "Can foreigners buy property in Mexico?",
                answer: "Yes! Foreigners can legally own property in Mexico through a bank trust (fideicomiso) or a Mexican corporation. Our team assists international buyers in navigating the purchasing process.",
            },
        ],
    },
    {
        category: "Amenities & Services",
        icon: "spa",
        faqs: [
            {
                question: "What amenities are included in the residences?",
                answer: "Our condos feature community and rooftop infinity pools, sunbathing stations, barbecue areas, hot tubs, yoga spaces, private balconies, 24/7 security, and chauffeur services for ultimate comfort and luxury.",
            },
            {
                question: "Is there on-site property management?",
                answer: "Yes, we offer in-house property management services to handle maintenance, cleaning, and rental management, ensuring a hassle-free experience for homeowners and investors.",
            },
            {
                question: "Do the condos come furnished?",
                answer: "Some units offer fully furnished options, while others allow you to customize the interior design. Contact us for details on available furnishings and design packages.",
            },
        ],
    },
    {
        category: "Rental Information",
        icon: "villa",
        faqs: [
            {
                question: "Can I rent out my condo when I'm not using it?",
                answer: "Absolutely! Many of our owners list their condos on vacation rental platforms like Airbnb or through our property management services to generate passive income.",
            },
            {
                question: "Is there a rental management service available?",
                answer: "Yes, our professional rental management team handles everything from bookings to guest services, ensuring a seamless rental experience.",
            },
        ],
    },
    {
        category: "Security & Safety",
        icon: "security",
        faqs: [
            {
                question: "How secure is the community?",
                answer: "Serenity Luxury Condos offers 24/7 security with video surveillance, controlled access, and professional security personnel to ensure a safe living environment.",
            },
            {
                question: "What natural disaster precautions are in place?",
                answer: "Our properties are built with hurricane-resistant materials and follow strict safety regulations to withstand extreme weather conditions.",
            },
        ],
    },
    {
        category: "Contact & Visits",
        icon: "calendar_today",
        faqs: [
            {
                question: "How can I schedule a visit?",
                answer: "To schedule a private tour, contact our sales team through our website, phone, or email. Virtual tours are also available for international buyers.",
            },
            {
                question: "Who can I contact for more information?",
                answer: "You can reach our team via Phone: +1 209-689-1052 or Email: info@serenityluxurycondos.com. We're happy to assist with any questions you may have!",
            },
        ],
    },
];

function AccordionItem({
    question,
    answer,
    number,
    isOpen,
    onToggle,
}: {
    question: string;
    answer: string;
    number: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div
            className={`border-b border-primary/15 transition-colors duration-300 ${isOpen ? "bg-charcoal-dark/50" : ""}`}
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center gap-4 py-6 px-6 text-left group hover:bg-charcoal-dark/30 transition-colors duration-300"
            >
                <span className="font-display text-sm text-primary/40 font-bold tracking-wider min-w-[28px]">
                    {String(number).padStart(2, "0")}
                </span>
                <span className="font-display text-lg font-bold text-white uppercase tracking-wide flex-1 group-hover:text-primary transition-colors duration-300">
                    {question}
                </span>
                <span
                    className={`material-icons text-primary text-2xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                    expand_more
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="px-6 pb-6 pl-[60px]">
                    <p className="font-body text-gray-400 leading-relaxed text-base">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function FAQsPage() {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

    const toggleItem = (key: string) => {
        setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    let globalNumber = 0;

    return (
        <>
            <Navbar />
            <PageHero
                title="Frequently Asked Questions"
                subtitle="We're Here to Help"
                backgroundImage="/assets/photo-gallery/building-slantview.jpg"
            />

            {/* FAQ Categories */}
            <section className="py-24 bg-deep-dark">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                            Got Questions?
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase mb-6">
                            We Have{" "}
                            <span className="text-primary">Answers</span>
                        </h2>
                        <div className="w-20 h-0.5 bg-primary mx-auto mb-6" />
                        <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto">
                            Everything you need to know about Serenity Luxury
                            Condos, from purchasing and financing to amenities
                            and security.
                        </p>
                    </div>

                    {/* Category Sections */}
                    <div className="space-y-12">
                        {faqCategories.map((cat) => (
                            <div key={cat.category}>
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <span className="material-icons text-primary text-2xl">
                                            {cat.icon}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider">
                                        {cat.category}
                                    </h3>
                                    <div className="h-px flex-1 bg-primary/20" />
                                </div>

                                {/* Accordion items */}
                                <div className="bg-charcoal-dark/30 border border-primary/15">
                                    {cat.faqs.map((faq) => {
                                        globalNumber++;
                                        const key = `${cat.category}-${globalNumber}`;
                                        return (
                                            <AccordionItem
                                                key={key}
                                                question={faq.question}
                                                answer={faq.answer}
                                                number={globalNumber}
                                                isOpen={!!openItems[key]}
                                                onToggle={() =>
                                                    toggleItem(key)
                                                }
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-background-dark">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="font-script text-primary text-4xl md:text-5xl block mb-6">
                        Still Have Questions?
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-8">
                        Contact Us Today
                    </h2>
                    <p className="font-body text-lg text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
                        Let us help you find your dream home at Serenity Luxury
                        Condos. Our team is ready to assist with any questions
                        you may have.
                    </p>

                    {/* Contact Details */}
                    <div className="flex flex-col sm:flex-row gap-8 justify-center mb-10">
                        <a
                            href="tel:+12096891052"
                            className="flex items-center gap-3 justify-center text-gray-300 hover:text-primary transition-colors"
                        >
                            <span className="material-icons text-primary text-2xl">
                                phone
                            </span>
                            <span className="font-body text-lg">
                                +1 209-689-1052
                            </span>
                        </a>
                        <a
                            href="mailto:info@serenityluxurycondos.com"
                            className="flex items-center gap-3 justify-center text-gray-300 hover:text-primary transition-colors"
                        >
                            <span className="material-icons text-primary text-2xl">
                                email
                            </span>
                            <span className="font-body text-lg">
                                info@serenityluxurycondos.com
                            </span>
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/inquiry"
                            className="bg-primary text-white px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all inline-block"
                        >
                            Send Us a Message
                        </Link>
                        <Link
                            href="/residences"
                            className="border-2 border-primary text-primary px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all inline-block"
                        >
                            Explore Residences
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
