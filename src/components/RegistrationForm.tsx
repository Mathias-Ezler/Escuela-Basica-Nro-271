// src/components/RegistrationForm.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface RegistrationData {
  studentName: string;
  birthDate: string;
  gender: string;
  documentId: string;
  grade: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  address: string;
}

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegistrationData>();

  const onSubmit = async (data: RegistrationData) => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error en el registro');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Datos del Estudiante */}
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Datos del Estudiante</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
              <input
                {...register('studentName', { required: 'Este campo es requerido' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                type="text"
              />
              {errors.studentName && (
                <span className="text-red-500 text-sm">{errors.studentName.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
              <input
                {...register('birthDate', { required: 'Este campo es requerido' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                type="date"
              />
              {errors.birthDate && (
                <span className="text-red-500 text-sm">{errors.birthDate.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Género</label>
              <select
                {...register('gender', { required: 'Este campo es requerido' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Seleccionar...</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select>
              {errors.gender && (
                <span className="text-red-500 text-sm">{errors.gender.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Número de Documento</label>
              <input
                {...register('documentId', { 
                  required: 'Este campo es requerido',
                  pattern: {
                    value: /^\d+$/,
                    message: 'Solo números permitidos'
                  }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                type="text"
              />
              {errors.documentId && (
                <span className="text-red-500 text-sm">{errors.documentId.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Grado a Inscribir</label>
              <select
                {...register('grade', { required: 'Este campo es requerido' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Seleccionar...</option>
                <option value="1">Primer Grado</option>
                <option value="2">Segundo Grado</option>
                <option value="3">Tercer Grado</option>
                <option value="4">Cuarto Grado</option>
                <option value="5">Quinto Grado</option>
                <option value="6">Sexto Grado</option>
                <option value="7">Séptimo Grado</option>
                <option value="8">Octavo Grado</option>
                <option value="9">Noveno Grado</option>
              </select>
              {errors.grade && (
                <span className="text-red-500 text-sm">{errors.grade.message}</span>
              )}
            </div>
          </div>
        </div>

        {/* Datos del Padre/Tutor */}
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Datos del Padre/Tutor</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
              <input
                {...register('parentName', { required: 'Este campo es requerido' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                type="text"
              />
              {errors.parentName && (
                <span className="text-red-500 text-sm">{errors.parentName.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Teléfono</label>
              <input
                {...register('parentPhone', { 
                  required: 'Este campo es requerido',
                  pattern: {
                    value: /^\d+$/,
                    message: 'Solo números permitidos'
                  }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                type="tel"
              />
              {errors.parentPhone && (
                <span className="text-red-500 text-sm">{errors.parentPhone.message}</span>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input
                {...register('parentEmail', { 
                  required: 'Este campo es requerido',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido'
                  }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                type="email"
              />
              {errors.parentEmail && (
                <span className="text-red-500 text-sm">{errors.parentEmail.message}</span>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Dirección</label>
              <textarea
                {...register('address', { required: 'Este campo es requerido' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
              />
              {errors.address && (
                <span className="text-red-500 text-sm">{errors.address.message}</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`
              px-6 py-3 rounded-md text-white font-semibold
              ${isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}
              transition-colors duration-200
            `}
          >
            {isLoading ? 'Enviando...' : 'Enviar Inscripción'}
          </button>
        </div>

        {submitStatus === 'success' && (
          <div className="text-center p-4 bg-green-100 text-green-700 rounded-md">
            ¡Registro completado con éxito!
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="text-center p-4 bg-red-100 text-red-700 rounded-md">
            Hubo un error al procesar el registro. Por favor, intente nuevamente.
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;