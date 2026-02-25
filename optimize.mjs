import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');
const srcDir = path.join(process.cwd(), 'src');

async function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            await processDirectory(fullPath);
        } else if (/\.(png|jpe?g)$/i.test(fullPath)) {
            const ext = path.extname(fullPath);
            const webpPath = fullPath.replace(new RegExp(`${ext}$`, 'i'), '.webp');

            console.log(`Converting ${file} to WebP...`);
            try {
                await sharp(fullPath)
                    .webp({ quality: 80, effort: 6 })
                    .toFile(webpPath);

                // Compare sizes
                const oldSize = fs.statSync(fullPath).size;
                const newSize = fs.statSync(webpPath).size;
                console.log(`  -> ${(oldSize / 1024 / 1024).toFixed(2)}MB to ${(newSize / 1024 / 1024).toFixed(2)}MB`);

                // If it successfully created, delete the old image
                fs.unlinkSync(fullPath);
            } catch (err) {
                console.error(`Failed to convert ${file}:`, err.message);
            }
        }
    }
}

function updateReferences(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (/\.(tsx|ts|js|jsx|css|scss)$/i.test(fullPath)) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // Replace references
            content = content.replace(/\.png/g, '.webp');
            content = content.replace(/\.jpg/g, '.webp');
            content = content.replace(/\.jpeg/g, '.webp');

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated references in ${fullPath}`);
            }
        }
    }
}

async function run() {
    console.log("Starting image optimization...");
    await processDirectory(publicDir);
    console.log("Updating code references...");
    updateReferences(srcDir);
    console.log("Done!");
}

run();
