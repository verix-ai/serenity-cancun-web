"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

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
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
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
                            <Link
                                href="#"
                                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-primary transition-colors"
                                aria-label="Facebook"
                            >
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3-8vd3BhpUwJNH3NcnX2WUvLuwfFsvGp00XFLuK81TpTnjDD0d8xXmEBRnCJzah7TtrQtRx2kbwhgjAYo5W1pkSOFGnKg1NXXz7F2oiH8U0IZngU8wlEqbol-XfT3rsQua-B-vUPn6F-0CfRkYPkOTDEn3zgMY7CVvuuyRxi8wwGMFAwSXAw9Cr7QwG6d5ZqW1eNQhNOudqL5YRrdlaREKmEmsJuse_VSKWo0lM8SLpMut4z35DRF8j1wPLFoAOyuZo-WKajNBBU"
                                    alt="Facebook"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-primary transition-colors"
                                aria-label="Instagram"
                            >
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEJxDHpryY-FZRl6PrWcnv8LrY4YAfNDcu-gtjDP9A1B6HvZmlA-CxroqKU5RtGfFoo0m69IqGUidRwtfyPI1YmE21gjj5WS1fiaQ8vFMeLUJE8GTQpLk0CC_TXXhzwXxn9zg4OjYKC2o8ckryjt4-2F2T8AfTt0e97i83Kb4vqHelUc5jnWKEL2s7v3evaQRj_jZDcd_zK5i6rp7IfwtkUToX2aVoQpGecxKzk3u87owOkAy6zGfurY4LC7VmyDRePp0_nO8VJZg"
                                    alt="Instagram"
                                    width={20}
                                    height={20}
                                />
                            </Link>
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
                                        placeholder={t.placeholders.firstName}
                                        className="bg-deep-dark border-gray-700 text-white p-4 focus:ring-primary focus:border-primary w-full"
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder={t.placeholders.lastName}
                                        className="bg-deep-dark border-gray-700 text-white p-4 focus:ring-primary focus:border-primary w-full"
                                    />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t.placeholders.email}
                                    className="bg-deep-dark border-gray-700 text-white p-4 focus:ring-primary focus:border-primary w-full"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder={t.placeholders.phone}
                                    className="bg-deep-dark border-gray-700 text-white p-4 focus:ring-primary focus:border-primary w-full"
                                />
                                <textarea
                                    name="message"
                                    required
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
                            </form>
                        )}
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-12 text-center text-sm text-gray-500 uppercase tracking-widest">
                    <p>{t.copyright}</p>
                    <Link
                        href="/information/privacy-policy"
                        className="inline-block mt-4 mb-4 text-gray-500 hover:text-primary transition-colors duration-300"
                    >
                        {t.privacy}
                    </Link>
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
