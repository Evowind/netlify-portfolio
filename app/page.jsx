'use client';
import Link from 'next/link';
import { useApp } from '../lib/context';
import { t, getLang } from '../lib/translations';

export default function Page() {
    const { lang } = useApp();
    const L = (entry) => getLang(entry, lang);

    const experiences = [
        { key: 'edu1', type: 'edu' },
        { key: 'job1', type: 'work' },
        { key: 'edu2', type: 'edu' },
    ];

    const competencyKeys = ['cv', 'ml', 'fs', 'sys', 'ai', 'res'];
    const icons = ['◎', '⬡', '◈', '⬙', '⧉', '◐'];

    const skills = [
        { name: 'Python',           level: 87, tags: ['ML', 'CV', 'Data'] },
        { name: 'C / C++',          level: 82, tags: ['Systems', 'OpenCV'] },
        { name: 'JavaScript / TS',  level: 72, tags: ['React', 'Next.js'] },
        { name: 'Java',             level: 78, tags: ['OOP', 'Algorithms'] },
        { name: 'OpenCV',           level: 80, tags: ['Vision', 'Detection'] },
        { name: 'PyTorch',          level: 62, tags: ['Deep Learning'] },
        { name: 'PHP',              level: 68, tags: ['Laravel', 'MySQL'] },
        { name: 'Docker / K8s',     level: 65, tags: ['DevOps', 'Infra'] },
    ];

    const projectKeys = [
        { num: '01', title: 'Argumentation Framework Solver', cat: 'AI / Logic', desc: lang === 'fr' ? 'Solveur Python pour frameworks d\'argumentation, sémantiques admissible, stable, fondée et préférée. Moteur de raisonnement basé sur les graphes.' : 'Python solver for argumentation frameworks, admissible, stable, grounded, and preferred semantics. Graph-based reasoning engine.', langs: ['Python', 'Logic', 'Algorithms'], url: 'https://github.com/Evowind/argumentation-framework-solver' },
        { num: '02', title: 'Document Layout Analysis', cat: 'Computer Vision', desc: lang === 'fr' ? 'Pipeline deep learning pour la détection de mise en page et intégration OCR. Projet de recherche collaboratif.' : 'Deep learning pipeline for document layout detection and OCR integration. Collaborative research project.', langs: ['Python', 'PyTorch', 'OpenCV'], url: 'https://github.com/Evowind/document-layout-analysis' },
        { num: '03', title: 'Mario Kart Reset Online', cat: lang === 'fr' ? 'Full-Stack' : 'Full-Stack', desc: lang === 'fr' ? 'Tracker de tournois utilisant l\'algorithme TrueSkill. Flask + PostgreSQL, tableau de bord stats complet.' : 'Tournament tracker using the TrueSkill rating algorithm. Flask + PostgreSQL, full stats dashboard.', langs: ['Python', 'Flask', 'PostgreSQL', 'JS'], url: 'https://github.com/Evowind/mariokart-reset-online' },
        { num: '04', title: 'ShapeShifter Classifier', cat: 'Computer Vision', desc: lang === 'fr' ? 'Reconnaissance de formes en temps réel en C++ avec OpenCV. Optimisé pour l\'inférence basse latence.' : 'Real-time shape recognition in C++ with OpenCV. Optimised for low-latency inference.', langs: ['C++', 'OpenCV', 'ML'], url: 'https://github.com/Evowind/shapeshifter-classifier' },
        { num: '05', title: 'Distributed Tournament System', cat: 'DevOps', desc: lang === 'fr' ? 'Microservices avec orchestration Docker & Kubernetes. Suite de tests d\'intégration complète.' : 'Microservices with Docker & Kubernetes orchestration. Complete integration test suite.', langs: ['Docker', 'Kubernetes', 'JS'], url: 'https://github.com/Evowind/mkreset-kubernetes' },
        { num: '06', title: 'Exoplanet Detection ML', cat: 'Machine Learning', desc: lang === 'fr' ? 'Pipeline de classification pour la détection d\'exoplanètes à partir de données astronomiques. Benchmark multi-modèles.' : 'Classification pipeline for detecting exoplanets from astronomical data. Multi-model benchmarking.', langs: ['Python', 'Scikit-learn', 'Data Science'], url: 'https://github.com/Evowind/exoplanet-detection-ml', wip: true },
    ];

    return (
        <div style={{ position: 'relative', zIndex: 1 }}>

            {/* ── HERO ── */}
            <section style={{
                maxWidth: 960, margin: '0 auto',
                padding: 'clamp(64px, 10vw, 120px) 24px clamp(80px, 12vw, 140px)',
            }}>
                <div className="fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 40 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-accent)', boxShadow: '0 0 8px var(--color-accent)', display: 'inline-block' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-muted)' }}>
                        {L(t.home.badge)}
                    </span>
                </div>

                <h1 className="fade-up delay-1" style={{ marginBottom: 12 }}>
                    Samy<br /><span className="text-gradient">Tadly</span>
                </h1>

                <p className="fade-up delay-2" style={{
                    fontFamily: 'var(--font-display)', fontStyle: 'italic',
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                    color: 'var(--color-muted)', marginBottom: 48, maxWidth: 480,
                    whiteSpace: 'pre-line',
                }}>
                    {L(t.home.role)}
                </p>

                <div className="fade-up delay-3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <a href="#projects" className="btn btn-filled">{L(t.home.viewProjects)}</a>
                    <a href="https://docs.google.com/document/d/1dQHVUnKcoxcptqzMPPZSS6Xuvhv0Tz2K/edit" target="_blank" rel="noopener noreferrer" className="btn">{L(t.common.downloadCv)}</a>
                    <a href="https://github.com/Evowind" target="_blank" rel="noopener noreferrer" className="btn">
                        <GithubIcon /> GitHub
                    </a>
                </div>

                {/* Stats */}
                <div className="fade-up delay-4" style={{
                    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 1, marginTop: 80,
                    background: 'var(--color-border)', borderRadius: 12, overflow: 'hidden',
                    border: '1px solid var(--color-border)',
                }}>
                    {[
                        { val: '15+', label: L(t.home.statProjects) },
                        { val: '5',   label: L(t.home.statLangs) },
                        { val: '3+',  label: L(t.home.statYears) },
                        { val: 'M2',  label: L(t.home.statDegree) },
                    ].map(s => (
                        <div key={s.label} style={{ background: 'var(--color-surface)', padding: '28px 20px', textAlign: 'center' }}>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--color-accent)', lineHeight: 1, marginBottom: 8 }}>{s.val}</div>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-muted)' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── ABOUT ── */}
            <section style={{
                maxWidth: 960, margin: '0 auto',
                padding: '0 24px 120px',
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start',
            }} className="about-grid">
                <div>
                    <span className="label fade-up" style={{ marginBottom: 20 }}>{L(t.home.aboutLabel)}</span>
                    <h2 className="fade-up delay-1" style={{ marginBottom: 28, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                        {L(t.home.aboutTitle)}
                    </h2>
                    <p className="fade-up delay-2" style={{ marginBottom: 20, fontSize: '1.05rem', lineHeight: 1.85 }}
                       dangerouslySetInnerHTML={{ __html: L(t.home.aboutP1) }} />
                    <p className="fade-up delay-3" style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--color-muted)' }}
                       dangerouslySetInnerHTML={{ __html: L(t.home.aboutP2) }} />
                    <div className="fade-up delay-4" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 36 }}>
                        {['Python', 'C++', 'OpenCV', 'PyTorch', 'React Native', 'Docker', 'Next.js', 'Linux'].map(tag => (
                            <span key={tag} className="tag accent">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="fade-up delay-2">
                    <span className="label" style={{ marginBottom: 24 }}>{L(t.home.backgroundLabel)}</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                        {experiences.map((e, i) => {
                            const entry = t.experiences[e.key];
                            return (
                                <div key={i} style={{
                                    paddingBottom: 32, paddingLeft: 20,
                                    borderLeft: i < experiences.length - 1 ? '1px solid var(--color-border)' : '1px solid transparent',
                                    position: 'relative',
                                }}>
                                    <span style={{
                                        position: 'absolute', left: -4, top: 4,
                                        width: 7, height: 7, borderRadius: '50%',
                                        background: e.type === 'work' ? 'var(--color-accent)' : 'var(--color-muted)',
                                        boxShadow: e.type === 'work' ? '0 0 8px var(--color-accent)' : 'none',
                                    }} />
                                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--color-muted)', marginBottom: 6 }}>
                                        {L(entry.date)}
                                    </div>
                                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-bright)', marginBottom: 2 }}>
                                        {L(entry.role)}
                                    </div>
                                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-accent)', letterSpacing: '0.08em', marginBottom: 8 }}>
                                        {L(entry.place)}
                                    </div>
                                    <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--color-muted)' }}>
                                        {L(entry.note)}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <Link href="/resume" className="btn" style={{ marginTop: 8, fontSize: '0.65rem' }}>
                        {L(t.common.fullResume)}
                    </Link>
                </div>
            </section>

            {/* ── COMPETENCIES ── */}
            <section style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
                <div style={{ maxWidth: 960, margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
                        <div>
                            <span className="label" style={{ marginBottom: 16 }}>{L(t.home.expertiseLabel)}</span>
                            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>{L(t.home.expertiseTitle)}</h2>
                        </div>
                        <Link href="/skills" className="btn" style={{ fontSize: '0.65rem' }}>{L(t.common.allSkills)}</Link>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                        {competencyKeys.map((key, i) => (
                            <div key={key} className={`comp-card fade-up delay-${i + 1}`}>
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--color-accent)', marginBottom: 16, opacity: 0.6 }}>{icons[i]}</div>
                                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-bright)', marginBottom: 10 }}>
                                    {L(t.competencies[key].title)}
                                </div>
                                <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-muted)' }}>
                                    {L(t.competencies[key].desc)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SKILLS ── */}
            <section style={{ maxWidth: 960, margin: '0 auto', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
                <span className="label" style={{ marginBottom: 16 }}>{L(t.home.skillsLabel)}</span>
                <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: 56 }}>{L(t.home.skillsTitle)}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px 64px' }}>
                    {skills.map((s, i) => (
                        <div key={i} className={`fade-up delay-${(i % 4) + 1}`}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-bright)' }}>{s.name}</span>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-accent)', letterSpacing: '0.08em' }}>{s.level}%</span>
                            </div>
                            <div className="skill-bar-track">
                                <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
                            </div>
                            <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
                                {s.tags.map(tag => <span key={tag} className="tag" style={{ fontSize: '0.6rem' }}>{tag}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PROJECTS ── */}
            <section id="projects" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: 'clamp(64px, 8vw, 100px) 24px' }}>
                <div style={{ maxWidth: 960, margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
                        <div>
                            <span className="label" style={{ marginBottom: 16 }}>{L(t.home.workLabel)}</span>
                            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>{L(t.home.workTitle)}</h2>
                        </div>
                        <Link href="/projects" className="btn" style={{ fontSize: '0.65rem' }}>{L(t.common.allProjects)}</Link>
                    </div>
                    <div style={{ borderTop: '1px solid var(--color-border)' }}>
                        {projectKeys.map((p, i) => (
                            <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                               className="project-row"
                               style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto', gap: 24, alignItems: 'start', padding: '32px 0', borderBottom: '1px solid var(--color-border)', textDecoration: 'none', cursor: 'pointer' }}>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-muted)', letterSpacing: '0.08em', paddingTop: 3 }}>{p.num}</span>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text)', transition: 'color 0.2s' }}>{p.title}</span>
                                        <span className="tag">{p.cat}</span>
                                        {p.wip && <span className="tag purple">{L(t.common.inProgress)}</span>}
                                    </div>
                                    <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-muted)', marginBottom: 14 }}>{p.desc}</p>
                                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                                        {p.langs.map(l => <span key={l} className="tag accent" style={{ fontSize: '0.6rem' }}>{l}</span>)}
                                    </div>
                                </div>
                                <span className="project-arrow" style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--color-accent)', paddingTop: 2 }}>↗</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONTACT ── */}
            <section style={{
                maxWidth: 960, margin: '0 auto',
                padding: 'clamp(64px, 8vw, 100px) 24px clamp(80px, 10vw, 120px)',
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
            }} className="contact-grid">
                <div>
                    <span className="label" style={{ marginBottom: 20 }}>{L(t.home.contactLabel)}</span>
                    <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: 20 }}>
                        {L(t.home.contactTitle)}<br />
                        <em style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>{L(t.home.contactTitleEm)}</em>
                    </h2>
                    <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-muted)' }}>{L(t.home.contactDesc)}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <a href="mailto:tadlysamy@gmail.com" className="btn btn-filled" style={{ justifyContent: 'flex-start', fontSize: '0.75rem', padding: '16px 24px' }}>
                        <span style={{ opacity: 0.6, marginRight: 4 }}>✉</span> tadlysamy@gmail.com
                    </a>
                    <Link href="/contact" className="btn" style={{ justifyContent: 'flex-start', fontSize: '0.75rem', padding: '16px 24px' }}>
                        <span style={{ opacity: 0.6, marginRight: 4 }}>◎</span> {L(t.home.openContactForm)}
                    </Link>
                    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                        <a href="https://github.com/Evowind" target="_blank" rel="noopener noreferrer" className="btn" style={{ flex: 1, justifyContent: 'center', fontSize: '0.65rem' }}>
                            <GithubIcon /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/samy-tadly/" target="_blank" rel="noopener noreferrer" className="btn" style={{ flex: 1, justifyContent: 'center', fontSize: '0.65rem' }}>
                            <LinkedinIcon /> LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 640px) {
                    .about-grid   { grid-template-columns: 1fr !important; gap: 48px !important; }
                    .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
                }
            `}</style>
        </div>
    );
}

function GithubIcon() {
    return (
        <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
    );
}

function LinkedinIcon() {
    return (
        <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
        </svg>
    );
}