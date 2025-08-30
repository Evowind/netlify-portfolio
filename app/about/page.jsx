import React from 'react';

export const metadata = {
    title: 'About',
};

export default function Page() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header Section */}
            <div className="mb-12">
                <h1 className="mb-4 text-4xl font-bold text-accent">About Me</h1>
                <p className="text-xl text-primary-content leading-relaxed">
                    Computer Science student and software developer with expertise in artificial intelligence, 
                    computer vision, and full-stack development. Passionate about building innovative solutions 
                    that bridge theoretical knowledge with practical applications.
                </p>
            </div>

            {/* Education Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Education</h2>
                <div className="card p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                            <h3 className="text-xl font-semibold text-accent mb-2">
                                Licence en Informatique (Bachelor's in Computer Science)
                            </h3>
                            <p className="text-primary-content mb-3">
                                French University • 2021 — Present
                            </p>
                        </div>
                        <div className="text-right">
                            <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                                Current Student
                            </span>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <h4 className="font-semibold text-primary mb-3">Core Coursework:</h4>
                            <ul className="space-y-2 text-primary-content">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">•</span>
                                    <span>Machine Learning & Artificial Intelligence</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">•</span>
                                    <span>Computer Vision & Image Processing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">•</span>
                                    <span>Data Structures & Algorithms</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">•</span>
                                    <span>Systems Programming (C/C++)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">•</span>
                                    <span>Web Development & Software developing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">•</span>
                                    <span>Database Systems & Architecture</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-primary mb-3">Specialized Areas:</h4>
                            <ul className="space-y-2 text-primary-content">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">•</span>
                                    <span>Argumentation Frameworks & Logic Systems</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">•</span>
                                    <span>Distributed Systems & DevOps</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">•</span>
                                    <span>Deep Learning & Neural Networks</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1">•</span>
                                    <span>Human-Computer Interaction</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Skills Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Technical Skills</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="card p-5">
                        <h3 className="font-semibold text-accent mb-4">Programming Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'C/C++', 'JavaScript', 'Java', 'PHP'].map((skill) => (
                                <span key={skill} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="card p-5">
                        <h3 className="font-semibold text-accent mb-4">AI & Machine Learning</h3>
                        <div className="flex flex-wrap gap-2">
                            {['OpenCV', 'PyTorch', 'Scikit-learn', 'TensorFlow', 'Deep Learning'].map((skill) => (
                                <span key={skill} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="card p-5">
                        <h3 className="font-semibold text-accent mb-4">Web & DevOps</h3>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Next.js', 'Docker', 'Kubernetes', 'MySQL', 'Laravel'].map((skill) => (
                                <span key={skill} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Highlights Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Key Achievements</h2>
                <div className="space-y-6">
                    <div className="card p-6">
                        <h3 className="text-lg font-semibold text-accent mb-2">Academic Projects</h3>
                        <p className="text-primary-content mb-4">
                            Completed 15+ technical projects ranging from advanced AI systems to full-stack web applications, 
                            demonstrating proficiency across multiple programming paradigms and technologies.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                                Computer Vision
                            </span>
                            <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                                AI/Logic Systems
                            </span>
                            <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                                Full-Stack Development
                            </span>
                        </div>
                    </div>
                    
                    <div className="card p-6">
                        <h3 className="text-lg font-semibold text-accent mb-2">Collaborative Work</h3>
                        <p className="text-primary-content mb-4">
                            Experienced in team-based development with multiple collaborative projects, 
                            including distributed systems, tournament management platforms, and advanced computer vision applications.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">
                                Team Leadership
                            </span>
                            <span className="text-xs bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full">
                                Version Control (Git)
                            </span>
                            <span className="text-xs bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full">
                                Agile Development
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Interests */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Professional Interests</h2>
                <div className="card p-6">
                    <p className="text-primary-content leading-relaxed mb-4">
                        My passion lies at the intersection of theoretical computer science and practical application development. 
                        I'm particularly interested in how artificial intelligence can solve real-world problems, 
                        from document processing automation to intelligent user interfaces.
                    </p>
                    <p className="text-primary-content leading-relaxed">
                        I enjoy the challenge of translating complex algorithms into efficient, user-friendly software solutions, 
                        and I'm always eager to explore emerging technologies in AI, computer vision, and distributed systems.
                    </p>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="text-center bg-gradient-to-r from-accent/5 to-accent/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Let's Connect</h2>
                <p className="text-primary-content mb-6 max-w-2xl mx-auto">
                    Interested in discussing technology, potential collaborations, or opportunities? 
                    I'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                        href="/contact" 
                        className="btn bg-accent hover:bg-accent-focus text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                        Get in Touch
                    </a>
                    <a 
                        href="/projects" 
                        className="btn bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                        View My Work
                    </a>
                </div>
            </section>
        </div>
    );
}