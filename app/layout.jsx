import '../styles/globals.css';
import { AppProvider } from '../lib/context';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const metadata = {
    title: {
        template: '%s | Samy Tadly',
        default: 'Samy Tadly · Developer Portfolio',
    },
    description: "Samy Tadly — Computer Vision, AI, and Full-Stack Engineering. Master's student at Université Paris Cité.",
    keywords: ['portfolio', 'computer vision', 'AI', 'machine learning', 'web development', 'Samy Tadly'],
    authors: [{ name: 'Samy Tadly' }],
    creator: 'Samy Tadly',
    openGraph: {
        title: 'Samy Tadly · Developer Portfolio',
        description: 'Computer Vision, AI, and Full-Stack Engineering.',
        url: 'https://samy-tadly.netlify.app/',
        siteName: 'Samy Tadly Portfolio',
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning={true}>
            <head>
                <link rel="icon" href="/portfolio.svg" sizes="any" />
                <script dangerouslySetInnerHTML={{ __html: `
                    (function() {
                        try {
                            var saved = localStorage.getItem('theme');
                            var theme = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                            document.documentElement.setAttribute('data-theme', theme);
                        } catch(e) {}
                    })();
                `}} />
                <script dangerouslySetInnerHTML={{ __html: `
                    (function() {
                        var c = 'color:#c87941;font-weight:500;';
                        var m = 'color:#4a5568;font-weight:400;';
                        var b = 'font-weight:700;font-size:1.1em;color:#edf2f7;';
                        console.log('%c\\n  Samy Tadly%c  ·  portfolio\\n', b, m);
                        console.log('%c  Built with Next.js & a lot of coffee.', m);
                        console.log('%c  github.com/Evowind%c  ←  source', c, m);
                        console.log('%c  tadlysamy@gmail.com%c  ←  if you'\''re hiring\\n', c, m);
                    })();
                `}} />
            </head>
            <body className="antialiased">
                <AppProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </AppProvider>
            </body>
        </html>
    );
}