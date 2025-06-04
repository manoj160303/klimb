import React from "react";

const testimonials = [
    {
        name: "Parent of 8-year-old",
        quote: "Klimb has been a game-changer for my child! The coaches are amazing.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        sport: "Soccer",
    },
    {
        name: "High School Coach",
        quote: "Our team improved dramatically after using Klimb's training modules.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        sport: "Basketball",
    },
    {
        name: "Student Athlete",
        quote: "I love tracking my progress and learning new skills every week.",
        avatar: "https://randomuser.me/api/portraits/men/65.jpg",
        sport: "Tennis",
    },
    {
        name: "Parent of 12-year-old",
        quote: "The personalized feedback keeps my son motivated and engaged.",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        sport: "Swimming",
    },
];

const Testimonial = () => (
    <section className="py-12 bg-gray-50 min-h-[90vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((tests, idx) => (
                <div
                    className="bg-white rounded-xl shadow-md p-6 max-w-xs flex flex-col items-center text-center"
                    key={idx}
                >
                    <img
                        src={tests.avatar}
                        alt={tests.name}
                        className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-200"
                    />
                    <div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-1">{tests.name}</h4>
                        <p className="italic text-gray-600 mb-2">"{tests.quote}"</p>
                        {tests.sport && (
                            <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full mt-2">
                                {tests.sport}
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Testimonial;