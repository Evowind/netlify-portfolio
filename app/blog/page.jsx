import React from 'react';

export const metadata = {
    title: 'Blog',
};

export default function Page() {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="mb-6 text-4xl font-bold text-accent">Blog</h1>
            <div className="card">
                <p className="text-primary-content mb-4">
                    Welcome to my blog! Here I share insights, tutorials, and thoughts on computer vision, AI, and web development.
                </p>
                <div className="mt-6">
                    {/* Example blog post preview */}
                    <div className="mb-6 pb-6 border-b border-accent-light">
                        <h2 className="text-xl font-semibold text-primary mb-2">Getting Started with YOLOv8</h2>
                        <p className="text-primary-content mb-2">
                            A beginner-friendly guide to object detection using YOLOv8 and Python.
                        </p>
                        <a href="#" className="text-accent underline">Read more</a>
                    </div>
                    <div className="mb-6 pb-6 border-b border-accent-light">
                        <h2 className="text-xl font-semibold text-primary mb-2">Building a Face Recognition Web App</h2>
                        <p className="text-primary-content mb-2">
                            Step-by-step process for creating a secure face recognition system with Flask and OpenCV.
                        </p>
                        <a href="#" className="text-accent underline">Read more</a>
                    </div>
                    {/* Add more blog post previews here */}
                </div>
            </div>
        </div>
    );
}