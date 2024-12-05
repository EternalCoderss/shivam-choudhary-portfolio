import { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Freelance from './components/Freelance';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const containerRef = useRef(null);
  const cardCursorRef = useRef(null);

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        className={`transition-colors duration-300 ${
          darkMode
            ? 'bg-gradient-to-br from-gray-900 to-black text-white'
            : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-800'
        }`}
        data-theme={darkMode ? 'dark' : 'light'}
      >
        <main className="relative">
          <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
          <Hero darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Freelance darkMode={darkMode} />
          <Contact darkMode={darkMode} />
          <Footer darkMode={darkMode} />
        </main>
      </div>
      <div ref={cardCursorRef} className="card-cursor" />
    </div>
  );
};

export default App;