import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryImageGrid from "@/components/GalleryImageGrid";
import { CalendarDays, MapPin } from "lucide-react";
import fs from "fs";
import path from "path";

export const metadata = {
    title: "Silver Jubilee Celebration | Priyadarshini Colleges Alumni",
    description: "Join us for our Silver Jubilee celebration honoring 25 years of excellence.",
};

export default function JubileeDetails() {
    const jublieeDir = path.join(process.cwd(), 'public', 'jubliee');
    let jublieeImages: string[] = [];
    try {
        if (fs.existsSync(jublieeDir)) {
            jublieeImages = fs.readdirSync(jublieeDir).filter(file => file.match(/\.(jpeg|jpg|png|webp|gif)$/i));
        }
    } catch (error) {
        console.error("Error reading jubliee directory:", error);
    }

    return (
        <div className="min-h-screen flex flex-col pt-20">
            <Navbar />

            <main className="flex-grow bg-[#0a0a0a]">

                {/* Header Section */}
                <section className="py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src="/celebrations.webp"
                        alt="Silver Jubilee Celebrations Background"
                        fill
                        className="object-cover opacity-50 select-none z-0"
                        priority
                    />

                    {/* Dark gradient overlays for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505] z-0"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.15)_0%,transparent_60%)] z-0"></div>

                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-8">
                        <h1 className="text-4xl md:text-6xl font-display font-medium text-white mb-6 tracking-tight drop-shadow-lg">
                            Silver Jubilee <span className="text-yellow-500 italic">Celebrations</span>
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Thank you for making a huge sucess
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-300 font-medium">
                            <div className="flex items-center gap-2">
                                <CalendarDays className="w-5 h-5 text-yellow-500" />
                                Feb 27-28, 2026
                            </div>
                            <a
                                href="https://maps.app.goo.gl/6vvtC5mr2k9PGMtr6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
                            >
                                <MapPin className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                                <span className="underline decoration-white/30 underline-offset-4 group-hover:decoration-white/80 transition-colors">Priyadarshini College Campus</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Jubilee Image Gallery */}
                <section className="py-20 md:py-32 bg-[#050505]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight drop-shadow-lg">
                                Moments to <span className="text-yellow-500 italic">Remember</span>
                            </h2>
                            <p className="text-zinc-400 text-lg">A glimpse into the celebrations and memories shared.</p>
                        </div>

                        <GalleryImageGrid images={jublieeImages} basePath="/jubliee/" />
                    </div>
                </section>

                {/* Jubilee Shorts / Vertical Videos Section */}
                <section className="py-24 bg-[#050505] border-t border-white/5 relative z-0">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4 tracking-tight">
                                Jubilee <span className="text-yellow-500 italic">Shorts</span>
                            </h2>
                            <p className="text-zinc-400 font-light max-w-2xl mx-auto">Quick updates, nostalgic memories, and excitement leading up to the mega event.</p>
                        </div>

                        {/* Video Grid for vertical video elements (9:16 aspect ratio) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">

                            {/* Short Video 1 */}
                            <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-black border border-white/10 shadow-xl group cursor-pointer w-full max-w-sm mx-auto">
                                <iframe
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                                    src="https://www.youtube.com/embed/Bcvv8KiwkPA?autoplay=1&mute=1&loop=1&playlist=Bcvv8KiwkPA&controls=0&modestbranding=1&rel=0"
                                    title="Silver Jubilee Glimpse"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                                <div className="absolute bottom-6 left-6 right-6 pointer-events-none text-left">
                                    <h3 className="text-white font-display font-medium drop-shadow-md">Silver Jubilee Glimpse</h3>
                                    <p className="text-yellow-400 text-xs mt-1 drop-shadow-sm font-semibold">#25YearsOfExcellence</p>
                                </div>
                            </div>

                            {/* Short Video 2 */}
                            <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-black border border-white/10 shadow-xl group cursor-pointer w-full max-w-sm mx-auto">
                                <iframe
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                                    src="https://www.youtube.com/embed/5hu8p896Oq4?autoplay=1&mute=1&loop=1&playlist=5hu8p896Oq4&controls=0&modestbranding=1&rel=0"
                                    title="Campus Echoes"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                                <div className="absolute bottom-6 left-6 right-6 pointer-events-none text-left">
                                    <h3 className="text-white font-display font-medium drop-shadow-md">Campus Echoes</h3>
                                    <p className="text-yellow-400 text-xs mt-1 drop-shadow-sm font-semibold">#25YearsOfExcellence</p>
                                </div>
                            </div>

                            {/* Short Video 3 */}
                            <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-black border border-white/10 shadow-xl group cursor-pointer w-full max-w-sm mx-auto">
                                <iframe
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                                    src="https://www.youtube.com/embed/kUVSseLlcbw?autoplay=1&mute=1&loop=1&playlist=kUVSseLlcbw&controls=0&modestbranding=1&rel=0"
                                    title="Looking Back"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                                <div className="absolute bottom-6 left-6 right-6 pointer-events-none text-left">
                                    <h3 className="text-white font-display font-medium drop-shadow-md">Looking Back</h3>
                                    <p className="text-yellow-400 text-xs mt-1 drop-shadow-sm font-semibold">#PriyadarshiniAlumni</p>
                                </div>
                            </div>

                            {/* Short Video 3 */}
                            <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-black border border-white/10 shadow-xl group cursor-pointer w-full max-w-sm mx-auto">
                                <iframe
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                                    src="https://www.youtube.com/embed/EiBK5u5bVDU?autoplay=1&mute=1&loop=1&playlist=EiBK5u5bVDU&controls=0&modestbranding=1&rel=0"
                                    title="Alumni Invitations"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                                <div className="absolute bottom-6 left-6 right-6 pointer-events-none text-left">
                                    <h3 className="text-white font-display font-medium drop-shadow-md">Alumni Invitations</h3>
                                    <p className="text-yellow-400 text-xs mt-1 drop-shadow-sm font-semibold">#JoinUs</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

