"use client";

import { useEffect, useRef } from "react";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !imgRef.current) return;
            const scrollY = window.scrollY;
            const sectionHeight = sectionRef.current.offsetHeight;
            if (scrollY <= sectionHeight) {
                imgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden"
        >
            <div
                ref={imgRef}
                className="absolute inset-0 will-change-transform"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    top: "-20%",
                    bottom: "-20%",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-deep-dark/60 via-deep-dark/70 to-deep-dark/90"></div>
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {subtitle && (
                    <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                        {subtitle}
                    </span>
                )}
                <h1 className="font-display text-5xl md:text-7xl font-bold text-white uppercase leading-tight">
                    {title}
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto mt-8"></div>
            </div>
        </section>
    );
}
