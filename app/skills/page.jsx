'use client';

import { useApp } from '../../lib/context';
import { t, getLang } from '../../lib/translations';

function levelToDots(level) {
    if (level >= 82) return 5;
    if (level >= 68) return 4;
    if (level >= 55) return 3;
    if (level >= 40) return 2;
    return 1;
}

function levelLabel(level, L) {
    if (level >= 80) return { text: L(t.common.advanced),      color: 'var(--color-accent)' };
    if (level >= 60) return { text: L(t.common.intermediate),  color: 'var(--color-accent2)' };
    return              { text: L(t.common.learning),          color: 'var(--color-muted)' };
}

function DotsRating({ level }) {
    const dots = levelToDots(level);
    return (
        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            {[1,2,3,4,5].map(i => (
                <span key={i} style={{
                    display: 'inline-block',
                    width: 8, height: 8,
                    borderRadius: '50%',
                    background: i <= dots ? 'var(--color-accent)' : 'transparent',
                    border: `1px solid ${i <= dots ? 'var(--color-accent)' : 'rgba(200,169,110,0.25)'}`,
                    boxShadow: i <= dots ? '0 0 4px rgba(200,169,110,0.4)' : 'none',
                    transition: 'background 0.2s',
                }} />
            ))}
        </div>
    );
}

