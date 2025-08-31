import { FeedbackForm } from 'components/feedback-form';

export const metadata = {
    title: 'Contact',
};

export default function Page() {
    return (
        <div className="max-w-5xl mx-auto p-6">
            {/* Header */}
            <div className="mb-12">
                <h1 className="mb-4 text-4xl font-bold text-accent">Contact Me</h1>
                <p className="text-lg text-primary-content leading-relaxed max-w-3xl">
                    Interested in collaborating or have a question? Feel free to reach out! I'm always 
                    open to discussing new opportunities, projects, or answering any questions you might have.
                </p>
            </div>

            {/* Contact Form Section */}
            <section className="mb-12">
                <div className="max-w-2xl mx-auto">
                    <FeedbackForm />
                </div>
            </section>

            {/* Alternative Contact */}
            <section className="text-center bg-gradient-to-r from-accent/5 to-accent/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Prefer Direct Contact?</h2>
                <p className="text-primary-content mb-6">
                    You can also reach out to me directly via email for immediate communication.
                </p>
                <a 
                    href="mailto:tadlysamy@email.com" 
                    className="btn bg-accent hover:bg-accent-focus text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                    Send Email Directly
                </a>
            </section>
        </div>
    );
}