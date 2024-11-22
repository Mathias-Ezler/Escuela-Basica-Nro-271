import React from 'react';
import { MapPin, Phone, Mail, Clock, Users, GraduationCap, Calendar } from 'lucide-react';

const ContactCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Información General */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Phone className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Líneas Directas</h3>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600">Secretaría: +56 2 2345 6789</p>
          <p className="text-gray-600">Dirección: +56 2 2345 6790</p>
          <p className="text-gray-600">Inspectoría: +56 2 2345 6791</p>
        </div>
      </div>

      {/* Horarios de Atención */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-600">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-green-100 rounded-lg">
            <Clock className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Horarios</h3>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600">Jornada Mañana: 8:00 - 13:00</p>
          <p className="text-gray-600">Jornada Tarde: 14:00 - 19:00</p>
          <p className="text-gray-600">Atención Apoderados: 15:00 - 17:00</p>
        </div>
      </div>

      {/* Correos Institucionales */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-600">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Mail className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Correos</h3>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600">secretaria@escuela271.cl</p>
          <p className="text-gray-600">direccion@escuela271.cl</p>
          <p className="text-gray-600">admision@escuela271.cl</p>
        </div>
      </div>

      {/* Departamentos */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-red-600">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-red-100 rounded-lg">
            <Users className="h-6 w-6 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Departamentos</h3>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600">Orientación Escolar</p>
          <p className="text-gray-600">Convivencia Escolar</p>
          <p className="text-gray-600">Coordinación Académica</p>
        </div>
      </div>

      {/* Actividades */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-amber-600">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-amber-100 rounded-lg">
            <GraduationCap className="h-6 w-6 text-amber-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Actividades</h3>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600">Talleres Deportivos</p>
          <p className="text-gray-600">Actividades Culturales</p>
          <p className="text-gray-600">Eventos Escolares</p>
        </div>
      </div>

      {/* Calendario */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-600">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-teal-100 rounded-lg">
            <Calendar className="h-6 w-6 text-teal-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Calendario</h3>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600">Reuniones de Apoderados</p>
          <p className="text-gray-600">Eventos Académicos</p>
          <p className="text-gray-600">Fechas Importantes</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;