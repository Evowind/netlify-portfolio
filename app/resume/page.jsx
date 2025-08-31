import React from 'react';

export const metadata = {
    title: 'Resume',
};

export default function ResumePage() {
    const experiences = [
        {
            title: 'React Native Web & Mobile Developer',
            company: 'ondrh',
            period: 'May 2024 — Jun 2024',
            location: 'Paris, France',
            type: 'Work',
            description: 'Developed mobile and web applications using React Native & TypeScript.',
            achievements: [
                'Implemented responsive UI components for both mobile and web',
                'Integrated APIs for data-driven features',
                'Collaborated in a fast-paced team environment'
            ]
        },
        {
            title: "Master in Computer Science - Vision & Machine Intelligence",
            company: "Université Paris Cité",
            period: "2024 — Present",
            location: "Paris, France",
            type: "Education",
            description: "Pursuing a Master’s degree in Computer Science at UFR de mathématiques et informatique.",
            coursework: [
            "Machine Learning & Artificial Intelligence",
            "Computer Vision & Image Processing",
            "Optimization & Data Mining",
            "Advanced Algorithms"
            ],
            specializations: [
            "Deep Learning & Neural Networks",
            "Pattern Recognition & Image Analysis",
            "Intelligent Systems"
            ]
        },
                {
            title: "Bachelor in Computer Science",
            company: "Université Paris-Est Créteil (UPEC)",
            period: "2021 — 2024",
            location: "France",
            type: "Education",
            description: "Completed Bachelor’s degree in Computer Science.",
            coursework: [
            "Data Structures & Algorithms",
            "Systems Programming (C, C++)",
            "Database Systems & Architecture",
            "Web Development & Software Engineering"
            ],
            specializations: [
            "Argumentation Frameworks & Logic Systems",
            "Distributed Systems & DevOps",
            "Human-Computer Interaction"
            ]
        }
        ];

    const skills = {
        'Programming Languages': ['Java', 'OCaml', 'C', 'PHP', 'TypeScript', 'JavaScript'],
        'Web & Mobile Development': ['React Native', 'Laravel', 'HTML', 'Bootstrap', 'MySQL', 'SQLite'],
        'Systems & Tools': ['Linux', 'Concurrent Programming (Java)', 'Git'],
        'Core Competencies': ['Algorithm Analysis', 'Pattern Recognition']
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
                                I am a Computer Science student at Université Paris Cité with a strong foundation in programming 
                                (Java, C, OCaml, PHP) and experience in mobile and full-stack development. My background spans 
                                algorithm analysis, system design, and web technologies. I have professional experience as a 
                                React Native developer and continue to expand my expertise in modern software engineering practices.
                            </p>
                        </section>
                        {/* Experience Section */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-primary mb-6">Experience</h2>
                            <div className="space-y-6">
                                {experiences.filter(exp => exp.type === 'Work').map((exp, idx) => (
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
                                                <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300">
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
                        {/* Education Section */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-primary mb-6">Education</h2>
                            {experiences.filter(exp => exp.type === 'Education').map((edu, idx) => (
                                <div key={idx} className="card p-6 mb-6">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-accent mb-2">{edu.title}</h3>
                                            <p className="text-primary-content mb-3">
                                                {edu.company} • {edu.period}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                                                {edu.period.includes('Present') ? 'Current Student' : 'Completed'}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                                        <div>
                                            <h4 className="font-semibold text-primary mb-3">Core Coursework:</h4>
                                            <ul className="space-y-2 text-primary-content">
                                                {edu.coursework.map((course, courseIdx) => (
                                                    <li key={courseIdx} className="flex items-start gap-2">
                                                        <span className="text-accent mt-1">•</span>
                                                        <span>{course}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-primary mb-3">Specialized Areas:</h4>
                                            <ul className="space-y-2 text-primary-content">
                                                {edu.specializations.map((spec, specIdx) => (
                                                    <li key={specIdx} className="flex items-start gap-2">
                                                        <span className="text-accent mt-1">•</span>
                                                        <span>{spec}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                                <span className="text-accent">Bilingual</span>
                            </div>
                        </div>
                    </div>
                    <div className="card p-5">
                        <h3 className="font-semibold text-accent mb-3">Interests</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Computer Science Research', 'Web Development', 'Mobile Development', 'Open Source'].map((interest, idx) => (
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
                <h2 className="text-2xl font-bold text-primary mb-4">Let&apos;s Connect</h2>
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
