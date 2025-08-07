
// // import Navbar from '@/components/Navbar';
// // import React from 'react';

// // const demoUsers = [
// //     {
// //         id: 1,
// //         name: 'Sophie Laurent',
// //         title: 'French Language Tutor',
// //         location: 'Paris',
// //         rating: 5,
// //         reviews: 15,
// //         profileImg: 'https://randomuser.me/api/portraits/women/68.jpg',
// //         description:
// //             'Native French speaker and certified language instructor. I make learning French fun and practical for business...',
// //         offers: [
// //             { skill: 'French Teaching', level: 'expert' },
// //             { skill: 'Translation', level: 'expert' },
// //             { skill: 'Cultural Consulting', level: 'advanced' },
// //         ],
// //         lookingFor: ['Photography', 'Social Media Marketing'],
// //     },
// //     {
// //         id: 2,
// //         name: 'Alex Thompson',
// //         title: 'Full Stack Developer',
// //         location: 'San Francisco',
// //         rating: 4.9,
// //         reviews: 47,
// //         profileImg: 'https://randomuser.me/api/portraits/men/32.jpg',
// //         description:
// //             'Passionate full-stack developer with 6+ years of experience building scalable web applications. Love...',
// //         offers: [
// //             { skill: 'React', level: 'expert' },
// //             { skill: 'Node.js', level: 'advanced' },
// //             { skill: 'GraphQL', level: null },
// //         ],
// //         lookingFor: ['UI/UX Design', 'Digital Marketing'],
// //     },
// //     {
// //         id: 3,
// //         name: 'Jake Miller',
// //         title: 'Photographer',
// //         location: 'Portland',
// //         rating: 4.9,
// //         reviews: 41,
// //         profileImg: 'https://randomuser.me/api/portraits/men/12.jpg',
// //         description:
// //             'Professional photographer specializing in portraits and commercial work. Love teaching others the art of...',
// //         offers: [
// //             { skill: 'Portrait Photography', level: 'expert' },
// //             { skill: 'Photo Editing', level: 'advanced' },
// //             { skill: 'Lighting', level: 'expert' },
// //         ],
// //         lookingFor: ['Video Editing', 'Web Design'],
// //     },
// // ];

// // const SkillBadge = ({ skill, level }) => {
// //     const baseColor =
// //         level === 'expert'
// //             ? 'bg-orange-100 text-orange-800'
// //             : level === 'advanced'
// //                 ? 'bg-purple-100 text-purple-800'
// //                 : 'bg-blue-100 text-blue-800';

// //     return (
// //         <span
// //             className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2 inline-block ${baseColor} select-none`}
// //         >
// //             {skill} {level && <span className="text-[10px] font-normal ml-1">({level})</span>}
// //         </span>
// //     );
// // };

// // const Explore = () => {
// //     return (
// //         <>
// //             <Navbar />
// //             <div className="bg-gradient-to-b from-blue-800 to-indigo-950 min-h-screen px-6 py-12 pt-20">
// //                 <div className="max-w-7xl mx-auto">
// //                     {/* Filters */}
// //                     <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-12">
// //                         <input
// //                             type="text"
// //                             placeholder="🔍 Search Skills"
// //                             className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
// //                         />
// //                         <select className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-white">
// //                             <option>All Categories</option>
// //                         </select>
// //                         <select className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-white">
// //                             <option>All Locations</option>
// //                         </select>
// //                         <select className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-white">
// //                             <option>Highest Rated</option>
// //                         </select>
// //                     </div>

// //                     {/* Member Cards */}
// //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //                         {demoUsers.map((user) => (
// //                             <div
// //                                 key={user.id}
// //                                 className="bg-white rounded-xl p-7 shadow-md hover:shadow-xl transition-shadow flex flex-col h-full"
// //                             >
// //                                 <div className="flex items-center mb-5">
// //                                     <img
// //                                         src={user.profileImg}
// //                                         alt={user.name}
// //                                         className="w-16 h-16 rounded-full object-cover border-2 border-blue-400 mr-5"
// //                                     />
// //                                     <div className="flex-1">
// //                                         <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
// //                                         <p className="text-blue-600 font-medium">{user.title}</p>
// //                                         <p className="text-sm text-gray-500">{user.location}</p>
// //                                     </div>
// //                                     <div className="ml-auto text-yellow-500 font-bold text-lg flex items-center space-x-1">
// //                                         <span>⭐</span>
// //                                         <span>{user.rating.toFixed(1)}</span>
// //                                         <span className="text-gray-400 text-sm font-normal">({user.reviews})</span>
// //                                     </div>
// //                                 </div>

// //                                 <p className="text-gray-700 text-sm mb-6 line-clamp-3">{user.description}</p>

