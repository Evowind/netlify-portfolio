"use client";

import React, { useState, useMemo } from 'react';
import Tilt from 'react-parallax-tilt';

// Real projects from your GitHub repositories with enhanced data
const projects = [
    {
        title: 'ChamPygnon',
        image: '/images/champygnon.jpg',
        description: 'Python project classifying mushroom using scraped information.',
        fullDescription: 'Advanced mushroom classification system using web scraping and machine learning techniques. Implements data collection, preprocessing, and classification algorithms.',
        languages: ['Python', 'Web Scraping', 'ML'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/Evowind/ChamPygnon',
        updated: 'Apr 12, 2024',
        status: 'Completed',
        category: 'Machine Learning',
        features: ['Web scraping automation', 'Image classification', 'Data visualization'],
        complexity: 'Intermediate'
    },
    {
        title: 'Argumentation Framework Solver',
        image: '/images/argumentation-solver.jpg',
        description: 'Advanced Python implementation of an argumentation framework solver for logical reasoning.',
        fullDescription: 'Sophisticated logical reasoning system implementing argumentation frameworks with multiple semantics and solving algorithms.',
        languages: ['Python', 'Logic', 'Algorithms'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/Evowind/Argumentation_Framework_Solver',
        updated: 'Dec 20, 2024',
        status: 'Completed',
        category: 'AI/Logic',
        features: ['Multiple semantics support', 'Graph algorithms', 'Logical reasoning'],
        complexity: 'Advanced'
    },
    {
        title: 'ShapeShifter Classifier',
        image: '/images/shapeshifter.jpg',
        description: 'C++ machine learning classifier for shape recognition and classification tasks.',
        fullDescription: 'High-performance C++ implementation for geometric shape recognition using computer vision and machine learning techniques.',
        languages: ['C++', 'OpenCV', 'ML'],
        mainLang: 'C++',
        githubUrl: 'https://github.com/Evowind/ShapeShifter-Classifier',
        updated: 'Dec 8, 2024',
        status: 'Completed',
        category: 'Computer Vision',
        features: ['Real-time classification', 'Shape detection', 'Performance optimization'],
        complexity: 'Advanced'
    },
    {
        title: 'Shell',
        image: '/images/shell.jpg',
        description: 'Custom shell implementation made for university coursework.',
        fullDescription: 'Complete shell implementation with process management, I/O redirection, and built-in commands.',
        languages: ['C', 'Systems'],
        mainLang: 'C',
        githubUrl: 'https://github.com/Evowind/Shell',
        updated: 'Jan 3, 2024',
        status: 'Completed',
        category: 'Systems Programming',
        features: ['Process management', 'I/O redirection', 'Built-in commands'],
        complexity: 'Intermediate'
    },
    {
        title: 'DockerEye 007',
        image: '/images/dockereye.jpg',
        description: 'JavaScript-based Docker monitoring and management tool for container oversight.',
        fullDescription: 'Comprehensive Docker monitoring solution with real-time metrics, container management, and alerting capabilities.',
        languages: ['JavaScript', 'Docker', 'DevOps'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Evowind/DockerEye_007',
        updated: 'Mar 12, 2025',
        status: 'In Progress',
        category: 'DevOps',
        features: ['Real-time monitoring', 'Container management', 'Alert system'],
        complexity: 'Advanced'
    },
    {
        title: 'Netlify Portfolio',
        image: '/images/netlify-portfolio.jpg',
        description: 'Modern JavaScript portfolio website deployed on Netlify platform. You are here!',
        fullDescription: 'Responsive portfolio website built with modern web technologies, featuring dynamic content and optimized performance.',
        languages: ['JavaScript', 'HTML', 'CSS', 'Next.js'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Evowind/netlify-portfolio',
        updated: 'Aug 28, 2025',
        status: 'Active',
        category: 'Web Development',
        features: ['Responsive design', 'Dynamic content', 'SEO optimized'],
        complexity: 'Intermediate'
    },
    {
        title: 'Pizzeria Website',
        image: '/images/pizzeria.jpg',
        description: 'Student project for creating a pizzeria website. Uses Laravel backend with MySQL database.',
        fullDescription: 'Full-stack web application for pizzeria management with ordering system, user authentication, and database integration.',
        languages: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Laravel', 'MySQL'],
        mainLang: 'PHP',
        githubUrl: 'https://github.com/Evowind/Pizzeria',
        updated: 'Jan 3, 2024',
        status: 'Completed',
        category: 'Web Development',
        features: ['Laravel framework', 'Database integration', 'User authentication'],
        complexity: 'Intermediate'
    },
    {
        title: 'Rental Car Service',
        image: '/images/rental-car.jpg',
        description: 'Web-based rental car service application with booking and management features. Made to use DevOps practices.',
        fullDescription: 'Complete rental car management system with booking functionality, user management, and DevOps deployment practices.',
        languages: ['HTML', 'CSS', 'JavaScript', 'DevOps'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Evowind/RentalCarService',
        updated: 'Mar 5, 2025',
        status: 'Completed',
        category: 'Web Development',
        features: ['Booking system', 'User management', 'DevOps practices'],
        complexity: 'Intermediate'
    },
    {
        title: 'Administration Panel',
        image: '/images/administration.jpg',
        description: 'PHP-based administration panel with user management features. Features MySQL database backend, login system, and CRUD functionalities.',
        fullDescription: 'Comprehensive admin dashboard with complete user management, authentication system, and database operations.',
        languages: ['PHP', 'MySQL', 'HTML', 'CSS'],
        mainLang: 'PHP',
        githubUrl: 'https://github.com/Evowind/Administration',
        updated: 'Jan 3, 2024',
        status: 'Completed',
        category: 'Web Development',
        features: ['User management', 'CRUD operations', 'Authentication system'],
        complexity: 'Intermediate'
    },
    {
        title: 'Document Layout Analysis',
        image: '/images/document-layout.jpg',
        description: 'Computer vision project for document layout analysis using deep learning techniques. Collaborative work with advanced OCR and document structure understanding.',
        fullDescription: 'Advanced document understanding system combining OCR, layout analysis, and deep learning for intelligent document processing.',
        languages: ['Python', 'OpenCV', 'Deep Learning', 'PyTorch'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/pontormo/document-layout-analysis',
        updated: 'May 26, 2025',
        status: 'Completed',
        category: 'Computer Vision',
        collaborative: true,
        collaborator: 'pontormo',
        features: ['Layout detection', 'OCR integration', 'Deep learning models'],
        complexity: 'Advanced'
    },
    {
        title: 'Distributed Programming Project',
        image: '/images/prog-distrib.jpg',
        description: 'Tournament management system with Docker, Kubernetes deployment, and comprehensive testing battery. Features backend/frontend separation with microservices architecture.',
        fullDescription: 'Enterprise-grade tournament management system with containerized deployment, microservices architecture, and comprehensive testing suite.',
        languages: ['Docker', 'Kubernetes', 'JavaScript', 'Backend', 'Microservices'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Kemoory/Prog_Distrib_Project',
        updated: 'May 30, 2025',
        status: 'Completed',
        category: 'DevOps',
        collaborative: true,
        collaborator: 'Kemoory',
        features: ['Microservices', 'Container orchestration', 'Comprehensive testing'],
        complexity: 'Advanced'
    },
    {
        title: 'Mario Kart Reset Online',
        image: '/images/mk-reset.jpg',
        description: 'Dynamic web application for tracking Mario Kart tournament results with TrueSkill algorithm for player rankings. Features detailed statistics and PostgreSQL backend.',
        fullDescription: 'Advanced tournament tracking system implementing TrueSkill rating algorithm with detailed player statistics and PostgreSQL database.',
        languages: ['HTML', 'CSS', 'JavaScript', 'Flask', 'PostgreSQL', 'Python'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Kemoory/mk_reset_online',
        updated: 'May 10, 2025',
        status: 'Completed',
        category: 'Web Development',
        collaborative: true,
        collaborator: 'Kemoory',
        features: ['TrueSkill algorithm', 'Player statistics', 'Tournament management'],
        complexity: 'Advanced'
    },
    {
        title: 'Stairway to Data',
        image: '/images/stairway-data.jpg',
        description: 'Computer vision project for automatic stair step detection and counting from phone images. Combines classical CV methods with ML models (XGBoost, Random Forest, SVR).',
        fullDescription: 'Innovative CV solution combining classical computer vision with machine learning for precise stair step detection and measurement from mobile phone images.',
        languages: ['Python', 'OpenCV', 'Machine Learning', 'Scikit-learn', 'XGBoost'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/Kemoory/Stairway-to-Data',
        updated: 'Mar 30, 2025',
        status: 'Completed',
        category: 'Computer Vision',
        collaborative: true,
        collaborator: 'Kemoory, pontormo',
        features: ['Edge detection', 'ML classification', 'Mobile optimization'],
        complexity: 'Advanced'
    },
    {
        title: 'Pacman Game',
        image: '/images/pacman.jpg',
        description: 'Java Pacman game implementation with state pattern practice and extensive JavaDoc documentation.',
        fullDescription: 'Classic Pacman game recreation in Java featuring design patterns implementation and comprehensive documentation.',
        languages: ['Java', 'HTML', 'Design Patterns'],
        mainLang: 'Java',
        githubUrl: 'https://github.com/Evowind/Pacman',
        updated: 'Jan 8, 2024',
        status: 'Completed',
        category: 'Game Development',
        collaborative: true,
        collaborator: 'cxre',
        features: ['State pattern', 'Game mechanics', 'JavaDoc documentation'],
        complexity: 'Intermediate'
    },
    {
        title: 'Othello Game',
        image: '/images/othello.jpg',
        description: 'Java Othello implementation featuring MiniMax algorithm for intelligent CPU opponent.',
        fullDescription: 'Strategic board game implementation with AI opponent using MiniMax algorithm for intelligent gameplay.',
        languages: ['Java', 'AI', 'Algorithms'],
        mainLang: 'Java',
        githubUrl: 'https://github.com/Evowind/Othello',
        updated: 'Jan 8, 2024',
        status: 'Completed',
        category: 'Game Development',
        collaborative: true,
        collaborator: 'cxre',
        features: ['MiniMax algorithm', 'AI opponent', 'Strategic gameplay'],
        complexity: 'Advanced'
    }
];

const categories = ['All', 'Computer Vision', 'Machine Learning', 'Web Development', 'Systems Programming', 'DevOps', 'AI/Logic'];
const statusOptions = ['All', 'Completed', 'In Progress', 'Active'];
const complexityLevels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

// Enhanced grouping function
const groupProjects = (projects, groupBy) => {
    if (groupBy === 'category') {
        const groups = {};
        projects.forEach((proj) => {
            const key = proj.category || 'Other';
            if (!groups[key]) groups[key] = [];
            groups[key].push(proj);
        });
        return groups;
    } else {
        const groups = {};
        projects.forEach((proj) => {
            if (!groups[proj.mainLang]) groups[proj.mainLang] = [];
            groups[proj.mainLang].push(proj);
        });
        return groups;
    }
};

// Status color mapping
const getStatusColor = (status) => {
    switch (status) {
        case 'Completed': return 'bg-green-500/20 text-green-300';
        case 'In Progress': return 'bg-blue-500/20 text-blue-300';
        case 'Active': return 'bg-purple-500/20 text-purple-300';
        default: return 'bg-gray-500/20 text-gray-300';
    }
};

// Complexity color mapping
const getComplexityColor = (complexity) => {
    switch (complexity) {
        case 'Beginner': return 'bg-green-500/20 text-green-300';
        case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300';
        case 'Advanced': return 'bg-red-500/20 text-red-300';
        default: return 'bg-gray-500/20 text-gray-300';
    }
};

export default function EnhancedProjectList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [selectedComplexity, setSelectedComplexity] = useState('All');
    const [groupBy, setGroupBy] = useState('category'); // 'category' or 'language'
    const [sortBy, setSortBy] = useState('updated'); // 'updated', 'title', 'complexity'
    const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'compact'

    // Filter and sort projects
    const filteredAndSortedProjects = useMemo(() => {
        let filtered = projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                project.languages.some(lang => lang.toLowerCase().includes(searchTerm.toLowerCase()));
            
            const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
            const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
            const matchesComplexity = selectedComplexity === 'All' || project.complexity === selectedComplexity;
            
            return matchesSearch && matchesCategory && matchesStatus && matchesComplexity;
        });

        // Sort projects
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'title':
                    return a.title.localeCompare(b.title);
                case 'complexity':
                    const complexityOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
                    return (complexityOrder[b.complexity] || 0) - (complexityOrder[a.complexity] || 0);
                case 'updated':
                default:
                    return new Date(b.updated) - new Date(a.updated);
            }
        });

        return filtered;
    }, [searchTerm, selectedCategory, selectedStatus, selectedComplexity, sortBy]);

    const groupedProjects = groupProjects(filteredAndSortedProjects, groupBy);
    const groupKeys = Object.keys(groupedProjects);

    // All folders open by default
    const [openFolders, setOpenFolders] = useState(
        Object.fromEntries(groupKeys.map((key) => [key, true]))
    );

    const toggleFolder = (key) => {
        setOpenFolders((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    // Subtle tilt settings for better UX
    const tiltOptions = {
        glareEnable: true,
        glareMaxOpacity: 0.1,
        scale: 1.02,
        tiltMaxAngleX: 3,
        tiltMaxAngleY: 3,
        transitionSpeed: 300,
        gyroscope: false // Disable on mobile for better performance
    };

    const ProjectCard = ({ project }) => (
        <Tilt
            {...tiltOptions}
            className="card overflow-hidden transition-all duration-300 hover:shadow-2xl group"
        >
            <div className="flex flex-col md:flex-row h-auto md:h-[300px]">
                {/* Image container */}
                <div className="w-full md:w-1/3 bg-[#181c2a] h-[180px] md:h-full overflow-hidden flex-shrink-0 relative">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                            e.target.src = `https://via.placeholder.com/300x180/232946/eebbc3?text=${encodeURIComponent(project.title)}`;
                        }}
                    />
                    {project.collaborative && (
                        <div className="absolute top-2 left-2 bg-gradient-to-r from-blue-500/90 to-purple-500/90 text-white px-3 py-1 rounded-md text-xs font-medium shadow-md">
                            Collaborative
                        </div>
                    )}
                </div>
                
                {/* Content container */}
                <div className="w-full md:w-2/3 p-4 md:p-5 flex flex-col justify-between flex-1">
                    <div className="flex-1">
                        {/* Header with status and complexity */}
                        <div className="flex flex-wrap items-start justify-between mb-3 gap-2">
                            <h3 className="text-lg md:text-xl font-semibold text-accent group-hover:text-accent-focus transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex flex-col items-end gap-1">
                                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
                                    {project.status}
                                </span>
                                <span className={`text-xs px-2 py-1 rounded-full ${getComplexityColor(project.complexity)}`}>
                                    {project.complexity}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-primary-content text-sm md:text-base mb-3 line-clamp-2">
                            {project.description}
                        </p>

                        {/* Key Features */}
                        {project.features && (
                            <div className="mb-3">
                                <div className="flex flex-wrap gap-1">
                                    {project.features.slice(0, 3).map((feature, idx) => (
                                        <span key={idx} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Collaboration info */}
                        {project.collaborative && (
                            <p className="text-xs text-accent-focus mb-2">
                                With: <span className="font-semibold">@{project.collaborator}</span>
                            </p>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="flex flex-col gap-3 mt-auto">
                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-1">
                            {project.languages.map((lang) => (
                                <span key={lang} className="tag text-xs">
                                    {lang}
                                </span>
                            ))}
                        </div>

                        {/* Action buttons and date */}
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 rounded-lg text-accent hover:text-accent-focus transition-all duration-200 text-sm font-medium"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    GitHub
                                </a>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-xs text-gray-400">
                                    Updated
                                </span>
                                <span className="text-xs font-medium text-primary-content">
                                    {project.updated}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    );

    return (
        <div className="p-6">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-accent mb-4">My Projects</h1>
                <p className="text-primary-content">
                    Explore my work in computer vision, AI, web development, and more.{' '}
                    {filteredAndSortedProjects.length} projects found.
                </p>
            </div>

            {/* Enhanced Controls */}
            <div className="mb-8 space-y-4">
                {/* Search */}
                <div className="w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Search projects, technologies..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 bg-[#232946] border border-accent/20 rounded-lg text-primary-content focus:outline-none focus:border-accent"
                    />
                </div>

                {/* Filters and Controls */}
                <div className="flex flex-wrap gap-4 items-center">
                    {/* Category Filter */}
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-3 py-2 bg-[#232946] border border-accent/20 rounded-lg text-primary-content text-sm"
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>

                    {/* Status Filter */}
                    <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="px-3 py-2 bg-[#232946] border border-accent/20 rounded-lg text-primary-content text-sm"
                    >
                        {statusOptions.map(status => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>

                    {/* Group By */}
                    <select
                        value={groupBy}
                        onChange={(e) => setGroupBy(e.target.value)}
                        className="px-3 py-2 bg-[#232946] border border-accent/20 rounded-lg text-primary-content text-sm"
                    >
                        <option value="category">Group by Category</option>
                        <option value="language">Group by Language</option>
                    </select>

                    {/* Sort By */}
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-3 py-2 bg-[#232946] border border-accent/20 rounded-lg text-primary-content text-sm"
                    >
                        <option value="updated">Sort by Date</option>
                        <option value="title">Sort by Title</option>
                        <option value="complexity">Sort by Complexity</option>
                    </select>
                </div>
            </div>

            {/* Project Groups */}
            <div className="space-y-6">
                {groupKeys.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-primary-content text-lg">No projects match your filters.</p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedCategory('All');
                                setSelectedStatus('All');
                                setSelectedComplexity('All');
                            }}
                            className="mt-4 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-focus transition-colors"
                        >
                            Clear Filters
                        </button>
                    </div>
                ) : (
                    groupKeys.map((groupKey) => (
                        <div key={groupKey} className="bg-[#232946] rounded-xl shadow-lg">
                            <button
                                className="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold text-primary-content focus:outline-none hover:bg-[#181c2a] transition-colors rounded-t-xl"
                                onClick={() => toggleFolder(groupKey)}
                            >
                                <span className="flex items-center gap-2">
                                    <span>📁</span>
                                    {groupKey} ({groupedProjects[groupKey].length} projects)
                                </span>
                                <span className="text-accent text-xl">
                                    {openFolders[groupKey] ? '▼' : '▶'}
                                </span>
                            </button>
                            {openFolders[groupKey] && (
                                <div className="px-6 pb-6 pt-2 space-y-6">
                                    {groupedProjects[groupKey].map((project) => (
                                        <ProjectCard key={project.title} project={project} />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}