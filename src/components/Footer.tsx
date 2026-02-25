import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-white/5 text-zinc-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
                            <div className="w-16 h-16 relative flex items-center justify-center">
                                <Image src="/logo-a.webp" alt="Priyadarshini Colleges Logo" fill className="object-contain" />
                            </div>
                            <div>
                                <span className="font-display font-bold text-lg tracking-tight text-white block leading-tight">Priyadarshini Colleges</span>
                                <span className="text-[10px] text-zinc-500 font-medium tracking-wider uppercase">Alumni Network</span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6">
                            Priyadarshini Degree and PG Colleges Alumni Network. Connecting graduates, sharing memories, and building a stronger future together.
                        </p>
                        <div className="flex space-x-4">
                            <SocialIcon icon={<Facebook size={18} />} href="#" />
                            <SocialIcon icon={<Twitter size={18} />} href="#" />
                            <SocialIcon icon={<Linkedin size={18} />} href="#" />
                            <SocialIcon icon={<Instagram size={18} />} href="#" />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-display font-semibold text-white tracking-wide mb-6 uppercase text-sm">Quick Links</h3>
                        <ul className="space-y-4 text-sm">
                            <FooterLink href="/" label="Home" />
                            <FooterLink href="https://priyadarshinicolleges.com/" label="About Priyadarshini" />
                            <FooterLink href="/gallery" label="Photo Gallery" />
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-display font-semibold text-white tracking-wide mb-6 uppercase text-sm">Community</h3>
                        <ul className="space-y-4 text-sm">
                            <FooterLink href="/jubilee-details" label="Silver Jubilee Celebration" />
                            <FooterLink href="/login" label="Alumni Login" />
                            <FooterLink href="/register" label="Register as Alumni" />
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-display font-semibold text-white tracking-wide mb-6 uppercase text-sm">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-zinc-400 mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">Priyadarshini Degree & PG Colleges, Khammam & Kothagudem, Telangana</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                                <span>+91 9177237945</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                                <span>alumni@priyadarshini.edu.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
                    <p>&copy; {new Date().getFullYear()} Priyadarshini Colleges. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <Link href={href} className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200">
                {label}
            </Link>
        </li>
    );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
    return (
        <a
            href={href}
            className="w-8 h-8 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-md"
        >
            {icon}
        </a>
    );
}
