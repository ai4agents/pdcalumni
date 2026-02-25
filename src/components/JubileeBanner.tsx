"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function JubileeBanner() {
    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");

    useEffect(() => {
        // Target date: Feb 27, 2026
        const targetDate = new Date("2026-02-27T00:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setDays(String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'));
                setHours(String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'));
            } else {
                setDays("00");
                setHours("00");
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-6xl mx-auto rounded-2xl flex flex-col md:flex-row overflow-hidden bg-[#fafafa] shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/5 animate-fade-in-up md:h-[130px]">

            {/* Left Section - Title */}
            <div className="flex-1 px-8 py-8 md:px-12 flex items-center justify-center md:justify-start">
                <h2 className="text-[#a67c00] font-display text-2xl md:text-[2.2rem] font-bold leading-tight text-center md:text-left drop-shadow-sm tracking-tight">
                    Silver Jubilee<br />Celebrations
                </h2>
            </div>

            {/* Middle Section - Countdown */}
            <div className="flex-[1.2] flex flex-col items-center justify-center py-6 md:py-0 border-t md:border-t-0 md:border-l border-slate-200 shadow-[inset_10px_0_20px_rgba(0,0,0,0.02)]">
                <span className="text-[#030e2e] font-display font-semibold text-lg md:text-xl tracking-wide mb-1">Days to go</span>
                <div className="flex items-baseline justify-center gap-3 text-[#030e2e]">
                    <div className="text-4xl md:text-5xl font-black font-display tracking-tight drop-shadow-sm">{days}</div>
                    <div className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-80 mr-3">days</div>
                    <div className="text-4xl md:text-5xl font-black font-display tracking-tight drop-shadow-sm">{hours}</div>
                    <div className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-80">hrs</div>
                </div>
                <div className="mt-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Feb 27-28, 2026
                </div>
            </div>

            {/* Right Section - CTA (Desktop with slanted clip-path) */}
            <div
                className="hidden md:flex flex-[1.2] bg-[linear-gradient(135deg,#02081f_0%,#051547_100%)] items-center justify-center relative -ml-2"
                style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}
            >
                <Link href="/jubilee-details" className="bg-white text-[#051547] font-display font-bold text-lg px-8 py-3.5 rounded-xl hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-slate-100/50">
                    Details
                </Link>
            </div>

            <div className="md:hidden flex w-full bg-[#030b26] items-center justify-center py-8 border-t border-slate-700/50 shadow-inner">
                <Link href="/jubilee-details" className="bg-white text-[#030b26] font-display font-bold text-base px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors shadow-lg">
                    Details
                </Link>
            </div>

        </div >
    );
}
