"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useLanguage } from "../context/LanguageContext";
import { customEvent } from "../../lib/fpixel";

export default function Footer() {
    const { translations } = useLanguage();
    const t = translations.footer;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        condoType: "",
        message: ""
    });
    const [consentMarketing, setConsentMarketing] = useState(false);
    const [consentNonMarketing, setConsentNonMarketing] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    consentMarketing,
                    consentNonMarketing
                })
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ firstName: "", lastName: "", email: "", phone: "", condoType: "", message: "" });
                setConsentMarketing(false);
                setConsentNonMarketing(false);
                customEvent("Lead", { location: "Footer Contact Form" });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer id="contact" className="bg-deep-dark text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 mb-20">
                    <div>
                        <div className="flex items-center space-x-2 mb-8">
                            <Image
                                src="/assets/logo.svg"
                                alt="Serenity Logo"
                                width={180}
                                height={50}
                                className="h-12 w-auto"
                            />
                            <span className="font-display text-3xl font-bold tracking-widest uppercase">
                                Serenity
                            </span>
                        </div>
                        <p className="text-gray-400 text-lg mb-10 max-w-md">
                            {t.description}
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <span className="material-icons text-primary">phone</span>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                                        {t.callUs}
                                    </p>
                                    <a href="tel:+18773277689" className="group/phone block">
                                        <p className="font-display text-xl group-hover/phone:text-primary transition-colors duration-300">
                                            +1 877-32-SRNTY
                                        </p>
                                        <p className="font-display text-sm text-gray-400 tracking-wider mt-0.5">
                                            (7-7689)
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="material-icons text-primary">email</span>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                                        {t.emailUs}
                                    </p>
                                    <p className="font-display text-xl">
                                        info@serenityluxurycondos.com
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="material-icons text-primary">location_on</span>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                                        {t.address}
                                    </p>
                                    <p className="font-display text-xl">
                                        {t.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 flex space-x-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=61588369027148"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-primary transition-colors"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/serenityluxurycondos/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-primary transition-colors"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="bg-charcoal-dark p-8 md:p-12 rounded-lg">
                        <h3 className="font-display text-3xl font-bold uppercase mb-8">
                            {t.inquiryForm}
                        </h3>
                        {submitStatus === "success" ? (
                            <div className="bg-primary/20 border border-primary text-white p-6 rounded-lg text-center">
                                <span className="material-icons text-primary/80 text-4xl mb-2">check_circle</span>
                                <p className="font-display text-lg">{t.successMessage}</p>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {submitStatus === "error" && (
                                    <div className="bg-red-500/20 border border-red-500/50 text-white p-4 rounded-lg text-sm">
                                        {t.errorMessage}
                                    </div>
                                )}
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder={`${t.placeholders.firstName} *`}
                                        className="bg-deep-dark border-gray-700 text-white p-4 focus:ring-primary focus:border-primary w-full"
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder={t.placeholders.lastName}
                                        className="bg-deep-dark border-gray-700 text-white p-4 focus:ring-primary focus:border-primary w-full"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder={`${t.placeholders.email} *`}
                                        className="bg-deep-dark border-gray-700 text-white p-4 focus:ring-primary focus:border-primary w-full"
                                    />
                                    <PhoneInput
                                        international
                                        defaultCountry="US"
                                        limitMaxLength
                                        value={formData.phone}
                                        onChange={(value) => setFormData({ ...formData, phone: value || "" })}
                                        placeholder={t.placeholders.phone}
                                        className="phone-input-dark bg-deep-dark border-gray-700 text-white p-4 focus:ring-primary focus:border-primary w-full"
                                    />
                                </div>
                                <select
                                    name="condoType"
                                    required
                                    value={formData.condoType}
                                    onChange={handleChange}
                                    className="bg-deep-dark border-gray-700 text-white p-4 focus:ring-primary focus:border-primary w-full"
                                >
                                    <option value="" disabled>{t.placeholders.condoType} *</option>
                                    <option value="Quetzal">Quetzal</option>
                                    <option value="Quetzal+">Quetzal+</option>
                                    <option value="Jaguar">Jaguar</option>
                                    <option value="Not Sure">{t.placeholders.condoTypeNotSure}</option>
                                </select>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={t.placeholders.message}
                                    rows={4}
                                    className="bg-deep-dark border-gray-700 text-white p-4 focus:ring-primary focus:border-primary w-full"
                                ></textarea>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-white font-display text-xl py-4 uppercase tracking-[0.2em] hover:bg-opacity-90 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? t.sending : t.send}
                                </button>
                                <div className="space-y-3 mt-4">
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            required
                                            checked={consentMarketing}
                                            onChange={(e) => setConsentMarketing(e.target.checked)}
                                            className="mt-1 h-4 w-4 shrink-0 accent-primary cursor-pointer"
                                        />
                                        <span className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                                            {t.consentMarketing}
                                        </span>
                                    </label>
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            required
                                            checked={consentNonMarketing}
                                            onChange={(e) => setConsentNonMarketing(e.target.checked)}
                                            className="mt-1 h-4 w-4 shrink-0 accent-primary cursor-pointer"
                                        />
                                        <span className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                                            {t.consentNonMarketing}
                                        </span>
                                    </label>
                                    <p className="text-xs text-gray-600 leading-relaxed mt-2">
                                        {t.consentFootnote}{" "}
                                        <Link
                                            href="/information/privacy-policy"
                                            className="text-gray-400 hover:text-primary transition-colors underline"
                                        >
                                            {t.privacy}
                                        </Link>{" "}
                                        &amp;{" "}
                                        <Link
                                            href="/information/terms-of-service"
                                            className="text-gray-400 hover:text-primary transition-colors underline"
                                        >
                                            {t.termsOfService}
                                        </Link>.
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-12 text-center text-sm text-gray-500 uppercase tracking-widest">
                    <p>{t.copyright}</p>
                    <div className="mt-4 mb-4 flex items-center justify-center gap-3">
                        <Link
                            href="/information/privacy-policy"
                            className="text-gray-500 hover:text-primary transition-colors duration-300"
                        >
                            {t.privacy}
                        </Link>
                        <span className="text-gray-700">|</span>
                        <Link
                            href="/information/terms-of-service"
                            className="text-gray-500 hover:text-primary transition-colors duration-300"
                        >
                            {t.termsOfService}
                        </Link>
                    </div>
                    <p>
                        Crafted with Excellence By{" "}
                        <a
                            href="https://www.verix.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:opacity-80 transition-opacity"
                        >
                            Verix AI
                        </a>.
                    </p>
                </div>
            </div>
        </footer>
    );
}
