import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";
import AchievementsGallery from "@/components/AchievementsGallery";

export const metadata = {
    title: "Achievements | Priyadarshini Colleges Alumni",
    description: "Celebrating the incredible milestones and achievements of our alumni community.",
};

export default function Achievements() {
    return (
        <div className="min-h-screen flex flex-col pt-20 bg-[#0a0a0a]">
            <Navbar />

            <main className="flex-grow">
                {/* Header Section */}
                <section className="py-24 border-b border-white/5 relative overflow-hidden bg-[#050505]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <div className="inline-flex items-center gap-2 text-blue-500/80 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            <Sparkles className="w-4 h-4" /> Hall of Fame
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-medium text-white mb-6 tracking-tight drop-shadow-lg">
                            Priyadarshini College <span className="text-blue-500 italic">Achievements</span>
                        </h1>
                    </div>
                </section>

                <AchievementsGallery />
            </main>

            <Footer />
        </div>
    );
}
