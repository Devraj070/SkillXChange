// 'use client';

// import { useEffect, useState } from 'react';
// import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';

// const defaultProfile = {
//     name: 'Debaraj Malik',
//     title: 'Full Stack Developer',
//     location: 'Bhubaneswar, India',
//     rating: 4.9,
//     reviews: 50,
//     phone: 5,
//     languagesSpoken: ['English', 'Hindi', 'Odia'],
//     contactEmail: 'debaraj@example.com',
//     profileImg: 'https://randomuser.me/api/portraits/men/75.jpg',
//     description: 'Passionate full stack developer skilled in React, Node.js, and MongoDB. Building user-focused apps with modern UX and performance.',
//     offers: [
//         { skill: 'React', level: 'Advanced' },
//         { skill: 'Node.js', level: 'Advanced' },
//         { skill: 'MongoDB', level: 'Intermediate' },
//         { skill: 'Tailwind CSS', level: 'Advanced' },
//     ],
//     lookingFor: ['Frontend Projects', 'Team Collaboration', 'Remote Work'],
// };

// export default function MyProfilePage() {
//     const [profile, setProfile] = useState(defaultProfile);
//     const [editMode, setEditMode] = useState(false);

//     useEffect(() => {
//         const stored = localStorage.getItem('myProfile');
//         if (stored) setProfile(JSON.parse(stored));
//     }, []);

//     const handleChange = (field, value) => {
//         setProfile(prev => {
//             const updated = { ...prev, [field]: value };
//             localStorage.setItem('myProfile', JSON.stringify(updated));
//             return updated;
//         });
//     };

//     const handleArrayChange = (field, value) => {
//         handleChange(field, value.split(',').map(str => str.trim()));
//     };

//     const handleSkillChange = (index, key, value) => {
//         const updatedSkills = [...profile.offers];
//         updatedSkills[index][key] = value;
//         handleChange('offers', updatedSkills);
//     };

//     const addSkill = () => {
//         handleChange('offers', [...profile.offers, { skill: '', level: '' }]);
//     };

//     const removeSkill = (index) => {
//         const updated = [...profile.offers];
//         updated.splice(index, 1);
//         handleChange('offers', updated);
//     };

//     return (
//         <div className="max-w-4xl mx-auto px-4 py-10">
//             <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
//                 {/* Header */}
//                 <div className="flex items-center justify-between">
//                     <h1 className="text-2xl font-bold">My Profile</h1>
//                     <button
//                         onClick={() => setEditMode(prev => !prev)}
//                         className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
//                     >
//                         {editMode ? (
//                             <>
//                                 <FaTimes /> Cancel
//                             </>
//                         ) : (
//                             <>
//                                 <FaEdit /> Edit
//                             </>
//                         )}
//                     </button>
//                 </div>

//                 {/* Profile Info */}
//                 <div className="flex items-start gap-6">
//                     <img
//                         src={profile.profileImg}
//                         alt="Profile"
//                         className="w-28 h-28 rounded-full border object-cover"
//                     />
//                     <div className="flex-1 space-y-2">
//                         {editMode ? (
//                             <>
//                                 <input
//                                     value={profile.name}
//                                     onChange={e => handleChange('name', e.target.value)}
//                                     className="text-xl font-semibold border-b w-full"
//                                 />
//                                 <input
//                                     value={profile.title}
//                                     onChange={e => handleChange('title', e.target.value)}
//                                     className="text-gray-600 w-full border-b"
//                                 />
//                                 <input
//                                     value={profile.location}
//                                     onChange={e => handleChange('location', e.target.value)}
//                                     className="text-sm w-full border-b"
//                                 />
//                             </>
//                         ) : (
//                             <>
//                                 <h2 className="text-xl font-semibold">{profile.name}</h2>
//                                 <p className="text-gray-600">{profile.title}</p>
//                                 <p className="text-sm text-gray-500">{profile.location}</p>
//                             </>
//                         )}
//                     </div>
//                 </div>

//                 {/* Description */}
//                 <div>
//                     <h3 className="font-medium text-gray-700">About</h3>
//                     {editMode ? (
//                         <textarea
//                             value={profile.description}
//                             onChange={e => handleChange('description', e.target.value)}
//                             className="w-full border p-2 rounded"
//                             rows={4}
//                         />
//                     ) : (
//                         <p className="text-gray-700">{profile.description}</p>
//                     )}
//                 </div>

