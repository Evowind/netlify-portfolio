import React from 'react';

export const metadata = {
    title: 'Contact',
};

export default function Page() {
    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="mb-6 text-4xl font-bold text-accent">Contact Me</h1>
            <div className="card">
                <p className="mb-4 text-primary-content">
                    Interested in collaborating or have a question? Feel free to reach out!
                </p>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        className="input"
                        rows={5}
                        required
                    />
                    <button type="submit" className="btn btn-lg w-full">
                        Send Message
                    </button>
                </form>
            </div>
            <div className="mt-6 text-primary-content text-sm text-center">
                Or email me directly: <a href="mailto:your@email.com" className="text-accent underline">your@email.com</a>
            </div>
        </div>
    );
}