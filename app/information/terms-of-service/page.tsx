import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Serenity Luxury Condos",
    description:
        "Read the terms of service for Serenity Luxury Condos. Understand the conditions governing your use of our website and services.",
};

const tosSections = [
    {
        title: "Acceptance of Terms",
        icon: "handshake",
        content: [
            "By accessing or using the Serenity Luxury Condos website, operated by Underworld Enterprises LLC (\"Company,\" \"we,\" \"us,\" or \"our\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, you must not access or use the website or our services.",
            "We reserve the right to modify these Terms at any time. Your continued use of the website following any changes constitutes your acceptance of the revised Terms.",
        ],
    },
    {
        title: "Description of Services",
        icon: "home_work",
        content: [
            "Serenity Luxury Condos provides information about luxury condominium properties located in the Riviera Maya, Mexico. Our website offers property listings, investment information, amenity details, virtual tours, and the ability to submit inquiries and schedule property tours.",
            "The information presented on our website is for general informational purposes only and does not constitute an offer to sell, a solicitation of an offer to buy, or a recommendation of any property or investment.",
        ],
    },
    {
        title: "User Responsibilities",
        icon: "person",
        content: [
            "When using our website and services, you agree to:",
        ],
        list: [
            "Provide accurate and complete information when submitting inquiries or forms",
            "Use the website only for lawful purposes and in accordance with these Terms",
            "Not engage in any activity that could disable, overburden, or impair the website",
            "Not attempt to gain unauthorized access to any part of the website or its systems",
            "Not use the website to transmit any harmful, fraudulent, or deceptive content",
            "Not reproduce, distribute, or modify any content from the website without our prior written consent",
        ],
    },
    {
        title: "Intellectual Property",
        icon: "copyright",
        content: [
            "All content on the Serenity Luxury Condos website — including text, graphics, logos, images, photographs, videos, designs, and software — is the property of Underworld Enterprises LLC or its licensors and is protected by applicable intellectual property laws.",
            "You may not copy, reproduce, distribute, transmit, display, sell, license, or otherwise exploit any content from this website for any commercial purpose without our express written permission.",
        ],
    },
    {
        title: "Property Listings & Availability",
        icon: "apartment",
        content: [
            "While we strive to provide accurate and up-to-date information regarding property listings, pricing, availability, and features, we do not warrant that such information is complete, accurate, or current at all times.",
        ],
        list: [
            "All property prices, floor plans, renderings, and specifications are subject to change without notice",
            "Availability of specific units is not guaranteed until a formal purchase agreement is executed",
            "Photographs and renderings may not represent the exact appearance of the final product",
            "Amenities and features described are planned or proposed and may be modified during development",
        ],
        footer:
            "Any purchase or investment decision should be based on your own independent due diligence and not solely on the information provided on this website.",
    },
    {
        title: "Financial Terms & Transactions",
        icon: "account_balance",
        content: [
            "All property purchases, reservations, and financial transactions are governed by separate legal agreements executed between the buyer and the Company. These Terms of Service do not constitute or replace any purchase agreement, reservation contract, or investment documentation.",
        ],
        list: [
            "Pricing displayed on the website is indicative and may vary based on unit selection, floor level, view, and current market conditions",
            "All transactions are subject to applicable Mexican real estate laws and regulations",
            "Payment terms, schedules, and methods will be detailed in the formal purchase agreement",
            "Currency conversions are for reference only and may not reflect the actual exchange rate at the time of transaction",
        ],
    },
    {
        title: "Limitation of Liability",
        icon: "gavel",
        content: [
            "To the fullest extent permitted by applicable law, Underworld Enterprises LLC and its officers, directors, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the website or services.",
            "We do not warrant that the website will be available at all times, uninterrupted, secure, or free of errors. We are not responsible for any loss of data, revenue, or profits arising from your use of the website.",
        ],
    },
    {
        title: "Indemnification",
        icon: "shield",
        content: [
            "You agree to indemnify, defend, and hold harmless Underworld Enterprises LLC, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or in connection with your use of the website, violation of these Terms, or infringement of any third-party rights.",
        ],
    },
    {
        title: "Governing Law & Jurisdiction",
        icon: "balance",
        content: [
            "These Terms of Service are governed by and construed in accordance with the laws of Mexico, specifically the laws of the State of Quintana Roo, without regard to its conflict of law provisions.",
            "Any disputes arising from or related to these Terms or your use of the website shall be subject to the exclusive jurisdiction of the courts located in Cancun, Quintana Roo, Mexico. By using our website, you consent to the personal jurisdiction of such courts.",
        ],
    },
    {
        title: "Termination",
        icon: "block",
        content: [
            "We reserve the right to terminate or suspend your access to the website at any time, without prior notice or liability, for any reason, including but not limited to a breach of these Terms.",
            "Upon termination, your right to use the website will immediately cease. All provisions of these Terms that by their nature should survive termination shall remain in effect.",
        ],
    },
    {
        title: "Changes to These Terms",
        icon: "update",
        content: [
            "We may revise these Terms of Service from time to time at our sole discretion. When we make changes, we will update the \"Last Updated\" date at the top of this page. We encourage you to review these Terms periodically to stay informed of any updates.",
            "Your continued use of the website after any modifications to these Terms constitutes your acceptance of the revised Terms.",
        ],
    },
    {
        title: "Contact Us",
        icon: "mail",
        content: [
            "If you have any questions or concerns regarding these Terms of Service, please contact us:",
        ],
        contactInfo: [
            {
                label: "Company",
                value: "Underworld Enterprises LLC (d/b/a Serenity Luxury Condos)",
                icon: "business",
            },
            {
                label: "Phone",
                value: "+1 877-32-SRNTY (7-7689)",
                href: "tel:+18773277689",
                icon: "phone",
            },
            {
                label: "Email",
                value: "info@serenityluxurycondos.com",
                href: "mailto:info@serenityluxurycondos.com",
                icon: "email",
            },
            {
                label: "Location",
                value: "Cancun, Quintana Roo, Mexico",
                icon: "location_on",
            },
        ],
    },
];

