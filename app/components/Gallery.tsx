import Image from "next/image";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";

export default async function Gallery() {
    const galleryDir = path.join(process.cwd(), "public/assets/photo-gallery");
    let images: string[] = [];
    try {
        const files = await fs.readdir(galleryDir);
        images = files.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
            .map(file => `/assets/photo-gallery/${file}`);

        // Shuffle images
        for (let i = images.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [images[i], images[j]] = [images[j], images[i]];
        }
    } catch (error) {
        console.error("Error reading gallery directory:", error);
    }

    // Ensure we have enough images to fill the grid (5 slots)
    const fillerImages = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCvwtbE3RMJRVwpyoR0cUlmlZKGTAZXB-mz6rQuP81EhhRBxLIms996bFqrAM6QDHJ17SBf3aD8O7wLWDC60QE0CheGY3MBI6XBoQAVK1Qjyy2y1DzB3KoGY0hB8n0zp2-oVpU60JZYXPx8hMpP7NevWbwIFC63mj8RuKhC3n9FEdZnJowdcR3tTa1bXvugMVbnxH1FAQKrryTi5eQxyuupOV-D6O0jzx8xOJlAUC_KOUOkjPofRMdzVU8ZrQxE5XIA4oPMGGL-09Y",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA5LZ8MZewhkmA5zKk9jynVTqQ2cCA1OWtJtMRyUByxndP0A6sVQESL3KEpgoCO_SDiwF-HViLeuMAPqv1LULFcmnxV3V-ru3ZGh3WlFegBxf8Bp0aYsgank7cgtdPki4u1jfYLMh34Fdy1EB4w8FogIudeSbfsUtRFdzaGvgh4E1hh0oUr-hxEiOl-dv4DwK-c7PoKAW4EmdePU8zvObCz9gLSFw7AvbOX90NtMkcVcEk52zVY9_qHfl8UZoCiyH_Hau-NkATJtY8",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAGEDdq4NNkpLL6GgMfGk8jluLN9m6Gm2LMwP7EB-zK_brs3DoaUlsFyhu9iiUn5d3-zED4XzA7eWatbJrQPhwXT9Ga4TzUl3FIpYz_hM6hUy1gzRcjZ_hkSxAyOr_fMA-B9sYrOEw2jYWDdlOiVU_LT6d9BOqxbfrSwS_KMk1oR8edGufIOyktrTVEjQDbodX5DL-EwOHSDoKX5v0tBu6soKTkoWDLo3Pf37HCt2v8R1ZIxuqqpMzC6TCTQyx352FdBECY5iUN8t0",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDk5NVWtgKTpp8RkOYSBSjmpjta9Sxa56GBOhQAlC5t14gBk02lr1zH-Evz4Bw8JpaY7OAUASjXNA3yVzgrgkSbdKC8owVY5mE73mty8umqSMgqfkLrQpp_sWQ11JqUEXsLv_6bwoBA9gi-Qk2CWgtI2JVQQDdA9A41Rdaf-xsw7KO77VR0QkShj1ttQ6RL7rtgZhw-m4hEpvDvF9NPtrkhSN4GT_is1oaiDQthOqUhRrizbjsV8H_lerrv9vcSN5ejfWzWgAGir-g",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBrzl08TTFJbJhdq1_yloyP8iLvwSPfVlOaks97aMDirdRAITK4xMZTt-WsrNPKrqmd8dbdWfWsHWdkHgxiAcEbfMaVyLPFNjScYxYZNUCLj0TLMYrK08IEvAH3G-ljDvEDaWOoQVJNH5vmXzRuR2UbduC610WKUzBbJT0JxGsA-kxc-BFwBUxYMoDmXABhroMrdXu_5UkqLB0-vh7ZoTmgR18vBRAc0TqKQwliYInK8P9HTBLySD14EidhJFLaeDW83PT-UdNfxlg"
    ];

    const displayImages: string[] = [];
    if (images.length > 0) {
        while (displayImages.length < 5) {
            displayImages.push(...images);
        }
    } else {
        displayImages.push(...fillerImages);
    }

    // Take the top 5
    const finalImages = displayImages.slice(0, 5);

    return (
        <>
            <section className="py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                    <h2 className="font-display text-5xl font-bold text-deep-dark dark:text-white uppercase">
                        Where <span className="text-primary">Luxury</span> Meets the Soul
                    </h2>
                    <p className="max-w-2xl mx-auto mt-6 text-gray-600 dark:text-gray-400">
                        Experience world-class amenities, stunning landscapes, and the
                        ultimate in comfort. Your gateway to paradise in the Mayan Riviera.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-1 max-w-full">
                    {/* Infinity Pool */}
                    <div className="group relative overflow-hidden aspect-square">
                        <Image
                            src="/birdeye-pool.jpg"
                            alt="Infinity Pool"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="font-display text-white text-2xl uppercase tracking-widest">
                                Infinity Pool
                            </span>
                        </div>
                    </div>

                    {/* Logo Usage — White on Primary */}
                    <div className="group relative overflow-hidden aspect-square bg-primary flex flex-col items-center justify-center">
                        <Image
                            src="/assets/logo.svg"
                            alt="Serenity Logo"
                            width={80}
                            height={80}
                            className="mb-4"
                        />
                        <span className="font-display font-bold text-white text-2xl uppercase tracking-[0.2em]">
                            Serenity
                        </span>
                        <span className="text-white/60 text-[11px] uppercase tracking-[0.15em] mt-3">
                            Luxury Condos
                        </span>
                    </div>

                    {/* Jungle Lounge */}
                    <div className="group relative overflow-hidden aspect-square">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuh6HK17BjulU813dpEGA0a5z4VApRQgBagOgoxSIbvj2UJ9uTat3vLrS3AnGUuSme1J-J7izosL2zf9Em-oAtizcHU6sfIUwEwjvIwp535MEgQXA0W2kCkJFHNl_YHWy_XQo6PmVivlNitxEMCVqmQ4hx8Nj0a9J9Lv7RaA5BaeC3582Hci5WfhJPqs8qgBfZoaW3CtCZXKZvprPPeUIgkeNjZupmoIDLrlVX1Y11tXZhQVLMjHao2HlM2hzIXDgN4bAIKKqHHOY"
                            alt="Jungle Lounge"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="font-display text-white text-2xl uppercase tracking-widest">
                                Jungle Lounge
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="amenities" className="py-24 bg-white dark:bg-deep-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="font-display text-4xl font-bold uppercase dark:text-white">
                                Curated Gallery
                            </h2>
                            <p className="text-primary font-script text-3xl mt-2">
                                The Soul of the Mayan Riviera
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <Link
                                href="/gallery"
                                className="border border-primary text-primary px-8 py-2 hover:bg-primary hover:text-white transition-all uppercase text-sm tracking-widest font-bold cursor-pointer inline-block"
                            >
                                View All Photos
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="col-span-2 row-span-2 rounded-lg overflow-hidden shadow-lg relative aspect-square md:aspect-auto">
                            <Image
                                src={finalImages[0]}
                                alt="Living Area"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {finalImages.slice(1, 5).map((src, index) => (
                            <div
                                key={index}
                                className="rounded-lg overflow-hidden shadow-lg relative aspect-square"
                            >
                                <Image
                                    src={src}
                                    alt="Gallery Image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
