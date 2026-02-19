import fs from "fs/promises";
import path from "path";
import GalleryClient from "./GalleryClient";

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

    return <GalleryClient images={images} />;
}
