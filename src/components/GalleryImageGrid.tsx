'use client';

import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function GalleryImageGrid({ images, basePath = "/gallery/" }: { images: string[], basePath?: string }) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Close modal when Escape key is pressed
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        if (selectedImage) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    return (
        <>
            {images.length > 0 ? (
                // Masonry using CSS columns
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((imgName, idx) => (
                        <div
                            key={idx}
                            className="relative rounded-2xl overflow-hidden group border border-white/10 shadow-xl bg-[#050505] cursor-pointer h-[280px] transform transition-transform duration-500 hover:-translate-y-1"
                            onClick={() => setSelectedImage(imgName)}
                        >
                            <img
                                src={`${basePath}${encodeURIComponent(imgName)}`}
                                alt={`Gallery view ${idx + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                                <p className="text-white font-medium text-sm drop-shadow-md truncate">
                                    {imgName.replace(/\.[^/.]+$/, "")}
                                </p>
                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
                                    <ZoomIn className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl bg-white/5 mx-auto max-w-2xl backdrop-blur-sm">
                    <p className="text-zinc-400 font-medium">No photos found in the gallery folder.</p>
                    <p className="text-zinc-500 text-sm mt-2">Upload images to the `public/gallery/` directory to see them here.</p>
                </div>
            )}

            {/* Full-view Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-colors"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div
                        className="max-w-7xl max-h-full relative overflow-hidden flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage ? `${basePath}${encodeURIComponent(selectedImage)}` : ""}
                            alt="Full view gallery preview"
                            className="max-h-[85vh] w-auto max-w-full rounded-lg shadow-2xl object-contain border border-white/10"
                        />
                        <p className="text-white mt-4 font-display font-medium text-lg tracking-wide drop-shadow-md">
                            {selectedImage.replace(/\.[^/.]+$/, "")}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
