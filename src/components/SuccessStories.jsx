import Link from "next/link";
import React from "react";

const testimonials = [
    {
        name: "Sarah Johnson",
        title: "Web Developer",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        quote:
            "I traded my web development skills for professional photography lessons. Now I can capture my own product shots!",
        rating: 5,
    },
    {
        name: "Marcus Chen",
        title: "Graphic Designer",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        quote:
            "Learning Spanish from a native speaker in exchange for logo design has been incredibly rewarding.",
        rating: 5,
    },
    {
        name: "Emily Rodriguez",
        title: "Digital Marketer",
        image: "https://randomuser.me/api/portraits/women/46.jpg",
        quote:
            "The community here is amazing. I've learned video editing and made lasting professional connections.",
        rating: 4.5,
    },
];

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
        <div className="flex gap-1 mt-4">
            {Array.from({ length: fullStars }).map((_, i) => (
                <span key={i}>⭐</span>
            ))}
            {halfStar && <span>⭐️</span>}
        </div>
    );
};

export default function SuccessStories() {
    return (
        <section className=" bg-blue-900   py-16 px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white-">Success Stories</h2>
                <p className="text-gray-200 mt-2">
                    Real experiences from our community members
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {testimonials.map((t, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02]"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">{t.name}</p>
                                <p className="text-blue-600 text-sm">{t.title}</p>
                            </div>
                        </div>
                        <p className="italic text-gray-600">"{t.quote}"</p>
                        <StarRating rating={t.rating} />
                    </div>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                <Link href={'/explore-skills'} className="group relative px-8 py-4 bg-white text-slate-900 font-semibold text-lg rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center">
                        🚀 Explore Skills
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </Link >

                <Link href={'/messages'} className="px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                    Get Started
                </Link>
            </div>
        </section>
    );
}
