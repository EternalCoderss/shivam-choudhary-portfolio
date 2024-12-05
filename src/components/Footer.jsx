import React from 'react';

const Footer = ({ darkMode }) => {
    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/yourusername',
            icon: '📚'
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/yourusername',
            icon: '💼'
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/yourusername',
            icon: '🐦'
        },
        {
            name: 'Email',
            url: 'mailto:your.email@example.com',
            icon: '📧'
        }
    ];

    return (
        <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            About Me
                        </h3>
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Full Stack Developer passionate about creating innovative solutions and delivering high-quality code.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            Quick Links
                        </h3>
                        <div className="flex flex-col space-y-2">
                            <a href="#home" className={`hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Home</a>
                            <a href="#projects" className={`hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects</a>
                            <a href="#contact" className={`hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Contact</a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            Connect With Me
                        </h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-2xl hover:scale-110 transition-transform ${
                                        darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
                                    }`}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`mt-8 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                    <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        © {new Date().getFullYear()} Shivam Choudhary. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;