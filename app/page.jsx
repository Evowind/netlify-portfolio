import Link from 'next/link';
import { Card } from 'components/card';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';
import { RandomQuote } from 'components/random-quote';

const introExplainer = `
Hi! I'm Samy, a passionate software developer specializing in computer vision, artificial intelligence, and full-stack development.  
With expertise spanning from low-level systems programming to advanced machine learning, I build innovative solutions that bridge the gap between complex algorithms and practical applications.
`;

// Featured projects with real data from your portfolio
const featuredProjects = [
    {
        title: 'Argumentation Framework Solver',
        image: '/images/argumentation-solver.jpg',
        description: 'Advanced Python implementation of an argumentation framework solver for logical reasoning with multiple semantics support.',
        languages: ['Python', 'Logic', 'Algorithms'],
        href: '/projects',
        category: 'AI/Logic',
    },
    {
        title: 'Document Layout Analysis',
        image: '/images/document-layout.jpg',
        description: 'Computer vision project for document layout analysis using deep learning techniques and OCR integration.',
        languages: ['Python', 'OpenCV', 'Deep Learning'],
        href: '/projects',
        category: 'Computer Vision',
        collaborative: true
    },
    {
        title: 'ShapeShifter Classifier',
        image: '/images/shapeshifter.jpg',
        description: 'High-performance C++ machine learning classifier for real-time shape recognition and classification tasks.',
        languages: ['C++', 'OpenCV', 'ML'],
        href: '/projects',
        category: 'Computer Vision',
    }
];

const quickLinks = [
    {
        title: 'Projects',
        description: 'Explore my work in AI, computer vision, and software developing.',
        href: '/projects',
        icon: '🚀',
        count: '15+ projects'
    },
    {
        title: 'Resume',
        description: 'View my professional experience and skills.',
        href: '/resume',
        icon: '📝',
        count: 'Latest posts'
    },
    {
        title: 'About',
        description: 'Learn about my background, skills, and professional journey.',
        href: '/about',
        icon: '👨‍💻',
        count: 'My story'
    },
    {
        title: 'Contact',
        description: 'Connect for collaboration opportunities or technical discussions.',
        href: '/contact',
        icon: '📬',
        count: 'Get in touch'
    },
];

