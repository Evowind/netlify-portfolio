import Link from 'next/link';
import { Card } from 'components/card';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';

const introExplainer = `
Hi! I'm Zack, a developer and designer passionate about building impactful digital experiences.  
Welcome to my portfolio where I showcase my projects, insights, and creative journey.
`;

const projectExplainer = `
Explore my work to see how I approach challenges, craft engaging user experiences, and build robust solutions.  
I hope my portfolio inspires you as much as my work inspires me.
`;

const featuredProjects = [
    {
        title: 'Object Detection App',
        image: '/images/object-detection.jpg',
        description: 'Real-time object detection using YOLOv8 and TensorFlow.js.',
        href: '/projects',
    },
    {
        title: 'Face Recognition System',
        image: '/images/face-recognition.jpg',
        description: 'Secure authentication with OpenCV and Flask.',
        href: '/projects',
    },
];

const quickLinks = [
    {
        title: 'Projects',
        description: 'See my computer vision, AI, and software engineering work.',
        href: '/projects',
        icon: '🗂️',
    },
    {
        title: 'Blog',
        description: 'Read tutorials, insights, and thoughts on tech.',
        href: '/blog',
        icon: '📝',
    },
    {
        title: 'About',
        description: 'Learn more about my background and experience.',
        href: '/about',
        icon: '👤',
    },
    {
        title: 'Contact',
        description: 'Get in touch for collaboration or questions.',
        href: '/contact',
        icon: '✉️',
    },
];

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center text-center py-16 bg-gradient-to-br from-[#181c2a] via-[#232946] to-[#232946] rounded-xl shadow-lg">
                <h1 className="mb-4 text-5xl font-extrabold text-accent drop-shadow">Zack’s Computer Vision Portfolio</h1>
                <p className="mb-6 text-xl text-primary-content max-w-2xl">
                    Developer & designer dedicated to intuitive, impactful web experiences in AI and computer vision.
                </p>
                <Link href="/projects" className="btn btn-lg sm:min-w-64">
                    View My Work
                </Link>
            </section>

            {/* Quick Navigation Section */}
            <section>
                <h2 className="mb-6 text-2xl font-bold text-primary text-center">Explore More</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {quickLinks.map((link) => (
                        <Link href={link.href} key={link.title} className="group">
                            <div className="card flex flex-col items-center justify-center text-center py-8 hover:shadow-2xl transition cursor-pointer h-full">
                                <span className="text-4xl mb-3">{link.icon}</span>
                                <h3 className="text-lg font-semibold mb-2 text-accent group-hover:underline">{link.title}</h3>
                                <p className="text-primary-content text-sm">{link.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Projects Preview */}
            <section>
                <h2 className="mb-6 text-2xl font-bold text-primary">Featured Projects</h2>
                <div className="grid gap-8 sm:grid-cols-2">
                    {featuredProjects.map((project, idx) => (
                        <Link href={project.href} key={idx} className="group">
                            <div className="card flex overflow-hidden hover:shadow-2xl transition">
                                <div className="w-1/3 bg-[#181c2a] flex items-center justify-center">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover h-full w-full group-hover:scale-105 transition"
                                        style={{ maxHeight: '140px' }}
                                    />
                                </div>
                                <div className="w-2/3 p-4 flex flex-col justify-center">
                                    <h3 className="text-lg font-semibold mb-2 text-accent">{project.title}</h3>
                                    <p className="text-primary-content">{project.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
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
                            <p className="text-primary-content">This portfolio is statically generated for optimal performance and reliability.</p>
                        )}
                    </Card>
                </section>
            )}

            {/* Portfolio Philosophy */}
            <section>
                <Markdown content={projectExplainer} />
            </section>
        </div>
    );
}