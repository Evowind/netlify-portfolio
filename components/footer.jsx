import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-[#232946] border-t border-accent mt-16 pt-8 pb-6 text-center text-primary-content shadow-lg">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-2">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Zack’s Portfolio. All rights reserved.
                </p>
                <p className="text-xs">
                    Built with <Link href="https://nextjs.org/" className="text-accent underline">Next.js</Link> &amp; <Link href="https://www.netlify.com/" className="text-accent underline">Netlify</Link>.
                </p>
                <p className="text-xs">
                    <Link href="https://github.com/Evowind" className="text-accent underline" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </Link>
                    {' | '}
                    <Link href="/contact" className="text-accent underline">
                        Contact
                    </Link>
                </p>
            </div>
        </footer>
    );
}