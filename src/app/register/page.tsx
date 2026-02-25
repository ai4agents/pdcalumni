import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Join Alumni Network | Priyadarshini Colleges',
    description: 'Register and join the Priyadarshini Colleges Alumni Network.',
};

export default function JoinNetworkPage() {
    return (
        <div className="min-h-screen flex flex-col pt-20 bg-[#0a0a0a]">
            <Navbar />

            <main className="flex-grow">
                {/* Header Section */}
                <section className="py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
                    <Image
                        src="/network.webp"
                        alt="Join Network Background"
                        fill
                        className="object-cover opacity-50 select-none z-0"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505] z-0"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.15)_0%,transparent_60%)] z-0"></div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-6 tracking-tight">
                            Join the <span className="text-yellow-500 italic">Network</span>
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Welcome back! Please fill out the registration form below to officially join the global Priyadarshini Alumni community.
                        </p>
                    </div>
                </section>

                {/* Embedded Google Form Section */}
                <section className="py-16 relative z-0">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 w-full min-h-[1000px] flex items-center justify-center">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSfLE3UntiGKxhYUXS9wnHCydBw8Ken78kEUR39zoaTTe8J_Gw/viewform?embedded=true"
                                width="100%"
                                height="1863"
                                frameBorder="0"
                                marginHeight={0}
                                marginWidth={0}
                                className="w-full"
                                title="Join Network Google Form"
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
