"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useApp } from '../lib/context'
import { t, getLang } from '../lib/translations';

export function Header() {
    const { lang, setLang, theme, setTheme } = useApp();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const L = (entry) => getLang(entry, lang);
    const isDark = theme === 'dark';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navItems = [
        { key: 'home',     href: '/' },
        { key: 'resume',   href: '/resume' },
        { key: 'projects', href: '/projects' },
        { key: 'skills',   href: '/skills' },
        { key: 'contact',  href: '/contact' },
    ];

    // Fixed slot widths (px) = widest translation per item
    // Prevents layout shift when switching EN ↔ FR
    const navWidths = {
        home:     72,   // Home / Accueil
        resume:   68,   // Resume / CV
        projects: 84,   // Projects / Projets
        skills:   110,  // Skills / Compétences ← widest
        contact:  80,   // Contact / Contact
    };

    return (
        <>
            <style>{`
                .nav-link {
                    font-family: var(--font-mono);
                    font-size: 0.68rem;
                    font-weight: 400;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--color-muted);
                    text-decoration: none;
                    padding: 6px 0;
                    transition: color 0.2s;
                    position: relative;
                }
                .nav-link::after {
                    content: '';
                    position: absolute; bottom: 0; left: 0;
                    width: 0; height: 1px;
                    background: var(--color-accent);
                    transition: width 0.25s ease;
                }
                .nav-link:hover { color: var(--color-bright); }
                .nav-link:hover::after { width: 100%; }

                .header-bar {
                    transition: background 0.3s, border-color 0.3s, backdrop-filter 0.3s;
                }
                .header-bar.scrolled {
                    background: rgba(10,10,12,0.85) !important;
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border-bottom-color: var(--color-border) !important;
                }
                html[data-theme="light"] .header-bar.scrolled {
                    background: rgba(245,243,238,0.88) !important;
                }

                .social-icon {
                    color: var(--color-muted);
                    text-decoration: none;
                    transition: color 0.2s;
                    display: flex; align-items: center;
                }
                .social-icon:hover { color: var(--color-accent); }

                /* Toggle button base */
                .toggle-btn {
                    display: flex; align-items: center; justify-content: center;
                    width: 32px; height: 32px;
                    border: 1px solid var(--color-border);
                    background: transparent;
                    border-radius: 6px;
                    cursor: pointer;
                    color: var(--color-muted);
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                    flex-shrink: 0;
                }
                .toggle-btn:hover {
                    border-color: var(--color-accent);
                    color: var(--color-accent);
                    background: rgba(200,169,110,0.06);
                }

                /* Lang switcher pill */
                .lang-pill {
                    display: flex; align-items: center;
                    border: 1px solid var(--color-border);
                    border-radius: 6px;
                    overflow: hidden;
                }
                .lang-opt {
                    font-family: var(--font-mono);
                    font-size: 0.62rem;
                    font-weight: 500;
                    letter-spacing: 0.1em;
                    padding: 6px 10px;
                    cursor: pointer;
                    border: none;
                    background: transparent;
                    color: var(--color-muted);
                    transition: background 0.2s, color 0.2s;
                    text-transform: uppercase;
                }
                .lang-opt.active {
                    background: var(--color-accent);
                    color: var(--color-bg);
                }
                .lang-opt:not(.active):hover {
                    color: var(--color-bright);
                }

                .mobile-nav-link {
                    display: block;
                    font-family: var(--font-mono);
                    font-size: 0.8rem;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--color-muted);
                    text-decoration: none;
                    padding: 16px 24px;
                    border-bottom: 1px solid var(--color-border);
                    transition: color 0.2s, background 0.2s;
                }
                .mobile-nav-link:hover {
                    color: var(--color-bright);
                    background: rgba(200,169,110,0.04);
                }

                .hamburger-btn {
                    background: none;
                    border: 1px solid var(--color-border);
                    color: var(--color-muted);
                    padding: 7px 12px;
                    cursor: pointer;
                    border-radius: 6px;
                    font-family: var(--font-mono);
                    font-size: 0.65rem;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    transition: border-color 0.2s, color 0.2s;
                }
                .hamburger-btn:hover {
                    border-color: var(--color-accent);
                    color: var(--color-accent);
                }

                @media (max-width: 720px) {
                    .desktop-nav, .desktop-social { display: none !important; }
                    .hamburger-btn { display: flex !important; }
                }
                @media (min-width: 721px) {
                    .hamburger-btn { display: none !important; }
                }
            `}</style>

            <header
                className={`header-bar ${scrolled ? 'scrolled' : ''}`}
                style={{
                    position: 'sticky', top: 0, zIndex: 50,
                    background: 'transparent',
                    borderBottom: '1px solid transparent',
                }}
            >
                <nav style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0 32px', maxWidth: 1020, margin: '0 auto', height: 56,
                    gap: 16,
                }}>
                    {/* Logo */}
                    <Link href="/" style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.05rem', fontWeight: 700,
                        color: 'var(--color-bright)',
                        textDecoration: 'none',
                        letterSpacing: '-0.01em',
                        flexShrink: 0,
                    }}>
                        Samy Tadly
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="desktop-nav" style={{
                        display: 'flex', gap: 0,
                        listStyle: 'none', margin: 0, padding: 0, flex: 1, justifyContent: 'center',
                    }}>
                        {navItems.map(item => (
                            <li key={item.key} style={{
                                minWidth: navWidths[item.key],
                                textAlign: 'center',
                            }}>
                                <Link href={item.href} className="nav-link">
                                    {L(t.nav[item.key])}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop controls */}
                    <div className="desktop-social" style={{
                        display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
                        minWidth: 320, justifyContent: 'flex-end',
                    }}>
                        {/* Social icons */}
                        <a href="https://github.com/Evowind" target="_blank" rel="noopener noreferrer"
                           className="social-icon toggle-btn" title="GitHub">
                            <GithubIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/samy-tadly/" target="_blank" rel="noopener noreferrer"
                           className="social-icon toggle-btn" title="LinkedIn">
                            <LinkedinIcon />
                        </a>

                        {/* Divider */}
                        <div style={{ width: 1, height: 20, background: 'var(--color-border)', margin: '0 4px' }} />

                        {/* Language toggle */}
                        <div className="lang-pill">
                            <button
                                className={`lang-opt ${lang === 'en' ? 'active' : ''}`}
                                onClick={() => setLang('en')}
                                aria-label="Switch to English"
                            >EN</button>
                            <button
                                className={`lang-opt ${lang === 'fr' ? 'active' : ''}`}
                                onClick={() => setLang('fr')}
                                aria-label="Passer en français"
                            >FR</button>
                        </div>

                        {/* Theme toggle */}
                        <button
                            className="toggle-btn"
                            onClick={() => setTheme(isDark ? 'light' : 'dark')}
                            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                            title={isDark ? 'Light mode' : 'Dark mode'}
                        >
                            {isDark ? <SunIcon /> : <MoonIcon />}
                        </button>

                        {/* Hire me */}
                        <a href="mailto:tadlysamy@gmail.com" className="btn"
                           style={{ fontSize: '0.62rem', padding: '7px 14px', marginLeft: 4, minWidth: 100, textAlign: 'center', justifyContent: 'center' }}>
                            {L(t.nav.hireMe)}
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="hamburger-btn"
                        onClick={() => setMenuOpen(o => !o)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </nav>

                {/* Mobile dropdown */}
                {menuOpen && (
                    <div style={{
                        background: 'var(--color-surface)',
                        backdropFilter: 'blur(12px)',
                        borderBottom: '1px solid var(--color-border)',
                    }}>
                        {navItems.map(item => (
                            <Link key={item.key} href={item.href}
                                  className="mobile-nav-link"
                                  onClick={() => setMenuOpen(false)}>
                                {L(t.nav[item.key])}
                            </Link>
                        ))}
                        {/* Mobile toggles */}
                        <div style={{
                            display: 'flex', gap: 12, padding: '16px 24px',
                            borderTop: '1px solid var(--color-border)', alignItems: 'center',
                        }}>
                            <div className="lang-pill">
                                <button className={`lang-opt ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
                                <button className={`lang-opt ${lang === 'fr' ? 'active' : ''}`} onClick={() => setLang('fr')}>FR</button>
                            </div>
                            <button className="toggle-btn" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
                                {isDark ? <SunIcon /> : <MoonIcon />}
                            </button>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}

// ── ICONS ─────────────────────────────────────────────────────────────────────

function GithubIcon() {
    return (
        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
    );
}

function LinkedinIcon() {
    return (
        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
        </svg>
    );
}

function SunIcon() {
    return (
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
    );
}