"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        image: '/images/wip.jpg',
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

const categories = ['All', 'Computer Vision', 'Machine Learning', 'Web Development', 'Systems Programming', 'DevOps', 'AI/Logic', 'Game Development'];
const statusOptions = ['All', 'Completed', 'In Progress', 'Active'];
const complexityOptions = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const getStatusColor = (status) => {
    switch (status) {
        case 'Completed': return 'bg-green-500/20 text-green-300 border border-green-500/30';
        case 'In Progress': return 'bg-blue-500/20 text-blue-300 border border-blue-500/30';
        case 'Active': return 'bg-purple-500/20 text-purple-300 border border-purple-500/30';
        default: return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
    }
};

const getComplexityColor = (complexity) => {
    switch (complexity) {
        case 'Beginner': return 'bg-green-500/20 text-green-300 border border-green-500/30';
        case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30';
        case 'Advanced': return 'bg-red-500/20 text-red-300 border border-red-500/30';
        default: return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
    }
};

const ProjectCard = ({ project, isExpanded, onToggle }) => {
  return (
    <motion.div
      layout
      className="card p-0 overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
      onClick={onToggle}
    >
      {/* Image + Title (Collapsed view) */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#181c2a] to-[#232946] group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x192/232946/7f5af0?text=${encodeURIComponent(project.title)}`;
          }}
        />
        
        {/* Overlay with title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
          <h3 className="text-lg font-semibold text-white line-clamp-2">
            {project.title}
          </h3>
        </div>

        {/* Category - Top Right */}
        <div className="absolute top-3 right-3 bg-accent text-[#232946] px-3 py-1 rounded-full text-xs font-semibold">
          {project.category}
        </div>

        {/* Expand indicator */}
        <div className="absolute top-3 left-3 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity">
          {isExpanded ? '▼' : '▶'}
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 space-y-4 bg-[#232946] border-t border-accent/20">
              
              {/* Status & Collaborative Info */}
              <div className="flex flex-wrap gap-2">
                <div className={`inline-block px-2 py-1 rounded text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>
                {project.collaborative && (
                  <div className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-1 rounded text-xs font-medium">
                    Collaborative with @{project.collaborator}
                  </div>
                )}
              </div>

              {/* Features */}
              {project.features && (
                <div>
                  <p className="text-xs text-accent font-semibold mb-2">Features:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feat, idx) => (
                      <span key={idx} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Collaborator */}
              {project.collaborative && (
                <p className="text-xs text-accent-focus">
                  <span className="font-semibold">Collaborators:</span> @{project.collaborator}
                </p>
              )}

              {/* Tech Stack */}
              <div>
                <p className="text-xs text-accent font-semibold mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-1">
                  {project.languages.map((lang) => (
                    <span key={lang} className="tag text-xs">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer with link and date */}
              <div className="flex items-center justify-between pt-3 border-t border-accent/10 text-xs text-primary-content/70">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 px-3 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 rounded text-accent hover:text-accent-focus transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
                <span>Updated {project.updated}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function ProjectsRedesigned() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedComplexity, setSelectedComplexity] = useState('All');
  const [sortBy, setSortBy] = useState('updated');
  const [expandedProject, setExpandedProject] = useState(null);

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

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-accent mb-2">My Projects</h1>
        <p className="text-primary-content text-sm md:text-base">
          Click on any project to see details. {filteredAndSortedProjects.length} projects found.
        </p>
      </div>

      {/* Controls */}
      <div className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Search projects, technologies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 bg-[#232946] border border-accent/20 rounded-lg text-primary-content focus:outline-none focus:border-accent transition"
        />
        
        <div className="flex flex-wrap gap-3">
          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="px-4 py-2 bg-[#232946] border border-accent/20 rounded-lg text-primary-content text-sm focus:outline-none focus:border-accent transition">
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
          
          <select value={selectedStatus} onChange={e => setSelectedStatus(e.target.value)} className="px-4 py-2 bg-[#232946] border border-accent/20 rounded-lg text-primary-content text-sm focus:outline-none focus:border-accent transition">
            {statusOptions.map(status => <option key={status} value={status}>{status}</option>)}
          </select>

          <select value={selectedComplexity} onChange={e => setSelectedComplexity(e.target.value)} className="px-4 py-2 bg-[#232946] border border-accent/20 rounded-lg text-primary-content text-sm focus:outline-none focus:border-accent transition">
            {complexityOptions.map(comp => <option key={comp} value={comp}>{comp}</option>)}
          </select>
          
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-4 py-2 bg-[#232946] border border-accent/20 rounded-lg text-primary-content text-sm focus:outline-none focus:border-accent transition">
            <option value="updated">Sort by Date</option>
            <option value="title">Sort by Title</option>
            <option value="complexity">Sort by Complexity</option>
          </select>

          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setSelectedStatus('All');
              setSelectedComplexity('All');
              setExpandedProject(null);
            }}
            className="px-4 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/20 rounded-lg text-accent text-sm transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredAndSortedProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-primary-content text-lg">No projects match your filters.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAndSortedProjects.map((project, idx) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: idx * 0.05 }}>
              <ProjectCard 
                project={project} 
                isExpanded={expandedProject === project.title}
                onToggle={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}