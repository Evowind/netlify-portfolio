import React from 'react';

export const metadata = {
    title: 'Resume',
};

export default function ResumePage() {
    const experiences = [
        {
            title: 'Computer Science Student',
            company: 'French University',
            period: '2021 — Present',
            location: 'France',
            type: 'Education',
            description: 'Pursuing Bachelor\'s degree in Computer Science with specialization in AI and computer vision',
            achievements: [
                'Completed 15+ technical projects spanning AI, web development, and systems programming',
                'Demonstrated expertise in collaborative development through 8+ team projects',
                'Maintained strong academic performance while building diverse technical portfolio',
                'Specialized coursework in machine learning, computer vision, and distributed systems'
            ]
        }
        // Add more experiences here when available
    ];

    const projects = [
        {
            title: 'Argumentation Framework Solver',
            category: 'AI/Logic Systems',
            technologies: ['Python', 'Logic', 'Algorithms'],
            description: 'Advanced logical reasoning system implementing argumentation frameworks with multiple semantics',
            highlights: ['Complex algorithm implementation', 'Graph-based reasoning', 'Multiple semantic support']
        },
        {
            title: 'Document Layout Analysis',
            category: 'Computer Vision',
            technologies: ['Python', 'OpenCV', 'Deep Learning'],
            description: 'Computer vision project for document layout analysis using deep learning techniques',
            highlights: ['Collaborative development', 'OCR integration', 'Deep learning models']
        },
        {
            title: 'ShapeShifter Classifier',
            category: 'Computer Vision',
            technologies: ['C++', 'OpenCV', 'ML'],
            description: 'High-performance C++ machine learning classifier for shape recognition',
            highlights: ['Performance optimization', 'Real-time processing', 'Advanced algorithms']
        },
        {
            title: 'Distributed Programming Project',
            category: 'DevOps/Systems',
            technologies: ['Docker', 'Kubernetes', 'JavaScript'],
            description: 'Tournament management system with containerized deployment and microservices',
            highlights: ['Microservices architecture', 'Container orchestration', 'Team collaboration']
        }
    ];

    const skills = {
        'Programming Languages': ['Python', 'C/C++', 'JavaScript', 'Java', 'PHP'],
        'AI & Machine Learning': ['OpenCV', 'PyTorch', 'Scikit-learn', 'Deep Learning'],
        'Web Development': ['React', 'Next.js', 'Laravel', 'MySQL', 'Flask'],
        'DevOps & Systems': ['Docker', 'Kubernetes', 'Linux', 'Git']
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Header with Download Button */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
                <div>
                    <h1 className="text-4xl font-bold text-accent mb-2">Samy - Resume</h1>
                    <p className="text-lg text-primary-content">Computer Science Student & Software developer</p>
                    <p className="text-primary-content">Specializing in AI, Computer Vision & Full-Stack Development</p>
                </div>
                <button className="btn bg-accent hover:bg-accent-focus text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                </button>
            </div>

            {/* Professional Summary */}
            <section className="mb-10 card p-6">
                <h2 className="text-2xl font-bold text-primary mb-4">Professional Summary</h2>
                <p className="text-primary-content leading-relaxed">
                    Dedicated Computer Science student with comprehensive experience in artificial intelligence, 
                    computer vision, and full-stack development. Proven track record of delivering complex technical 
                    projects independently and collaboratively. Strong foundation in multiple programming languages 
                    with particular expertise in Python, C++, and JavaScript. Passionate about solving real-world 
                    problems through innovative software solutions and committed to continuous learning in emerging technologies.
                </p>
            </section>

            {/* Key Metrics */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-6">Key Achievements</h2>
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="card p-4 text-center">
                        <div className="text-3xl font-bold text-accent mb-2">15+</div>
                        <div className="text-sm text-primary-content">Technical Projects</div>
                        <div className="text-xs text-primary-content/70 mt-1">Individual & Collaborative</div>
                    </div>
                    <div className="card p-4 text-center">
                        <div className="text-3xl font-bold text-accent mb-2">5+</div>
                        <div className="text-sm text-primary-content">Programming Languages</div>
                        <div className="text-xs text-primary-content/70 mt-1">Production Experience</div>
                    </div>
                    <div className="card p-4 text-center">
                        <div className="text-3xl font-bold text-accent mb-2">8+</div>
                        <div className="text-sm text-primary-content">Collaborative Projects</div>
                        <div className="text-xs text-primary-content/70 mt-1">Team Development</div>
                    </div>
                    <div className="card p-4 text-center">
                        <div className="text-3xl font-bold text-accent mb-2">3+</div>
                        <div className="text-sm text-primary-content">Years Experience</div>
                        <div className="text-xs text-primary-content/70 mt-1">Continuous Development</div>
                    </div>
                </div>
            </section>

            {/* Education & Experience */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-6">Education & Experience</h2>
                <div className="space-y-6">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="card p-6">
                            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-accent mb-1">{exp.title}</h3>
                                    <div className="text-primary-content mb-2">
                                        <span className="font-medium">{exp.company}</span>
                                        {exp.location && <span className="text-primary-content/70"> • {exp.location}</span>}
                                    </div>
                                    <p className="text-primary-content text-sm mb-3">{exp.description}</p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <span className="text-primary-content font-medium">{exp.period}</span>
                                    <span className={`text-xs px-2 py-1 rounded-full ${
                                        exp.type === 'Education' ? 'bg-blue-500/20 text-blue-300' : 'bg-green-500/20 text-green-300'
                                    }`}>
                                        {exp.type}
                                    </span>
                                </div>
                            </div>
                            <ul className="space-y-2">
                                {exp.achievements.map((achievement, achievementIdx) => (
                                    <li key={achievementIdx} className="flex items-start gap-2 text-primary-content text-sm">
                                        <span className="text-accent mt-1 flex-shrink-0">•</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Projects */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-6">Featured Projects</h2>
                <div className="grid lg:grid-cols-2 gap-6">
                    {projects.map((project, idx) => (
                        <div key={idx} className="card p-5">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-semibold text-accent">{project.title}</h3>
                                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                                    {project.category}
                                </span>
                            </div>
                            <p className="text-primary-content text-sm mb-3">{project.description}</p>
                            
                            <div className="mb-3">
                                <div className="text-xs text-primary-content/70 mb-2">Key Highlights:</div>
                                <ul className="space-y-1">
                                    {project.highlights.map((highlight, hIdx) => (
                                        <li key={hIdx} className="flex items-start gap-2 text-xs text-primary-content">
                                            <span className="text-accent mt-0.5">•</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="flex flex-wrap gap-1">
                                {project.technologies.map((tech, techIdx) => (
                                    <span key={techIdx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-6">
                    <a href="/projects" className="text-accent hover:text-accent-focus font-semibold transition-colors">
                        View All Projects →
                    </a>
                </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-6">Technical Skills</h2>
                <div className="card p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        {Object.entries(skills).map(([category, skillList], idx) => (
                            <div key={idx}>
                                <h3 className="font-semibold text-accent mb-3">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillList.map((skill, skillIdx) => (
                                        <span key={skillIdx} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Languages & Additional Info */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-6">Additional Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="card p-5">
                        <h3 className="font-semibold text-accent mb-3">Languages</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-primary-content">French</span>
                                <span className="text-accent">Native</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-primary-content">English</span>
                                <span className="text-accent">Professional</span>
                            </div>
                        </div>
                    </div>
                    <div className="card p-5">
                        <h3 className="font-semibold text-accent mb-3">Interests</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Computer Vision', 'AI Research', 'Open Source', 'Game Development'].map((interest, idx) => (
                                <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="text-center bg-gradient-to-r from-accent/5 to-accent/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Let's Connect</h2>
                <p className="text-primary-content mb-6">
                    Interested in my background or potential collaboration opportunities?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                        href="/contact" 
                        className="btn bg-accent hover:bg-accent-focus text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                        Get in Touch
                    </a>
                    <a 
                        href="https://github.com/Evowind" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                        View GitHub
                    </a>
                </div>
            </section>
        </div>
    );
}