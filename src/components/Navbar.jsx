import React from 'react';

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

    return (
        <nav className="sticky top-0 w-full bg-white shadow-md z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-6">
                <div className="font-bold text-2xl tracking-wider text-gray-800">
                    KLIMB
                </div>
                <ul className="flex list-none gap-8 m-0 p-0 items-center">
                    <li>
                        <a
                            href="#home"
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
        </nav>
    );
};

export default Navbar;