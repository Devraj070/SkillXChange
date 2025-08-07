'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleSignup = () => {
        if (name && email) {
            const newUser = { name, email };
            const existing = JSON.parse(localStorage.getItem('users') || '[]');
            existing.push(newUser);
            localStorage.setItem('users', JSON.stringify(existing));
            localStorage.setItem('user', JSON.stringify(newUser));
            router.push('/profile');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full mb-4 p-2 border rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 p-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    onClick={handleSignup}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Create Account
                </button>
            </div>
        </div>
    );
}