// Technical expertise areas
const expertiseAreas = [
    {
        title: 'Computer Vision',
        description: 'Advanced image processing, object detection, and deep learning models',
        icon: '👁️',
        technologies: ['OpenCV', 'PyTorch', 'YOLO', 'Deep Learning']
    },
    {
        title: 'Artificial Intelligence',
        description: 'Machine learning, logical reasoning, and algorithmic problem solving',
        icon: '🤖',
        technologies: ['Python', 'Scikit-learn', 'Logic Systems', 'Algorithms']
    },
    {
        title: 'Full-Stack Development',
        description: 'Modern web applications with robust backend architectures',
        icon: '💻',
        technologies: ['JavaScript', 'React', 'Next.js', 'PHP', 'MySQL']
    },
    {
        title: 'Systems & DevOps',
        description: 'Low-level programming, containerization, and cloud deployment',
        icon: '⚙️',
        technologies: ['C/C++', 'Docker', 'Kubernetes', 'Linux']
    }
];

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-16">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 rounded-2xl"></div>
                <div className="relative flex flex-col items-center justify-center text-center py-20 px-6">
                    <div className="max-w-4xl">
                        <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                            Samy's
                            <span className="block text-accent mt-2">Developer Portfolio</span>
                        </h1>
                        <p className="mb-8 text-lg sm:text-xl text-primary-content max-w-3xl mx-auto leading-relaxed">
                            Software developer specializing in <span className="text-accent font-semibold">Computer Vision</span>, 
                            <span className="text-accent font-semibold"> Artificial Intelligence</span>, and 
                            <span className="text-accent font-semibold"> Full-Stack Development</span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/projects" className="btn btn-lg px-8 py-3 bg-accent hover:bg-accent-focus text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                                View My Projects
                            </Link>
                            <Link href="/about" className="btn btn-lg px-8 py-3 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold rounded-xl transition-all duration-300">
                                Learn About Me
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Areas */}
                        <section>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-primary mb-4">Technical Expertise</h2>
                                <p className="text-primary-content max-w-2xl mx-auto">
                                    Specialized knowledge across multiple domains of software developing and computer science
                                </p>
                            </div>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                {expertiseAreas.map((area, idx) => (
                                    <div key={idx} className="card p-6 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer">
                                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {area.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3 text-accent group-hover:text-accent-focus transition-colors">
                                            {area.title}
                                        </h3>
                                        <p className="text-primary-content mb-4 text-sm leading-relaxed">
                                            {area.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1 justify-center">
                                            {area.technologies.slice(0, 3).map((tech, techIdx) => (
                                                <span key={techIdx} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                            {area.technologies.length > 3 && (
                                                <span className="text-xs bg-gray-500/20 text-gray-400 px-2 py-1 rounded-full">
                                                    +{area.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Featured Projects */}
                        <section>
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-primary mb-2">Featured Projects</h2>
                                    <p className="text-primary-content">Highlighting some of my most impactful work</p>
                                </div>
                                <Link href="/projects" className="text-accent hover:text-accent-focus font-semibold transition-colors flex items-center gap-2 no-underline">
                                    View All Projects
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="grid gap-8 lg:grid-cols-3">
                                {featuredProjects.map((project, idx) => (
                                    <Link href={project.href} key={idx} className="group no-underline">
                                        <div className="card overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                                            <div className="relative h-48 bg-gradient-to-br from-[#181c2a] to-[#232946] overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
                                                />
                                                {project.collaborative && (
                                                    <div className="absolute top-3 right-3 bg-blue-500/90 text-white px-2 py-1 rounded-md text-xs font-medium">
                                                        Collaborative
                                                    </div>
                                                )}
                                                <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs">
                                                    {project.category}
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-semibold mb-3 text-accent group-hover:text-accent-focus transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-primary-content mb-4 text-sm leading-relaxed">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.languages.slice(0, 3).map((lang, langIdx) => (
                                                        <span key={langIdx} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                                                            {lang}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* Quick Navigation */}
                        <section>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-primary mb-4">Explore My Work</h2>
                                <p className="text-primary-content max-w-2xl mx-auto">
                                    Navigate through different sections to learn more about my projects, thoughts, and background
                                </p>
                            </div>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                {quickLinks.map((link, idx) => (
                                    <Link href={link.href} key={link.title} className="group no-underline">
                                        <div className="card p-6 text-center hover:shadow-xl transition-all duration-300 h-full group-hover:border-accent/30">
                                            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                                {link.icon}
                                            </div>
                                            <h3 className="text-lg font-semibold mb-2 text-accent group-hover:text-accent-focus transition-colors">
                                                {link.title}
                                            </h3>
                                            <p className="text-primary-content text-sm mb-3 leading-relaxed">
                                                {link.description}
                                            </p>
                                            <span className="text-xs text-accent/80 font-medium">
                                                {link.count}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>

            {/* About Preview */}
            <section className="bg-gradient-to-r from-[#181c2a]/50 to-[#232946]/50 rounded-2xl p-8">
                <div className="max-w-4xl mx-auto">
                    <Markdown content={introExplainer} />
                    <div className="mt-8 text-center">
                        <Link href="/about" className="inline-flex items-center gap-2 text-accent hover:text-accent-focus font-semibold transition-colors">
                            Read more about my journey
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Random Quote Section */}
            <section className="bg-gradient-to-br from-accent/5 via-[#232946]/80 to-accent/10 rounded-2xl p-8 border border-accent/10">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-primary mb-2">Fun Fact</h2>
                    <p className="text-primary-content/80 text-sm">A little something about me.</p>
                </div>
                <RandomQuote />
            </section>

            {/* Netlify Context - Only show in development */}
            {ctx === 'dev' && (
                <section className="opacity-60">
                    <Card title={`Development Mode Active`}>
                        <p className="text-primary-content text-sm">
                            Portfolio is running in development mode. Features and content are subject to frequent updates.
                        </p>
                    </Card>
                </section>
            )}
        </div>
    );
}