export default function SkillsPage() {
    const { lang } = useApp();
    const L = (entry) => getLang(entry, lang);

    const categories = [
        {
            labelKey: 'catLangs', descKey: 'catLangsDesc',
            skills: [
                { name: 'Python',                  level: 87, xp: `3 ${L(t.skills.xpLabel)}`, projects: 8,  tags: ['ML', 'CV', 'Scripting', 'Data'] },
                { name: 'C / C++',                 level: 82, xp: `5 ${L(t.skills.xpLabel)}`, projects: 4,  tags: ['Systems', 'OpenCV', 'Performance'] },
                { name: 'Java',                    level: 78, xp: `5 ${L(t.skills.xpLabel)}`, projects: 3,  tags: ['OOP', 'Algorithms', 'Game Dev'] },
                { name: 'JavaScript / TypeScript', level: 72, xp: `2 ${L(t.skills.xpLabel)}`, projects: 6,  tags: ['React', 'Next.js', 'Node'] },
                { name: 'PHP',                     level: 68, xp: `4 ${L(t.skills.xpLabel)}`, projects: 3,  tags: ['Laravel', 'Web', 'Backend'] },
            ],
        },
        {
            labelKey: 'catAI', descKey: 'catAIDesc',
            skills: [
                { name: 'OpenCV',                          level: 80, xp: `2 ${L(t.skills.xpLabel)}`, projects: 5,  tags: ['Image Processing', 'Detection', 'Real-time'] },
                { name: 'Scikit-learn',                    level: 72, xp: `3 ${L(t.skills.xpLabel)}`, projects: 4,  tags: ['Classification', 'Regression', 'Clustering'] },
                { name: 'PyTorch',                         level: 62, xp: `1 ${L(t.skills.xpLabel)}`, projects: 2,  tags: ['Deep Learning', 'CNN', 'Model Training'] },
                { name: 'Deep Learning',                   level: 62, xp: `1 ${L(t.skills.xpLabel)}`, projects: 3,  tags: ['Neural Nets', 'Feature Extraction'] },
                { name: L(t.skillNames.logicSystems),      level: 80, xp: `3 ${L(t.skills.xpLabel)}`, projects: 1,  tags: ['Argumentation', 'Reasoning', 'Algorithms'] },
            ],
        },
        {
            labelKey: 'catWeb', descKey: 'catWebDesc',
            skills: [
                { name: 'React / Next.js',    level: 60, xp: `1 ${L(t.skills.xpLabel)}`, projects: 3, tags: ['SSR', 'Components', 'State'] },
                { name: 'React Native',       level: 70, xp: `1 ${L(t.skills.xpLabel)}`, projects: 1, tags: ['Mobile', 'TypeScript', 'Expo'] },
                { name: 'Laravel',            level: 68, xp: `5 ${L(t.skills.xpLabel)}`, projects: 2, tags: ['MVC', 'ORM', 'Auth'] },
                { name: 'MySQL / PostgreSQL', level: 74, xp: `5 ${L(t.skills.xpLabel)}`, projects: 6, tags: ['Schema Design', 'Queries', 'Optimization'] },
                { name: 'Flask',              level: 60, xp: `1 ${L(t.skills.xpLabel)}`, projects: 2, tags: ['Python', 'REST API'] },
            ],
        },
        {
            labelKey: 'catDevops', descKey: 'catDevopsDesc',
            skills: [
                { name: 'Docker',                       level: 65, xp: `2 ${L(t.skills.xpLabel)}`,  projects: 3,  tags: ['Containers', 'Compose', 'CI/CD'] },
                { name: 'Kubernetes',                   level: 48, xp: L(t.skillNames.sixMonths),    projects: 1,  tags: ['Orchestration', 'Microservices'] },
                { name: 'Linux',                        level: 76, xp: `4 ${L(t.skills.xpLabel)}`,  projects: 0,  tags: ['CLI', 'Shell', 'Admin'] },
                { name: 'Git / GitHub',                 level: 85, xp: `5 ${L(t.skills.xpLabel)}`,  projects: 15, tags: ['Version Control', 'Collaboration'] },
                { name: L(t.skillNames.systemsProg),    level: 72, xp: `2 ${L(t.skills.xpLabel)}`,  projects: 2,  tags: ['Shell impl.', 'Low-level', 'C'] },
            ],
        },
    ];

    return (
        <div style={{ position: 'relative', zIndex: 1 }}>

            {/* ── PAGE HEADER ── */}
            <div style={{ maxWidth: 960, margin: '0 auto', padding: 'clamp(56px, 8vw, 96px) 24px 64px' }}>
                <span className="label fade-in" style={{ marginBottom: 16 }}>{L(t.skills.pageLabel)}</span>
                <h1 className="fade-up delay-1" style={{ marginBottom: 16 }}>
                    {L(t.skills.pageTitle)}<br />
                    <span className="text-gradient">{L(t.skills.pageTitleEm)}</span>
                </h1>
                <p className="fade-up delay-2" style={{
                    fontFamily: 'var(--font-display)', fontStyle: 'italic',
                    fontSize: '1.15rem', color: 'var(--color-muted)', maxWidth: 480,
                }}>
                    {L(t.skills.pageDesc)}
                </p>
            </div>

            {/* ── STATS ── */}
            <div style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} className="stats-grid">
                    {[
                        { val: '20+', label: L(t.skills.statTech) },
                        { val: '15+', label: L(t.skills.statBuilt) },
                        { val: '5+',  label: L(t.skills.statLangs) },
                        { val: '5+',  label: L(t.skills.statYears) },
                    ].map((s, i) => (
                        <div key={i} style={{ padding: '28px 24px', textAlign: 'center', borderRight: i < 3 ? '1px solid var(--color-border)' : 'none' }}>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-accent)', lineHeight: 1, marginBottom: 8 }}>{s.val}</div>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-muted)' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── CATEGORIES ── */}
            {categories.map((cat, ci) => (
                <div key={ci} style={{
                    background: ci % 2 === 0 ? 'transparent' : 'var(--color-surface)',
                    borderBottom: '1px solid var(--color-border)',
                    padding: 'clamp(56px, 7vw, 88px) 24px',
                }}>
                    <div style={{ maxWidth: 960, margin: '0 auto' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48 }} className="section-grid">
                            <div>
                                <span className="label" style={{ marginBottom: 8 }}>{String(ci + 1).padStart(2, '0')}</span>
                                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-bright)', marginBottom: 8 }}>
                                    {L(t.skills[cat.labelKey])}
                                </div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                                    {L(t.skills[cat.descKey])}
                                </p>
                            </div>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                                gap: 12,
                            }}>
                                {cat.skills.map((s, si) => {
                                    const lvl = levelLabel(s.level, L);
                                    return (
                                        <div key={si}
                                             className={`fade-up delay-${si + 1}`}
                                             style={{
                                                 padding: '20px 24px',
                                                 background: 'var(--color-bg)',
                                                 border: '1px solid var(--color-border)',
                                                 borderRadius: 10,
                                                 transition: 'border-color 0.2s',
                                             }}
                                             onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,169,110,0.25)'}
                                             onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
                                        >
                                            {/* Top row: name + dots */}
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                                                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-bright)', lineHeight: 1.2 }}>
                                                    {s.name}
                                                </span>
                                                <DotsRating level={s.level} />
                                            </div>
                                            {/* Meta: level + xp */}
                                            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: lvl.color, letterSpacing: '0.08em' }}>
                                                    {lvl.text}
                                                </span>
                                                <span style={{ color: 'var(--color-border)', fontSize: '0.7rem' }}>·</span>
                                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)' }}>
                                                    {s.xp}
                                                </span>
                                                <span style={{ color: 'var(--color-border)', fontSize: '0.7rem' }}>·</span>
                                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)' }}>
                                                    {s.projects > 0
                                                        ? `${s.projects} ${s.projects > 1 ? L(t.skills.projectsLabel) : L(t.common.project)}`
                                                        : L(t.common.dailyUse)}
                                                </span>
                                            </div>
                                            {/* Tags */}
                                            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                                                {s.tags.map(tag => <span key={tag} className="tag" style={{ fontSize: '0.58rem' }}>{tag}</span>)}
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
            <div style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', padding: 'clamp(56px, 7vw, 80px) 24px' }}>
                <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 32 }}>
                    <div>
                        <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: 8 }}>{L(t.skills.ctaTitle)}</h2>
                        <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>{L(t.skills.ctaDesc)}</p>
                    </div>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <a href="/projects" className="btn btn-filled">{L(t.skills.viewProjects)}</a>
                        <a href="/resume" className="btn">{L(t.skills.downloadResume)}</a>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 640px) {
                    .section-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
                    .stats-grid   { grid-template-columns: repeat(2, 1fr) !important; }
                }
            `}</style>
        </div>
    );
}