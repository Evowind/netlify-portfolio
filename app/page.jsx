import Link from 'next/link';
import { Card } from 'components/card';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';
import { RandomQuote } from 'components/random-quote';

const introExplainer = `
Hi! I'm Samy, a developer and designer passionate about building impactful digital experiences.  
Welcome to my portfolio where I showcase my projects, insights, and creative journey.
`;

const philosophyExplainer = `
My approach combines creativity, precision, and problem-solving to design intuitive solutions.  
Each project is an opportunity to learn, innovate, and share my passion for technology.
`;

const quickLinks = [
    {
        title: 'Projects',
        description: 'See my computer vision, AI, and software engineering work.',
        href: '/projects',
    },
    {
        title: 'Blog',
        description: 'Read tutorials, insights, and thoughts on tech.',
        href: '/blog',
    },
    {
        title: 'About',
        description: 'Learn more about my background and experience.',
        href: '/about',
    },
    {
        title: 'Contact',
        description: 'Get in touch for collaboration or questions.',
        href: '/contact',
    },
];

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center text-center py-16 bg-gradient-to-br from-[#181c2a] via-[#232946] to-[#232946] rounded-xl shadow-lg">
                <h1 className="mb-4 text-5xl font-extrabold text-accent drop-shadow">Samy’s Computer Vision Portfolio</h1>
                <p className="mb-6 text-xl text-primary-content max-w-2xl">
                    Developer & designer dedicated to intuitive, impactful web experiences in AI and computer vision.
                </p>
                <Link href="/projects" className="btn btn-lg sm:min-w-64">
                    View My Work
                </Link>
            </section>

            {/* Quick Navigation Section */}
            <section>
                <h2 className="mb-6 text-2xl font-bold text-primary text-center">Explore My Work</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {quickLinks.map((link) => (
                        <Link href={link.href} key={link.title} className="group">
                            <div className="card flex flex-col items-center justify-center text-center py-8 hover:shadow-2xl transition cursor-pointer h-full">
                                <h3 className="text-lg font-semibold mb-2 text-accent group-hover:underline">{link.title}</h3>
                                <p className="text-primary-content text-sm">{link.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Random Quote Section */}
            <section className="bg-[#232946] rounded-xl p-8 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-accent text-center">Random fact about me!</h2>
                <RandomQuote />
            </section>

            {/* About Section */}
            <section>
                <Markdown content={introExplainer} />
            </section>

            {/* Netlify Context */}
            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Card title={`Netlify Context: running in ${ctx} mode.`}>
                        {ctx === 'dev' ? (
                            <p className="text-primary-content">Currently in development mode. Expect frequent updates as I refine my work.</p>
                        ) : (
                            <p></p>
                        )}
                    </Card>
                </section>
            )}

            {/* Portfolio Philosophy */}
            <section>
                <Markdown content={philosophyExplainer} />
            </section>
        </div>
    );
}
