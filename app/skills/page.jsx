'use client';

import { useApp } from '../../lib/context';
import { t, getLang } from '../../lib/translations';

const categories = [
    {
        label: 'Programming Languages',
        desc: 'Core languages used across projects',
        skills: [
            { name: 'Python',     level: 87, xp: '3+ yrs', projects: 8,  tags: ['ML', 'CV', 'Scripting', 'Data'] },
            { name: 'C / C++',    level: 82, xp: '5+ yrs', projects: 4,  tags: ['Systems', 'OpenCV', 'Performance'] },
            { name: 'Java',       level: 78, xp: '5+ yrs', projects: 3,  tags: ['OOP', 'Algorithms', 'Game Dev'] },
            { name: 'JavaScript / TypeScript', level: 72, xp: '2+ yrs', projects: 6, tags: ['React', 'Next.js', 'Node'] },
            { name: 'PHP',        level: 68, xp: '4+ yrs', projects: 3,  tags: ['Laravel', 'Web', 'Backend'] },
        ],
    },
    {
        label: 'AI & Machine Learning',
        desc: 'Applied ML, computer vision, and deep learning',
        skills: [
            { name: 'OpenCV',       level: 80, xp: '2+ yrs', projects: 5, tags: ['Image Processing', 'Detection', 'Real-time'] },
            { name: 'Scikit-learn', level: 72, xp: '3+ yrs', projects: 4, tags: ['Classification', 'Regression', 'Clustering'] },
            { name: 'PyTorch',      level: 62, xp: '1+ yr',  projects: 2, tags: ['Deep Learning', 'CNN', 'Model Training'] },
            { name: 'Deep Learning',level: 62, xp: '1+ yr',  projects: 3, tags: ['Neural Nets', 'Feature Extraction'] },
            { name: 'Logic Systems',level: 80, xp: '3+ yrs', projects: 1, tags: ['Argumentation', 'Reasoning', 'Algorithms'] },
        ],
    },
    {
        label: 'Web & Mobile Development',
        desc: 'Frontend, backend, and mobile engineering',
        skills: [
            { name: 'React / Next.js', level: 60, xp: '1+ yr',  projects: 3, tags: ['SSR', 'Components', 'State'] },
            { name: 'React Native',    level: 70, xp: '1+ yr',  projects: 1, tags: ['Mobile', 'TypeScript', 'Expo'] },
            { name: 'Laravel',         level: 68, xp: '5+ yrs', projects: 2, tags: ['MVC', 'ORM', 'Auth'] },
            { name: 'MySQL / PostgreSQL', level: 74, xp: '5+ yrs', projects: 6, tags: ['Schema Design', 'Queries', 'Optimization'] },
            { name: 'Flask',           level: 60, xp: '1+ yr',  projects: 2, tags: ['Python', 'REST API'] },
        ],
    },
    {
        label: 'DevOps & Systems',
        desc: 'Infrastructure, containerisation, and low-level programming',
        skills: [
            { name: 'Docker',              level: 65, xp: '2+ yrs', projects: 3, tags: ['Containers', 'Compose', 'CI/CD'] },
            { name: 'Kubernetes',          level: 48, xp: '6 months', projects: 1, tags: ['Orchestration', 'Microservices'] },
            { name: 'Linux',               level: 76, xp: '4+ yrs', projects: 0, tags: ['CLI', 'Shell', 'Admin'] },
            { name: 'Git / GitHub',        level: 85, xp: '5+ yrs', projects: 15, tags: ['Version Control', 'Collaboration'] },
            { name: 'Systems Programming', level: 72, xp: '2+ yrs', projects: 2, tags: ['Shell impl.', 'Low-level', 'C'] },
        ],
    },
];

const overallStats = [
    { val: '20+', label: 'Technologies' },
    { val: '15+', label: 'Projects built' },
    { val: '5+',  label: 'Languages' },
    { val: '3+',  label: 'Years coding' },
];

function levelLabel(level) {
    if (level >= 80) return { text: 'Advanced', color: 'var(--color-accent)' };
    if (level >= 60) return { text: 'Intermediate', color: 'var(--color-accent2)' };
    return { text: 'Learning', color: 'var(--color-muted)' };
}

