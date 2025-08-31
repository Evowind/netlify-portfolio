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

                {/* GitHub Button */}
                <div className="flex items-center gap-2">
                    <Link
                        href="https://github.com/Evowind"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-accent rounded-full p-2 hover:scale-110 transition shadow-lg">
                            <Image src={githubLogo} alt="GitHub logo" className="w-7 h-7" />
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
