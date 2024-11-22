import React, { useState, useEffect } from 'react';
import { Book, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-gradient-to-r from-blue-50 to-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group z-10">
            <Book className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="text-blue-950 font-semibold text-lg md:text-xl truncate max-w-[200px] md:max-w-none">
                Escuela Básica N° 271
              </span>
              <span className="text-blue-600 text-xs hidden md:block">
                Don Carlos Antonio López
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-6 text-blue-950 font-medium">
              {['Inicio', 'Sobre Nosotros', 'Admisiones', 'Contacto'].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="relative py-2 hover:text-blue-600 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/inscripciones"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200 transform hover:-translate-y-0.5"
            >
              Inscripciones
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-blue-50 rounded-full transition-colors z-10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-blue-950" />
            ) : (
              <Menu className="w-6 h-6 text-blue-950" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <div className="pt-20 pb-6 px-4 h-full overflow-y-auto">
            <nav>
              <ul className="space-y-4">
                {['Inicio', 'Sobre Nosotros', 'Admisiones', 'Contacto'].map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="block py-3 px-4 text-blue-950 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li className="pt-4">
                  <a
                    href="/inscripciones"
                    className="block bg-blue-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Inscripciones
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
