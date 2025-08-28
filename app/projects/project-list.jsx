"use client";

import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';

// Real projects from your GitHub repositories
const projects = [
    {
        title: 'ChamPygnon',
        image: '/images/champygnon.jpg',
        description: 'Python project classifying mushroom  using scraped information.',
        languages: ['Python'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/Evowind/ChamPygnon',
        updated: 'Apr 12, 2024'
    },
    {
        title: 'Argumentation Framework Solver',
        image: '/images/argumentation-solver.jpg',
        description: 'Advanced Python implementation of an argumentation framework solver for logical reasoning.',
        languages: ['Python'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/Evowind/Argumentation_Framework_Solver',
        updated: 'Dec 20, 2024'
    },
    {
        title: 'ShapeShifter Classifier',
        image: '/images/shapeshifter.jpg',
        description: 'C++ machine learning classifier for shape recognition and classification tasks.',
        languages: ['C++'],
        mainLang: 'C++',
        githubUrl: 'https://github.com/Evowind/ShapeShifter-Classifier',
        updated: 'Dec 8, 2024'
    },
    {
        title: 'Shell',
        image: '/images/shell.jpg',
        description: 'Custom shell implementation made for university coursework.',
        languages: ['C'],
        mainLang: 'C',
        githubUrl: 'https://github.com/Evowind/Shell',
        updated: 'Jan 3, 2024'
    },
    {
        title: 'DockerEye 007',
        image: '/images/dockereye.jpg',
        description: 'Java-based Docker monitoring and management tool for container oversight.',
        languages: ['JavaScript'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Evowind/DockerEye_007',
        updated: 'Mar 12, 2025'
    },
    {
        title: 'Netlify Portfolio',
        image: '/images/netlify-portfolio.jpg',
        description: 'Modern JavaScript portfolio website deployed on Netlify platform. You are here!',
        languages: ['JavaScript', 'HTML', 'CSS'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Evowind/netlify-portfolio',
        updated: 'Aug 28, 2025'
    },
    {
        title: 'Pizzeria Website',
        image: '/images/pizzeria.jpg',
        description: 'Student project for creating a pizzeria website. Use a Laravel backend with a MySQL database.',
        languages: ['PHP', 'JavaScript', 'HTML', 'CSS'],
        mainLang: 'PHP',
        githubUrl: 'https://github.com/Evowind/Pizzeria',
        updated: 'Jan 3, 2024'
    },
    {
        title: 'Rental Car Service',
        image: '/images/rental-car.jpg',
        description: 'Web-based rental car service application with booking and management features. Made to use devOps practices',
        languages: ['HTML', 'CSS', 'JavaScript'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Evowind/RentalCarService',
        updated: 'Mar 5, 2025'
    },
    {
        title: 'Administration Panel',
        image: '/images/administration.jpg',
        description: 'PHP-based administration panel with user management features. Features a MySQL database backend, login system, and CRUD functionalities.',
        languages: ['PHP', 'MySQL'],
        mainLang: 'PHP',
        githubUrl: 'https://github.com/Evowind/Administration',
        updated: 'Jan 3, 2024'
    },
   // Collaborative Projects
    {
        title: 'Document Layout Analysis',
        image: '/images/document-layout.jpg',
        description: 'Computer vision project for document layout analysis using deep learning techniques. Collaborative work with advanced OCR and document structure understanding.',
        languages: ['Python', 'OpenCV', 'Deep Learning'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/pontormo/document-layout-analysis',
        updated: 'May 26, 2025',
        collaborative: true,
        collaborator: 'pontormo'
    },
    {
        title: 'Distributed Programming Project',
        image: '/images/prog-distrib.jpg',
        description: 'Tournament management system with Docker, Kubernetes deployment, and comprehensive testing battery. Features backend/frontend separation with microservices architecture.',
        languages: ['Docker', 'Kubernetes', 'JavaScript', 'Backend'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Kemoory/Prog_Distrib_Project',
        updated: 'May 30, 2025',
        collaborative: true,
        collaborator: 'Kemoory'
    },
    {
        title: 'Mario Kart Reset Online',
        image: '/images/mk-reset.jpg',
        description: 'Dynamic web application for tracking Mario Kart tournament results with TrueSkill algorithm for player rankings. Features detailed statistics and PostgreSQL backend.',
        languages: ['HTML', 'CSS', 'JavaScript', 'Flask', 'PostgreSQL'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Kemoory/mk_reset_online',
        updated: 'May 10, 2025',
        collaborative: true,
        collaborator: 'Kemoory'
    },
    {
        title: 'Stairway to Data',
        image: '/images/stairway-data.jpg',
        description: 'Computer vision project for automatic stair step detection and counting from phone images. Combines classical CV methods with ML models (XGBoost, Random Forest, SVR).',
        languages: ['Python', 'OpenCV', 'Machine Learning', 'Scikit-learn'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/Kemoory/Stairway-to-Data',
        updated: 'Mar 30, 2025',
        collaborative: true,
        collaborator: 'Kemoory, @pontormo',
    },
    {
        title: 'Pacman Game',
        image: '/images/pacman.jpg',
        description: 'Java Pacman game implementation with state pattern practice and extensive JavaDoc documentation.',
        languages: ['Java', 'HTML'],
        mainLang: 'Java',
        githubUrl: 'https://github.com/Evowind/Pacman',
        updated: 'Jan 8, 2024',
        collaborative: true,
        collaborator: 'cxre'
    },
    {
        title: 'Othello Game',
        image: '/images/othello.jpg',
        description: 'Java Othello implementation featuring MiniMax algorithm for intelligent CPU opponent.',
        languages: ['Java'],
        mainLang: 'Java',
        githubUrl: 'https://github.com/Evowind/Othello',
        updated: 'Jan 8, 2024',
        collaborative: true,
        collaborator: 'cxre'
    },
];

// Helper to group projects by mainLang
const groupByLang = (projects) => {
    const groups = {};
    projects.forEach((proj) => {
        if (!groups[proj.mainLang]) groups[proj.mainLang] = [];
        groups[proj.mainLang].push(proj);
    });
    return groups;
};

export default function ProjectList() {
    const grouped = groupByLang(projects);
    const langFolders = Object.keys(grouped);

    // All folders open by default
    const [openFolders, setOpenFolders] = useState(
        Object.fromEntries(langFolders.map((lang) => [lang, true]))
    );

    const toggleFolder = (lang) => {
        setOpenFolders((prev) => ({
            ...prev,
            [lang]: !prev[lang],
        }));
    };

    return (
        <div className="p-6">
            <h1 className="mb-8 text-4xl font-bold text-accent">My Projects</h1>
            <div className="space-y-6">
                {langFolders.map((lang) => (
                    <div key={lang} className="bg-[#232946] rounded-xl shadow-lg">
                        <button
                            className="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold text-primary-content focus:outline-none"
                            onClick={() => toggleFolder(lang)}
                        >
                            <span>
                                <span className="mr-2">📁</span>
                                {lang} ({grouped[lang].length} projects)
                            </span>
                            <span className="text-accent">
                                {openFolders[lang] ? '▼' : '▶'}
                            </span>
                        </button>
                        {openFolders[lang] && (
                            <div className="px-6 pb-6 pt-2 grid gap-8">
                                {grouped[lang].map((project, idx) => (
                                    <Tilt
                                        key={project.title}
                                        glareEnable={true}
                                        glareMaxOpacity={0.2}
                                        scale={1.04}
                                        tiltMaxAngleX={6}
                                        tiltMaxAngleY={6}
                                        className="card overflow-hidden transition-transform duration-300 hover:shadow-xl"
                                    >
                                        {/* Mobile: Stacked layout, Desktop: Side by side */}
                                        <div className="flex flex-col md:flex-row h-[400px] md:h-[340px]">
                                            {/* Image container - responsive sizing */}
                                            <div className="w-full md:w-1/3 bg-[#181c2a] h-[150px] md:h-full overflow-hidden flex-shrink-0">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="object-cover h-full w-full"
                                                    onError={(e) => {
                                                        e.target.src = `https://via.placeholder.com/300x150/232946/eebbc3?text=${encodeURIComponent(project.title)}`;
                                                    }}
                                                />
                                            </div>
                                            {/* Content container */}
                                            <div className="w-full md:w-2/3 p-4 md:p-6 flex flex-col justify-between flex-1 min-h-0">
                                                <div className="flex-1">
                                                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-3 gap-2">
                                                        <h2 className="text-xl md:text-2xl font-semibold text-accent line-clamp-2">{project.title}</h2>
                                                        <div className="flex flex-col items-start md:items-end flex-shrink-0">
                                                            {project.collaborative && (
                                                                <span className="text-xs bg-accent bg-opacity-20 text-white px-2 py-1 rounded mb-1 whitespace-nowrap">
                                                                    👥 Collaborative
                                                                </span>
                                                            )}
                                                            <span className="text-xs text-gray-400 whitespace-nowrap">
                                                                Updated: {project.updated}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <p className="text-primary-content mb-3 text-sm md:text-base line-clamp-3 flex-1">{project.description}</p>
                                                    {project.collaborative && (
                                                        <p className="text-sm text-accent-focus mb-3 line-clamp-1">
                                                            <span className="mr-1">🤝</span>
                                                            Collaborated with: <span className="font-semibold">@{project.collaborator}</span>
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="flex flex-col gap-3 mt-auto">
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.languages.map((langTag) => (
                                                            <span
                                                                key={langTag}
                                                                className="tag text-xs md:text-sm"
                                                            >
                                                                {langTag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center text-accent hover:text-accent-focus transition-colors duration-200 text-sm md:text-base"
                                                    >
                                                        <span className="mr-2">🔗</span>
                                                        View on GitHub
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </Tilt>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}