'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const formData = new FormData(e.target);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            });
            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (err) {
            setStatus('error');
            setError(`${err}`);
        }
    };

    return (
        <div style={{ position: 'relative', zIndex: 1 }}>

            {/* ── PAGE HEADER ── */}
            <div style={{
                maxWidth: 960, margin: '0 auto',
                padding: 'clamp(56px, 8vw, 96px) 24px 72px',
            }}>
                <span className="label fade-in" style={{ marginBottom: 16 }}>Get in touch</span>
                <h1 className="fade-up delay-1" style={{ marginBottom: 16 }}>
                    Let's work <br /><span className="text-gradient">together</span>
                </h1>
                <p className="fade-up delay-2" style={{
                    fontFamily: 'var(--font-display)', fontStyle: 'italic',
                    fontSize: '1.15rem', color: 'var(--color-muted)', maxWidth: 440,
                }}>
                    Open to internships, research collaborations, and projects worth building
                </p>
            </div>

            {/* ── MAIN CONTENT ── */}
            <div style={{
                background: 'var(--color-surface)',
                borderTop: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
                padding: 'clamp(56px, 7vw, 88px) 24px',
            }}>
                <div style={{
                    maxWidth: 960, margin: '0 auto',
                    display: 'grid', gridTemplateColumns: '1fr 1.4fr',
                    gap: 80, alignItems: 'start',
                }} className="contact-grid">

                    {/* Left — info */}
                    <div>
                        <div style={{ marginBottom: 48 }}>
                            <div style={{
                                fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                letterSpacing: '0.14em', textTransform: 'uppercase',
                                color: 'var(--color-muted)', marginBottom: 20,
                            }}>Direct email</div>
                            <a href="mailto:tadlysamy@gmail.com" style={{
                                fontFamily: 'var(--font-display)', fontSize: '1.1rem',
                                fontWeight: 700, color: 'var(--color-bright)',
                                textDecoration: 'none', display: 'block', marginBottom: 6,
                                transition: 'color 0.2s',
                            }} className="email-link">
                                tadlysamy@gmail.com
                            </a>
                            <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                                Best for quick questions and direct collaboration proposals.
                            </p>
                        </div>

                        <div style={{ marginBottom: 48 }}>
                            <div style={{
                                fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                letterSpacing: '0.14em', textTransform: 'uppercase',
                                color: 'var(--color-muted)', marginBottom: 20,
                            }}>Profiles</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {[
                                    { label: 'GitHub', sub: 'github.com/Evowind', href: 'https://github.com/Evowind' },
                                    { label: 'LinkedIn', sub: 'samy-tadly', href: 'https://www.linkedin.com/in/samy-tadly/' },
                                ].map(l => (
                                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                                       style={{
                                           display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                           padding: '14px 16px',
                                           border: '1px solid var(--color-border)',
                                           borderRadius: 8,
                                           textDecoration: 'none',
                                           background: 'var(--color-panel)',
                                           transition: 'border-color 0.2s, background 0.2s',
                                       }} className="profile-link">
                                        <div>
                                            <div style={{
                                                fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                                                fontWeight: 500, color: 'var(--color-bright)', marginBottom: 2,
                                            }}>{l.label}</div>
                                            <div style={{
                                                fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                                color: 'var(--color-muted)', letterSpacing: '0.04em',
                                            }}>{l.sub}</div>
                                        </div>
                                        <span style={{ color: 'var(--color-accent)', fontSize: '0.9rem' }}>↗</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div style={{
                                fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                                letterSpacing: '0.14em', textTransform: 'uppercase',
                                color: 'var(--color-muted)', marginBottom: 16,
                            }}>Currently open to</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {['Internships (2025)', 'Research collaborations', 'Open-source contributions', 'Freelance projects'].map(t => (
                                    <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: '0.9rem', color: 'var(--color-text)' }}>
                                        <span style={{ color: 'var(--color-accent)', fontSize: '0.55rem' }}>◆</span>
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — form */}
                    <div>
                        {status === 'ok' ? (
                            <div style={{
                                padding: '48px 40px',
                                border: '1px solid rgba(200,169,110,0.25)',
                                borderRadius: 12,
                                background: 'rgba(200,169,110,0.04)',
                                textAlign: 'center',
                            }}>
                                <div style={{
                                    fontFamily: 'var(--font-display)', fontSize: '1.4rem',
                                    color: 'var(--color-bright)', marginBottom: 12,
                                }}>Message sent</div>
                                <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>
                                    Thanks for reaching out, I'll get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form name="feedback" onSubmit={handleSubmit}
                                  style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                                <input type="hidden" name="form-name" value="feedback" />

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-top-row">
                                    <FormField label="Name" required>
                                        <input name="name" type="text" required
                                               placeholder="Your name"
                                               style={inputStyle} className="form-input" />
                                    </FormField>
                                    <FormField label="Email">
                                        <input name="email" type="email"
                                               placeholder="your@email.com"
                                               style={inputStyle} className="form-input" />
                                    </FormField>
                                </div>

                                <FormField label="Subject">
                                    <input name="subject" type="text"
                                           placeholder="What's this about?"
                                           style={inputStyle} className="form-input" />
                                </FormField>

                                <FormField label="Message" required>
                                    <textarea name="message" required rows={6}
                                              placeholder="Tell me about your project, question, or how we can work together..."
                                              style={{ ...inputStyle, resize: 'vertical', minHeight: 160 }}
                                              className="form-input" />
                                </FormField>

                                {status === 'error' && (
                                    <div style={{
                                        padding: '12px 16px',
                                        border: '1px solid rgba(181,74,74,0.3)',
                                        borderRadius: 8, background: 'rgba(181,74,74,0.06)',
                                        fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                                        color: '#b54a4a',
                                    }}>
                                        Failed to send: {error}
                                    </div>
                                )}

                                <button type="submit" disabled={status === 'pending'}
                                        className="btn btn-filled"
                                        style={{
                                            width: '100%', padding: '14px 24px',
                                            fontSize: '0.72rem', letterSpacing: '0.14em',
                                            opacity: status === 'pending' ? 0.6 : 1,
                                            cursor: status === 'pending' ? 'not-allowed' : 'pointer',
                                        }}>
                                    {status === 'pending' ? 'Sending…' : 'Send message →'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                .email-link:hover { color: var(--color-accent) !important; }
                .profile-link:hover {
                    border-color: rgba(200,169,110,0.25) !important;
                    background: rgba(200,169,110,0.04) !important;
                }
                .form-input {
                    font-family: var(--font-body);
                    font-size: 0.9rem;
                    padding: 12px 16px;
                    background: var(--color-panel);
                    border: 1px solid var(--color-border);
                    color: var(--color-bright);
                    width: 100%;
                    outline: none;
                    border-radius: 8px;
                    transition: border-color 0.2s, box-shadow 0.2s;
                    box-sizing: border-box;
                }
                .form-input::placeholder { color: var(--color-muted); }
                .form-input:focus {
                    border-color: rgba(200,169,110,0.35);
                    box-shadow: 0 0 0 3px rgba(200,169,110,0.06);
                }
                @media (max-width: 640px) {
                    .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
                    .form-top-row { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
}

function FormField({ label, required, children }) {
    return (
        <div>
            <label style={{
                display: 'block',
                fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--color-muted)', marginBottom: 8,
            }}>
                {label}{required && <span style={{ color: 'var(--color-accent)', marginLeft: 4 }}>*</span>}
            </label>
            {children}
        </div>
    );
}

const inputStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    padding: '12px 16px',
    background: 'var(--color-panel)',
    border: '1px solid rgba(255,255,255,0.07)',
    color: 'var(--color-bright)',
    width: '100%',
    outline: 'none',
    borderRadius: 8,
};