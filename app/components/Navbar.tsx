"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
    const { translations } = useLanguage();
    const t = translations.navbar;

    const [aboutOpen, setAboutOpen] = useState(false);
    const [infoOpen, setInfoOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const aboutDropdownRef = useRef<HTMLDivElement>(null);
    const infoDropdownRef = useRef<HTMLDivElement>(null);
    const aboutTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const infoTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
            if (infoTimeoutRef.current) clearTimeout(infoTimeoutRef.current);
        };
    }, []);

    const handleAboutEnter = () => {
        if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
        setAboutOpen(true);
    };
    const handleAboutLeave = () => {
        aboutTimeoutRef.current = setTimeout(() => setAboutOpen(false), 200);
    };

    const handleInfoEnter = () => {
        if (infoTimeoutRef.current) clearTimeout(infoTimeoutRef.current);
        setInfoOpen(true);
    };
    const handleInfoLeave = () => {
        infoTimeoutRef.current = setTimeout(() => setInfoOpen(false), 200);
    };

    const aboutLinks = [
        { href: "/about", label: t.aboutUs },
        { href: "/about/mission-vision", label: t.mission },
        { href: "/about/our-story", label: t.story },
        { href: "/about/why-us", label: t.whyUs },
    ];

    const infoLinks = [
        { href: "/information/investment", label: t.investment },
        { href: "/information/faqs", label: t.faqs },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-deep-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
                <Link href="/" className="flex items-center space-x-2 shrink-0">
                    <Image
                        src="/assets/logo.svg"
                        alt="Serenity Logo"
                        width={150}
                        height={40}
                        className="h-8 sm:h-10 w-auto"
                    />
                    <span className="font-display text-xl sm:text-2xl font-bold tracking-widest text-deep-dark dark:text-white uppercase">
                        Serenity
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8 uppercase text-xs tracking-widest font-semibold">
                    <Link href="/" className="hover:text-primary transition-colors">
                        {t.home}
                    </Link>
                    <Link href="/residences" className="hover:text-primary transition-colors">
                        {t.residences}
                    </Link>
                    <Link href="/amenities" className="hover:text-primary transition-colors">
                        {t.amenities}
                    </Link>

                    {/* Information Dropdown */}
                    <div
                        ref={infoDropdownRef}
                        className="relative"
                        onMouseEnter={handleInfoEnter}
                        onMouseLeave={handleInfoLeave}
                    >
                        <button
                            className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer uppercase"
                            onClick={() => setInfoOpen(!infoOpen)}
                        >
                            {t.information}
                            <span
                                className={`material-icons text-sm transition-transform duration-200 ${infoOpen ? "rotate-180" : ""}`}
                            >
                                expand_more
                            </span>
                        </button>
                        <div
                            className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${infoOpen
                                ? "opacity-100 visible translate-y-0"
                                : "opacity-0 invisible -translate-y-2"
                                }`}
                        >
                            <div className="bg-white dark:bg-charcoal-dark shadow-xl border border-primary/40 min-w-[260px] py-2">
                                {infoLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block px-6 py-3 text-xs tracking-widest text-charcoal-dark dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition-colors uppercase"
                                        onClick={() => setInfoOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* About Dropdown */}
                    <div
                        ref={aboutDropdownRef}
                        className="relative"
                        onMouseEnter={handleAboutEnter}
                        onMouseLeave={handleAboutLeave}
                    >
                        <button
                            className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer uppercase"
                            onClick={() => setAboutOpen(!aboutOpen)}
                        >
                            {t.about}
                            <span
                                className={`material-icons text-sm transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                            >
                                expand_more
                            </span>
                        </button>
                        <div
                            className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${aboutOpen
                                ? "opacity-100 visible translate-y-0"
                                : "opacity-0 invisible -translate-y-2"
                                }`}
                        >
                            <div className="bg-white dark:bg-charcoal-dark shadow-xl border border-primary/40 min-w-[220px] py-2">
                                {aboutLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block px-6 py-3 text-xs tracking-widest text-charcoal-dark dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition-colors uppercase"
                                        onClick={() => setAboutOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link href="#contact" className="hover:text-primary transition-colors">
                        {t.inquiry}
                    </Link>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                    <div className="hidden sm:block">
                        <LanguageSelector />
                    </div>
                    <Link href="#contact" className="bg-primary text-white px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap hover:bg-opacity-90 transition-all cursor-pointer">
                        {t.bookTour}
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-charcoal-dark dark:text-white"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <span className="material-icons text-2xl">
                            {mobileOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white dark:bg-deep-dark border-t border-gray-200 dark:border-gray-800 px-6 py-4 space-y-1">
                    <Link
                        href="/"
                        className="block py-3 text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors"
                        onClick={() => setMobileOpen(false)}
                    >
                        {t.home}
                    </Link>
                    <Link
                        href="/residences"
                        className="block py-3 text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors"
                        onClick={() => setMobileOpen(false)}
                    >
                        {t.residences}
                    </Link>
                    <Link
                        href="/amenities"
                        className="block py-3 text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors"
                        onClick={() => setMobileOpen(false)}
                    >
                        {t.amenities}
                    </Link>

                    {/* Mobile Information */}
                    <div>
                        <button
                            className="w-full flex items-center justify-between py-3 text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors cursor-pointer"
                            onClick={() => setInfoOpen(!infoOpen)}
                        >
                            {t.information}
                            <span
                                className={`material-icons text-sm transition-transform duration-200 ${infoOpen ? "rotate-180" : ""}`}
                            >
                                expand_more
                            </span>
                        </button>
                        {infoOpen && (
                            <div className="pl-4 space-y-1 border-l-2 border-primary/30 ml-2">
                                {infoLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block py-2 text-xs tracking-widest text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                                        onClick={() => {
                                            setMobileOpen(false);
                                            setInfoOpen(false);
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile About */}
                    <div>
                        <button
                            className="w-full flex items-center justify-between py-3 text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors cursor-pointer"
                            onClick={() => setAboutOpen(!aboutOpen)}
                        >
                            {t.about}
                            <span
                                className={`material-icons text-sm transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                            >
                                expand_more
                            </span>
                        </button>
                        {aboutOpen && (
                            <div className="pl-4 space-y-1 border-l-2 border-primary/30 ml-2">
                                {aboutLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block py-2 text-xs tracking-widest text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                                        onClick={() => {
                                            setMobileOpen(false);
                                            setAboutOpen(false);
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link
                        href="#contact"
                        className="block py-3 text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors"
                        onClick={() => setMobileOpen(false)}
                    >
                        {t.inquiry}
                    </Link>

                    <LanguageSelector mobile={true} />
                </div>
            )}
        </nav>
    );
}
