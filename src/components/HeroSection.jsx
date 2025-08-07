'use client';

import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-900 to-blue-900 pt-20">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div
                    className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
                    style={{ animationDelay: '1s' }}
                ></div>
                <div
                    className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
                    style={{ animationDelay: '2s' }}
                ></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-white/5" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/90 mb-8">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Connect • Learn • Grow
                </div> */}

                {/* Main heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                    Exchange Skills,
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                        Expand Horizons
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                    Connect with talented professionals worldwide. Trade expertise,
                    build meaningful relationships, and accelerate your career growth
                    through collaborative skill exchange.
                </p>

                {/* CTA buttons */}
                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <Link href={'/explore-skills'} className="group relative px-8 py-4 bg-white text-slate-900 font-semibold text-lg rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                        <span className="relative z-10 flex items-center">
                            🚀 Explore Skills
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </Link >

                    <Link href={'/messages'} className="px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                        Get Started
                    </Link>
                </div> */}


                <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
                    {/* Image */}
                    <div className="w-32 sm:w-48">
                        <img src="/logo.png" alt="Logo" className="w-full h-auto object-contain" />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/explore-skills"
                            className="group relative px-8 py-4 bg-white text-slate-900 font-semibold text-lg rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center">
                                🚀 Explore Skills
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        </Link>

                        <Link
                            href="/messages"
                            className="px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>


                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16 text-center">
                    <div className="group">
                        <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                            10K+
                        </div>
                        <div className="text-sm text-gray-400 uppercase tracking-wide">
                            Active Users
                        </div>
                    </div>
                    <div className="group">
                        <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                            500+
                        </div>
                        <div className="text-sm text-gray-400 uppercase tracking-wide">
                            Skills Categories
                        </div>
                    </div>
                    <div className="group">
                        <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                            95%
                        </div>
                        <div className="text-sm text-gray-400 uppercase tracking-wide">
                            Success Rate
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <p className="text-gray-400 mb-4">
                        Join thousands of professionals already growing their skills
                    </p>
                    <div className="flex justify-center items-center space-x-2">
                        <div className="flex -space-x-2">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-white/20 flex items-center justify-center text-xs text-white font-semibold"
                                >
                                    {String.fromCharCode(65 + i)}
                                </div>
                            ))}
                        </div>
                        <span className="text-sm text-gray-400 ml-3">+10,000 others</span>
                    </div>
                </div>
            </div>

            {/* Floating elements */}
            <div
                className="absolute top-20 left-10 w-20 h-20 border border-white/10 rounded-lg backdrop-blur-sm transform rotate-12 animate-bounce"
                style={{ animationDelay: '0s', animationDuration: '3s' }}
            ></div>
            <div
                className="absolute bottom-32 right-16 w-16 h-16 border border-white/10 rounded-full backdrop-blur-sm animate-bounce"
                style={{ animationDelay: '1s', animationDuration: '4s' }}
            ></div>
            <div
                className="absolute top-1/2 right-8 w-12 h-12 border border-white/10 rounded-lg backdrop-blur-sm transform -rotate-12 animate-bounce"
                style={{ animationDelay: '2s', animationDuration: '5s' }}
            ></div>
        </section>
    );
}