export default function SkillsPage() {
    const { lang } = useApp();
    const L = (entry) => getLang(entry, lang);
    return (
        <div style={{ position: 'relative', zIndex: 1 }}>

            {/* ── PAGE HEADER ── */}
            <div style={{
                maxWidth: 960, margin: '0 auto',
                padding: 'clamp(56px, 8vw, 96px) 24px 64px',
            }}>
                <span className="label fade-in" style={{ marginBottom: 16 }}>Technical Profile</span>
                <h1 className="fade-up delay-1" style={{ marginBottom: 16 }}>
                    Skills &amp; <br /><span className="text-gradient">Technologies</span>
                </h1>
                <p className="fade-up delay-2" style={{
                    fontFamily: 'var(--font-display)', fontStyle: 'italic',
                    fontSize: '1.15rem', color: 'var(--color-muted)', maxWidth: 480,
                }}>
                    Hands-on experience across AI, computer vision, full-stack, and systems programming
                </p>
            </div>

            {/* ── OVERALL STATS ── */}
            <div style={{
                background: 'var(--color-surface)',
                borderTop: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
            }}>
                <div style={{
                    maxWidth: 960, margin: '0 auto',
                    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                }} className="stats-grid">
                    {overallStats.map((s, i) => (
                        <div key={i} style={{
                            padding: '28px 24px', textAlign: 'center',
                            borderRight: i < 3 ? '1px solid var(--color-border)' : 'none',
                        }}>
                            <div style={{
                                fontFamily: 'var(--font-display)', fontSize: '1.8rem',
                                fontWeight: 700, color: 'var(--color-accent)',
                                lineHeight: 1, marginBottom: 8,
                            }}>{s.val}</div>
                            <div style={{
                                fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                letterSpacing: '0.14em', textTransform: 'uppercase',
                                color: 'var(--color-muted)',
                            }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── SKILL CATEGORIES ── */}
            {categories.map((cat, ci) => (
                <div key={ci} style={{
                    background: ci % 2 === 0 ? 'transparent' : 'var(--color-surface)',
                    borderBottom: '1px solid var(--color-border)',
                    padding: 'clamp(56px, 7vw, 88px) 24px',
                }}>
                    <div style={{ maxWidth: 960, margin: '0 auto' }}>

                        {/* Section header */}
                        <div style={{
                            display: 'grid', gridTemplateColumns: '200px 1fr',
                            gap: 48, marginBottom: 48,
                        }} className="section-grid">
                            <div>
                                <span className="label" style={{ marginBottom: 8 }}>
                                    {String(ci + 1).padStart(2, '0')}
                                </span>
                                <div style={{
                                    fontFamily: 'var(--font-display)', fontSize: '1.2rem',
                                    fontWeight: 700, color: 'var(--color-bright)', marginBottom: 8,
                                }}>{cat.label}</div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                                    {cat.desc}
                                </p>
                            </div>

                            {/* Skills grid */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
                                {cat.skills.map((s, si) => {
                                    const lvl = levelLabel(s.level);
                                    return (
                                        <div key={si} style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 36 }}
                                             className={`fade-up delay-${si + 1}`}>
                                            {/* Top row */}
                                            <div style={{
                                                display: 'flex', justifyContent: 'space-between',
                                                alignItems: 'baseline', marginBottom: 10, flexWrap: 'wrap', gap: 8,
                                            }}>
                                                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                                                    <span style={{
                                                        fontFamily: 'var(--font-display)', fontSize: '1.1rem',
                                                        fontWeight: 700, color: 'var(--color-bright)',
                                                    }}>{s.name}</span>
                                                    <span style={{
                                                        fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                                        color: lvl.color, letterSpacing: '0.08em',
                                                    }}>{lvl.text}</span>
                                                </div>
                                                <div style={{ display: 'flex', gap: 16, alignItems: 'baseline' }}>
                                                    <span style={{
                                                        fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                                        color: 'var(--color-muted)', letterSpacing: '0.06em',
                                                    }}>{s.xp}</span>
                                                    <span style={{
                                                        fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                                        color: 'var(--color-muted)',
                                                    }}>
                                                        {s.projects > 0 ? `${s.projects} project${s.projects > 1 ? 's' : ''}` : 'Daily use'}
                                                    </span>
                                                    <span style={{
                                                        fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                                                        color: 'var(--color-accent)', letterSpacing: '0.04em',
                                                    }}>{s.level}%</span>
                                                </div>
                                            </div>

                                            {/* Bar */}
                                            <div className="skill-bar-track" style={{ marginBottom: 14 }}>
                                                <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
                                            </div>

                                            {/* Tags */}
                                            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                                                {s.tags.map(t => (
                                                    <span key={t} className="tag" style={{ fontSize: '0.6rem' }}>{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ── CTA ── */}
            <div style={{
                background: 'var(--color-surface)',
                borderTop: '1px solid var(--color-border)',
                padding: 'clamp(56px, 7vw, 80px) 24px',
            }}>
                <div style={{
                    maxWidth: 960, margin: '0 auto',
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', flexWrap: 'wrap', gap: 32,
                }}>
                    <div>
                        <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: 8 }}>
                            See these skills in action
                        </h2>
                        <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>
                            Explore the projects where I've applied these technologies.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <a href="/projects" className="btn btn-filled">View projects</a>
                        <a href="/resume" className="btn">Download resume</a>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 640px) {
                    .section-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
                    .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
            `}</style>
        </div>
    );
}