import React from 'react';
import resumeUrl from '../assets/Resume-shivam.pdf';

const Hero = ({ darkMode }) => {
    const downloadResume = () => {
        fetch(resumeUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'ShivamChoudhary_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-4 pt-20 animate-on-scroll relative"
            data-scroll-section
        >
            <div
                className={`max-w-2xl text-center backdrop-blur-md p-8 rounded-xl transition-all duration-300 ${darkMode
                    ? 'bg-gray-800/50 border border-gray-700/50'
                    : 'bg-white/70 shadow-2xl border border-gray-200'
                    }`}
            >
                <h1 className="text-5xl font-bold mb-4 tracking-tight">
                    Hi, I'm <span className="text-blue-500">Shivam Choudhary</span>
                </h1>

                <p
                    className={`text-xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                >
                    Full Stack Developer | Design Enthusiast | Problem Solver
                </p>

                <div className="flex justify-center space-x-4">
                    <button
                        onClick={downloadResume}
                        className={`px-6 py-3 rounded-lg transition-all duration-300 ${darkMode
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                            }`}
                    >
                        Download Resume
                    </button>

                    <a
                        href="#projects"
                        className={`px-6 py-3 rounded-lg border transition-all duration-300 ${darkMode
                            ? 'border-gray-700 hover:bg-gray-800 text-white'
                            : 'border-gray-300 hover:bg-gray-100 text-black'
                            }`}
                    >
                        View Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;