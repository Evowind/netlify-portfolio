import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Samy Portfolio',
        default: 'Samy Portfolio'
    },
    description: "Samy's portfolio showcasing computer vision, AI, and web development projects.",
    keywords: [
        'portfolio',
        'computer vision',
        'AI',
        'web development',
        'Samy',
        'projects',
        'blog'
    ],
    authors: [{ name: 'Samy' }],
    creator: 'Samy',
    openGraph: {
        title: "Samy Portfolio",
        description: "Explore Samy's work in computer vision, AI, and web development.",
        url: 'https://samy-tadly.netlify.app/',
        siteName: "Samy Portfolio",
        locale: 'en_US',
        type: 'website'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/portfolio.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <Header />
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <main className="grow">{children}</main>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}