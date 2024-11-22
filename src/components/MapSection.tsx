import React from 'react';
import { MapPin, Navigation, Phone } from 'lucide-react';

const MapSection = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="p-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <h3 className="text-2xl font-bold mb-6">Nuestra Ubicación</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-blue-300 mt-1" />
              <div>
                <h4 className="font-medium text-blue-200">Dirección</h4>
                <p className="text-gray-300">Av. Principal 1234</p>
                <p className="text-gray-300">Ciudad, Región</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Navigation className="h-6 w-6 text-blue-300 mt-1" />
              <div>
                <h4 className="font-medium text-blue-200">Cómo Llegar</h4>
                <p className="text-gray-300">Metro: Línea 1, Estación Central</p>
                <p className="text-gray-300">Bus: Recorridos 210, 211, 213</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-blue-300 mt-1" />
              <div>
                <h4 className="font-medium text-blue-200">Contacto Directo</h4>
                <p className="text-gray-300">+56 2 2345 6789</p>
              </div>
            </div>

            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-600 transition-colors rounded-lg text-sm mt-4"
            >
              <Navigation className="h-4 w-4" />
              Cómo llegar
            </a>
          </div>
        </div>

        <div className="aspect-square">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.2367723888367!2d-70.6482!3d-33.4372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzE0LjAiUyA3MMKwMzgnNTMuNSJX!5e0!3m2!1ses!2scl!4v1645564657898!5m2!1ses!2scl"
            width="100%"
            height="100%"
           
            loading="lazy"
    
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapSection;