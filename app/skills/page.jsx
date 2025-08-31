import React from 'react';

export const metadata = {
    title: 'Skills & Technologies',
};

export default function SkillsPage() {
    const skillCategories = [
        {
            category: 'Programming Languages',
            description: 'Core programming languages with hands-on project experience',
            skills: [
                { name: 'Python', level: 'Advanced', experience: '3+ years', projects: 8, description: 'AI/ML, computer vision, web scraping, data analysis' },
                { name: 'C/C++', level: 'Advanced', experience: '5+ years', projects: 4, description: 'Systems programming, performance-critical applications' },
                { name: 'JavaScript', level: 'Intermediate', experience: '2+ years', projects: 6, description: 'Full-stack web development, React, Node.js' },
                { name: 'Java', level: 'Advanced', experience: '5+ year', projects: 3, description: 'Object-oriented programming, game development' },
                { name: 'PHP', level: 'Intermediate', experience: '4+ year', projects: 3, description: 'Laravel framework, web applications, database integration' }
            ]
        },
        {
            category: 'AI & Machine Learning',
            description: 'Artificial intelligence and machine learning technologies',
            skills: [
                { name: 'OpenCV', level: 'Advanced', experience: '2+ years', projects: 5, description: 'Computer vision, image processing, real-time detection' },
                { name: 'Scikit-learn', level: 'Intermediate', experience: '3+ year', projects: 4, description: 'Classification, regression, clustering algorithms' },
                { name: 'PyTorch', level: 'Intermediate', experience: '1+ year', projects: 2, description: 'Deep learning, neural networks, model training' },
                { name: 'Deep Learning', level: 'Intermediate', experience: '1+ year', projects: 3, description: 'CNNs, document analysis, feature extraction' },
                { name: 'Logic Systems', level: 'Advanced', experience: '3+ year', projects: 1, description: 'Argumentation frameworks, logical reasoning' }
            ]
        },
        {
            category: 'Web Development',
            description: 'Frontend and backend web development technologies',
            skills: [
                { name: 'React/Next.js', level: 'Beginner', experience: '1+ year', projects: 3, description: 'Component-based UI, server-side rendering, modern React' },
                { name: 'Laravel', level: 'Intermediate', experience: '5+ year', projects: 2, description: 'MVC architecture, ORM, authentication systems' },
                { name: 'MySQL/PostgreSQL', level: 'Intermediate', experience: '5+ years', projects: 6, description: 'Database design, complex queries, optimization' },
                { name: 'HTML/CSS', level: 'Advanced', experience: '5+ years', projects: 8, description: 'Responsive design, modern CSS, accessibility' },
                { name: 'Flask', level: 'Beginner', experience: '1+ year', projects: 2, description: 'Python web framework, API development' }
            ]
        },
        {
            category: 'DevOps & Systems',
            description: 'Development operations and systems administration',
            skills: [
                { name: 'Docker', level: 'Intermediate', experience: '2+ year', projects: 3, description: 'Containerization, multi-stage builds, orchestration' },
                { name: 'Kubernetes', level: 'Beginner', experience: '6 months', projects: 1, description: 'Container orchestration, microservices deployment' },
                { name: 'Linux', level: 'Intermediate', experience: '4+ years', projects: 'Daily use', description: 'Command line, shell scripting, system administration' },
                { name: 'Git/GitHub', level: 'Advanced', experience: '5+ years', projects: 'All projects', description: 'Version control, collaboration, CI/CD workflows' },
                { name: 'Systems Programming', level: 'Intermediate', experience: '2+ years', projects: 2, description: 'Shell implementation, low-level programming' }
            ]
        }
    ];

    const getLevelColor = (level) => {
        switch (level) {
            case 'Advanced': return 'bg-green-500/20 text-green-300 border-green-500/30';
            case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
            case 'Beginner': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
            default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
        }
    };

    const getProgressWidth = (level) => {
        switch (level) {
            case 'Advanced': return 'w-5/6';
            case 'Intermediate': return 'w-2/3';
            case 'Beginner': return 'w-1/3';
            default: return 'w-1/4';
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            {/* Header */}
            <div className="mb-12">
                <h1 className="mb-4 text-4xl font-bold text-accent">Skills & Technologies</h1>
                <p className="text-lg text-primary-content leading-relaxed max-w-3xl">
                    Comprehensive overview of my technical expertise, experience levels, and practical applications 
                    across various programming languages, frameworks, and technologies.
                </p>
            </div>

            {/* Skills Overview Stats */}
            <section className="mb-12 grid md:grid-cols-4 gap-4">
                <div className="card p-4 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">15+</div>
                    <div className="text-sm text-primary-content">Technologies</div>
                </div>
                <div className="card p-4 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">5</div>
                    <div className="text-sm text-primary-content">Programming Languages</div>
                </div>
                <div className="card p-4 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">15+</div>
                    <div className="text-sm text-primary-content">Projects Completed</div>
                </div>
                <div className="card p-4 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">3+</div>
                    <div className="text-sm text-primary-content">Years Experience</div>
                </div>
            </section>

            {/* Skills Categories */}
            {skillCategories.map((category, idx) => (
                <section key={idx} className="mb-12">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-primary mb-2">{category.category}</h2>
                        <p className="text-primary-content">{category.description}</p>
                    </div>
                    
                    <div className="grid gap-6 lg:grid-cols-2">
                        {category.skills.map((skill, skillIdx) => (
                            <div key={skillIdx} className="card p-6 hover:shadow-xl transition-all duration-300">
                                {/* Skill Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-semibold text-accent">{skill.name}</h3>
                                    <span className={`text-xs px-3 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                                        {skill.level}
                                    </span>
                                </div>

                                {/* Progress Bar */}
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm text-primary-content mb-2">
                                        <span>Proficiency</span>
                                        <span>{skill.level}</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className={`bg-accent h-2 rounded-full transition-all duration-500 ${getProgressWidth(skill.level)}`}></div>
                                    </div>
                                </div>

                                {/* Skill Details */}
                                <div className="space-y-3">
                                    <p className="text-sm text-primary-content leading-relaxed">
                                        {skill.description}
                                    </p>
                                    
                                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="text-accent font-medium">Experience:</span>
                                            <span className="text-primary-content">{skill.experience}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-accent font-medium">Projects:</span>
                                            <span className="text-primary-content">{skill.projects}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}

            {/* Call to Action */}
            <section className="text-center bg-gradient-to-r from-accent/5 to-accent/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Want to See These Skills in Action?</h2>
                <p className="text-primary-content mb-6 max-w-2xl mx-auto">
                    Explore my portfolio to see how I apply these technologies to solve real-world problems 
                    and build innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                        href="/projects" 
                        className="btn bg-accent hover:bg-accent-focus text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                        View My Projects
                    </a>
                    <a 
                        href="/resume" 
                        className="btn bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                        Download Resume
                    </a>
                </div>
            </section>
        </div>
    );
}