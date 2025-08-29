import React from 'react';

export const metadata = {
    title: 'About',
};

export default function Page() {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="mb-6 text-4xl font-bold text-accent">About Me</h1>
            <section className="mb-10">
                <p className="text-lg text-primary-content mb-4">
                    Hi, Samy here! I am passionate about computer vision, AI, and building digital experiences that make a difference.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-primary mb-4">Scholarship</h2>
                <div className="card">
                    <ul className="list-disc pl-5 space-y-2 text-primary-content">
                        <li>
                            <span className="font-medium">B.Sc. in Computer Science</span> — University Name, 2021–Present
                        </li>
                        <li>
                            <span className="font-medium">Relevant Coursework:</span> Machine Learning, Computer Vision, Data Structures, Web Development
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">Experience</h2>
                <div className="card">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <span className="font-medium text-lg text-accent">Software Engineering Intern</span>
                        <span className="text-primary-content text-sm">June–August 2022</span>
                    </div>
                    <div className="text-primary-content mb-2">Company Name</div>
                    <ul className="list-disc pl-5 text-primary-content space-y-1">
                        <li>Worked on web development and automation tasks.</li>
                        <li>Collaborated with a small team to deliver a project prototype.</li>
                        <li>Gained hands-on experience in a professional environment.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}