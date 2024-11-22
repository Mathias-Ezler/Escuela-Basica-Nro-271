import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 mt-9">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* School Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
              Escuela Básica N° 271
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <MapPin className="h-5 w-5 text-blue-400" />
                <p className="text-sm">Av. Principal 1234, Ciudad</p>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-blue-400" />
                <p className="text-sm">+56 2 2345 6789</p>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-sm">contacto@escuela271.cl</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-6 text-blue-200">Enlaces Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="/contacto" className="text-gray-300 hover:text-white transition-colors duration-300 w-fit">
                Contacto
              </a>
              <a href="/politica-privacidad" className="text-gray-300 hover:text-white transition-colors duration-300 w-fit">
                Política de Privacidad
              </a>
              <a href="/terminos-servicio" className="text-gray-300 hover:text-white transition-colors duration-300 w-fit">
                Términos de Servicio
              </a>
              <a href="/noticias" className="text-gray-300 hover:text-white transition-colors duration-300 w-fit">
                Noticias
              </a>
              <a href="/calendario" className="text-gray-300 hover:text-white transition-colors duration-300 w-fit">
                Calendario Escolar
              </a>
            </nav>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-200">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-800/50 text-center">
          <p className="text-sm text-gray-400 mb-4">
            &copy; {new Date().getFullYear()} Escuela Básica N° 271. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500">
            Desarrollado por{' '}
            <a 
              href="https://librefutbol.su/" 
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixel Pit
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;