export default function TermsOfServicePage() {
    return (
        <>
            <Navbar />
            <PageHero
                title="Terms of Service"
                subtitle="Terms & Conditions"
                backgroundImage="/assets/photo-gallery/building-slantview.jpg"
            />

            {/* Last Updated */}
            <section className="py-6 bg-deep-dark border-b border-primary/10">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="font-body text-sm text-gray-500 uppercase tracking-wider">
                        Last Updated: March 13, 2026
                    </p>
                </div>
            </section>

            {/* Terms Content */}
            <section className="py-20 bg-deep-dark">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Intro */}
                    <div className="text-center mb-16">
                        <span className="font-body text-primary/60 text-sm uppercase tracking-[0.3em] block mb-4">
                            Underworld Enterprises LLC
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-4">
                            Terms of{" "}
                            <span className="text-primary">Service</span>
                        </h2>
                        <div className="w-20 h-0.5 bg-primary mx-auto mb-6" />
                        <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto">
                            Please read these terms carefully before using the
                            Serenity Luxury Condos website or engaging with our
                            services.
                        </p>
                    </div>

                    {/* Sections */}
                    <div className="space-y-12">
                        {tosSections.map((section, index) => (
                            <div
                                key={section.title}
                                className="group"
                                id={section.title
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")
                                    .replace(/[&]/g, "and")}
                            >
                                {/* Section Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="material-icons text-primary text-2xl">
                                            {section.icon}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider">
                                        {index + 1}. {section.title}
                                    </h3>
                                    <div className="h-px flex-1 bg-primary/20" />
                                </div>

                                {/* Section Body */}
                                <div className="pl-16 space-y-4">
                                    {section.content.map((paragraph, pIdx) => (
                                        <p
                                            key={pIdx}
                                            className="font-body text-gray-400 leading-relaxed text-base"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}

                                    {/* Bullet List */}
                                    {section.list && (
                                        <ul className="space-y-3 mt-4">
                                            {section.list.map((item, lIdx) => (
                                                <li
                                                    key={lIdx}
                                                    className="flex items-start gap-3"
                                                >
                                                    <span className="material-icons text-primary text-sm mt-1.5">
                                                        chevron_right
                                                    </span>
                                                    <span className="font-body text-gray-400 text-base leading-relaxed">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* Footer text */}
                                    {section.footer && (
                                        <p className="font-body text-gray-400 leading-relaxed text-base mt-4 italic">
                                            {section.footer}
                                        </p>
                                    )}

                                    {/* Contact Info */}
                                    {section.contactInfo && (
                                        <div className="grid sm:grid-cols-2 gap-4 mt-6">
                                            {section.contactInfo.map(
                                                (info) => {
                                                    const Wrapper = info.href
                                                        ? "a"
                                                        : "div";
                                                    return (
                                                        <Wrapper
                                                            key={info.label}
                                                            {...(info.href
                                                                ? {
                                                                    href: info.href,
                                                                }
                                                                : {})}
                                                            className={`flex items-start gap-3 p-4 bg-charcoal-dark/50 border border-primary/15 rounded-lg ${info.href ? "hover:border-primary/40 hover:bg-charcoal-dark/70 transition-all duration-300" : ""}`}
                                                        >
                                                            <span className="material-icons text-primary text-xl mt-0.5">
                                                                {info.icon}
                                                            </span>
                                                            <div>
                                                                <span className="font-body text-xs text-gray-500 uppercase tracking-wider block mb-1">
                                                                    {
                                                                        info.label
                                                                    }
                                                                </span>
                                                                <span
                                                                    className={`font-body text-sm ${info.href ? "text-primary" : "text-gray-300"}`}
                                                                >
                                                                    {
                                                                        info.value
                                                                    }
                                                                </span>
                                                            </div>
                                                        </Wrapper>
                                                    );
                                                }
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
