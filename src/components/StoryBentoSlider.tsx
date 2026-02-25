"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const stories = [
    {
        author: "Sneha Reddy",
        role: "Product Designer",
        batch: "Class of 2012",
        content: "Always miss the old campus library! It’s been 14 years but catching up with college mates here brings back golden memories. Looking forward to the gala.",
    },
    {
        author: "Rahul Verma",
        role: "Software Engineer",
        batch: "Class of 2015",
        content: "The faculty here changed my life. The practical approach to learning has been the foundation of my career in tech.",
    },
    {
        author: "Anita Desai",
        role: "Marketing Manager",
        batch: "Class of 2018",
        content: "Priyadarshini wasn't just a college, it was a community. The fests, the late-night study sessions—I cherish every moment.",
    },
];

export default function StoryBentoSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextStory = () => {
        setCurrentIndex((prev) => (prev + 1) % stories.length);
    };

    const prevStory = () => {
        setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
    };

    const currentStory = stories[currentIndex];

    return (
        <div className="flex flex-col justify-between p-8 glass-card bg-[#050505] border-white/5 min-h-[240px] relative h-full">
            <div className="mb-6">
                <Quote className="w-6 h-6 text-zinc-700 mb-4" />
                <div className="min-h-[80px]">
                    <p className="text-zinc-300 text-sm leading-relaxed font-light animate-fade-in-up" key={currentIndex}>
                        "{currentStory.content}"
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 animate-fade-in-up" key={`author-${currentIndex}`}>
                    <div className="w-10 h-10 rounded-full bg-zinc-800 shrink-0 overflow-hidden">
                        <img
                            src={`https://i.pravatar.cc/100?u=${currentStory.author}`}
                            alt="avatar"
                            className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                        />
                    </div>
                    <div>
                        <h4 className="text-white text-sm font-medium">{currentStory.author}</h4>
                        <p className="text-xs text-zinc-500">{currentStory.role}, {currentStory.batch}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={prevStory}
                        className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                        aria-label="Previous story"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={nextStory}
                        className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                        aria-label="Next story"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
