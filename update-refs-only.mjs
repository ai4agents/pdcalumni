import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

function updateReferences(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else if (/\.(tsx|ts|js|jsx|css|scss)$/i.test(fullPath)) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // Re-apply webp references
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

console.log("Updating code references...");
updateReferences(srcDir);
console.log("Done!");
