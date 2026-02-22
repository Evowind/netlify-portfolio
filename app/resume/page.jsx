'use client';

import Link from 'next/link';
import { useApp } from '../../lib/context';
import { t, getLang } from '../../lib/translations';

const experiences = [
    {
        date: 'May – Jun 2024',
        role: 'React Native Developer',
        place: 'Ondrh / Artem5',
        location: 'Paris, France',
        type: 'work',
        desc: 'Developed "Socializus": a social event app for expatriates, using React Native & TypeScript.',
        achievements: [
            'Built LoginRegister, CreateProfile and EditProfile flows with full validation and error handling',
            'Implemented image cropping for profile photos and SMS verification system',
            'Migrated JavaScript codebase to TypeScript; configured Webpack for improved robustness',
            'Developed reusable components with multilingual support across 36 languages',
            'Actively participated in Daily Scrum meetings; maintained detailed Git documentation',
        ],
        stack: ['React Native', 'TypeScript', 'Redux', 'AsyncStorage', 'Webpack', 'MongoDB', 'Node.js'],
    },
];

const education = [
    {
        date: '2024 — present',
        degree: "Master's in Computer Science",
        sub: 'Vision & Machine Intelligence',
        school: 'Université Paris Cité',
        status: 'current',
        coursework: ['Machine Learning & AI', 'Computer Vision & Image Processing', 'Optimization & Data Mining', 'Advanced Algorithms'],
        focus: ['Deep Learning & Neural Networks', 'Pattern Recognition', 'Intelligent Systems'],
    },
    {
        date: '2021 – 2024',
        degree: "Bachelor's in Computer Science",
        school: 'UPEC: Université Paris-Est Créteil',
        status: 'done',
        coursework: ['Data Structures & Algorithms', 'Systems Programming (C, C++)', 'Database Systems', 'Web & Software Engineering'],
        focus: ['Argumentation Frameworks', 'Distributed Systems & DevOps', 'Human-Computer Interaction'],
    },
];

const skills = {
    'Programming Languages': ['Java', 'Python', 'C / C++', 'PHP', 'TypeScript', 'JavaScript'],
    'Web & Mobile': ['React Native', 'Next.js', 'Laravel', 'HTML / CSS', 'MySQL', 'PostgreSQL'],
    'AI & Vision': ['OpenCV', 'PyTorch', 'Scikit-learn', 'Deep Learning'],
    'Tools & Infra': ['Linux', 'Docker', 'Kubernetes', 'Git', 'Figma'],
};

const languages = [
    { lang: 'French', level: 'Native' },
    { lang: 'English', level: 'Bilingual' },
];

