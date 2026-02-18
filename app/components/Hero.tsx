import Link from "next/link";


export default function Hero() {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/assets/Serenity_Promo-Vid.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 hero-gradient"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
                <div className="max-w-2xl">
                    <h2 className="font-script text-primary text-5xl md:text-6xl mb-4">
                        Embrace Nature&#39;s Serenity
                    </h2>
                    <h1 className="font-display text-6xl md:text-8xl font-bold text-white uppercase leading-tight mb-8">
                        Live <span className="text-primary">Surrounded</span> By Nature
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-lg leading-relaxed">
                        Live in tranquility with luxury within the Mayan Jungle. Experience a
                        new standard of living in the heart of the Rivera Mayan in Zona Continental Isla Mujeres Quintana Roo Mexico.
                    </p>
                    <div className="flex space-x-4">
                        <Link
                            href="#about"
                            className="bg-primary text-white px-8 py-4 font-display text-xl uppercase tracking-widest hover:translate-y-[-2px] transition-transform inline-block"
                        >
                            Explore More
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <span className="material-icons text-white text-3xl">expand_more</span>
            </div>
        </section>
    );
}