// //                                 <div className="mb-4">
// //                                     <p className="font-semibold text-gray-800 mb-2 uppercase tracking-wide text-xs">Offers:</p>
// //                                     <div className="flex flex-wrap">
// //                                         {user.offers.map((offer, i) => (
// //                                             <SkillBadge key={i} skill={offer.skill} level={offer.level} />
// //                                         ))}
// //                                     </div>
// //                                 </div>

// //                                 <div className="mb-6">
// //                                     <p className="font-semibold text-gray-800 mb-2 uppercase tracking-wide text-xs">Looking for:</p>
// //                                     <div className="flex flex-wrap">
// //                                         {user.lookingFor.map((tag, i) => (
// //                                             <span
// //                                                 key={i}
// //                                                 className="text-xs sm:text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full mr-2 mb-2 font-medium select-none"
// //                                             >
// //                                                 {tag}
// //                                             </span>
// //                                         ))}
// //                                     </div>
// //                                 </div>

// //                                 <div className="mt-auto flex justify-between items-center">
// //                                     <button className="text-blue-600 font-semibold hover:underline transition duration-200">
// //                                         View Profile
// //                                     </button>
// //                                     <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200">
// //                                         Connect
// //                                     </button>
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // };

// // export default Explore;



// import Navbar from '@/components/Navbar';
// import React from 'react';
// import demoUsers from '@/Data/DemoUsers';


// const SkillBadge = ({ skill, level }) => {
//     const baseColor =
//         level === 'expert'
//             ? 'bg-orange-100 text-orange-800'
//             : level === 'advanced'
//                 ? 'bg-purple-100 text-purple-800'
//                 : 'bg-blue-100 text-blue-800';

//     return (
//         <span
//             className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2 inline-block ${baseColor} select-none`}
//         >
//             {skill} {level && <span className="text-[10px] font-normal ml-1">({level})</span>}
//         </span>
//     );
// };

// const Explore = () => {
//     return (
//         <>
//             <Navbar />
//             <div className="bg-gradient-to-b from-blue-800 to-indigo-950 min-h-screen px-6 py-12 pt-20">
//                 <div className="max-w-7xl mx-auto">
//                     {/* Filters */}
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-12">
//                         <input
//                             type="text"
//                             placeholder="🔍 Search Skills"
//                             className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
//                         />
//                         <select className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-white">
//                             <option>All Categories</option>
//                         </select>
//                         <select className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-white">
//                             <option>All Locations</option>
//                         </select>
//                         <select className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-white">
//                             <option>Highest Rated</option>
//                         </select>
//                     </div>

//                     {/* Member Cards */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {demoUsers.map((user) => (
//                             <div
//                                 key={user.id}
//                                 className="bg-white rounded-xl p-7 shadow-md hover:shadow-xl transition-shadow flex flex-col h-full"
//                             >
//                                 <div className="flex items-center mb-5">
//                                     <img
//                                         src={user.profileImg}
//                                         alt={user.name}
//                                         className="w-16 h-16 rounded-full object-cover border-2 border-blue-400 mr-5"
//                                     />
//                                     <div className="flex-1">
//                                         <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
//                                         <p className="text-blue-600 font-medium">{user.title}</p>
//                                         <p className="text-sm text-gray-500">{user.location}</p>
//                                     </div>
//                                     <div className="ml-auto text-yellow-500 font-bold text-lg flex items-center space-x-1">
//                                         <span>⭐</span>
//                                         <span>{user.rating.toFixed(1)}</span>
//                                         <span className="text-gray-400 text-sm font-normal">({user.reviews})</span>
//                                     </div>
//                                 </div>

//                                 <p className="text-gray-700 text-sm mb-6 line-clamp-3">{user.description}</p>

//                                 <div className="mb-4">
//                                     <p className="font-semibold text-gray-800 mb-2 uppercase tracking-wide text-xs">Offers:</p>
//                                     <div className="flex flex-wrap">
//                                         {user.offers.map((offer, i) => (
//                                             <SkillBadge key={i} skill={offer.skill} level={offer.level} />
//                                         ))}
//                                     </div>
//                                 </div>

//                                 <div className="mb-6">
//                                     <p className="font-semibold text-gray-800 mb-2 uppercase tracking-wide text-xs">Looking for:</p>
//                                     <div className="flex flex-wrap">
//                                         {user.lookingFor.map((tag, i) => (
//                                             <span
//                                                 key={i}
//                                                 className="text-xs sm:text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full mr-2 mb-2 font-medium select-none"
//                                             >
//                                                 {tag}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 <div className="mt-auto flex justify-between items-center">
//                                     <button className="text-blue-600 font-semibold hover:underline transition duration-200">
//                                         View Profile
//                                     </button>
//                                     <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200">
//                                         Connect
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Explore;



