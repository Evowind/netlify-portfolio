'use client';

import { useState, useMemo } from 'react';
import { useApp } from '../../lib/context';
import { t, getLang } from '../../lib/translations';

const projects = [
    {
        title: 'Exoplanet Detection ML',
        image: '/images/exoplanet-detection.jpg',
        descKey: 'exoplanet',
        languages: ['Python', 'ML', 'Data Science'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/Evowind/exoplanet-detection-ml',
        updated: 'Oct 29, 2025',
        status: 'In Progress',
        category: 'Machine Learning',
        features: ['Data preprocessing', 'Classification models', 'Performance metrics', 'Visualization'],
        complexity: 'Intermediate',
    },
    {
        title: 'Superpixel Methods Comparison',
        image: '/images/superpixel-methods.jpg',
        descKey: 'superpixel',
        languages: ['Python', 'Computer Vision', 'Image Processing'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/Evowind/slic-hierarchical-superpixels',
        updated: 'Oct 28, 2025',
        status: 'In Progress',
        category: 'Computer Vision',
        features: ['Algorithm comparison', 'Image segmentation', 'Performance analysis'],
        complexity: 'Intermediate',
    },
    {
        title: 'DockerEye 007',
        image: '/images/wip.jpg',
        descKey: 'dockereye',
        languages: ['JavaScript', 'Docker', 'DevOps'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Evowind/docker-eye-007',
        updated: 'Mar 12, 2025',
        status: 'In Progress',
        category: 'DevOps',
        features: ['Real-time monitoring', 'Container management', 'Alert system'],
        complexity: 'Advanced',
    },
    {
        title: 'Netlify Portfolio',
        image: '/images/netlify-portfolio.jpg',
        descKey: 'portfolio',
        languages: ['JavaScript', 'HTML', 'CSS', 'Next.js'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Evowind/netlify-portfolio',
        updated: 'Sep 1, 2025',
        status: 'Active',
        category: 'Web Development',
        features: ['Responsive design', 'Dynamic content', 'SEO optimised'],
        complexity: 'Intermediate',
    },
    {
        title: 'Morpion Computer Vision',
        image: '/images/morpion.jpg',
        descKey: 'morpion',
        languages: ['C++', 'OpenCV', 'Algorithms'],
        mainLang: 'C++',
        githubUrl: 'https://github.com/Evowind/morpion-computer-vision',
        updated: 'Sep 3, 2025',
        status: 'Completed',
        category: 'Computer Vision',
        features: ['Shape detection', 'AI opponent', 'Strategic gameplay'],
        complexity: 'Advanced',
    },
    {
        title: 'Distributed Tournament System',
        image: '/images/prog-distrib.jpg',
        descKey: 'distrib',
        languages: ['Docker', 'Kubernetes', 'JavaScript', 'Microservices'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Evowind/mkreset-kubernetes',
        updated: 'May 30, 2025',
        status: 'Completed',
        category: 'DevOps',
        collaborative: true,
        collaborator: 'Kemoory',
        features: ['Microservices', 'Container orchestration', 'Integration testing'],
        complexity: 'Advanced',
    },
    {
        title: 'Mario Kart Reset Online',
        image: '/images/mk-reset.jpg',
        descKey: 'mkrerset',
        languages: ['HTML', 'CSS', 'JavaScript', 'Flask', 'PostgreSQL', 'Python'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Evowind/mariokart-reset-online',
        updated: 'May 10, 2025',
        status: 'Completed',
        category: 'Web Development',
        collaborative: true,
        collaborator: 'Kemoory',
        features: ['TrueSkill algorithm', 'Player statistics', 'Tournament management'],
        complexity: 'Advanced',
    },
    {
        title: 'Document Layout Analysis',
        image: '/images/document-layout.jpg',
        descKey: 'docLayout',
        languages: ['Python', 'OpenCV', 'Deep Learning', 'PyTorch'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/Evowind/document-layout-analysis',
        updated: 'May 26, 2025',
        status: 'Completed',
        category: 'Computer Vision',
        collaborative: true,
        collaborator: 'pontormo',
        features: ['Layout detection', 'OCR integration', 'Deep learning'],
        complexity: 'Advanced',
    },
    {
        title: 'Stairway to Data',
        image: '/images/stairway-data.jpg',
        descKey: 'stairway',
        languages: ['Python', 'OpenCV', 'Scikit-learn', 'XGBoost'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/Evowind/stairway-to-data',
        updated: 'Mar 30, 2025',
        status: 'Completed',
        category: 'Computer Vision',
        collaborative: true,
        collaborator: 'Kemoory, pontormo',
        features: ['Edge detection', 'ML classification', 'Mobile optimisation'],
        complexity: 'Advanced',
    },
    {
        title: 'Rental Car Service',
        image: '/images/rental-car.jpg',
        descKey: 'rentalcar',
        languages: ['HTML', 'CSS', 'JavaScript', 'DevOps'],
        mainLang: 'JavaScript',
        githubUrl: 'https://github.com/Evowind/rental-car-service',
        updated: 'Mar 5, 2025',
        status: 'Completed',
        category: 'Web Development',
        features: ['Booking system', 'User management', 'DevOps'],
        complexity: 'Intermediate',
    },
    {
        title: 'Argumentation Framework Solver',
        image: '/images/argumentation-solver.jpg',
        descKey: 'argFramework',
        languages: ['Python', 'Logic', 'Algorithms'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/Evowind/argumentation-framework-solver',
        updated: 'Dec 20, 2024',
        status: 'Completed',
        category: 'AI / Logic',
        features: ['Multiple semantics', 'Graph algorithms', 'Logical reasoning'],
        complexity: 'Advanced',
    },
    {
        title: 'ShapeShifter Classifier',
        image: '/images/shapeshifter.jpg',
        descKey: 'shapeshifter',
        languages: ['C++', 'OpenCV', 'ML'],
        mainLang: 'C++',
        githubUrl: 'https://github.com/Evowind/shapeshifter-classifier',
        updated: 'Dec 8, 2024',
        status: 'Completed',
        category: 'Computer Vision',
        features: ['Real-time classification', 'Shape detection', 'Performance optimisation'],
        complexity: 'Advanced',
    },
    {
        title: 'ChamPygnon',
        image: '/images/champygnon.jpg',
        descKey: 'champygnon',
        languages: ['Python', 'Web Scraping', 'ML'],
        mainLang: 'Python',
        githubUrl: 'https://github.com/Evowind/ChamPygnon',
        updated: 'Apr 12, 2024',
        status: 'Completed',
        category: 'Machine Learning',
        features: ['Web scraping', 'Image classification', 'Data visualisation'],
        complexity: 'Intermediate',
    },
    {
        title: 'Pacman Game',
        image: '/images/pacman.jpg',
        descKey: 'pacman',
        languages: ['Java', 'Design Patterns'],
        mainLang: 'Java',
        githubUrl: 'https://github.com/Evowind/pacman-game',
        updated: 'Jan 8, 2024',
        status: 'Completed',
        category: 'Game Development',
        collaborative: true,
        collaborator: 'cxre',
        features: ['State pattern', 'AI ghosts', 'JavaDoc'],
        complexity: 'Intermediate',
    },
    {
        title: 'Custom Shell',
        image: '/images/shell.jpg',
        descKey: 'shell',
        languages: ['C', 'Systems'],
        mainLang: 'C',
        githubUrl: 'https://github.com/Evowind/shell-project',
        updated: 'Jan 3, 2024',
        status: 'Completed',
        category: 'Systems Programming',
        features: ['Process management', 'I/O redirection', 'Built-in commands'],
        complexity: 'Intermediate',
    },
    {
        title: 'Othello Game',
        image: '/images/othello.jpg',
        descKey: 'othello',
        languages: ['Java', 'AI', 'Algorithms'],
        mainLang: 'Java',
        githubUrl: 'https://github.com/Evowind/othello-game',
        updated: 'Jan 8, 2024',
        status: 'Completed',
        category: 'Game Development',
        collaborative: true,
        collaborator: 'cxre',
        features: ['MiniMax + alpha-beta', 'AI opponent', 'Strategic gameplay'],
        complexity: 'Advanced',
    },
    {
        title: 'Administration Panel',
        image: '/images/administration.jpg',
        descKey: 'admin',
        languages: ['PHP', 'MySQL', 'HTML', 'CSS'],
        mainLang: 'PHP',
        githubUrl: 'https://github.com/Evowind/administration-system',
        updated: 'Jan 3, 2024',
        status: 'Completed',
        category: 'Web Development',
        features: ['User management', 'CRUD', 'Authentication'],
        complexity: 'Intermediate',
    },
    {
        title: 'Pizzeria Website',
        image: '/images/pizzeria.jpg',
        descKey: 'pizzeria',
        languages: ['PHP', 'JavaScript', 'Laravel', 'MySQL'],
        mainLang: 'PHP',
        githubUrl: 'https://github.com/Evowind/pizzeria-website',
        updated: 'Jan 3, 2024',
        status: 'Completed',
        category: 'Web Development',
        features: ['Laravel', 'Database', 'Auth system'],
        complexity: 'Intermediate',
    },
];



function statusColor(s) {
    if (s === 'Completed')  return { border: 'rgba(100,180,100,0.3)', color: '#7dc97d', bg: 'rgba(100,180,100,0.07)' };
    if (s === 'In Progress') return { border: 'rgba(139,125,216,0.3)', color: 'var(--color-accent2)', bg: 'rgba(139,125,216,0.07)' };
    if (s === 'Active')     return { border: 'rgba(200,169,110,0.3)', color: 'var(--color-accent)', bg: 'rgba(200,169,110,0.07)' };
    return { border: 'var(--color-border)', color: 'var(--color-muted)', bg: 'transparent' };
}

export default function ProjectsPage() {
    const { lang } = useApp();
    const L = (entry) => getLang(entry, lang);

    // Filter/sort metadata — defined here so L() is available
    const categoryKeys = [
        { en: 'All',                 label: L(t.projectMeta.catAll) },
        { en: 'Computer Vision',     label: L(t.projectMeta.catCV) },
        { en: 'Machine Learning',    label: L(t.projectMeta.catML) },
        { en: 'Web Development',     label: L(t.projectMeta.catWeb) },
        { en: 'Systems Programming', label: L(t.projectMeta.catSystems) },
        { en: 'DevOps',              label: L(t.projectMeta.catDevops) },
        { en: 'AI / Logic',          label: L(t.projectMeta.catAI) },
        { en: 'Game Development',    label: L(t.projectMeta.catGame) },
    ];
    const categories  = categoryKeys.map(c => c.label);
    const catMap      = Object.fromEntries(categoryKeys.map(c => [c.label, c.en]));

    const statusKeys = [
        { en: 'All',         label: L(t.projectMeta.statAll) },
        { en: 'Completed',   label: L(t.projectMeta.statCompleted) },
        { en: 'In Progress', label: L(t.projectMeta.statProgress) },
        { en: 'Active',      label: L(t.projectMeta.statActive) },
    ];
    const statuses      = statusKeys.map(s => s.label);
    const statusMap     = Object.fromEntries(statusKeys.map(s => [s.label, s.en]));
    const statusDisplay = Object.fromEntries(statusKeys.map(s => [s.en, s.label]));

    const complexKeys = [
        { en: 'All',          label: L(t.projectMeta.compAll) },
        { en: 'Intermediate', label: L(t.projectMeta.compInter) },
        { en: 'Advanced',     label: L(t.projectMeta.compAdvanced) },
    ];
    const complexities  = complexKeys.map(c => c.label);
    const complexityMap = Object.fromEntries(complexKeys.map(c => [c.label, c.en]));

    // State always stores EN keys — independent of language
    const [search, setSearch] = useState('');
    const [cat, setCat] = useState('All');          // EN key
    const [status, setStatus] = useState('All');    // EN key
    const [complexity, setComplexity] = useState('All'); // EN key
    const [sort, setSort] = useState('updated');
    const [expanded, setExpanded] = useState(null);

    const filtered = useMemo(() => {
        // cat/status/complexity are EN keys — compare directly
        const descProjects = projects.map(p => ({
            ...p,
            description: getLang(t.projectDesc[p.descKey], lang),
        }));
        let list = descProjects.filter(p => {
            const q = search.toLowerCase();
            return (
                (p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.languages.some(l => l.toLowerCase().includes(q))) &&
                (cat        === 'All' || p.category   === cat) &&
                (status     === 'All' || p.status     === status) &&
                (complexity === 'All' || p.complexity === complexity)
            );
        });
        if (sort === 'title') list.sort((a, b) => a.title.localeCompare(b.title));
        else if (sort === 'complexity') {
            const o = { Intermediate: 1, Advanced: 2 };
            list.sort((a, b) => (o[b.complexity] || 0) - (o[a.complexity] || 0));
        } else {
            list.sort((a, b) => new Date(b.updated) - new Date(a.updated));
        }
        return list;
    }, [search, cat, status, complexity, sort, lang]);

    const reset = () => { setSearch(''); setCat('All'); setStatus('All'); setComplexity('All'); setExpanded(null); };

    return (
        <div style={{ position: 'relative', zIndex: 1 }}>

            {/* ── PAGE HEADER ── */}
            <div style={{
                maxWidth: 960, margin: '0 auto',
                padding: 'clamp(56px, 8vw, 96px) 24px 64px',
            }}>
                <span className="label fade-in" style={{ marginBottom: 16 }}>Portfolio</span>
                <h1 className="fade-up delay-1" style={{ marginBottom: 16 }}>
                    Projects
                </h1>
                <p className="fade-up delay-2" style={{
                    fontFamily: 'var(--font-display)', fontStyle: 'italic',
                    fontSize: '1.15rem', color: 'var(--color-muted)',
                }}>
                    {filtered.length} {lang === 'fr' ? (filtered.length !== 1 ? 'projets trouvés' : 'projet trouvé') : (filtered.length !== 1 ? 'projects found' : 'project found')}
                </p>
            </div>

            {/* ── FILTERS ── */}
            <div style={{
                background: 'var(--color-surface)',
                borderTop: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
                padding: '24px',
                position: 'sticky', top: 56, zIndex: 40,
            }}>
                <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {/* Search */}
                    <input
                        type="text" value={search} onChange={e => setSearch(e.target.value)}
                        placeholder={L(t.projects.searchPlaceholder)}
                        style={{
                            fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                            padding: '10px 16px',
                            background: 'var(--color-panel)',
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-bright)', width: '100%',
                            outline: 'none', borderRadius: 8,
                            transition: 'border-color 0.2s',
                        }}
                        className="search-input"
                    />
                    {/* Filter row */}
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                        {/* Each select: value = stable EN key, text = translated label */}
                        {[
                            { value: cat,        setter: setCat,        opts: categoryKeys },
                            { value: status,     setter: setStatus,     opts: statusKeys },
                            { value: complexity, setter: setComplexity, opts: complexKeys },
                            { value: sort,       setter: setSort,       opts: [
                                { en: 'updated',    label: L(t.projects.sortRecent) },
                                { en: 'title',      label: L(t.projects.sortTitle) },
                                { en: 'complexity', label: L(t.projects.sortComplex) },
                            ]},
                        ].map((sel, i) => (
                            <select key={i} value={sel.value} onChange={e => sel.setter(e.target.value)}
                                    style={{
                                        fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                                        letterSpacing: '0.08em',
                                        padding: '8px 12px',
                                        background: 'var(--color-panel)',
                                        border: '1px solid var(--color-border)',
                                        color: 'var(--color-text)',
                                        borderRadius: 6, outline: 'none', cursor: 'pointer',
                                        appearance: 'none',
                                        minWidth: [140, 110, 120, 130][i],
                                    }}>
                                {sel.opts.map(o => (
                                    <option key={o.en} value={o.en}>{o.label}</option>
                                ))}
                            </select>
                        ))}
                        {(search || cat !== 'All' || status !== 'All' || complexity !== 'All') && (
                            <button onClick={reset} style={{
                                fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                letterSpacing: '0.1em', textTransform: 'uppercase',
                                padding: '8px 14px', border: '1px solid var(--color-border)',
                                color: 'var(--color-muted)', background: 'transparent',
                                borderRadius: 6, cursor: 'pointer', transition: 'color 0.2s',
                            }} className="reset-btn">
                                {L(t.projects.resetLabel)}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* ── PROJECT LIST ── */}
            <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px 80px' }}>
                {filtered.length === 0 ? (
                    <div style={{ padding: '80px 0', textAlign: 'center' }}>
                        <p style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.2rem' }}>
                            {L(t.projects.noResults)}
                        </p>
                    </div>
                ) : (
                    <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                        {filtered.map((p, i) => {
                            const isOpen = expanded === p.title;
                            const sc = statusColor(p.status);
                            return (
                                <div key={p.title} style={{ borderTop: '1px solid var(--color-border)' }}>
                                    {/* Row */}
                                    <button
                                        onClick={() => setExpanded(isOpen ? null : p.title)}
                                        style={{
                                            width: '100%', textAlign: 'left', background: 'none',
                                            border: 'none', cursor: 'pointer', padding: '28px 0',
                                            display: 'grid', gridTemplateColumns: '40px 1fr auto',
                                            gap: 24, alignItems: 'start',
                                            transition: 'background 0.2s',
                                        }}
                                        className="project-row-btn"
                                    >
                                        {/* Index */}
                                        <span style={{
                                            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                            color: 'var(--color-muted)', letterSpacing: '0.08em',
                                            paddingTop: 4,
                                        }}>
                                            {String(i + 1).padStart(2, '0')}
                                        </span>

                                        {/* Content */}
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 8 }}>
                                                <span style={{
                                                    fontFamily: 'var(--font-display)', fontSize: '1.05rem',
                                                    fontWeight: 700, color: 'var(--color-bright)',
                                                }}>{p.title}</span>
                                                <span style={{
                                                    fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                                                    letterSpacing: '0.1em', padding: '2px 8px',
                                                    border: `1px solid ${sc.border}`, color: sc.color,
                                                    background: sc.bg, borderRadius: 4,
                                                    textTransform: 'uppercase',
                                                }}>{statusDisplay[p.status] || p.status}</span>
                                                {p.collaborative && (
                                                    <span className="tag" style={{ fontSize: '0.58rem' }}>{L(t.common.collab)}</span>
                                                )}
                                            </div>
                                            <p style={{
                                                fontSize: '0.875rem', color: 'var(--color-muted)',
                                                lineHeight: 1.65, marginBottom: 12,
                                            }}>{p.description}</p>
                                            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                                                {p.languages.slice(0, 4).map(l => (
                                                    <span key={l} className="tag accent" style={{ fontSize: '0.58rem' }}>{l}</span>
                                                ))}
                                                {p.languages.length > 4 && (
                                                    <span className="tag" style={{ fontSize: '0.58rem' }}>+{p.languages.length - 4}</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Toggle */}
                                        <span style={{
                                            fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                                            color: 'var(--color-muted)', paddingTop: 4,
                                            transition: 'transform 0.2s, color 0.2s',
                                            transform: isOpen ? 'rotate(45deg)' : 'none',
                                        }}>+</span>
                                    </button>

                                    {/* Expanded detail */}
                                    {isOpen && (
                                        <div style={{
                                            paddingBottom: 40,
                                            paddingLeft: 64,
                                            display: 'grid',
                                            gridTemplateColumns: '260px 1fr',
                                            gap: 40,
                                            alignItems: 'start',
                                            animation: 'expandIn 0.25s cubic-bezier(0.16,1,0.3,1) both',
                                        }} className="expanded-grid">

                                            {/* Screenshot */}
                                            <div style={{
                                                borderRadius: 8,
                                                overflow: 'hidden',
                                                border: '1px solid var(--color-border)',
                                                background: 'var(--color-panel)',
                                                aspectRatio: '16 / 10',
                                                position: 'relative',
                                            }}>
                                                <img
                                                    src={p.image}
                                                    alt={`${p.title} screenshot`}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        display: 'block',
                                                        transition: 'opacity 0.3s',
                                                    }}
                                                    onError={e => {
                                                        e.currentTarget.style.display = 'none';
                                                        e.currentTarget.nextSibling.style.display = 'flex';
                                                    }}
                                                />
                                                {/* Fallback placeholder */}
                                                <div style={{
                                                    display: 'none',
                                                    position: 'absolute', inset: 0,
                                                    alignItems: 'center', justifyContent: 'center',
                                                    background: 'var(--color-panel)',
                                                    flexDirection: 'column', gap: 8,
                                                }}>
                                                    <span style={{ fontSize: '1.4rem', opacity: 0.2 }}>◈</span>
                                                    <span style={{
                                                        fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                                                        color: 'var(--color-muted)', letterSpacing: '0.1em',
                                                        textTransform: 'uppercase',
                                                    }}>No preview</span>
                                                </div>
                                            </div>

                                            {/* Info */}
                                            <div>
                                                {/* Features */}
                                                {p.features && (
                                                    <div style={{ marginBottom: 24 }}>
                                                        <div style={{
                                                            fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                                                            letterSpacing: '0.14em', textTransform: 'uppercase',
                                                            color: 'var(--color-muted)', marginBottom: 12,
                                                        }}>{L(t.projects.featuresLabel)}</div>
                                                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                                            {p.features.map(f => (
                                                                <span key={f} className="tag" style={{ fontSize: '0.6rem' }}>{f}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Meta row */}
                                                <div style={{
                                                    display: 'flex', gap: 20, flexWrap: 'wrap',
                                                    paddingTop: 16, marginBottom: 24,
                                                    borderTop: '1px solid var(--color-border)',
                                                }}>
                                                    <span style={{
                                                        fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                                        color: 'var(--color-muted)',
                                                    }}>{L(t.projects.updatedLabel)} {p.updated}</span>
                                                    <span style={{
                                                        fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                                        color: 'var(--color-muted)',
                                                    }}>{lang === 'fr' ? ({ 'Intermediate': 'Intermédiaire', 'Advanced': 'Avancé' }[p.complexity] || p.complexity) : p.complexity}</span>
                                                    {p.collaborative && (
                                                        <span style={{
                                                            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                                            color: 'var(--color-accent)',
                                                        }}>{L(t.projects.withLabel)} @{p.collaborator}</span>
                                                    )}
                                                </div>

                                                {/* GitHub CTA */}
                                                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                                                   className="btn btn-filled"
                                                   style={{ fontSize: '0.65rem' }}>
                                                    {L(t.common.viewOnGithub)}
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            <style>{`
                .search-input:focus { border-color: rgba(200,169,110,0.35) !important; }
                .project-row-btn:hover { background: rgba(200,169,110,0.02) !important; }
                .reset-btn:hover { color: var(--color-accent) !important; border-color: rgba(200,169,110,0.3) !important; }
                @keyframes expandIn {
                    from { opacity: 0; transform: translateY(-6px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @media (max-width: 720px) {
                    .expanded-grid {
                        grid-template-columns: 1fr !important;
                        padding-left: 0 !important;
                    }
                }
                @media (max-width: 480px) {
                    .expanded-grid { padding-left: 0 !important; }
                }
            `}</style>
        </div>
    );
}