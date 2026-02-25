import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Play, CalendarDays, Award, BookOpen, Quote, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-24 border-b border-white/[0.05]">
          {/* Subtle grid and spot light for professional enterprise look */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-white/[0.03] blur-[120px] rounded-full"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <Link href="/news/jubilee" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-medium mb-8 hover:bg-white/10 transition-colors backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-yellow-500"></span>
                Announcing our Silver Jubilee Celebration
                <ChevronRight className="w-3 h-3 text-zinc-500" />
              </Link>
            </div>

            <h1 className="text-5xl md:text-[5.5rem] font-display tracking-tight text-white mb-6 leading-[1.05] font-semibold animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              Connect. Collaborate.<br />
              <span className="text-zinc-500 font-medium italic">Grow.</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
              Join our exclusive global network of distinguished alumni. Reconnect with old classmates, discover new career opportunities, and give back to your alma mater.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <Link href="/register" className="btn-primary w-full sm:w-auto">
                Join the Network
              </Link>
              <Link href="/directory" className="btn-outline w-full sm:w-auto">
                Explore Directory
              </Link>
            </div>

            {/* Minimalist Stats */}
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 animate-fade-in-up w-full" style={{ animationDelay: '0.5s', opacity: 0 }}>
              <Stat number="15k+" label="Global Alumni" />
              <Stat number="25" label="Years Excellence" />
              <Stat number="98%" label="Placement Rate" />
              <Stat number="50+" label="Global Chapters" />
            </div>
          </div>
        </section>

        {/* SILVER JUBILEE BANNER (Sophisticated) */}
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
                <Link href="/rsvp" className="btn-jubilee justify-center">
                  RSVP for the Gala
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/jubilee-details" className="btn-outline justify-center border-white/10 hover:border-white/20">
                  View Itinerary
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
              <div className="aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden relative border border-white/10 bg-[#0a0a0a] shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                {/* Clean geometric design */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>

                <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.1)_0%,transparent_60%)]"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-20">
                  <div className="text-[10rem] font-display font-medium text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent leading-none select-none">
                    25
                  </div>
                  <div className="absolute absolute-center">
                    <p className="text-yellow-500 font-mono tracking-[0.3em] uppercase text-xs mb-2">Dec 20—22, 2026</p>
                    <p className="text-white font-display text-2xl tracking-wide font-medium">SILVER JUBILEE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL VIDEO / TESTIMONIAL HYBRID */}
        <section className="py-32 bg-[#0a0a0a] border-t border-white/5 relative z-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <div className="relative group cursor-pointer w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-[#050505] border border-white/5 transition-all duration-500 hover:border-white/10">
              <div className="aspect-video relative">
                {/* Monochrome placeholder */}
                <div className="absolute inset-0 bg-zinc-900 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] mix-blend-screen opacity-50"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-500">
                  <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.1)] group-hover:scale-110 group-hover:bg-zinc-200 transition-all duration-500">
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black via-black/50 to-transparent text-left">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl font-display font-medium text-white mb-1">State of the College Address</h3>
                      <p className="text-zinc-400 text-sm">Dr. M. Priyadarshini • Principal</p>
                    </div>
                    <div className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-md border border-white/10 text-xs text-white font-medium">
                      04:15
                    </div>
                  </div>
                </div>
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
                  Latest Insights <span className="text-zinc-500 italic">& Updates</span>
                </h2>
                <p className="text-zinc-400 font-light">Stay informed with the latest milestones from our community, campus developments, and alumni achievements.</p>
              </div>
              <Link href="/news" className="btn-outline shrink-0 text-sm py-2.5 px-6">
                View All Directory
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <BentoCard
                date="Oct 12, 2026"
                collection="Campus"
                title="Alumni Scholarship Fund Surpasses Record Goal"
                className="lg:col-span-2"
              />
              <BentoCard
                date="Sep 28, 2026"
                collection="Achievement"
                title="Priyadarshini Robotics Team Wins National TechFest"
              />
              <StoryBento
                author="Sneha Reddy"
                role="Product Designer"
                batch="Class of 2012"
                content="Always miss the old campus library! It’s been 14 years but catching up with college mates here brings back golden memories. Looking forward to the gala."
              />
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
    <div className="flex flex-col items-start border-l border-white/10 pl-5">
      <div className="text-4xl font-display font-semibold text-white mb-1 tracking-tight">{number}</div>
      <div className="text-sm text-zinc-500 font-medium">{label}</div>
    </div>
  );
}

function BentoCard({ date, collection, title, className = "" }: { date: string; collection: string; title: string; className?: string }) {
  return (
    <Link href="#" className={`group flex flex-col justify-between p-8 glass-card bg-white/[0.01] hover:bg-white/[0.03] min-h-[240px] ${className}`}>
      <div className="flex justify-between items-start mb-12">
        <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">{collection}</span>
        <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
      </div>
      <div>
        <h3 className="text-2xl font-display font-medium text-zinc-200 mb-2 leading-snug group-hover:text-white transition-colors">{title}</h3>
        <p className="text-sm text-zinc-500">{date}</p>
      </div>
    </Link>
  );
}

function StoryBento({ author, role, batch, content }: { author: string; role: string; batch: string; content: string; }) {
  return (
    <div className="flex flex-col justify-between p-8 glass-card bg-[#050505] border-white/5 min-h-[240px]">
      <div className="mb-6">
        <Quote className="w-6 h-6 text-zinc-700 mb-4" />
        <p className="text-zinc-300 text-sm leading-relaxed font-light">"{content}"</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-zinc-800 shrink-0 overflow-hidden">
          <img src={`https://i.pravatar.cc/100?u=${author}`} alt="avatar" className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
        </div>
        <div>
          <h4 className="text-white text-sm font-medium">{author}</h4>
          <p className="text-xs text-zinc-500">{role}, {batch}</p>
        </div>
      </div>
    </div>
  );
}