//                 {/* Skills */}
//                 <div>
//                     <h3 className="font-medium text-gray-700 mb-2">Skills</h3>
//                     {editMode ? (
//                         <div className="space-y-2">
//                             {profile.offers.map((offer, idx) => (
//                                 <div key={idx} className="flex gap-2 items-center">
//                                     <input
//                                         placeholder="Skill"
//                                         value={offer.skill}
//                                         onChange={e => handleSkillChange(idx, 'skill', e.target.value)}
//                                         className="border px-2 py-1 w-1/2 rounded"
//                                     />
//                                     <input
//                                         placeholder="Level"
//                                         value={offer.level}
//                                         onChange={e => handleSkillChange(idx, 'level', e.target.value)}
//                                         className="border px-2 py-1 w-1/3 rounded"
//                                     />
//                                     <button onClick={() => removeSkill(idx)} className="text-red-500 text-sm">
//                                         ✕
//                                     </button>
//                                 </div>
//                             ))}
//                             <button onClick={addSkill} className="text-blue-600 text-sm">
//                                 + Add Skill
//                             </button>
//                         </div>
//                     ) : (
//                         <ul className="list-disc ml-6 text-gray-700">
//                             {profile.offers.map((s, i) => (
//                                 <li key={i}>
//                                     {s.skill} – <span className="text-sm text-gray-500">{s.level}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     )}
//                 </div>

//                 {/* Contact Info */}
//                 <div className="grid md:grid-cols-2 gap-4">
//                     <div>
//                         <h3 className="font-medium text-gray-700">Email</h3>
//                         {editMode ? (
//                             <input
//                                 value={profile.contactEmail}
//                                 onChange={e => handleChange('contactEmail', e.target.value)}
//                                 className="w-full border px-3 py-1 rounded"
//                             />
//                         ) : (
//                             <p>{profile.contactEmail}</p>
//                         )}
//                     </div>
//                     <div>
//                         <h3 className="font-medium text-gray-700">Languages</h3>
//                         {editMode ? (
//                             <input
//                                 value={profile.languagesSpoken.join(', ')}
//                                 onChange={e => handleArrayChange('languagesSpoken', e.target.value)}
//                                 className="w-full border px-3 py-1 rounded"
//                             />
//                         ) : (
//                             <p>{profile.languagesSpoken.join(', ')}</p>
//                         )}
//                     </div>
//                 </div>

//                 {/* Experience & Looking For */}
//                 <div className="grid md:grid-cols-2 gap-4">
//                     <div>
//                         <h3 className="font-medium text-gray-700">Experience</h3>
//                         {editMode ? (
//                             <input
//                                 type="number"
//                                 value={profile.phone}
//                                 onChange={e => handleChange('phone', parseInt(e.target.value))}
//                                 className="w-full border px-3 py-1 rounded"
//                             />
//                         ) : (
//                             <p>{profile.phone} years</p>
//                         )}
//                     </div>
//                     <div>
//                         <h3 className="font-medium text-gray-700">Looking For</h3>
//                         {editMode ? (
//                             <input
//                                 value={profile.lookingFor.join(', ')}
//                                 onChange={e => handleArrayChange('lookingFor', e.target.value)}
//                                 className="w-full border px-3 py-1 rounded"
//                             />
//                         ) : (
//                             <p>{profile.lookingFor.join(', ')}</p>
//                         )}
//                     </div>
//                 </div>

//                 {/* Save Button */}
//                 {editMode && (
//                     <div className="text-right">
//                         <button
//                             onClick={() => setEditMode(false)}
//                             className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//                         >
//                             <FaSave /> Save Changes
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }















'use client';

import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import defaultProfile from '@/Data/DefaultUser';



