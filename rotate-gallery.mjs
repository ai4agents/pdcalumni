import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const galleryDir = path.join(process.cwd(), 'public/gallery');

async function processGallery() {
    const files = fs.readdirSync(galleryDir);
    let count = 0;

    for (const file of files) {
        if (!file.endsWith('.webp') || file.startsWith('_temp_')) continue;

        const fullPath = path.join(galleryDir, file);

        try {
            const buffer = fs.readFileSync(fullPath);
            const metadata = await sharp(buffer).metadata();

            if (metadata.height > metadata.width) {
                console.log(`Rotating ${file} (currently ${metadata.width}x${metadata.height})...`);

                // Read into buffer, rotate, overwrite the same file
                await sharp(buffer)
                    .rotate(90) // Auto-rotate 90 degrees to landscape
                    .webp({ quality: 80, effort: 6 })
                    .toFile(fullPath);

                count++;
            }
        } catch (err) {
            console.error(`Failed to rotate ${file}:`, err.message);
        }
    }

    console.log(`Done! Successfully rotated ${count} vertical images to horizontal.`);
}

processGallery();
