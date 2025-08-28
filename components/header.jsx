import Image from 'next/image';
import Link from 'next/link';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Projects', href: '/projects' },
    { linkText: 'About', href: '/about' },
    { linkText: 'Blog', href: '/blog' },
    { linkText: 'Contact', href: '/contact' },
];

export function Header() {
    return (
        <header className="bg-[#232946] border-b border-accent shadow-lg">
            <nav className="flex flex-wrap items-center gap-4 px-6 pt-6 pb-6 sm:pt-12 md:pb-12 max-w-6xl mx-auto">
                {!!navItems?.length && (
                    <ul className="flex flex-wrap gap-x-4 gap-y-1">
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
                )}
                <Link
                    href="https://github.com/Evowind"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto"
                >
                    <button className="bg-accent rounded-full p-2 hover:scale-110 transition shadow-lg">
                        <Image src={githubLogo} alt="GitHub logo" className="w-7 h-7" />
                    </button>
                </Link>
            </nav>
        </header>
    );
}