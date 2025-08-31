'use client';

export function Download() {
    const handleDownload = () => {
        const Link = "https://drive.google.com/file/d/1ao8HP0CpuCTKjV3VYGfJiKkhLZ2AgBMV/view?usp=sharing";
        
        const downloadLink = Link; 
        
        // Create temporary link and trigger download
        const link = document.createElement('a');
        link.href = downloadLink;
        link.download = 'Samy_Resume.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
                <button 
                    onClick={handleDownload}
                    className="btn bg-accent hover:bg-accent-focus text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                </button>
    );
}