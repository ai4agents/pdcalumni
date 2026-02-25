"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, User, Image as ImageIcon, Award, X } from "lucide-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="w-16 h-16 md:w-20 md:h-20 relative flex items-center justify-center">
                            <Image src="/logo-a.webp" alt="Priyadarshini Colleges Logo" fill className="object-contain" priority />
                        </div>
                        <div>
                            <span className="font-display font-bold text-xl tracking-tight text-white block leading-tight drop-shadow-md">Priyadarshini Colleges</span>
                            <span className="text-xs text-yellow-400 font-bold tracking-wider uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Alumni Network</span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink href="/" label="Home" />
                        <NavLink href="/jubilee-details" label="Silver Jubilee" icon={<Award className="w-4 h-4" />} />
                        <NavLink href="/gallery" label="Gallery" icon={<ImageIcon className="w-4 h-4" />} />
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/login" className="text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 drop-shadow-md">
                            Sign In
                        </Link>
                        <Link href="/register" className="btn-primary py-2.5 px-6 text-sm flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>Join Network</span>
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            className="text-white drop-shadow-md hover:text-yellow-400 p-2 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 absolute top-20 left-0 w-full shadow-2xl animate-fade-in-up">
                    <div className="px-4 py-6 flex flex-col gap-4">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white/90 font-medium py-2 px-4 hover:bg-white/5 rounded-lg transition-colors">
                            Home
                        </Link>
                        <Link href="/jubilee-details" onClick={() => setIsMobileMenuOpen(false)} className="text-white/90 font-medium py-2 px-4 hover:bg-white/5 rounded-lg transition-colors flex items-center gap-3">
                            <Award className="w-5 h-5 text-yellow-400" />
                            Silver Jubilee
                        </Link>
                        <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-white/90 font-medium py-2 px-4 hover:bg-white/5 rounded-lg transition-colors flex items-center gap-3">
                            <ImageIcon className="w-5 h-5 text-yellow-400" />
                            Gallery
                        </Link>
                        <div className="h-px bg-white/10 my-2 mx-4"></div>
                        <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-white/90 font-medium py-2 px-4 hover:bg-white/5 rounded-lg transition-colors">
                            Sign In
                        </Link>
                        <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary py-3 px-4 flex items-center justify-center gap-2 mt-2">
                            <User className="w-4 h-4" />
                            <span>Join Network</span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, label, icon }: { href: string; label: string; icon?: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-200 group relative drop-shadow-md"
        >
            {icon && <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{icon}</span>}
            <span>{label}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded-full drop-shadow-sm"></span>
        </Link>
    );
}
