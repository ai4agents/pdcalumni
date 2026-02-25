import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarDays, MapPin } from "lucide-react";

export const metadata = {
    title: "Silver Jubilee Celebration | Priyadarshini Colleges Alumni",
    description: "Join us for our Silver Jubilee celebration honoring 25 years of excellence.",
};

export default function JubileeDetails() {
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
                            We are honored to invite you to the Priyadarshini Colleges 25th Anniversary Gala. Reconnect, reflect, and celebrate with the global alumni community.
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

                {/* Invitation Image Section */}
                <section className="py-16 md:py-24">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative isolate group cursor-none">
                            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#050505]">
                                {/* Maintain original aspect ratio, allowing Next.js Image to auto scale vertically */}
                                <Image
                                    src="/invite.webp"
                                    alt="Silver Jubilee Invitation"
                                    width={1600}
                                    height={2400}
                                    className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.01]"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Event Schedule Section */}
                <section className="py-20 md:py-32 relative overflow-hidden bg-[#0a0a0a]">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505] z-0"></div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight drop-shadow-lg">
                                Event <span className="text-yellow-500 italic">Schedule</span>
                            </h2>
                            <p className="text-zinc-400 text-lg md:text-xl font-medium">25 సంవత్సరాల పండుగ (27.02.2026 - 28.02.2026)</p>
                            <p className="text-zinc-500 mt-2">ఉదయం 10:00 గంటల నుండి ప్రారంభం...</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            {/* DAY 1 */}
                            <div className="glass-card bg-[#111]/80 border border-white/10 rounded-3xl p-8 hover:border-yellow-500/30 transition-colors shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors"></div>
                                <div className="inline-flex items-center gap-3 bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-8 border border-yellow-500/20">
                                    <CalendarDays className="w-4 h-4" />
                                    DAY-1: 27.02.2026 (శుక్రవారం)
                                </div>

                                <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-white/5">
                                    <ScheduleItem
                                        time="10:00 AM - 11:00 AM"
                                        title="Alumni Gathering (అన్ని పూర్వ విద్యార్థుల సమారోహం)"
                                        desc="కళాశాల సెమినార్ హాల్‌లో"
                                    />
                                    <ScheduleItem
                                        time="11:30 AM - 01:00 PM"
                                        title="Inauguration Program (ప్రారంభ కార్యక్రమం)"
                                        desc="అధ్యాపకులు మరియు విద్యార్థుల సమక్షంలో"
                                    />
                                    <div className="relative pl-10 border-l-2 border-transparent">
                                        <div className="text-yellow-500/50 text-sm font-medium tracking-widest uppercase">— విరామం (Break) —</div>
                                    </div>
                                    <ScheduleItem
                                        time="02:00 PM - 03:00 PM"
                                        title="Sharing Memories & Interaction (జ్ఞాపకాల పంచుకోలు)"
                                        desc="పూర్వ విద్యార్థుల కళాశాల జ్ఞాపకాల పంచుకోలు (విద్యార్థుల పరస్పర చర్చ)"
                                    />
                                    <ScheduleItem
                                        time="03:00 PM - 04:00 PM"
                                        title="Thought Seminar (ఆలోచనా సదస్సు)"
                                        desc="మెంటార్షిప్, ఇంటర్న్‌షిప్స్, వార్షిక సమావేశాలు చర్చ..."
                                    />
                                    <ScheduleItem
                                        time="04:00 PM - 05:00 PM"
                                        title="Conclusion & Group Photo (ముగింపు & గ్రూప్ ఫోటో)"
                                        desc=""
                                        isLast
                                    />
                                </div>
                            </div>

                            {/* DAY 2 */}
                            <div className="glass-card bg-[#111]/80 border border-white/10 rounded-3xl p-8 hover:border-yellow-500/30 transition-colors shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors"></div>
                                <div className="inline-flex items-center gap-3 bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-8 border border-yellow-500/20">
                                    <CalendarDays className="w-4 h-4" />
                                    DAY-2: 28.02.2026 (శనివారం)
                                </div>

                                <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-white/5">
                                    <ScheduleItem
                                        time="10:30 AM - 11:40 AM"
                                        title="Chairman's Message (చైర్మన్ గారి సందేశం)"
                                        desc="మన ప్రియదర్శిని విద్యాసంస్థల అధినేత మాన్య శ్రీ చైర్మన్ డా. కాటేపల్లి నవీన్ బాబు గారి విలువైన సందేశం....."
                                    />
                                    <ScheduleItem
                                        time="11:40 AM - 01:00 PM"
                                        title="Felicitations & Speeches (అభినందనలు & విలువైన ప్రసంగాలు)"
                                        desc="అత్యున్నత స్థాయి లో సాధించిన పూర్వ విద్యార్థుల అభినందనలు & విలువైన ప్రసంగాలు"
                                    />
                                    <div className="relative pl-10 border-l-2 border-transparent">
                                        <div className="text-yellow-500/50 text-sm font-medium tracking-widest uppercase">— విరామం (Break) —</div>
                                    </div>
                                    <ScheduleItem
                                        time="04:00 PM onwards"
                                        title="Jubilee Celebrations (సిల్వర్ జూబ్లీ వార్షికోత్సవ వేడుకల ప్రారంభం)"
                                        desc="సాయంత్రం 04:00 గంటల నుండి సాయంత్రం వేడుకల ప్రారంభం ప్రారంభం"
                                        isLast
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <p className="text-white text-xl font-medium tracking-tight mb-2 drop-shadow-sm border-t border-white/10 inline-block pt-8 px-12">ధన్యవాదాలు (Thank You)</p>
                            <p className="text-blue-500 text-sm hover:text-blue-400 transition-colors"><a href="https://pdcalumni.web.app" target="_blank" rel="noopener noreferrer">https://pdcalumni.web.app</a></p>
                        </div>
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

function ScheduleItem({ time, title, desc, isLast = false }: { time: string, title: string, desc: string, isLast?: boolean }) {
    return (
        <div className="relative pl-10 z-10 group/item">
            <div className={`absolute left-[3px] top-1.5 w-[18px] h-[18px] rounded-full bg-[#111] border-2 border-yellow-500/50 group-hover/item:border-yellow-500 group-hover/item:scale-110 transition-all z-10`}></div>
            <div className="text-yellow-500 font-mono text-sm font-medium tracking-wide mb-1 opacity-90">{time}</div>
            <h4 className="text-white text-base md:text-lg font-medium mb-1 drop-shadow-sm">{title}</h4>
            {desc && <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>}
        </div>
    );
}
