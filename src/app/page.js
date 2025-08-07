// 'use client';
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function HomePage() {
//   const router = useRouter();

//   useEffect(() => {
//     const user = localStorage.getItem('user');
//     if (!user) router.push('/signup');
//   }, [router]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-4xl font-bold mb-4">Skill Exchange Platform</h1>
//       <p className="text-lg text-gray-700 mb-8">
//         Connect, collaborate, and grow by exchanging your unique skills with others.
//       </p>
//       <a
//         href="/explore"
//         className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
//       >
//         Explore Skills
//       </a>
//     </div>
//   );
// }



'use client';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import Navbar from '@/components/Navbar';
import SuccessStories from '@/components/SuccessStories';
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <SuccessStories />
      <Footer />
    </div>
  );
}