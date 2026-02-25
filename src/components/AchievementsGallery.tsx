"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const achievements = [
    { id: 1, src: "/a1.webp", alt: "Alumni Achievement 1" },
    { id: 2, src: "/a2.webp", alt: "Alumni Achievement 2" },
    { id: 3, src: "/a3.webp", alt: "Alumni Achievement 3" },
    { id: 4, src: "/a4.webp", alt: "Alumni Achievement 4" }
];

export default function AchievementsGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {achievements.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col gap-6 cursor-pointer"
                            onClick={() => setSelectedImage(item.src)}
                        >
                            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-black border border-white/5 shadow-2xl">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                {/* Gradient overlay for premium feel */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Full Screen Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in-up">
                    <button
                        className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/70 hover:text-white bg-white/10 p-2 rounded-full transition-colors z-[110]"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close image"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center">
                        <Image
                            src={selectedImage}
                            alt="Full screen view"
                            fill
                            className="object-contain"
                            quality={100}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
