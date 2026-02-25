import Link from "next/link";
import Image from "next/image";
import { Menu, User, Calendar, Image as ImageIcon, MessageSquare, ShieldCheck } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="w-12 h-12 relative flex items-center justify-center">
                            <Image src="/logo.webp" alt="Priyadarshini Colleges Logo" fill className="object-contain" priority />
                        </div>
                        <div>
                            <span className="font-display font-bold text-xl tracking-tight text-white block leading-tight">Priyadarshini Colleges</span>
                            <span className="text-xs text-indigo-300 font-medium tracking-wider uppercase">Alumni Network</span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink href="/" label="Home" />
                        <NavLink href="/events" label="Events" icon={<Calendar className="w-4 h-4" />} />
                        <NavLink href="/directory" label="Directory" icon={<ShieldCheck className="w-4 h-4" />} />
                        <NavLink href="/community" label="Community" icon={<MessageSquare className="w-4 h-4" />} />
                        <NavLink href="/gallery" label="Gallery" icon={<ImageIcon className="w-4 h-4" />} />
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
                            Sign In
                        </Link>
                        <Link href="/register" className="btn-primary py-2.5 px-6 text-sm flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>Join Network</span>
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="text-slate-300 hover:text-white p-2">
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function NavLink({ href, label, icon }: { href: string; label: string; icon?: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-all duration-200 group relative"
        >
            {icon && <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors">{icon}</span>}
            <span>{label}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
        </Link>
    );
}
