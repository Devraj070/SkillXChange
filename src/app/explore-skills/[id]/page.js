'use client';
import React, { useState } from 'react';
import demoUsers from '@/Data/DemoUsers';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export async function generateStatic() {
    return demoUsers.map((user) => ({
        id: user.id.toString(),
    }));
}

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState('skills');


    const tabs = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'reviews', label: 'Reviews' }
    ];

    const getSkillLevelColor = (level) => {
        switch (level) {
            case 'expert': return 'bg-green-100 text-green-800 border-green-200';
            case 'advanced': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };
    const params = useParams();
    const user = demoUsers.find((u) => u.id.toString() === params.id);

    if (!user) {
        return (
            <div className="p-10 text-center text-red-600 text-xl font-semibold">
                User not found.
            </div>
        );
    }

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-16">
                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
                    <div className="absolute inset-0 bg-black opacity-20"></div>

                    <div className="relative max-w-6xl mx-auto px-6 py-16">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            {/* Profile Image */}
                            <div className="relative">
                                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 p-1">
                                    <img
                                        src={user.profileImg}
                                        alt={user.name}
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className="flex-1 text-center lg:text-left text-white">
                                <h1 className="text-4xl lg:text-5xl font-bold mb-2">{user.name}</h1>
                                <p className="text-xl text-blue-100 mb-4">{user.title}</p>

                                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                                    <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span className="mr-2">📍</span>
                                        <span className="text-sm">{user.location}</span>
                                    </div>
                                    <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span className="mr-2">⭐</span>
                                        <span className="text-sm">{user.rating} ({user.reviews} reviews)</span>
                                    </div>
                                    <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span className="mr-2">💼</span>
                                        <span className="text-sm">{user.experienceYears}+ years</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                    <Link href={`/messages?id=${user.id}`} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                        💬 Start Exchange
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Quick Stats */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-4">Quick Info</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">🌍</span>
                                        <div>
                                            <p className="text-sm text-gray-900">Languages</p>
                                            <p className="font-medium">{user.languagesSpoken?.join(', ')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">📧</span>
                                        <div>
                                            <p className="text-sm text-gray-600">Email</p>
                                            <a href={`mailto:${user.contactEmail}`} className="font-medium text-blue-600 hover:underline">
                                                {user.contactEmail}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Skills Looking For */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                                    🔍 Looking to Learn
                                </h3>
                                <div className="space-y-2">
                                    {user.lookingFor.map((item, idx) => (
                                        <div key={idx} className="bg-purple-50 text-purple-700 px-3 py-2 rounded-lg text-sm font-medium border border-purple-200">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Tabs */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                                <div className="flex border-b border-gray-200">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex-1 px-6 py-4 text-sm font-medium transition-colors duration-200 ${activeTab === tab.id
                                                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>

                                <div className="p-8">
                                    {/* About Tab */}
                                    {activeTab === 'about' && (
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-4">About {user.name}</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">{user.description}</p>
                                        </div>
                                    )}

                                    {/* Skills Tab */}
                                    {activeTab === 'skills' && (
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Skills I Can Teach</h3>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {user.offers.map((offer, idx) => (
                                                    <div key={idx} className="group bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-105">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <h4 className="font-semibold text-gray-900">{offer.skill}</h4>
                                                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSkillLevelColor(offer.level)}`}>
                                                                {offer.level || 'beginner'}
                                                            </span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div
                                                                className={`h-2 rounded-full ${offer.level === 'expert' ? 'bg-green-500 w-full' :
                                                                    offer.level === 'advanced' ? 'bg-blue-500 w-4/5' :
                                                                        offer.level === 'intermediate' ? 'bg-yellow-500 w-3/5' :
                                                                            'bg-gray-400 w-2/5'
                                                                    }`}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Reviews Tab */}
                                    {activeTab === 'reviews' && (
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-6">What People Say</h3>
                                            {user.reviewComments?.length ? (
                                                <div className="space-y-6">
                                                    {user.reviewComments.map((rev, idx) => (
                                                        <div key={idx} className="bg-gradient-to-r from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                                                            <div className="flex items-center justify-between mb-3">
                                                                <div className="flex items-center">
                                                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                                                                        {rev.name.charAt(0)}
                                                                    </div>
                                                                    <div>
                                                                        <p className="font-semibold text-gray-900">{rev.name}</p>
                                                                        <div className="flex text-yellow-400 text-sm">
                                                                            {[...Array(5)].map((_, i) => (
                                                                                <span key={i}>
                                                                                    {i < Math.floor(rev.rating) ? '⭐' : '☆'}
                                                                                </span>
                                                                            ))}
                                                                            <span className="ml-1 text-gray-600">({rev.rating})</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="text-gray-700 leading-relaxed">{rev.comment}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="text-center py-12">
                                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                        💬
                                                    </div>
                                                    <p className="text-gray-500">No reviews yet. Be the first to exchange skills!</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        </>
    );
}

// Helper Section Component
function Section({ title, children }) {
    return (
        <div className="mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-1">
                {title}
            </h2>
            <div>{children}</div>
        </div>
    );
}
