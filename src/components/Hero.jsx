import  logo from "../assets/klimb-logo.jpg"

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[95vh] bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 overflow-hidden">
            {/* Playful background visuals */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200 rounded-full opacity-40 animate-bounce-slow blur-2xl" />
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-200 rounded-full opacity-30 animate-pulse blur-2xl" />
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-spin-slow blur-xl -translate-x-1/2 -translate-y-1/2" />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 py-12">
                <img
                    src={logo}
                    alt="KLIMB Mascot"
                    className="w-28 h-28 mb-6 animate-fade-in-up rounded-full shadow-lg"
                    style={{ animationDelay: "0.1s" }}
                />

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 animate-fade-in-up">
                Find Your Perfect Sport Match
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-2xl text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    Discover the perfect sport for you with our fun and easy quiz!
                </p>

                {/* Start Button */}
                <button
                    className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-blue-600 transition-all animate-fade-in-up"
                    style={{ animationDelay: "0.3s" }}
                    onClick={() => {
                        const quizSection = document.getElementById("quiz-section");
                        if (quizSection) {
                            quizSection.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                >
                    Start Your Quiz
                </button>
                </div>

                {/* Tailwind custom animations */}
            <style>
                {`
                    .animate-fade-in-up {
                        opacity: 0;
                        transform: translateY(30px);
                        animation: fadeInUp 0.8s forwards;
                    }
                    .animate-fade-in-up[style*="0.1s"] { animation-delay: 0.1s; }
                    .animate-fade-in-up[style*="0.2s"] { animation-delay: 0.2s; }
                    .animate-fade-in-up[style*="0.3s"] { animation-delay: 0.3s; }
                    @keyframes fadeInUp {
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    .animate-bounce-slow {
                        animation: bounceSlow 3s infinite alternate;
                    }
                    @keyframes bounceSlow {
                        0% { transform: translateY(0);}
                        100% { transform: translateY(-30px);}
                    }
                    .animate-spin-slow {
                        animation: spinSlow 10s linear infinite;
                    }
                    @keyframes spinSlow {
                        100% { transform: rotate(360deg);}
                    }
                `}
            </style>
        </section>
    );
};

export default Hero;