"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Resume', href: '/resume' },
    { linkText: 'Projects', href: '/projects' },
    { linkText: 'Skills & Technologies', href: '/skills' },
    { linkText: 'Contact', href: '/contact' },
];

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#232946] border-b border-accent shadow-lg backdrop-blur-sm">
            <nav className="flex flex-wrap items-center justify-between px-6 py-4 max-w-6xl mx-auto">
                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-x-4">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-flex px-3 py-2 rounded-md text-primary-content hover:bg-accent hover:text-[#232946] transition font-medium"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Social & Menu Buttons */}
                <div className="flex items-center gap-2">
                    {/* GitHub Button */}
                    <Link
                        href="https://github.com/Evowind"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                    >
                        <button className="bg-accent rounded-full p-2 hover:scale-110 transition shadow-lg">
                            <Image src={githubLogo} alt="GitHub logo" className="w-7 h-7" />
                        </button>
                    </Link>

                    {/* LinkedIn Button */}
                    <Link
                        href="https://www.linkedin.com/in/samy-tadly/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                    >
                        <button className="bg-accent rounded-full p-2 hover:scale-110 transition shadow-lg">
                            <svg className="w-7 h-7 text-[#232946]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                            </svg>
                        </button>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden bg-accent rounded-md p-2 hover:scale-110 transition"
                    >
                        <span className="sr-only">Toggle menu</span>
                        <div className="w-5 h-0.5 bg-white mb-1 transition-transform" style={{ transform: menuOpen ? 'rotate(45deg) translateY(6px)' : '' }}></div>
                        <div className="w-5 h-0.5 bg-white mb-1" style={{ opacity: menuOpen ? 0 : 1 }}></div>
                        <div className="w-5 h-0.5 bg-white transition-transform" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : '' }}></div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {menuOpen && (
                    <ul className="flex flex-col gap-2 mt-4 w-full md:hidden bg-[#232946] px-4 py-2 rounded-md border border-accent shadow-lg absolute top-full left-0 right-0 z-40">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block px-3 py-2 rounded-md text-primary-content hover:bg-accent hover:text-[#232946] transition font-medium"
                                >
                                    {item.linkText}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    );
}