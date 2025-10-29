"use client";

import React, { useState, useMemo } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const projects = [
  {
        title: 'Exoplanet Detection ML',
        image: '/images/exoplanet-detection.jpg',
        description: 'Python machine learning project for detecting exoplanets from astronomical observation data using classification algorithms.',
        languages: ['Python', 'ML', 'Data Science'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/Evowind/exoplanet-detection-ml',
        updated: 'Oct 29, 2025',
        status: 'In Progress',
        category: 'Machine Learning',
        features: ['Data preprocessing', 'Classification models', 'Performance metrics', 'Data visualization'],
        complexity: 'Intermediate'
  },
  {
        title: 'Superpixel Methods Comparison',
        image: '/images/superpixel-methods.jpg',
        description: 'Python project comparing different superpixel segmentation algorithms (SLIC, hierarchical) on image datasets.',
        languages: ['Python', 'Computer Vision', 'Image Processing'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/Evowind/slic-hierarchical-superpixels',
        updated: 'Oct 28, 2025',
        status: 'In Progress',
        category: 'Computer Vision',
        features: ['Algorithm comparison', 'Image segmentation', 'Performance analysis', 'Benchmark results'],
        complexity: 'Intermediate'
  },
	{
        title: 'DockerEye 007 (Work in Progress)',
        image: '/images/dockereye.jpg',
        description: 'JavaScript tool for monitoring and managing Docker containers.',
        languages: ['JavaScript', 'Docker', 'DevOps'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Evowind/docker-eye-007',
        updated: 'Mar 12, 2025',
        status: 'In Progress',
        category: 'DevOps',
        features: ['Real-time monitoring', 'Container management', 'Alert system'],
        complexity: 'Advanced'
    },
	{
        title: 'Netlify Portfolio',
        image: '/images/netlify-portfolio.jpg',
        description: 'Modern responsive JavaScript portfolio website hosted on Netlify.',
        languages: ['JavaScript', 'HTML', 'CSS', 'Next.js'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Evowind/netlify-portfolio',
        updated: 'Sep 1, 2025',
        status: 'Active',
        category: 'Web Development',
        features: ['Responsive design', 'Dynamic content', 'SEO optimized'],
        complexity: 'Intermediate'
    },
	{
        title: 'Morpion Computer Vision',
        image: '/images/morpion.jpg',
        description: 'C++ Tic-tac-toe where the player can draw the grid from 3x3 to 5x5.',
        languages: ['C++', 'OpenCV', 'Algorithms'],
        mainLang: 'C++',
        githubUrl: 'https://github.com/Evowind/morpion-computer-vision',
        updated: 'Sep 3, 2025',
        status: 'Completed',
        category: 'Computer Vision',
        features: ['Shape detection', 'AI opponent', 'Strategic gameplay'],
        complexity: 'Advanced'
    },
	{
        title: 'Distributed Programming Project',
        image: '/images/prog-distrib.jpg',
        description: 'Tournament system with Docker, Kubernetes, and microservices architecture.',
        languages: ['Docker', 'Kubernetes', 'JavaScript', 'Backend', 'Microservices'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Evowind/mkreset-kubernetes',
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
        description: 'Web app tracking Mario Kart tournaments using TrueSkill ratings.',
        languages: ['HTML', 'CSS', 'JavaScript', 'Flask', 'PostgreSQL', 'Python'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Evowind/mariokart-reset-online',
        updated: 'May 10, 2025',
        status: 'Completed',
        category: 'Web Development',
        collaborative: true,
        collaborator: 'Kemoory',
        features: ['TrueSkill algorithm', 'Player statistics', 'Tournament management'],
        complexity: 'Advanced'
    },
	{
        title: 'Document Layout Analysis',
        image: '/images/document-layout.jpg',
        description: 'CV project analyzing document layouts using deep learning and OCR.',
        languages: ['Python', 'OpenCV', 'Deep Learning', 'PyTorch'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/Evowind/document-layout-analysis',
        updated: 'May 26, 2025',
        status: 'Completed',
        category: 'Computer Vision',
        collaborative: true,
        collaborator: 'pontormo',
        features: ['Layout detection', 'OCR integration', 'Deep learning models'],
        complexity: 'Advanced'
    },
    {
        title: 'Stairway to Data',
        image: '/images/stairway-data.jpg',
        description: 'CV project detecting and counting stair steps using ML models.',
        languages: ['Python', 'OpenCV', 'Machine Learning', 'Scikit-learn', 'XGBoost'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/Evowind/stairway-to-data',
        updated: 'Mar 30, 2025',
        status: 'Completed',
        category: 'Computer Vision',
        collaborative: true,
        collaborator: 'Kemoory, pontormo',
        features: ['Edge detection', 'ML classification', 'Mobile optimization'],
        complexity: 'Advanced'
    },
	{
        title: 'Rental Car Service',
        image: '/images/rental-car.jpg',
        description: 'Web app for rental car booking and management with DevOps practices.',
        languages: ['HTML', 'CSS', 'JavaScript', 'DevOps'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Evowind/rental-car-service',
        updated: 'Mar 5, 2025',
        status: 'Completed',
        category: 'Web Development',
        features: ['Booking system', 'User management', 'DevOps practices'],
        complexity: 'Intermediate'
    },
	{
        title: 'Argumentation Framework Solver',
        image: '/images/argumentation-solver.jpg',
        description: 'Python tool for solving argumentation frameworks with logical reasoning.',
        languages: ['Python', 'Logic', 'Algorithms'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/Evowind/argumentation-framework-solver',
        updated: 'Dec 20, 2024',
        status: 'Completed',
        category: 'AI/Logic',
        features: ['Multiple semantics support', 'Graph algorithms', 'Logical reasoning'],
        complexity: 'Advanced'
    },
	{
        title: 'ShapeShifter Classifier',
        image: '/images/shapeshifter.jpg',
        description: 'C++ classifier for recognizing and categorizing shapes.',
        languages: ['C++', 'OpenCV', 'ML'],
        mainLang: 'C++',
        githubUrl: 'https://github.com/Evowind/shapeshifter-classifier',
        updated: 'Dec 8, 2024',
        status: 'Completed',
        category: 'Computer Vision',
        features: ['Real-time classification', 'Shape detection', 'Performance optimization'],
        complexity: 'Advanced'
    },
    {
        title: 'ChamPygnon',
        image: '/images/champygnon.jpg',
        description: 'Python project for classifying mushrooms using scraped data.',
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
        title: 'Pacman Game',
        image: '/images/pacman.jpg',
        description: 'Java implementation of Pacman with design patterns and documentation.',
        languages: ['Java', 'HTML', 'Design Patterns'],
        mainLang: 'Java',
        githubUrl: 'https://github.com/Evowind/pacman-game',
        updated: 'Jan 8, 2024',
        status: 'Completed',
        category: 'Game Development',
        collaborative: true,
        collaborator: 'cxre',
        features: ['State pattern', 'Game mechanics', 'JavaDoc documentation'],
        complexity: 'Intermediate'
    },
    {
        title: 'Shell',
        image: '/images/shell.jpg',
        description: 'Custom shell implementation for process management and I/O handling.',
        languages: ['C', 'Systems'],
        mainLang: 'C',
        githubUrl: 'https://github.com/Evowind/shell-project',
        updated: 'Jan 3, 2024',
        status: 'Completed',
        category: 'Systems Programming',
        features: ['Process management', 'I/O redirection', 'Built-in commands'],
        complexity: 'Intermediate'
    },
	{
        title: 'Othello Game',
        image: '/images/othello.jpg',
        description: 'Java Othello game with MiniMax AI opponent for strategic play.',
        languages: ['Java', 'AI', 'Algorithms'],
        mainLang: 'Java',
        githubUrl: 'https://github.com/Evowind/othello-game',
        updated: 'Jan 8, 2024',
        status: 'Completed',
        category: 'Game Development',
        collaborative: true,
        collaborator: 'cxre',
        features: ['MiniMax algorithm', 'AI opponent', 'Strategic gameplay'],
        complexity: 'Advanced'
    },
    {
        title: 'Administration Panel',
        image: '/images/administration.jpg',
        description: 'PHP admin panel with user management and CRUD operations.',
        languages: ['PHP', 'MySQL', 'HTML', 'CSS'],
        mainLang: 'PHP',
        githubUrl: 'https://github.com/Evowind/administration-system',
        updated: 'Jan 3, 2024',
        status: 'Completed',
        category: 'Web Development',
        features: ['User management', 'CRUD operations', 'Authentication system'],
        complexity: 'Intermediate'
    },
	{
        title: 'Pizzeria Website',
        image: '/images/pizzeria.jpg',
        description: 'Full-stack pizzeria website using Laravel and MySQL backend.',
        languages: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Laravel', 'MySQL'],
        mainLang: 'PHP',
        githubUrl: 'https://github.com/Evowind/pizzeria-website',
        updated: 'Jan 3, 2024',
        status: 'Completed',
        category: 'Web Development',
        features: ['Laravel framework', 'Database integration', 'User authentication'],
        complexity: 'Intermediate'
    }
];


const categories = ['All', 'Computer Vision', 'Machine Learning', 'Web Development', 'Systems Programming', 'DevOps', 'AI/Logic'];
const statusOptions = ['All', 'Completed', 'In Progress', 'Active'];

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
  const [groupBy, setGroupBy] = useState('category');
  const [sortBy, setSortBy] = useState('updated');
  const [viewMode, setViewMode] = useState('cards');

  // Filter & Sort
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

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title': return a.title.localeCompare(b.title);
        case 'complexity': 
          const order = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
          return (order[b.complexity] || 0) - (order[a.complexity] || 0);
        case 'updated':
        default: return new Date(b.updated) - new Date(a.updated);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedStatus, selectedComplexity, sortBy]);

  const groupedProjects = groupProjects(filteredAndSortedProjects, groupBy);
  const groupKeys = Object.keys(groupedProjects);
  const [openFolders, setOpenFolders] = useState(Object.fromEntries(groupKeys.map(k => [k, true])));

  const toggleFolder = (key) => setOpenFolders(prev => ({ ...prev, [key]: !prev[key] }));

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
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Tilt {...tiltOptions} className="card bg-[#1b1f33] rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
      <div className="flex flex-col md:flex-row h-auto md:h-[300px]">
        {/* Image */}
        <div className="w-full md:w-1/3 h-[180px] md:h-full overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/300x180/232946/eebbc3?text=${encodeURIComponent(project.title)}`;
            }}
          />
          {project.collaborative && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-md text-xs font-semibold shadow-md">
              Collaborative
            </div>
          )}
        </div>

        {/* Content */}
        <div className="w-full md:w-2/3 p-5 flex flex-col justify-between">
          <div className="flex-1">
            <div className="flex flex-wrap justify-between mb-3 gap-2">
              <h3 className="text-lg md:text-xl font-semibold text-accent transition-colors hover:text-accent-focus">
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

            <p className="text-sm md:text-base text-primary-content mb-3 line-clamp-3">
              {project.description}
            </p>

            {/* Key Features */}
            {project.features && (
              <div className="mb-3 flex flex-wrap gap-2">
                {project.features.slice(0, 3).map((feat, idx) => (
                  <span key={idx} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                    {feat}
                  </span>
                ))}
              </div>
            )}

            {/* Collaboration */}
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
    </motion.div>
);

const ProjectGroup = ({ groupKey, projects, isOpen, onToggle }) => (
  <div className="bg-[#232946] rounded-xl shadow-lg overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold text-primary-content hover:bg-[#181c2a] transition-colors focus:outline-none"
    >
      <span>{groupKey} ({projects.length})</span>
      <span className="text-accent text-xl">{isOpen ? '▼' : '▶'}</span>
    </button>
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut'
      }}
      className="overflow-hidden"
    >
      <div className="px-6 pb-6 pt-2 space-y-6">
        {projects.map(project => <ProjectCard key={project.title} project={project} />)}
      </div>
    </motion.div>
  </div>
);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-accent mb-2">My Projects</h1>
        <p className="text-primary-content text-sm md:text-base">
          Explore my work in computer vision, AI, web development, and more. {filteredAndSortedProjects.length} projects found.
        </p>
      </div>

      {/* Controls */}
      <div className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Search projects, technologies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 bg-[#232946] border border-accent/20 rounded-lg text-primary-content focus:outline-none focus:border-accent"
        />
        <div className="flex flex-wrap gap-4">
          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="px-3 py-2 bg-[#232946] border border-accent/20 rounded-lg text-primary-content text-sm">
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
          <select value={selectedStatus} onChange={e => setSelectedStatus(e.target.value)} className="px-3 py-2 bg-[#232946] border border-accent/20 rounded-lg text-primary-content text-sm">
            {statusOptions.map(status => <option key={status} value={status}>{status}</option>)}
          </select>
          <select value={groupBy} onChange={e => setGroupBy(e.target.value)} className="px-3 py-2 bg-[#232946] border border-accent/20 rounded-lg text-primary-content text-sm">
            <option value="category">Group by Category</option>
            <option value="language">Group by Language</option>
          </select>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-3 py-2 bg-[#232946] border border-accent/20 rounded-lg text-primary-content text-sm">
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
          groupKeys.map(groupKey => (
            <ProjectGroup
              key={groupKey}
              groupKey={groupKey}
              projects={groupedProjects[groupKey]}
              isOpen={openFolders[groupKey]}
              onToggle={() => toggleFolder(groupKey)}
            />
          ))
        )}
      </div>
    </div>
  );
}