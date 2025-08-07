import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & About */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-3">SkillXchange</h3>
                    <p className="text-gray-400">
                        Empowering individuals to exchange skills, grow together, and build a future of collaboration.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/#" className="hover:text-white">Explore Skills</a></li>
                        <li><a href="/#" className="hover:text-white">About Us</a></li>
                        <li><a href="/#" className="hover:text-white">Success Stories</a></li>
                        <li><a href="/#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Support</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/#" className="hover:text-white">Help Center</a></li>
                        <li><a href="/#" className="hover:text-white">FAQs</a></li>
                        <li><a href="/#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="/#" className="hover:text-white">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Social & Contact */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Connect With Us</h4>
                    <div className="flex gap-4 mb-4">
                        <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
                        <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
                        <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com/skillxchangee/" className="hover:text-pink-500"><FaInstagram /></a>
                    </div>
                    <p className="text-sm text-gray-400">Email: support@skillxchange.com</p>
                    <p className="text-sm text-gray-400">Phone: +91 98765 43210</p>
                </div>
            </div>

            <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} SkillXchange. All rights reserved.
            </div>
        </footer>
    );
}
