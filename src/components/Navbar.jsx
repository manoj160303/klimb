import  { useState } from 'react';
import  logo from "../assets/klimb-logo.jpg"
const Navbar = ({ onGetStartedClick }) => {
    // Scroll to quiz section by id
    const handleGetStarted = (e) => {
        e.preventDefault();
        if (onGetStartedClick) {
            onGetStartedClick();
        } else {
            const quizSection = document.getElementById('quiz-section');
            if (quizSection) {
                quizSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 w-full bg-white shadow-md z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-6">
                <div className="font-bold text-2xl tracking-wider shadow-gray-600 flex items-center">
                    <img src={logo} className="w-12 h-12 rounded-full shadow-lg" alt="" />
                </div>
                {/* Hamburger menu button */}
                <button
                    className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-0.5 w-6 bg-gray-800 mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-gray-800 mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
                {/* Desktop menu */}
                <ul className="hidden lg:flex list-none gap-8 m-0 p-0 items-center">
                    <li>
                        <a
                            href="/"
                            className="no-underline text-gray-800 font-medium text-base transition-colors duration-200 hover:text-blue-600"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#how-it-works"
                            className="no-underline text-gray-800 font-medium text-base transition-colors duration-200 hover:text-blue-600"
                        >
                            How It Works
                        </a>
                    </li>
                    <li>
                        <a
                            href="#tracker"
                            className="no-underline text-gray-800 font-medium text-base transition-colors duration-200 hover:text-blue-600"
                        >
                            Tracker
                        </a>
                    </li>
                    <li>
                        <a
                            href="#testimonials"
                            className="no-underline text-gray-800 font-medium text-base transition-colors duration-200 hover:text-blue-600"
                        >
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a
                            href="#quiz-section"
                            className="no-underline bg-blue-600 text-white px-5 py-2 rounded-md font-semibold transition-colors duration-200 hover:bg-blue-700"
                            onClick={handleGetStarted}
                        >
                            Get Started
                        </a>
                    </li>
                </ul>
            </div>
            {/* Mobile menu */}
            {menuOpen && (
                <ul className="flex flex-col items-center  gap-4 px-6 pb-4 lg:hidden bg-white shadow-md">
                    <li>
                        <a
                            href="#home"
                            className="no-underline text-gray-800 font-medium text-base transition-colors duration-200 hover:text-blue-600"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#how-it-works"
                            className="no-underline text-gray-800 font-medium text-base transition-colors duration-200 hover:text-blue-600"
                            onClick={() => setMenuOpen(false)}
                        >
                            How It Works
                        </a>
                    </li>
                    <li>
                        <a
                            href="#tracker"
                            className="no-underline text-gray-800 font-medium text-base transition-colors duration-200 hover:text-blue-600"
                            onClick={() => setMenuOpen(false)}
                        >
                            Tracker
                        </a>
                    </li>
                    <li>
                        <a
                            href="#testimonials"
                            className="no-underline text-gray-800 font-medium text-base transition-colors duration-200 hover:text-blue-600"
                            onClick={() => setMenuOpen(false)}
                        >
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a
                            href="#quiz-section"
                            className="no-underline bg-blue-600 text-white px-5 py-2 rounded-md font-semibold transition-colors duration-200 hover:bg-blue-700"
                            onClick={e => {
                                handleGetStarted(e);
                                setMenuOpen(false);
                            }}
                        >
                            Get Started
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;