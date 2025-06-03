import childimg from '../assets/undraw_children_e6ln.svg';

// Placeholder mascot image (replace with actual mascot asset)

const QuizLaunch = ({ onStart }) => {
    return (
        <>
        <section className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl shadow-md max-w-md mx-auto mt-8 sm:text-xs md:text-base lg:text-lg xl:text-xl">
            <img
                src={childimg}
                alt="Mascot"
                className="w-20 h-20 mb-4"
            />
            <h2 className="sm:text-xs font-bold mb-2 md:text-2xl lg:text-lg xl:text-xl text-gray-800">
                Ready for Your Adventure?
            </h2>
            <p className="text-gray-600 mb-6 text-center ">
               “I'm here to guide you! Let's see what you've got!”
            </p>
            {/* Placeholder for progress bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full mb-6">
                <div className="h-3 bg-blue-400 rounded-full" style={{ width: '0%' }} />
            </div>
            <button
                onClick={onStart}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
                Start Your Adventure
            </button>
        </section>
        </>
    );
};

export default QuizLaunch;