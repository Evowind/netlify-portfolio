'use client';
import { useEffect, useState } from 'react';

const randomQuoteUrl = '/quotes/random';

export function RandomQuote() {
    const [quote, setQuote] = useState(null);
    const [time, setTime] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch(randomQuoteUrl, { cache: 'no-store' });
                if (response.ok) {
                    const data = await response.json();
                    setQuote(data);
                    setTime(new Date().toLocaleString());
                }
            } catch (error) {
                console.log('Failed to fetch quote:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchQuote();
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
                <span className="ml-3 text-primary-content">Loading fun fact...</span>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            {quote ? (
                <div className="relative">
                    {/* Quote content */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <div className="relative">
                            {/* Opening quote mark */}
                            <div className="absolute -top-2 -left-2 text-4xl text-accent/30 font-serif">&ldquo;</div>
                            
                            {/* Quote text */}
                            <blockquote className="text-lg text-primary-content leading-relaxed italic text-center px-4">
                                {quote.text}
                            </blockquote>
                            
                            {/* Closing quote mark */}
                            <div className="absolute -bottom-6 -right-2 text-4xl text-accent/30 font-serif">&rdquo;</div>
                        </div>
                    </div>
                    
                    {/* Metadata */}
                    <div className="mt-4 text-center">
                        <div className="inline-flex items-center gap-2 text-xs text-primary-content/60 bg-black/20 px-3 py-1 rounded-full">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Loaded at {time}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-8">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <p className="text-red-400">
                            Oops! Couldn&apos;t load the fun fact right now. 
                        </p>
                        <p className="text-red-400/70 text-sm mt-1">
                            Try refreshing the page!
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}