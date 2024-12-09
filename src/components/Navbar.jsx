import React from 'react';


const Navbar = ({ darkMode, toggleDarkMode }) => {
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        smoothScroll(targetId, 80); // 80px offset for navbar height
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${darkMode
                    ? 'bg-black/30 text-white'
                    : 'bg-white/50 text-black shadow-lg'
                }`}
        >
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold tracking-tight">
                    Shivam Choudhary
                </div>

                <div className="flex items-center space-x-6">
                    <nav className="space-x-4 hidden md:block">
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, '#home')}
                            className="hover:text-blue-500 transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#projects"
                            onClick={(e) => handleNavClick(e, '#projects')}
                            className="hover:text-blue-500 transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            className="hover:text-blue-500 transition-colors"
                        >
                            Contact
                        </a>
                    </nav>

                    <a
                        href="#hire-me"
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${darkMode
                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                : 'bg-blue-500 hover:bg-blue-600 text-white'
                            }`}
                    >
                        Hire Me
                    </a>

                    <button
                        onClick={toggleDarkMode}
                        className={`p-2 w-10 h-10 rounded-full shadow-md transition-all duration-300 ${darkMode
                                ? 'bg-gray-700 hover:bg-gray-600'
                                : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                    >
                        {darkMode ? '☀️' : '🌙'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;