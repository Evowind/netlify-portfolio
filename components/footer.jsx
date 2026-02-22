'use client';
import Link from 'next/link';
import { useApp } from '../lib/context';
import { t, getLang } from '../lib/translations';

export function Footer() {
    const { lang } = useApp();
    const L = (entry) => getLang(entry, lang);

    return (
        <footer style={{ borderTop: '1px solid var(--color-border)', padding: '32px' }}>
            <style>{`
                .footer-link {
                    font-family: var(--font-mono);
                    font-size: 0.65rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: var(--color-muted);
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .footer-link:hover { color: var(--color-accent); }
            `}</style>
            <div style={{
                maxWidth: 960, margin: '0 auto',
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', flexWrap: 'wrap', gap: 16,
            }}>
                <span style={{
                    fontFamily: 'var(--font-display)', fontSize: '0.9rem',
                    color: 'var(--color-muted)', fontStyle: 'italic',
                }}>
                    Samy Tadly · {new Date().getFullYear()}
                </span>
                <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                    <a href="https://github.com/Evowind" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                    <a href="https://www.linkedin.com/in/samy-tadly/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                    <Link href="/contact" className="footer-link">{L(t.nav.contact)}</Link>
                </div>
                <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                    letterSpacing: '0.1em', color: 'var(--color-border)',
                    textTransform: 'uppercase',
                }}>
                    {L(t.footer.builtWith)}
                </span>
            </div>
        </footer>
    );
}