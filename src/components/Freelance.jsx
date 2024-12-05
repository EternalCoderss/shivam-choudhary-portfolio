import React from 'react';

const Freelance = ({ darkMode }) => {
    const freelanceProjects = [
        {
            id: 1,
            title: "E-commerce Website",
            client: "RetailCo Inc.",
            duration: "2 months",
            description: "Developed a full-stack e-commerce platform with payment integration and inventory management.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            testimonial: "Excellent work and communication throughout the project.",
            image: "/path/to/ecommerce-image.jpg"
        },
        {
            id: 2,
            title: "Mobile App Development",
            client: "HealthTech Solutions",
            duration: "3 months",
            description: "Built a cross-platform mobile app for health tracking and appointment scheduling.",
            technologies: ["React Native", "Firebase", "Redux"],
            testimonial: "Delivered high-quality code ahead of schedule.",
            image: "/path/to/mobile-app-image.jpg"
        },
        {
            id: 3,
            title: "Dashboard Analytics",
            client: "DataCorp Ltd.",
            duration: "1.5 months",
            description: "Created a real-time analytics dashboard with interactive visualizations.",
            technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
            testimonial: "Impressive attention to detail and performance optimization.",
            image: "/path/to/dashboard-image.jpg"
        }
    ];

    return (
        <section id="hire-me" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className={`text-4xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                    Freelance Services
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'}`}>
                        <h3 className="text-2xl font-bold mb-4">Services Offered</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <span className="mr-2">🚀</span>
                                Full Stack Development
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">📱</span>
                                Mobile App Development
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">⚡</span>
                                API Development
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">🎨</span>
                                UI/UX Design
                            </li>
                        </ul>
                    </div>

                    <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'}`}>
                        <h3 className="text-2xl font-bold mb-4">Availability</h3>
                        <p className="mb-4">Currently accepting new projects</p>
                        <div className="flex items-center gap-4">
                            <a
                                href="#contact"
                                className={`inline-flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                                    darkMode
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                                }`}
                            >
                                <span className="mr-2">👋</span>
                                Let's Talk
                            </a>
                            <a
                                href="#"
                                onClick={() => Calendly.initPopupWidget({url: 'https://calendly.com/your-username'})}
                                className={`inline-flex items-center px-6 py-3 rounded-lg border transition-all duration-300 ${
                                    darkMode
                                        ? 'border-gray-700 hover:bg-gray-800 text-white'
                                        : 'border-gray-300 hover:bg-gray-100 text-gray-800'
                                }`}
                            >
                                <span className="mr-2">📅</span>
                                Schedule a Call
                            </a>
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-8">Past Freelance Projects</h3>

                {/* Horizontal Scrollable Projects */}
                <div className="relative">
                    <div className="overflow-x-auto hide-scrollbar">
                        <div className="flex gap-6 pb-4 min-w-full">
                            {freelanceProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className={`flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${darkMode ? 'hover:bg-gray-800/70' : 'hover:shadow-xl'
                                        }`}
                                >
                                    <div className={`p-6 rounded-xl h-full transition-all duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'
                                        }`}>
                                        <div className="mb-4 overflow-hidden rounded-lg">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>

                                        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                                        <p className="text-sm mb-2">Client: {project.client}</p>
                                        <p className="text-sm mb-4">Duration: {project.duration}</p>
                                        <p className="mb-4">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className={`text-xs px-2 py-1 rounded ${darkMode
                                                            ? 'bg-gray-700 text-gray-300'
                                                            : 'bg-gray-200 text-gray-700'
                                                        }`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <blockquote className={`italic ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                            }`}>
                                            "{project.testimonial}"
                                        </blockquote>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Freelance; 