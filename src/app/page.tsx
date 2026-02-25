import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Play, CalendarDays, Award, BookOpen, Quote, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import JubileeBanner from "@/components/JubileeBanner";
import StoryBentoSlider from "@/components/StoryBentoSlider";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-24 border-b border-white/[0.05]">
          {/* Image Background (IISc Alumni Style) */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            {/* Campus Image Placeholder */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat"></div>
            {/* Dark gradient overlay to ensure text remains perfectly readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-[#0a0a0a]/70 to-[#0a0a0a]"></div>
            {/* Subtle blue tint to match brand colors */}
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-color"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

            <h1 className="text-5xl md:text-[5.5rem] font-display tracking-tight text-white mb-6 leading-[1.05] font-bold drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              Connect. Collaborate.<br />
              <span className="text-[#ff3333] font-bold italic drop-shadow-[0_4px_16px_rgba(255,51,51,0.5)]">Grow.</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-medium animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.3s', opacity: 0 }}>
              Join our exclusive global network of distinguished alumni. Reconnect with old classmates, discover new career opportunities, and give back to your alma mater.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <Link href="/register" className="btn-primary w-full sm:w-auto">
                Join the Network
              </Link>
              <Link href="/jubilee-details" className="btn-outline w-full sm:w-auto">
                Silver Jubilee
              </Link>
            </div>

            {/* Minimalist Stats */}
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 animate-fade-in-up w-full" style={{ animationDelay: '0.5s', opacity: 0 }}>
              <Stat number="15k+" label="Global Alumni" />
              <Stat number="25" label="Years Excellence" />
              <Stat number="5" label="campuses" />
              <Stat number="50+" label="University ranks" />
            </div>
          </div>
        </section>

        {/* FLOATING JUBILEE BANNER FROM REFERENCE */}
        <div className="relative z-20 -mt-16 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
          <JubileeBanner />
        </div>

        {/* SILVER JUBILEE DETAILS (Sophisticated) */}
        <section className="relative py-32 bg-[#050505] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-yellow-500/80 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <Award className="w-4 h-4" /> Milestone Event
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 leading-tight tracking-tight">
                Celebrate 25 Years <br />
                <span className="text-zinc-500 italic font-light">of Excellence.</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed font-light max-w-lg">
                It's been 25 incredible years of academic excellence and memories at Priyadarshini Colleges. Join us for an unforgettable gala honoring our legacy, our faculty, and you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/jubilee-details" className="btn-jubilee justify-center">
                  More details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-zinc-800 flex items-center justify-center text-xs font-medium text-white overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-zinc-500 font-medium">Over 500+ alumni already confirmed.</p>
              </div>
            </div>

            <div className="relative isolate group cursor-pointer">
              <div className="aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden relative bg-[#0a0a0a] shadow-2xl transition-transform duration-700 hover:scale-[1.02] border border-white/5">
                <Image src="/25years.webp" alt="25 Years Silver Jubilee Celebration" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP MESSAGE VIDEO */}
        <section className="py-24 bg-[#0a0a0a] border-t border-white/5 relative z-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4 tracking-tight">
                A Message from <span className="text-blue-500 italic">Leadership</span>
              </h2>
              <p className="text-zinc-400 font-light max-w-2xl mx-auto">Hear from our leadership on the future of Priyadarshini Colleges and our alumni network.</p>
            </div>

            <div className="relative w-full max-w-4xl mx-auto rounded-[2rem] overflow-hidden bg-[#050505] border border-white/10 shadow-2xl">
              <div className="aspect-video relative bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full object-contain"
                  src="https://www.youtube.com/embed/YfLmuZxZau0?autoplay=1&mute=1&rel=0&modestbranding=1"
                  title="Leadership Message Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>
        </section>

        {/* NEWS & COMMUNITY SNAPSHOT (SaaS Style) */}
        <section className="py-32 bg-[#050505] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4 tracking-tight">
                  Latest Insights <span className="text-blue-500 italic">& Updates</span>
                </h2>
                <p className="text-zinc-400 font-light">Stay informed with the latest milestones from our community, campus developments, and alumni achievements.</p>
              </div>
              <Link href="/news" className="btn-outline shrink-0 text-sm py-2.5 px-6">
                View All Directory
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <BentoCard
                date="Feb 20, 2026"
                collection="Announcement"
                title="Priyadarshini college is getting ready for silver jublee celebrations"
                href="/jubilee-details"
                className="lg:col-span-2"
              />
              <BentoCard
                date="Sep 28, 2026"
                collection="Achievement"
                title="Priyadarshini college poineering the degree education in Khammam & Kothagudem"
                href="/achievements"
              />
              <StoryBentoSlider />
              <BentoCard
                date="Aug 15, 2026"
                collection="Infrastructure"
                title="Campus Science Block Upgrades Now Complete"
                className="lg:col-span-2 bg-[#080808]"
              />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

// Subcomponents for Professional Redesign

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col items-start border-l border-white/20 pl-5 bg-black/20 backdrop-blur-sm py-2 pr-4 rounded-r-lg">
      <div className="text-4xl font-display font-bold text-white mb-1 tracking-tight drop-shadow-md">{number}</div>
      <div className="text-sm text-blue-100 font-medium tracking-wide">{label}</div>
    </div>
  );
}

function BentoCard({ date, collection, title, href = "#", className = "" }: { date: string; collection: string; title: string; href?: string; className?: string }) {
  return (
    <Link href={href} className={`group flex flex-col justify-between p-8 glass-card bg-white/[0.01] hover:bg-white/[0.03] min-h-[240px] ${className}`}>
      <div className="flex justify-between items-start mb-12">
        <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">{collection}</span>
        <ArrowRight className="w-5 h-5 text-blue-600 group-hover:text-blue-400 transition-colors" />
      </div>
      <div>
        <h3 className="text-2xl font-display font-medium text-zinc-200 mb-2 leading-snug group-hover:text-white transition-colors">{title}</h3>
        <p className="text-sm text-zinc-500">{date}</p>
      </div>
    </Link>
  );
}
