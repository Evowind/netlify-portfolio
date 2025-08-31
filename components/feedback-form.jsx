'use client';

import { useState } from 'react';

export function FeedbackForm() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const myForm = event.target;
            const formData = new FormData(myForm);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

    return (
        <div className="card p-8 hover:shadow-xl transition-all duration-300">
            {/* Form Header */}
            <div className="mb-6 text-center">
                <h2 className="text-3xl font-bold text-primary mb-2">Get In Touch</h2>
                <p className="text-primary-content">Send me a message and I'll get back to you as soon as possible.</p>
            </div>

            <form name="feedback" onSubmit={handleFormSubmit} className="space-y-6">
                <input type="hidden" name="form-name" value="feedback" />
                
                {/* Name Field */}
                <div>
                    <label className="block text-sm font-medium text-accent mb-2">
                        Your Name *
                    </label>
                    <input 
                        name="name" 
                        type="text" 
                        placeholder="Enter your full name" 
                        required 
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-primary-content placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-sm font-medium text-accent mb-2">
                        Email Address
                    </label>
                    <input 
                        name="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-primary-content placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    />
                </div>

                {/* Message Field */}
                <div>
                    <label className="block text-sm font-medium text-accent mb-2">
                        Your Message *
                    </label>
                    <textarea
                        name="message" 
                        placeholder="Tell me about your project, question, or how we can work together..."
                        required 
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-primary-content placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-vertical"
                    />
                </div>

                {/* Submit Button */}
                <button 
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                        status === 'pending' 
                            ? 'bg-gray-600 cursor-not-allowed' 
                            : 'bg-accent hover:bg-accent-focus hover:shadow-lg transform hover:-translate-y-1'
                    }`}
                    type="submit" 
                    disabled={status === 'pending'}
                >
                    {status === 'pending' ? (
                        <span className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending Message...
                        </span>
                    ) : (
                        'Send Message'
                    )}
                </button>

                {/* Status Messages */}
                {status === 'ok' && (
                    <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-green-300 font-medium">Message sent successfully!</span>
                        </div>
                        <p className="text-green-200 text-sm mt-2">Thank you for reaching out. I'll get back to you soon.</p>
                    </div>
                )}
                
                {status === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-red-300 font-medium">Failed to send message</span>
                        </div>
                        <p className="text-red-200 text-sm mt-2">{error}</p>
                    </div>
                )}
            </form>
        </div>
    );
}