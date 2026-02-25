import React from 'react';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryImageGrid from '@/components/GalleryImageGrid';

export const metadata = {
    title: 'Photo Gallery | Priyadarshini Colleges Alumni',
    description: 'A collection of memories, milestones, and moments that define the Priyadarshini Alumni community.',
};



export default function GalleryPage() {
    const galleryDir = path.join(process.cwd(), 'public', 'gallery');
    let images: string[] = [];

    try {
        if (fs.existsSync(galleryDir)) {
            const files = fs.readdirSync(galleryDir);
            images = files.filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));
        }
    } catch (err) {
        console.error('Error reading gallery directory:', err);
    }

    return (
        <div className="min-h-screen flex flex-col pt-20 bg-[#0a0a0a]">
            <Navbar />

            <main className="flex-grow">
                {/* Header Section */}
                <section className="py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
                    <Image
                        src="/photo-gallery.webp"
                        alt="Photo Gallery Background"
                        fill
                        className="object-cover opacity-50 select-none z-0"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505] z-0"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.15)_0%,transparent_60%)] z-0"></div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-6 tracking-tight">
                            Photo <span className="text-yellow-500 italic">Gallery</span>
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            A collection of memories, milestones, and moments that define the Priyadarshini Alumni community.
                        </p>
                    </div>
                </section>

                {/* Gallery Grid Section */}
                <section className="py-16 md:py-24 relative z-0 min-h-[50vh]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <GalleryImageGrid images={images} />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
