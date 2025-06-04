import childimg from '../assets/undraw_children_e6ln.svg';
import { useState } from 'react';
// import { motion } from 'framer-motion';

const questions = [
    {
        question: "Which activity sounds the most fun to you?",
        options: [
            "Running and racing with friends",
            "Solving tricky puzzles",
            "Dancing or moving to music",
            "Throwing or catching a ball"
        ],
        answer: 0,
    },
    {
        question: "Do you prefer being outdoors or indoors?",
        options: [
            "Outdoors – I love fresh air!",
            "Indoors – I like cozy spaces",
            "Both – I enjoy a mix",
            "Doesn't matter to me"
        ],
        answer: 2,
    },
    {
        question: "Which word describes you best?",
        options: [
            "Energetic",
            "Creative",
            "Focused",
            "Team player"
        ],
        answer: 3,
    },
    {
        question: "What do you enjoy more?",
        options: [
            "Working with a team",
            "Doing things on my own",
            "Trying new challenges",
            "Helping others"
        ],
        answer: 0,
    },
    {
        question: "Pick your favorite break-time activity:",
        options: [
            "Jumping rope",
            "Drawing or coloring",
            "Reading a book",
            "Playing catch"
        ],
        answer: 0,
    },
];

const getResultMessage = (score) => {
    if (score >= 4) return "You're a Creative Explorer!";
    if (score >= 2) return "You're a Curious Challenger!";
    return "You're a Team Spirit!";
};

const QuizLaunch = ({ onStart }) => {
    const [started, setStarted] = useState(false);
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleStart = () => {
        setStarted(true);
        if (onStart) onStart();
    };

    const handleOption = (index) => {
        setSelected(index);
    };

    const handleNext = () => {
        if (selected === questions[current].answer) {
            setScore(score + 1);
        }
        setSelected(null);
        if (current < questions.length - 1) {
            setCurrent(current + 1);
        } else {
            setFinished(true);
        }
    };

    const handleRestart = () => {
        setStarted(false);
        setCurrent(0);
        setSelected(null);
        setScore(0);
        setFinished(false);
    };

    const progress = started
        ? ((current + (finished ? 1 : 0)) / questions.length) * 100
        : 0;

    return (
        <section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl shadow-md max-w-md mx-auto mt-8 sm:text-xs md:text-base lg:text-lg xl:text-xl"
        >
            <img src={childimg} alt="Mascot" className="w-20 h-20 mb-4" />

            {!started && !finished && (
                <>
                    <h2 className="font-bold mb-2 md:text-2xl text-gray-800">
                        Ready for Your Adventure?
                    </h2>
                    <p className="text-gray-600 mb-6 text-center">
                        “I'm here to guide you! Let's see what you've got!”
                    </p>
                    <div className="w-full h-3 bg-gray-200 rounded-full mb-6">
                        <div className="h-3 bg-blue-400 rounded-full" style={{ width: '0%' }} />
                    </div>
                    <button
                        onClick={handleStart}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
                    >
                        Start Your Adventure
                    </button>
                </>
            )}

            {started && !finished && (
                <>
                    <h2 className="font-bold mb-2 text-gray-800">
                        {questions[current].question}
                    </h2>
                    <div className="flex flex-col w-full mb-6">
                        {questions[current].options.map((opt, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleOption(idx)}
                                className={`mb-2 py-2 px-4 rounded-lg border transition ${
                                    selected === idx
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-white text-gray-800 border-gray-300 hover:bg-blue-100'
                                }`}
                                disabled={selected !== null}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full mb-6">
                        <div
                            className="h-3 bg-blue-400 rounded-full transition-all"
                            style={{ width: `${progress}%`, transition: 'width 0.4s ease' }}
                        />
                    </div>
                    <button
                        onClick={handleNext}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
                        disabled={selected === null}
                    >
                        {current === questions.length - 1 ? 'Finish' : 'Next'}
                    </button>
                </>
            )}

            {finished && (
                <>
                    <h2 className="font-bold mb-2 text-gray-800">
                        Quiz Complete!
                    </h2>
                    <p className="text-gray-600 mb-2 text-center">
                        You scored {score} out of {questions.length}!
                    </p>
                    <p className="text-purple-700 font-semibold mb-4 text-center">
                        {getResultMessage(score)}
                    </p>
                    <div className="w-full h-3 bg-gray-200 rounded-full mb-6">
                        <div
                            className="h-3 bg-blue-400 rounded-full"
                            style={{ width: '100%', transition: 'width 0.4s ease' }}
                        />
                    </div>
                    <button
                        onClick={handleRestart}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
                    >
                        Restart Quiz
                    </button>
                </>
            )}
        </section>
    );
};

export default QuizLaunch;