export default function ResumePage() {
    const { lang } = useApp();
    const L = (entry) => getLang(entry, lang);
    return (
        <div style={{ position: 'relative', zIndex: 1 }}>

            {/* ── PAGE HEADER ── */}
            <div style={{
                maxWidth: 960, margin: '0 auto',
                padding: 'clamp(56px, 8vw, 96px) 24px 64px',
                display: 'grid', gridTemplateColumns: '1fr auto',
                gap: 32, alignItems: 'flex-end',
            }} className="resume-header-grid">
                <div>
                    <span className="label fade-in" style={{ marginBottom: 16 }}>Curriculum Vitæ</span>
                    <h1 className="fade-up delay-1" style={{ marginBottom: 12 }}>
                        Resume
                    </h1>
                    <p className="fade-up delay-2" style={{
                        fontFamily: 'var(--font-display)', fontStyle: 'italic',
                        fontSize: '1.15rem', color: 'var(--color-muted)', maxWidth: 440,
                    }}>
                        Computer Science student specialising in AI, Computer Vision &amp; Full-Stack Development
                    </p>
                </div>
                <div className="fade-up delay-3">
                    <a
                        href="https://docs.google.com/document/d/1dQHVUnKcoxcptqzMPPZSS6Xuvhv0Tz2K/edit"
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-filled"
                        style={{ whiteSpace: 'nowrap' }}
                    >
                        ↓ Download PDF
                    </a>
                </div>
            </div>

            {/* ── QUICK STATS ── */}
            <div style={{
                background: 'var(--color-surface)',
                borderTop: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
                padding: '0',
            }}>
                <div style={{
                    maxWidth: 960, margin: '0 auto',
                    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 0,
                }} className="stats-grid">
                    {[
                        { val: '6+', label: 'Languages' },
                        { val: 'M2',  label: 'Current degree' },
                        { val: 'AI/ML', label: 'Specialisation' },
                        { val: '1',   label: 'Work experience' },
                    ].map((s, i) => (
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

            {/* ── SUMMARY ── */}
            <div style={{ maxWidth: 960, margin: '0 auto', padding: 'clamp(56px, 7vw, 88px) 24px' }}>
                <div style={{
                    display: 'grid', gridTemplateColumns: '200px 1fr',
                    gap: 48, alignItems: 'start',
                }} className="section-grid">
                    <div>
                        <span className="label" style={{ marginBottom: 0 }}>Summary</span>
                    </div>
                    <div>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.85, marginBottom: 20 }}>
                            CS student at <em>Université Paris Cité</em> with a strong foundation in programming
                            and hands-on experience across mobile, web, and systems development. My background
                            spans algorithm design, computer vision, and modern web engineering.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.85, color: 'var(--color-muted)' }}>
                            I've worked as a React Native developer and continue building expertise
                            in machine learning and computer vision through both coursework and independent projects.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── EXPERIENCE ── */}
            <div style={{
                background: 'var(--color-surface)',
                borderTop: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
                padding: 'clamp(56px, 7vw, 88px) 24px',
            }}>
                <div style={{ maxWidth: 960, margin: '0 auto' }}>
                    <div style={{
                        display: 'grid', gridTemplateColumns: '200px 1fr',
                        gap: 48,
                    }} className="section-grid">
                        <div>
                            <span className="label" style={{ marginBottom: 0 }}>Experience</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
                            {experiences.map((e, i) => (
                                <div key={i}>
                                    {/* Header */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
                                        <div>
                                            <div style={{
                                                fontFamily: 'var(--font-display)', fontSize: '1.3rem',
                                                fontWeight: 700, color: 'var(--color-bright)', marginBottom: 4,
                                            }}>{e.role}</div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                                                <span style={{
                                                    fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                                                    color: 'var(--color-accent)', letterSpacing: '0.06em',
                                                }}>{e.place}</span>
                                                <span style={{ color: 'var(--color-border)', fontSize: '0.8rem' }}>·</span>
                                                <span style={{
                                                    fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                                                    color: 'var(--color-muted)', letterSpacing: '0.06em',
                                                }}>{e.location}</span>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                                            <span style={{
                                                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                                                color: 'var(--color-muted)', letterSpacing: '0.08em',
                                            }}>{e.date}</span>
                                            <span className="tag accent" style={{ fontSize: '0.6rem' }}>Work</span>
                                        </div>
                                    </div>
                                    <p style={{ marginBottom: 20, lineHeight: 1.75 }}>{e.desc}</p>
                                    {/* Achievements */}
                                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                                        {e.achievements.map((a, j) => (
                                            <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                                                <span style={{ color: 'var(--color-accent)', marginTop: 3, flexShrink: 0, fontSize: '0.7rem' }}>◆</span>
                                                <span style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-text)' }}>{a}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* Stack */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24 }}>
                                        {e.stack.map(t => (
                                            <span key={t} className="tag accent" style={{ fontSize: '0.6rem' }}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── EDUCATION ── */}
            <div style={{ maxWidth: 960, margin: '0 auto', padding: 'clamp(56px, 7vw, 88px) 24px' }}>
                <div style={{
                    display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48,
                }} className="section-grid">
                    <div>
                        <span className="label" style={{ marginBottom: 0 }}>Education</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                        {education.map((e, i) => (
                            <div key={i} style={{
                                padding: '32px', background: 'var(--color-panel)',
                                border: '1px solid var(--color-border)', borderRadius: 12,
                                transition: 'border-color 0.3s',
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
                                    <div>
                                        <div style={{
                                            fontFamily: 'var(--font-display)', fontSize: '1.2rem',
                                            fontWeight: 700, color: 'var(--color-bright)', marginBottom: 4,
                                        }}>{e.degree}</div>
                                        {e.sub && (
                                            <div style={{
                                                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                                                fontSize: '0.95rem', color: 'var(--color-accent)', marginBottom: 4,
                                            }}>{e.sub}</div>
                                        )}
                                        <div style={{
                                            fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                                            color: 'var(--color-muted)', letterSpacing: '0.06em',
                                        }}>{e.school}</div>
                                    </div>
                                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                                        <span style={{
                                            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                                            color: 'var(--color-muted)',
                                        }}>{e.date}</span>
                                        <span className={`tag ${e.status === 'current' ? 'purple' : 'accent'}`}
                                              style={{ fontSize: '0.6rem' }}>
                                            {e.status === 'current' ? 'Current' : 'Completed'}
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="edu-cols">
                                    <div>
                                        <div style={{
                                            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                            letterSpacing: '0.14em', textTransform: 'uppercase',
                                            color: 'var(--color-muted)', marginBottom: 12,
                                        }}>Core coursework</div>
                                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                                            {e.coursework.map((c, j) => (
                                                <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--color-text)' }}>
                                                    <span style={{ color: 'var(--color-border)', marginTop: 2, flexShrink: 0 }}>—</span>
                                                    {c}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <div style={{
                                            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                            letterSpacing: '0.14em', textTransform: 'uppercase',
                                            color: 'var(--color-muted)', marginBottom: 12,
                                        }}>Focus areas</div>
                                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                                            {e.focus.map((f, j) => (
                                                <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--color-text)' }}>
                                                    <span style={{ color: 'var(--color-accent)', marginTop: 2, flexShrink: 0, fontSize: '0.6rem' }}>◆</span>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── SKILLS ── */}
            <div style={{
                background: 'var(--color-surface)',
                borderTop: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
                padding: 'clamp(56px, 7vw, 88px) 24px',
            }}>
                <div style={{ maxWidth: 960, margin: '0 auto' }}>
                    <div style={{
                        display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48,
                    }} className="section-grid">
                        <div>
                            <span className="label" style={{ marginBottom: 12 }}>Skills</span>
                            <Link href="/skills" className="btn" style={{ fontSize: '0.62rem', padding: '8px 14px' }}>
                                Full breakdown →
                            </Link>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40 }}>
                            {Object.entries(skills).map(([cat, list]) => (
                                <div key={cat}>
                                    <div style={{
                                        fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                        letterSpacing: '0.14em', textTransform: 'uppercase',
                                        color: 'var(--color-muted)', marginBottom: 16,
                                    }}>{cat}</div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                        {list.map(s => (
                                            <span key={s} style={{
                                                fontFamily: 'var(--font-body)', fontSize: '0.95rem',
                                                color: 'var(--color-text)',
                                                paddingBottom: 8,
                                                borderBottom: '1px solid var(--color-border)',
                                            }}>{s}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── LANGUAGES & INTERESTS ── */}
            <div style={{ maxWidth: 960, margin: '0 auto', padding: 'clamp(56px, 7vw, 88px) 24px' }}>
                <div style={{
                    display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48,
                }} className="section-grid">
                    <div>
                        <span className="label" style={{ marginBottom: 0 }}>More</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }} className="more-grid">
                        <div>
                            <div style={{
                                fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                letterSpacing: '0.14em', textTransform: 'uppercase',
                                color: 'var(--color-muted)', marginBottom: 20,
                            }}>Languages</div>
                            {languages.map(l => (
                                <div key={l.lang} style={{
                                    display: 'flex', justifyContent: 'space-between',
                                    alignItems: 'center', paddingBottom: 16, marginBottom: 16,
                                    borderBottom: '1px solid var(--color-border)',
                                }}>
                                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--color-bright)' }}>{l.lang}</span>
                                    <span className="tag accent" style={{ fontSize: '0.6rem' }}>{l.level}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div style={{
                                fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                letterSpacing: '0.14em', textTransform: 'uppercase',
                                color: 'var(--color-muted)', marginBottom: 20,
                            }}>Interests</div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {['CS Research', 'Web Dev', 'Mobile Dev', 'Open Source', 'Dark Ambient Music', 'Retro Hardware', 'Dystopian Literature'].map(t => (
                                    <span key={t} className="tag" style={{ fontSize: '0.62rem' }}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── CTA ── */}
            <div style={{
                background: 'var(--color-surface)',
                borderTop: '1px solid var(--color-border)',
                padding: 'clamp(56px, 7vw, 80px) 24px',
            }}>
                <div style={{
                    maxWidth: 960, margin: '0 auto',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    flexWrap: 'wrap', gap: 32,
                }}>
                    <div>
                        <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: 8 }}>Let's connect</h2>
                        <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>
                            Open to internships, research collabs, and interesting projects.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <Link href="/contact" className="btn btn-filled">Get in touch</Link>
                        <a href="https://github.com/Evowind" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 640px) {
                    .resume-header-grid { grid-template-columns: 1fr !important; }
                    .section-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
                    .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
                    .edu-cols { grid-template-columns: 1fr !important; }
                    .more-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
}