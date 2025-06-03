import React, { useRef ,useEffect} from "react";

const steps = [
    {
        title: "Discover Klimb",
        desc: "Learn about KLIMB and how it can help you find your sport.",
        icon: "🔍",
    },
    {
        title: "Take the Quiz",
        desc: "Answer a few questions to find your best sport matches.",
        icon: "📝",
    },
    {
        title: "Reveal Your Sport Matches",
        desc: "See which sports fit you best based on your answers.",
        icon: "🏅",
    },
    {
        title: "Visit an Academy",
        desc: "Explore nearby academies to start your journey.",
        icon: "🏫",
    },
    {
        title: "Track your Progress",
        desc: "Monitor your growth and achievements over time.",
        icon: "📈",
    },
];

const JourneyTrack = () => {
    const carouselRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const carousel = carouselRef.current;
            if (carousel) {
                // Scroll horizontally as user scrolls vertically
                carousel.scrollLeft = window.scrollY * 1.5; // Adjust multiplier as needed
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
    <section className="py-12 bg-gray-50 min-h-[95vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Your Journey with KLIMB</h2>
        <div
            ref={carouselRef}
            className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:overflow-x-auto md:overflow-y-hidden px-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 snap-x snap-mandatory transition-transform duration-300"
            style={{
                transform: `translateX(-${window.scrollY * 1.5}px)`,
                willChange: "transform"
            }}
        >
            {steps.map((step, idx) => (
                <div
                    className="min-w-[260px] bg-white rounded-xl shadow-md flex flex-col items-center p-6 transition-transform hover:scale-105 snap-start"
                    key={idx}
                >
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <div className="text-sm text-blue-500 font-semibold mb-1">Step {idx + 1}</div>
                    <div className="text-lg font-bold text-gray-700 mb-2 text-center">{step.title}</div>
                    <div className="text-gray-500 text-center">{step.desc}</div>
                </div>
            ))}
        </div>
    </section>
    );
};

export default JourneyTrack;