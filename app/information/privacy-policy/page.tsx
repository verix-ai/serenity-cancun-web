import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Serenity Luxury Condos",
    description:
        "Read the privacy policy for Serenity Luxury Condos. Learn how we collect, use, and protect your personal information.",
};

const policySections = [
    {
        title: "Introduction",
        icon: "description",
        content: [
            "Welcome to Serenity Luxury Condos, a property of Underworld Enterprises LLC (\"Company,\" \"we,\" \"us,\" or \"our\"). We are committed to protecting your personal information and your right to privacy.",
            "This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, interact with our services, or engage with our sales and property management teams. Please read this policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.",
        ],
    },
    {
        title: "Information We Collect",
        icon: "folder_shared",
        content: [
            "We may collect personal information that you voluntarily provide to us when you express interest in our properties, make an inquiry, request information, or otherwise contact us. The personal information we collect may include:",
        ],
        list: [
            "Full name and contact details (phone number, email address, mailing address)",
            "Financial information relevant to property transactions (income verification, proof of funds)",
            "Citizenship and residency status for legal compliance purposes",
            "Communication preferences and inquiry history",
            "Information submitted through our website contact forms, including tour requests and property inquiries",
            "Information collected through cookies, analytics tools, and similar tracking technologies when you visit our website",
        ],
    },
    {
        title: "How We Use Your Information",
        icon: "settings",
        content: [
            "We use the information we collect for legitimate business purposes, including but not limited to:",
        ],
        list: [
            "Responding to your inquiries and providing information about our properties, services, and investment opportunities",
            "Facilitating property sales, rentals, and management services",
            "Processing transactions and sending related communications, such as purchase confirmations and invoices",
            "Sending marketing and promotional communications about new developments, special offers, and events (with your consent)",
            "Improving our website, services, and customer experience",
            "Complying with applicable laws, regulations, and legal processes",
            "Protecting our rights, property, and the safety of our clients and visitors",
        ],
    },
    {
        title: "Sharing Your Information",
        icon: "share",
        content: [
            "We do not sell your personal information. We may share your information in the following circumstances:",
        ],
        list: [
            "With service providers who assist us in operating our business (e.g., property management partners, legal advisors, IT support, payment processors)",
            "With legal and regulatory authorities when required by law or to protect our legal rights",
            "With your consent or at your direction, such as when you request us to share your information with a financing institution or legal representative",
            "In connection with a business transaction, such as a merger, acquisition, or asset sale involving Underworld Enterprises LLC",
        ],
    },
    {
        title: "Cookies & Tracking Technologies",
        icon: "cookie",
        content: [
            "Our website may use cookies, web beacons, and similar tracking technologies to collect information about your browsing activity. These technologies help us analyze website traffic, personalize content, and improve your experience.",
            "You can manage your cookie preferences through your browser settings. Please note that disabling cookies may affect certain functionality of our website.",
        ],
    },
    {
        title: "Data Security",
        icon: "lock",
        content: [
            "We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, access controls, and regular security assessments.",
            "However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.",
        ],
    },
    {
        title: "Data Retention",
        icon: "schedule",
        content: [
            "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will securely delete or anonymize it.",
        ],
    },
    {
        title: "Your Rights & Choices",
        icon: "verified_user",
        content: [
            "Depending on your location, you may have certain rights regarding your personal information, including:",
        ],
        list: [
            "The right to access the personal information we hold about you",
            "The right to request correction of inaccurate or incomplete information",
            "The right to request deletion of your personal information, subject to legal obligations",
            "The right to opt out of marketing communications at any time",
            "The right to withdraw consent where processing is based on your consent",
        ],
        footer:
            "To exercise any of these rights, please contact us using the information provided below.",
    },
    {
        title: "Third-Party Links",
        icon: "link",
        content: [
            "Our website may contain links to third-party websites, services, or applications that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policies of any third-party sites you visit.",
        ],
    },
    {
        title: "International Transfers",
        icon: "public",
        content: [
            "As Serenity Luxury Condos operates in Mexico and serves international clients, your personal information may be transferred to and processed in countries other than your country of residence. We take appropriate measures to ensure that your information is protected in accordance with this Privacy Policy and applicable data protection laws.",
        ],
    },
    {
        title: "Changes to This Policy",
        icon: "update",
        content: [
            "We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. When we make changes, we will update the \"Last Updated\" date at the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.",
        ],
    },
    {
        title: "Contact Us",
        icon: "mail",
        content: [
            "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
        ],
        contactInfo: [
            {
                label: "Company",
                value: "Underworld Enterprises LLC (d/b/a Serenity Luxury Condos)",
                icon: "business",
            },
            {
                label: "Phone",
                value: "+1 209-689-1052",
                href: "tel:+12096891052",
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

export default function PrivacyPolicyPage() {
    return (
        <>
            <Navbar />
            <PageHero
                title="Privacy Policy"
                subtitle="Your Privacy Matters"
                backgroundImage="/assets/photo-gallery/building-slantview.jpg"
            />

            {/* Last Updated */}
            <section className="py-6 bg-deep-dark border-b border-primary/10">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="font-body text-sm text-gray-500 uppercase tracking-wider">
                        Last Updated: February 18, 2026
                    </p>
                </div>
            </section>

            {/* Policy Content */}
            <section className="py-20 bg-deep-dark">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Intro */}
                    <div className="text-center mb-16">
                        <span className="font-body text-primary/60 text-sm uppercase tracking-[0.3em] block mb-4">
                            Underworld Enterprises LLC
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-4">
                            Privacy{" "}
                            <span className="text-primary">Policy</span>
                        </h2>
                        <div className="w-20 h-0.5 bg-primary mx-auto mb-6" />
                        <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto">
                            Your trust is important to us. This policy outlines
                            how Serenity Luxury Condos handles, stores, and
                            protects your personal information.
                        </p>
                    </div>

                    {/* Sections */}
                    <div className="space-y-12">
                        {policySections.map((section, index) => (
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
