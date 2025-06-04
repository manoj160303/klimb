import React from "react";
import logo from '../assets/klimb-logo.jpg';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const siteLinks = [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "Contact", href: "/contact" },
];

const socialLinks = [
    { name: "Twitter", href: "#", icon: <FaTwitter /> },
    { name: "Facebook", href: "#", icon: <FaFacebook /> },
    { name: "Instagram", href: "#", icon: <FaInstagram /> },
];

const Footer = () => (
    <footer className="bg-gray-900 text-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo & Tagline */}
            <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2">
                    <img
                        src={logo}
                        alt="Klimb Logo"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
                <span className="text-sm mt-2 text-gray-400">
                    Reach new heights with Klimb!
                </span>
            </div>

            <nav className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm">
                {siteLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="hover:text-blue-400 transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </nav>

            {/* Social Media */}
            <div className="flex items-center gap-4 text-2xl text-gray-400">
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        aria-label={social.name}
                        className="hover:text-blue-400 transition-colors"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            {/* Fun Stat */}
            <div className="mt-6 md:mt-0 flex flex-col items-center">
                <span className="text-2xl font-bold text-blue-400">1,234</span>
                <span className="text-xs text-gray-400">Users served 🚀</span>
            </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Klimb. All rights reserved.
        </div>
    </footer>
);

export default Footer;
