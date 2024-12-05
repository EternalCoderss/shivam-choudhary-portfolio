import React from 'react';

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce website with payment integration",
        technologies: ["React", "Node.js", "MongoDB"],
        githubLink: "https://github.com/yourusername/ecommerce-project",
        liveLink: "https://your-ecommerce-site.com",
        image: "/path/to/ecommerce-image.jpg"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "Productivity tool with real-time collaboration",
        technologies: ["React", "Firebase", "Tailwind CSS"],
        githubLink: "https://github.com/yourusername/task-management",
        liveLink: "https://your-task-app.com",
        image: "/path/to/task-image.jpg"
    },
    {
        id: 3,
        title: "Social Media Dashboard",
        description: "Advanced analytics platform with real-time insights",
        technologies: ["Next.js", "TypeScript", "ChartJS"],
        githubLink: "https://github.com/yourusername/social-dashboard",
        liveLink: "https://your-dashboard.com",
        image: "/path/to/dashboard-image.jpg"
    }
];

const Projects = ({ darkMode }) => {
    return (
        <section
            id="projects"
            className="container mx-auto px-4 py-16"
        >
            <h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll">
                My Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`animate-on-scroll group rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${darkMode
                                ? 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/70'
                                : 'bg-white/70 shadow-lg border border-gray-200 hover:shadow-xl'
                            }`}
                    >
                        <div className="mb-4">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                            {project.title}
                        </h3>

                        <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {project.description}
                        </p>

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

                        <div className="flex space-x-4">
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-4 py-2 rounded transition-all duration-300 ${darkMode
                                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                                        : 'bg-gray-200 hover:bg-gray-300 text-black'
                                    }`}
                            >
                                GitHub
                            </a>

                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-4 py-2 rounded transition-all duration-300 ${darkMode
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                                    }`}
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;