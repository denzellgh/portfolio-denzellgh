import { useState, useEffect } from 'react';
import { navLinks } from '../../utils/constants';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-[#A1A1AA]/10 bg-[#0A0A0A]/80 shadow-lg backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold font-[family-name:var(--font-heading)] bg-gradient-to-r from-[#0EA5E9] to-[#7C3AED] bg-clip-text text-transparent"
          >
            DG
          </a>

          <ul className="hidden gap-8 md:flex">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-[#0EA5E9] ${
                    activeSection === link.href.substring(1)
                      ? 'text-[#0EA5E9]'
                      : 'text-[#A1A1AA]'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="px-6 py-2 rounded-lg border border-[#0EA5E9] text-[#F5F5F5] text-sm font-medium hover:bg-[#0EA5E9]/10 transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
