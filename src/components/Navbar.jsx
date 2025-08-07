// 'use client';
// import Link from 'next/link';
// import { FaFacebookMessenger } from "react-icons/fa6";
// import { FaRegUser } from "react-icons/fa";


// export default function Navbar() {
//     return (
//         <nav className="bg-indigo-800/50 shadow fixed w-full z-50">
//             <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//                 <Link href="/" className="text-2xl font-bold text-white">
//                     SkillXchange
//                 </Link>
//                 <div className="space-x-6">
//                     <Link href="/explore-skills" className="text-gray-200 hover:text-blue-600">
//                         Explore
//                     </Link>
//                     <Link href="/messages" className="text-gray-200 hover:text-blue-600">
//                         <FaFacebookMessenger className=" text-2xl inline mr-1" />
//                     </Link>
//                     <Link href="/profile" className="text-gray-200 hover:text-blue-600">
//                         <FaRegUser className="text-2xl inline mr-1" />
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     );
// }


'use client';
import Link from 'next/link';
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";


export default function Navbar() {
    return (
        <nav className="bg-indigo-800/50 shadow fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-white">
                    SkillXchangee
                </Link>
                <div className="space-x-6">
                    <Link href="/explore-skills" className="text-gray-200 hover:text-blue-600">
                        Explore
                    </Link>
                    <Link href="/messages" className="text-gray-200 hover:text-blue-600">
                        <FaFacebookMessenger className=" text-2xl inline mr-1" />
                    </Link>
                    <Link href="/profile" className="text-gray-200 hover:text-blue-600">
                        <FaRegUser className="text-2xl inline mr-1" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}