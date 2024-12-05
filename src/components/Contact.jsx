import React, { useState } from 'react';

const Contact = ({ darkMode }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        }
    };

    return (
        <section
            id="contact"
            className="min-h-screen py-16 px-4"
        >
            <h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll">
                Get In Touch
            </h2>

            <div className="max-w-lg mx-auto">
                <form
                    onSubmit={handleSubmit}
                    className={`animate-on-scroll p-8 rounded-xl transition-all duration-300 ${
                        darkMode
                            ? 'bg-gray-800/50 border border-gray-700/50'
                            : 'bg-white/70 shadow-lg border border-gray-200'
                    }`}
                >
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`w-full p-3 rounded-lg transition-all duration-300 ${darkMode
                                    ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                                    : 'bg-gray-100 text-black border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                                }`}
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`w-full p-3 rounded-lg transition-all duration-300 ${darkMode
                                    ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                                    : 'bg-gray-100 text-black border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                                }`}
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className={`w-full p-3 rounded-lg transition-all duration-300 ${darkMode
                                    ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                                    : 'bg-gray-100 text-black border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                                }`}
                        />
                    </div>

                    <button
                        type="submit"
                        className={`w-full p-3 rounded-lg transition-all duration-300 ${darkMode
                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                : 'bg-blue-500 hover:bg-blue-600 text-white'
                            }`}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;