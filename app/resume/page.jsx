import { Download } from 'components/download';

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
            description: "Pursuing a Master's degree in Computer Science at UFR de mathématiques et informatique.",
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
            description: "Completed Bachelor's degree in Computer Science.",
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
        <div className="max-w-5xl mx-auto p-6">
            {/* Header */}
            <div className="mb-12">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                    <div>
                        <h1 className="mb-4 text-4xl font-bold text-accent">Samy - Resume</h1>
                        <p className="text-lg text-primary-content leading-relaxed max-w-3xl mb-2">
                            Computer Science Student & Software Developer
                        </p>
                        <p className="text-primary-content leading-relaxed max-w-3xl">
                            Specializing in AI, Computer Vision & Full-Stack Development with hands-on experience 
                            in modern web and mobile technologies.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <Download />
                    </div>
                </div>
            </div>

            {/* Resume Overview Stats */}
            <section className="mb-12 grid md:grid-cols-3 gap-4">
                <div className="card p-4 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">6+</div>
                    <div className="text-sm text-primary-content">Programming Languages</div>
                </div>
                <div className="card p-4 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">Master's</div>
                    <div className="text-sm text-primary-content">Current Degree</div>
                </div>
                <div className="card p-4 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">AI/ML</div>
                    <div className="text-sm text-primary-content">Specialization</div>
                </div>
            </section>

            {/* Professional Summary */}
            <section className="mb-12">
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-primary mb-2">Professional Summary</h2>
                    <p className="text-primary-content">Overview of my background, expertise, and career focus</p>
                </div>
                <div className="card p-6 hover:shadow-xl transition-all duration-300">
                    <p className="text-primary-content leading-relaxed">
                        I am a Computer Science student at Université Paris Cité with a strong foundation in programming 
                        (Java, C, OCaml, PHP) and experience in mobile and full-stack development. My background spans 
                        algorithm analysis, system design, and web technologies. I have professional experience as a 
                        React Native developer and continue to expand my expertise in modern software engineering practices.
                    </p>
                </div>
            </section>

            {/* Experience Section */}
            <section className="mb-12">
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-primary mb-2">Professional Experience</h2>
                    <p className="text-primary-content">Work experience and professional achievements</p>
                </div>
                <div className="space-y-6">
                    {experiences.filter(exp => exp.type === 'Work').map((exp, idx) => (
                        <div key={idx} className="card p-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-accent mb-1">{exp.title}</h3>
                                    <div className="text-primary-content mb-2">
                                        <span className="font-medium">{exp.company}</span>
                                        {exp.location && <span className="text-primary-content/70"> • {exp.location}</span>}
                                    </div>
                                    <p className="text-primary-content text-sm mb-3 leading-relaxed">{exp.description}</p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <span className="text-primary-content font-medium">{exp.period}</span>
                                    <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                                        {exp.type}
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-semibold text-primary">Key Achievements:</h4>
                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, achievementIdx) => (
                                        <li key={achievementIdx} className="flex items-start gap-2 text-primary-content text-sm">
                                            <span className="text-accent mt-1 flex-shrink-0">•</span>
                                            <span className="leading-relaxed">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section className="mb-12">
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-primary mb-2">Education</h2>
                    <p className="text-primary-content">Academic background and qualifications</p>
                </div>
                <div className="space-y-6">
                    {experiences.filter(exp => exp.type === 'Education').map((edu, idx) => (
                        <div key={idx} className="card p-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-accent mb-2">{edu.title}</h3>
                                    <p className="text-primary-content mb-3">
                                        {edu.company} • {edu.period}
                                    </p>
                                    <p className="text-primary-content text-sm leading-relaxed">{edu.description}</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${
                                        edu.period.includes('Present') 
                                            ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' 
                                            : 'bg-green-500/20 text-green-300 border-green-500/30'
                                    }`}>
                                        {edu.period.includes('Present') ? 'Current Student' : 'Completed'}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="grid lg:grid-cols-2 gap-6 mt-6">
                                <div>
                                    <h4 className="font-semibold text-primary mb-3">Core Coursework:</h4>
                                    <ul className="space-y-2 text-primary-content">
                                        {edu.coursework.map((course, courseIdx) => (
                                            <li key={courseIdx} className="flex items-start gap-2 text-sm">
                                                <span className="text-accent mt-1 flex-shrink-0">•</span>
                                                <span className="leading-relaxed">{course}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary mb-3">Specialized Areas:</h4>
                                    <ul className="space-y-2 text-primary-content">
                                        {edu.specializations.map((spec, specIdx) => (
                                            <li key={specIdx} className="flex items-start gap-2 text-sm">
                                                <span className="text-accent mt-1 flex-shrink-0">•</span>
                                                <span className="leading-relaxed">{spec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-12">
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-primary mb-2">Technical Skills</h2>
                    <p className="text-primary-content">Programming languages, frameworks, and technologies</p>
                </div>
                <div className="card p-6 hover:shadow-xl transition-all duration-300">
                    <div className="grid lg:grid-cols-2 gap-6">
                        {Object.entries(skills).map(([category, skillList], idx) => (
                            <div key={idx}>
                                <h3 className="font-semibold text-accent mb-4">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillList.map((skill, skillIdx) => (
                                        <span key={skillIdx} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20 hover:bg-accent/20 transition-all duration-300">
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
            <section className="mb-12">
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-primary mb-2">Additional Information</h2>
                    <p className="text-primary-content">Languages, interests, and other relevant details</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="card p-6 hover:shadow-xl transition-all duration-300">
                        <h3 className="font-semibold text-accent mb-4">Languages</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-primary-content">French</span>
                                <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20">Native</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-primary-content">English</span>
                                <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20">Bilingual</span>
                            </div>
                        </div>
                    </div>
                    <div className="card p-6 hover:shadow-xl transition-all duration-300">
                        <h3 className="font-semibold text-accent mb-4">Interests</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Computer Science Research', 'Web Development', 'Mobile Development', 'Open Source'].map((interest, idx) => (
                                <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center bg-gradient-to-r from-accent/5 to-accent/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Let's Connect</h2>
                <p className="text-primary-content mb-6 max-w-2xl mx-auto">
                    Interested in my background or potential collaboration opportunities? 
                    I'm always open to discussing new projects and opportunities.
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