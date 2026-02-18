export default function Residences() {
    return (
        <section id="residences" className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="bg-white dark:bg-deep-dark p-10 shadow-xl border-t-4 border-primary">
                        <span className="material-icons text-primary text-4xl mb-6">location_on</span>
                        <h3 className="font-display text-2xl font-bold uppercase mb-4 dark:text-white">
                            Prime Location
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Located in Isla Mujeres and Isla Blanca, our residences feature
                            stunning architecture and world-class proximity to the Caribbean
                            sea.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-deep-dark p-10 shadow-xl border-t-4 border-primary">
                        <span className="material-icons text-primary text-4xl mb-6">eco</span>
                        <h3 className="font-display text-2xl font-bold uppercase mb-4 dark:text-white">
                            Eco-Conscious
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Designed with sustainability at its core, Serenity preserves the
                            surrounding Mayan jungle while providing unparalleled luxury.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-deep-dark p-10 shadow-xl border-t-4 border-primary">
                        <span className="material-icons text-primary text-4xl mb-6">invest</span>
                        <h3 className="font-display text-2xl font-bold uppercase mb-4 dark:text-white">
                            Smart Investment
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Whether you&#39;re seeking a vacation retreat or a smart investment
                            opportunity, Serenity provides security and appreciation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
