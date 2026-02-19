"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { translations } = useLanguage();
    const t = translations.footer;

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
                                    <p className="font-display text-xl">+1 209-689-1052</p>
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
                            <Link
                                href="#"
                                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-primary transition-colors"
                                aria-label="WhatsApp"
                            >
                                <Image
                                    src="/assets/WhatsApp_icon.png"
                                    alt="WhatsApp"
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
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder={t.placeholders.firstName}
                                    className="bg-deep-dark border-gray-700 text-white p-4 focus:ring-primary focus:border-primary w-full"
                                />
                                <input
                                    type="text"
                                    placeholder={t.placeholders.lastName}
                                    className="bg-deep-dark border-gray-700 text-white p-4 focus:ring-primary focus:border-primary w-full"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder={t.placeholders.email}
                                className="bg-deep-dark border-gray-700 text-white p-4 focus:ring-primary focus:border-primary w-full"
                            />
                            <textarea
                                placeholder={t.placeholders.message}
                                rows={4}
                                className="bg-deep-dark border-gray-700 text-white p-4 focus:ring-primary focus:border-primary w-full"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-display text-xl py-4 uppercase tracking-[0.2em] hover:bg-opacity-90 transition-all cursor-pointer"
                            >
                                {t.send}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-12 text-center text-sm text-gray-500 uppercase tracking-widest">
                    <p>{t.copyright}</p>
                    <Link
                        href="/information/privacy-policy"
                        className="inline-block mt-4 text-gray-500 hover:text-primary transition-colors duration-300"
                    >
                        {t.privacy}
                    </Link>
                </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
                <a
                    href="https://wa.me/12096891052"
                    target="_blank"
                    className="block hover:scale-110 transition-transform"
                >
                    <Image
                        src="/assets/WhatsApp_icon.png"
                        alt="WhatsApp"
                        width={60}
                        height={60}
                    />
                </a>
            </div>
        </footer>
    );
}