'use client';
import React, { Suspense, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import demoUsers from '@/Data/DemoUsers';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const SkillBadge = ({ skill, level }) => {
    const baseColor =
        level === 'expert'
            ? 'bg-orange-100 text-orange-800'
            : level === 'advanced'
                ? 'bg-purple-100 text-purple-800'
                : 'bg-blue-100 text-blue-800';

    return (
        <span className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2 inline-block ${baseColor} select-none`}>
            {skill} {level && <span className="text-[10px] font-normal ml-1">({level})</span>}
        </span>
    );
};

const ExploreContent = () => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All Categories');
    const [location, setLocation] = useState('All Locations');
    const [sort, setSort] = useState('Highest Rated');
    const [filteredUsers, setFilteredUsers] = useState(demoUsers);
    const searchParams = useSearchParams();


    // Get unique categories and locations
    const allCategories = ['All Categories', ...new Set(demoUsers.flatMap(user => user.offers.map(offer => offer.skill)))];
    const allLocations = ['All Locations', ...new Set(demoUsers.map(user => user.location))];

    const paramId = searchParams.get('id') || searchParams.get('userId') || searchParams.get(''); // get the id from URL
    const paramUserId = paramId ? parseInt(paramId, 10) : null;

    const [selectedUserId, setSelectedUserId] = useState(demoUsers[0].id);

    useEffect(() => {
        if (paramUserId && demoUsers.some(u => u.id === paramUserId)) {
            setSelectedUserId(paramUserId);
        }
    }, [paramUserId]);



    useEffect(() => {
        let results = [...demoUsers];

        // Filter by search
        if (search.trim()) {
            results = results.filter(user =>
                user.offers.some(offer =>
                    offer.skill.toLowerCase().includes(search.toLowerCase())
                )
            );
        }

        // Filter by category
        if (category !== 'All Categories') {
            results = results.filter(user =>
                user.offers.some(offer => offer.skill === category)
            );
        }

        // Filter by location
        if (location !== 'All Locations') {
            results = results.filter(user => user.location === location);
        }

        // Sort by rating
        if (sort === 'Highest Rated') {
            results.sort((a, b) => b.rating - a.rating);
        } else if (sort === 'Lowest Rated') {
            results.sort((a, b) => a.rating - b.rating);
        }

        setFilteredUsers(results);
    }, [search, category, location, sort]);

    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-b from-blue-800 to-indigo-950 min-h-screen px-6 py-12 pt-20">
                <div className="max-w-7xl mx-auto">
                    {/* Filters */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-12">
                        <input
                            type="text"
                            placeholder="🔍 Search Skills"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-black"
                        />

                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-black"
                        >
                            {allCategories.map((cat, i) => (
                                <option key={i}>{cat}</option>
                            ))}
                        </select>

                        <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-black"
                        >
                            {allLocations.map((loc, i) => (
                                <option key={i}>{loc}</option>
                            ))}
                        </select>

                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transitio text-black"
                        >
                            <option>Highest Rated</option>
                            <option>Lowest Rated</option>
                        </select>
                    </div>

                    {/* Member Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user) => (
                                <div
                                    key={user.id}
                                    className="bg-white rounded-xl p-7 shadow-md hover:shadow-xl transition-shadow flex flex-col h-full"
                                >
                                    <div className="flex items-center mb-5">
                                        <img
                                            src={user.profileImg}
                                            alt={user.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-blue-400 mr-5"
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
                                            <p className="text-blue-600 font-medium">{user.title}</p>
                                            <p className="text-sm text-gray-500">{user.location}</p>
                                        </div>
                                        <div className="ml-auto text-yellow-500 font-bold text-lg flex items-center space-x-1">
                                            <span>⭐</span>
                                            <span>{user.rating.toFixed(1)}</span>
                                            <span className="text-gray-400 text-sm font-normal">({user.reviews})</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 text-sm mb-6 line-clamp-3">{user.description}</p>

                                    <div className="mb-4">
                                        <p className="font-semibold text-gray-800 mb-2 uppercase tracking-wide text-xs">Offers:</p>
                                        <div className="flex flex-wrap">
                                            {user.offers.map((offer, i) => (
                                                <SkillBadge key={i} skill={offer.skill} level={offer.level} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <p className="font-semibold text-gray-800 mb-2 uppercase tracking-wide text-xs">Looking for:</p>
                                        <div className="flex flex-wrap">
                                            {user.lookingFor.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs sm:text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full mr-2 mb-2 font-medium select-none"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-auto flex justify-between items-center">
                                        <Link href={`/explore-skills/${user.id}`} className="text-blue-600 font-semibold hover:underline transition duration-200">
                                            View Profile
                                        </Link>
                                        <Link href={`/messages?id=${user.id}`} className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200">
                                            Message
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-white text-lg font-medium col-span-full text-center">No matching users found.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};



export default function Explore() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ExploreContent />
        </Suspense>
    );
}
