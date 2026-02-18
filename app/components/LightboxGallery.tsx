"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface LightboxGalleryProps {
    images: string[];
}

export default function LightboxGallery({ images }: LightboxGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
        document.body.style.overflow = "hidden"; // Prevent scrolling
    };

    const closeLightbox = useCallback(() => {
        setSelectedIndex(null);
        document.body.style.overflow = "unset";
    }, []);

    const showNext = useCallback(
        (e?: React.MouseEvent) => {
            e?.stopPropagation();
            if (selectedIndex !== null) {
                setSelectedIndex((prev) =>
                    prev === null ? null : (prev + 1) % images.length
                );
            }
        },
        [selectedIndex, images.length]
    );

    const showPrev = useCallback(
        (e?: React.MouseEvent) => {
            e?.stopPropagation();
            if (selectedIndex !== null) {
                setSelectedIndex((prev) =>
                    prev === null
                        ? null
                        : (prev - 1 + images.length) % images.length
                );
            }
        },
        [selectedIndex, images.length]
    );

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;

            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") showNext();
            if (e.key === "ArrowLeft") showPrev();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, closeLightbox, showNext, showPrev]);

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 flex items-center justify-between">
                    <div>
                        <h1 className="font-display text-5xl md:text-6xl font-bold text-deep-dark dark:text-white uppercase">
                            Gallery
                        </h1>
                        <p className="font-script text-primary text-3xl mt-2">
                            Moments of Serenity
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                    >
                        <span className="material-icons">arrow_back</span>
                        Back to Home
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="material-icons text-white text-4xl drop-shadow-lg">
                                    zoom_in
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Overlay */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-50 p-2"
                        onClick={closeLightbox}
                    >
                        <span className="material-icons text-5xl">close</span>
                    </button>

                    <button
                        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-4 z-50"
                        onClick={showPrev}
                    >
                        <span className="material-icons text-6xl">navigate_before</span>
                    </button>

                    <button
                        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-4 z-50"
                        onClick={showNext}
                    >
                        <span className="material-icons text-6xl">navigate_next</span>
                    </button>

                    <div
                        className="relative w-full h-full max-w-7xl max-h-[85vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[selectedIndex]}
                            alt={`Gallery Image ${selectedIndex + 1}`}
                            fill
                            className="object-contain"
                            priority
                            sizes="100vw"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
