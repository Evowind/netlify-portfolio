'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * <Reveal> — wraps children in an IntersectionObserver.
 * Fades + slides up once when the element enters the viewport.
 *
 * Props:
 *   delay   — ms before animation starts (default 0)
 *   y       — translateY distance in px (default 18)
 *   threshold — 0–1, how much of element must be visible (default 0.12)
 *   once    — animate only once, not every time (default true)
 */
export function Reveal({ children, delay = 0, y = 18, threshold = 0.12, once = true, style = {} }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setVisible(false);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, once]);

    return (
        <div
            ref={ref}
            style={{
                opacity:    visible ? 1 : 0,
                transform:  visible ? 'translateY(0)' : `translateY(${y}px)`,
                transition: `opacity 0.55s ease ${delay}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
                willChange: 'opacity, transform',
                ...style,
            }}
        >
            {children}
        </div>
    );
}

/**
 * <RevealGroup> — staggers multiple children with incremental delays.
 *
 * Props:
 *   stagger — ms between each child (default 80)
 *   other Reveal props forwarded to each child wrapper
 */
export function RevealGroup({ children, stagger = 80, y = 14, threshold = 0.1, style = {} }) {
    const items = Array.isArray(children) ? children : [children];
    return (
        <>
            {items.map((child, i) => (
                <Reveal key={i} delay={i * stagger} y={y} threshold={threshold} style={style}>
                    {child}
                </Reveal>
            ))}
        </>
    );
}