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
                            var theme = localStorage.getItem('theme') || 'dark';
                            document.documentElement.setAttribute('data-theme', theme);
                        } catch(e) {}
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