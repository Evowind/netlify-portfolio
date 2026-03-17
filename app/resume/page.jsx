'use client';

import Link from 'next/link';
import { useApp } from '../../lib/context';
import { t, getLang } from '../../lib/translations';

export default function ResumePage() {
    const { lang } = useApp();
    const L = (entry) => getLang(entry, lang);

    const education = [
        {
            degree: L(t.resume.m2degree), sub: L(t.resume.m2sub),
            school: 'Université Paris Cité',
            date: `2024 — ${L(t.misc.present)}`,
            status: 'current',
            coursework: L(t.resume.m2coursework),
            focus: L(t.resume.m2focus),
        },
        {
            degree: L(t.resume.l3degree), sub: null,
            school: L(t.resume.l3school),
            date: '2021 – 2024',
            status: 'done',
            coursework: L(t.resume.l3coursework),
            focus: L(t.resume.l3focus),
        },
    ];

    const skillCats = [
        { cat: L(t.skills.catLangs),  list: ['Java', 'Python', 'C / C++', 'PHP', 'TypeScript', 'JavaScript'] },
        { cat: L(t.skills.catWeb),    list: ['React Native', 'Next.js', 'Laravel', 'HTML / CSS', 'MySQL', 'PostgreSQL'] },
        { cat: L(t.skills.catAI),     list: ['OpenCV', 'PyTorch', 'Scikit-learn', 'Deep Learning'] },
        { cat: L(t.skills.catDevops), list: ['Linux', 'Docker', 'Kubernetes', 'Git', 'Figma'] },
    ];

    return (
        <div style={{ position: 'relative', zIndex: 1 }}>

            {/* ── PAGE HEADER ── */}
            <div style={{
                maxWidth: 960, margin: '0 auto',
                padding: 'clamp(56px, 8vw, 96px) 24px 64px',
                display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'flex-end',
            }} className="resume-header-grid">
                <div>
                    <span className="label fade-in" style={{ marginBottom: 16 }}>{L(t.resume.pageLabel)}</span>
                    <h1 className="fade-up delay-1" style={{ marginBottom: 12 }}>{L(t.resume.pageTitle)}</h1>
                    <p className="fade-up delay-2" style={{
                        fontFamily: 'var(--font-display)', fontStyle: 'italic',
                        fontSize: '1.15rem', color: 'var(--color-muted)', maxWidth: 440,
                    }}>{L(t.resume.pageDesc)}</p>
                </div>
                <div className="fade-up delay-3">
                    <a href="https://docs.google.com/document/d/1dQHVUnKcoxcptqzMPPZSS6Xuvhv0Tz2K/edit"
                       target="_blank" rel="noopener noreferrer"
                       className="btn btn-filled" style={{ whiteSpace: 'nowrap' }}>
                        {L(t.resume.downloadPdf)}
                    </a>
                </div>
            </div>

            {/* ── STATS ── */}
            <div style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} className="stats-grid">
                    {[
                        { val: '6+',    label: L(t.resume.statLangs) },
                        { val: 'M2',    label: L(t.resume.statDegree) },
                        { val: 'AI/ML', label: L(t.resume.statSpec) },
                        { val: '1',     label: L(t.resume.statXp) },
                    ].map((s, i) => (
                        <div key={i} style={{ padding: '28px 24px', textAlign: 'center', borderRight: i < 3 ? '1px solid var(--color-border)' : 'none' }}>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-accent)', lineHeight: 1, marginBottom: 8 }}>{s.val}</div>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-muted)' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── SUMMARY ── */}
            <div style={{ maxWidth: 960, margin: '0 auto', padding: 'clamp(56px, 7vw, 88px) 24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48 }} className="section-grid">
                    <span className="label">{L(t.resume.summaryLabel)}</span>
                    <div>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.85, marginBottom: 20 }}
                           dangerouslySetInnerHTML={{ __html: L(t.resume.summaryP1) }} />
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.85, color: 'var(--color-muted)' }}
                           dangerouslySetInnerHTML={{ __html: L(t.resume.summaryP2) }} />
                    </div>
                </div>
            </div>

            {/* ── EXPERIENCE ── */}
            <div style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: 'clamp(56px, 7vw, 88px) 24px' }}>
                <div style={{ maxWidth: 960, margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48 }} className="section-grid">
                        <span className="label">{L(t.resume.expLabel)}</span>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
                                <div>
                                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-bright)', marginBottom: 4 }}>
                                        {L(t.resume.jobRole)}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-accent)' }}>{L(t.resume.jobPlace)}</span>
                                        <span style={{ color: 'var(--color-border)' }}>·</span>
                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-muted)' }}>Paris, France</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-muted)' }}>{L(t.resume.jobDate)}</span>
                                    <span className="tag accent" style={{ fontSize: '0.6rem' }}>{L(t.resume.workTag)}</span>
                                </div>
                            </div>
                            <p style={{ marginBottom: 20, lineHeight: 1.75 }}>{L(t.resume.jobDesc)}</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {L(t.resume.jobAchievements).map((a, i) => (
                                    <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                                        <span style={{ color: 'var(--color-accent)', marginTop: 3, flexShrink: 0, fontSize: '0.7rem' }}>◆</span>
                                        <span style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{a}</span>
                                    </li>
                                ))}
                            </ul>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24 }}>
                                {['React Native', 'TypeScript', 'Redux', 'AsyncStorage', 'Webpack', 'MongoDB', 'Node.js'].map(tag => (
                                    <span key={tag} className="tag accent" style={{ fontSize: '0.6rem' }}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── EDUCATION ── */}
            <div style={{ maxWidth: 960, margin: '0 auto', padding: 'clamp(56px, 7vw, 88px) 24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48 }} className="section-grid">
                    <span className="label">{L(t.resume.eduLabel)}</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                        {education.map((e, i) => (
                            <div key={i} style={{ padding: '32px', background: 'var(--color-panel)', border: '1px solid var(--color-border)', borderRadius: 12 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
                                    <div>
                                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-bright)', marginBottom: 4 }}>{e.degree}</div>
                                        {e.sub && <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--color-accent)', marginBottom: 4 }}>{e.sub}</div>}
                                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-muted)' }}>{e.school}</div>
                                    </div>
                                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-muted)' }}>{e.date}</span>
                                        <span className={`tag ${e.status === 'current' ? 'purple' : 'accent'}`} style={{ fontSize: '0.6rem' }}>
                                            {e.status === 'current' ? L(t.common.current) : L(t.resume.eduLabel)}
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="edu-cols">
                                    <div>
                                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 12 }}>
                                            {L(t.resume.coursework)}
                                        </div>
                                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                                            {e.coursework.map((c, j) => (
                                                <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.9rem' }}>
                                                    <span style={{ color: 'var(--color-border)', marginTop: 2, flexShrink: 0 }}>—</span>{c}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 12 }}>
                                            {L(t.resume.focusAreas)}
                                        </div>
                                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                                            {e.focus.map((f, j) => (
                                                <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.9rem' }}>
                                                    <span style={{ color: 'var(--color-accent)', marginTop: 2, flexShrink: 0, fontSize: '0.6rem' }}>◆</span>{f}
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
            <div style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: 'clamp(56px, 7vw, 88px) 24px' }}>
                <div style={{ maxWidth: 960, margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48 }} className="section-grid">
                        <div>
                            <span className="label" style={{ marginBottom: 12 }}>{L(t.resume.skillsLabel)}</span>
                            <Link href="/skills" className="btn" style={{ fontSize: '0.62rem', padding: '8px 14px' }}>
                                {L(t.resume.fullBreakdown)}
                            </Link>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40 }}>
                            {skillCats.map(({ cat, list }) => (
                                <div key={cat}>
                                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 16 }}>{cat}</div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                        {list.map(s => (
                                            <span key={s} style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--color-text)', paddingBottom: 8, borderBottom: '1px solid var(--color-border)' }}>{s}</span>
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
                <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48 }} className="section-grid">
                    <span className="label">{L(t.misc.more)}</span>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }} className="more-grid">
                        <div>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 20 }}>
                                {L(t.resume.langLabel)}
                            </div>
                            {[
                                { lang: L(t.resume.french),  level: L(t.resume.native) },
                                { lang: L(t.resume.english), level: L(t.resume.bilingual) },
                            ].map(l => (
                                <div key={l.lang} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16, marginBottom: 16, borderBottom: '1px solid var(--color-border)' }}>
                                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--color-bright)' }}>{l.lang}</span>
                                    <span className="tag accent" style={{ fontSize: '0.6rem' }}>{l.level}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 20 }}>
                                {L(t.resume.interestsLabel)}
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {L(t.resume.interests).map(item => (
                                    <span key={item} className="tag" style={{ fontSize: '0.62rem' }}>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── CTA ── */}
            <div style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', padding: 'clamp(56px, 7vw, 80px) 24px' }}>
                <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 32 }}>
                    <div>
                        <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: 8 }}>{L(t.resume.ctaTitle)}</h2>
                        <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>{L(t.resume.ctaDesc)}</p>
                    </div>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <Link href="/contact" className="btn btn-filled">{L(t.common.getInTouch)}</Link>
                        <a href="https://github.com/Evowind" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 640px) {
                    .resume-header-grid { grid-template-columns: 1fr !important; }
                    .section-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
                    .stats-grid   { grid-template-columns: repeat(2, 1fr) !important; }
                    .edu-cols     { grid-template-columns: 1fr !important; }
                    .more-grid    { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
}