export default function MyProfilePage() {
    const [profile, setProfile] = useState(defaultProfile);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('myProfile');
        if (stored) setProfile(JSON.parse(stored));
    }, []);

    const handleChange = (field, value) => {
        setProfile(prev => {
            const updated = { ...prev, [field]: value };
            localStorage.setItem('myProfile', JSON.stringify(updated));
            return updated;
        });
    };

    const handleArrayChange = (field, value) => {
        handleChange(field, value.split(',').map(str => str.trim()));
    };

    const handleSkillChange = (index, key, value) => {
        const updatedSkills = [...profile.offers];
        updatedSkills[index][key] = value;
        handleChange('offers', updatedSkills);
    };

    const addSkill = () => {
        handleChange('offers', [...profile.offers, { skill: '', level: '' }]);
    };

    const removeSkill = (index) => {
        const updated = [...profile.offers];
        updated.splice(index, 1);
        handleChange('offers', updated);
    };

    return (
        <>
            <Navbar />
            <div className="px-4 py-20 min-h-screen bg-gradient-to-br from-blue-950 via-black to-indigo-950 p-4">
                <div className="bg-white shadow-lg rounded-xl p-6 space-y-8 border border-gray-200 max-w-5xl mx-auto ">

                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
                        <button
                            onClick={() => setEditMode(prev => !prev)}
                            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded bg-blue-100 text-blue-600 hover:bg-blue-200"
                        >
                            {editMode ? (
                                <>
                                    <FaTimes /> Cancel
                                </>
                            ) : (
                                <>
                                    <FaEdit /> Edit
                                </>
                            )}
                        </button>
                    </div>

                    {/* Basic Info */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <img
                            src={profile.profileImg}
                            alt="Profile"
                            className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
                        />
                        <div className="flex-1 space-y-2">
                            {editMode ? (
                                <>
                                    <input
                                        value={profile.name}
                                        onChange={e => handleChange('name', e.target.value)}
                                        className="w-full text-2xl font-semibold border-b outline-none text-black"
                                    />
                                    <input
                                        value={profile.title}
                                        onChange={e => handleChange('title', e.target.value)}
                                        className="w-full text-gray-600 border-b outline-none"
                                    />
                                    <input
                                        value={profile.location}
                                        onChange={e => handleChange('location', e.target.value)}
                                        className="w-full text-sm border-b outline-none text-black"
                                    />
                                </>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-semibold text-gray-900">{profile.name}</h2>
                                    <p className="text-gray-600">{profile.title}</p>
                                    <p className="text-sm text-gray-500">{profile.location}</p>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <section>
                        <h3 className="text-lg font-semibold text-gray-700 mb-1">About</h3>
                        {editMode ? (
                            <textarea
                                value={profile.description}
                                onChange={e => handleChange('description', e.target.value)}
                                className="w-full border p-3 rounded text-gray-700"
                                rows={4}
                            />
                        ) : (
                            <p className="text-gray-700">{profile.description}</p>
                        )}
                    </section>

                    {/* Skills */}
                    <section>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Skills</h3>
                        {editMode ? (
                            <div className="space-y-2 text-black">
                                {profile.offers.map((offer, idx) => (
                                    <div key={idx} className="flex gap-2 items-center">
                                        <input
                                            placeholder="Skill"
                                            value={offer.skill}
                                            onChange={e => handleSkillChange(idx, 'skill', e.target.value)}
                                            className="border px-2 py-1 w-1/2 rounded"
                                        />
                                        <input
                                            placeholder="Level"
                                            value={offer.level}
                                            onChange={e => handleSkillChange(idx, 'level', e.target.value)}
                                            className="border px-2 py-1 w-1/3 rounded"
                                        />
                                        <button onClick={() => removeSkill(idx)} className="text-red-500 text-lg font-bold">
                                            ×
                                        </button>
                                    </div>
                                ))}
                                <button onClick={addSkill} className="text-blue-600 text-sm mt-2">
                                    + Add Skill
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-wrap gap-3 ">
                                {profile.offers.map((s, i) => (
                                    <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                        {s.skill} - {s.level}
                                    </span>
                                ))}
                            </div>
                        )}
                    </section>

                    {/* Contact and Language */}
                    <section className="grid md:grid-cols-2 gap-6 text-black" >
                        <div>
                            <h3 className="font-medium text-gray-700">Email</h3>
                            {editMode ? (
                                <input
                                    value={profile.contactEmail}
                                    onChange={e => handleChange('contactEmail', e.target.value)}
                                    className="w-full border px-3 py-2 rounded"
                                />
                            ) : (
                                <p className="text-gray-800">{profile.contactEmail}</p>
                            )}
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-700">Languages</h3>
                            {editMode ? (
                                <input
                                    value={profile.languagesSpoken.join(', ')}
                                    onChange={e => handleArrayChange('languagesSpoken', e.target.value)}
                                    className="w-full border px-3 py-2 rounded"
                                />
                            ) : (
                                <p className="text-gray-800">{profile.languagesSpoken.join(', ')}</p>
                            )}
                        </div>
                    </section>

                    {/* Experience & Looking For */}
                    <section className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-medium text-gray-700">Phone</h3>
                            {editMode ? (
                                <input
                                    type="number"
                                    value={profile.phone}
                                    onChange={e => handleChange('phone', parseInt(e.target.value))}
                                    className="w-full border px-3 py-2 rounded text-black"
                                />
                            ) : (
                                <p className="text-gray-800">{profile.phone} </p>
                            )}
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-700">Looking For</h3>
                            {editMode ? (
                                <input
                                    value={profile.lookingFor.join(', ')}
                                    onChange={e => handleArrayChange('lookingFor', e.target.value)}
                                    className="w-full border px-3 py-2 rounded text-black"
                                />
                            ) : (
                                <p className="text-gray-800">{profile.lookingFor.join(', ')}</p>
                            )}
                        </div>
                    </section>

                    {/* Save Changes */}
                    {editMode && (
                        <div className="text-right">
                            <button
                                onClick={() => setEditMode(false)}
                                className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
                            >
                                <FaSave /> Save Changes
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
