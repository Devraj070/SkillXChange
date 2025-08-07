// import { FaUserPlus, FaSearch, FaExchangeAlt } from "react-icons/fa";

// const steps = [
//     {
//         icon: <FaUserPlus className="text-white text-3xl" />,
//         title: "Create Your Profile",
//         description:
//             "Showcase your skills, experience, and what you're looking to learn. Add portfolio items and set your availability.",
//         bgColor: "bg-blue-600",
//     },
//     {
//         icon: <FaSearch className="text-white text-3xl" />,
//         title: "Find Your Match",
//         description:
//             "Browse profiles, filter by skills and location. Our smart matching algorithm suggests perfect skill exchange partners.",
//         bgColor: "bg-purple-600",
//     },
//     {
//         icon: <FaExchangeAlt className="text-white text-3xl" />,
//         title: "Start Exchanging",
//         description:
//             "Connect through our messaging platform, schedule sessions, and begin your mutually beneficial skill exchange journey.",
//         bgColor: "bg-green-600",
//     },
// ];

// export default function HowItWorks() {
//     return (
//         <div className="bg-gray-50 py-16 px-4 text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">How It Works</h2>
//             <p className="text-gray-600 mb-12">
//                 Simple steps to start your skill exchange journey
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
//                 {steps.map((step, index) => (
//                     <div key={index} className="flex flex-col items-center">
//                         <div className={`w-20 h-20 flex items-center justify-center rounded-full ${step.bgColor} mb-6`}>
//                             {step.icon}
//                         </div>
//                         <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
//                         <p className="text-gray-600 text-sm max-w-xs">{step.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }



import { FaUserPlus, FaSearch, FaExchangeAlt } from "react-icons/fa";

const steps = [
    {
        icon: <FaUserPlus className="text-white text-3xl" />,
        title: "Create Your Profile",
        description:
            "Showcase your skills, experience, and what you're looking to learn. Add portfolio items and set your availability.",
        bgColor: "bg-blue-600",
    },
    {
        icon: <FaSearch className="text-white text-3xl" />,
        title: "Find Your Match",
        description:
            "Browse profiles, filter by skills and location. Our smart matching algorithm suggests perfect skill exchange partners.",
        bgColor: "bg-purple-600",
    },
    {
        icon: <FaExchangeAlt className="text-white text-3xl" />,
        title: "Start Exchanging",
        description:
            "Connect through our messaging platform, schedule sessions, and begin your mutually beneficial skill exchange journey.",
        bgColor: "bg-green-600",
    },
];

const popularSkills = [
    "Web Development",
    "Graphic Design",
    "Digital Marketing",
    "Video Editing",
    "UI/UX Design",
    "Copywriting",
    "Photography",
    "Public Speaking",
    "Mobile App Development",
    "Music Production",
];

export default function HowItWorks() {
    return (
        <div className="py-16 px-4 text-center  bg-blue-900 ">
            {/* How It Works */}
            <h2 className="text-3xl font-bold text-gray-50 mb-2">How It Works</h2>
            <p className="text-gray-100 mb-12">
                Simple steps to start your skill exchange journey
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className={`w-20 h-20 flex items-center justify-center rounded-full ${step.bgColor} mb-6`}>
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-50 mb-2">{step.title}</h3>
                        <p className="text-gray-300 text-sm max-w-xs">{step.description}</p>
                    </div>
                ))}
            </div>

            {/* Popular Skills */}
            <div className="mt-20">
                <h3 className="text-2xl font-bold text-green-100 mb-6">Popular Skills</h3>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {popularSkills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-white border border-gray-300 text-gray-800 text-sm font-medium py-2 px-4 rounded-full shadow-sm hover:bg-gray-100 transition"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
