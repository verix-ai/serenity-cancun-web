import LightboxGallery from "../components/LightboxGallery";
import fs from "fs/promises";
import path from "path";
import Script from "next/script";

export const metadata = {
    title: "Gallery | Serenity Condos",
    description: "Explore the luxury and beauty of Serenity Condos in the Mayan Riviera.",
};

export default async function GalleryPage() {
    const galleryDir = path.join(process.cwd(), "public/assets/photo-gallery");
    let images: string[] = [];

    try {
        const files = await fs.readdir(galleryDir);
        images = files
            .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
            .map(file => `/assets/photo-gallery/${file}`);

        // Optional: Shuffle or sort images here if needed
        // For the full gallery, maybe we want them sorted or just as is
        // Let's implement a random shuffle for consistency with the home page
        for (let i = images.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [images[i], images[j]] = [images[j], images[i]];
        }
    } catch (error) {
        console.error("Error reading gallery directory:", error);
    }

    return (
        <main>
            <LightboxGallery images={images} />
        </main>
    );
}
