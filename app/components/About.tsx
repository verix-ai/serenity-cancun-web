import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-deep-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary font-display tracking-[0.3em] uppercase text-sm mb-4 block">
                            Our Philosophy
                        </span>
                        <h2 className="font-display text-5xl font-bold text-deep-dark dark:text-white uppercase mb-8">
                            Who We Are
                        </h2>
                        <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            <p>
                                Welcome to{" "}
                                <span className="text-primary font-semibold">
                                    Serenity Luxury Condos
                                </span>
                                , where we redefine opulent living in the heart of Mexico&#39;s most
                                coveted destinations. With a commitment to excellence, we specialize
                                in crafting luxurious condominiums that blend modern sophistication
                                with the enchanting beauty of the Quintana Roo Mexico.
                            </p>
                            <p>
                                Our project offers an exclusive blend of modern elegance and natural
                                serenity. Each residence is designed to be a private sanctuary,
                                harmonizing with the surrounding lush tropical landscape.
                            </p>
                        </div>
                        <div className="mt-10 grid grid-cols-3 gap-8">
                            <div>
                                <span className="block font-display text-4xl font-bold text-primary">
                                    14
                                </span>
                                <span className="text-xs uppercase tracking-widest text-gray-500">
                                    Premium Units
                                </span>
                            </div>
                            <div>
                                <span className="block font-display text-4xl font-bold text-primary">
                                    10
                                </span>
                                <span className="text-xs uppercase tracking-widest text-gray-500">
                                    Amenities
                                </span>
                            </div>
                            <div>
                                <span className="block font-display text-4xl font-bold text-primary">
                                    2026
                                </span>
                                <span className="text-xs uppercase tracking-widest text-gray-500">
                                    Completion
                                </span>
                            </div>
                        </div>
                        <div className="mt-10">
                            <Link
                                href="/about"
                                className="bg-primary text-white px-8 py-4 font-display text-xl uppercase tracking-widest hover:translate-y-[-2px] transition-transform inline-block"
                            >
                                More About Us
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden shadow-2xl relative">
                            <Image
                                src="/assets/livingroom.png"
                                alt="Condo Design"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 -left-8 bg-primary p-8 hidden md:block">
                            <p className="font-script text-white text-3xl">Timeless Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
