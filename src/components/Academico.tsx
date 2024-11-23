import React, { useState } from "react";
import {
  Book,
  Users,
  Brain,
  ArrowRight,
  GraduationCap,
  Calendar,
  Clock,
  Award,
} from "lucide-react";

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type Program = {
  title: string;
  description: string;
  icon: React.ElementType;
  features: Feature[];
  color: string;
};

const ProgramFeature = ({ icon: Icon, title, description }: Feature) => (
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0">
      <Icon className="h-6 w-6 text-blue-500" />
    </div>
    <div>
      <h4 className="font-medium text-gray-900">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

export default function AcademicPrograms() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const programs: Program[] = [
    {
      title: "Educación Inicial",
      description:
        "Nivel inicial de jardín y preescolar, diseñado para estimular el desarrollo integral a través de actividades lúdicas y educativas.",
      icon: Users,
      features: [
        {
          icon: Calendar,
          title: "Horario Adaptado",
          description: "Flexibilidad para los más pequeños.",
        },
        {
          icon: Brain,
          title: "Estímulo Integral",
          description: "Actividades que fomentan el desarrollo cognitivo y emocional.",
        },
        {
          icon: Award,
          title: "Entorno Seguro",
          description: "Ambiente ideal para el aprendizaje.",
        },
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Educación Escolar Básica",
      description:
        "Desde 1°, 2° y 3° ciclo, se promueve un aprendizaje integral con un enfoque académico y técnico agropecuario en el tercer ciclo.",
      icon: Book,
      features: [
        {
          icon: Clock,
          title: "Currículo Integral",
          description: "Incluye materias académicas y técnicas.",
        },
        {
          icon: Users,
          title: "Enseñanza Personalizada",
          description: "Clases con enfoque en el desarrollo individual.",
        },
        {
          icon: Award,
          title: "Enfoque Técnico",
          description: "Preparación en agricultura y negocios sostenibles.",
        },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Infraestructura",
      description:
        "La escuela cuenta con un predio de 4 hectáreas y 5.400 m² de superficie, ofreciendo amplios espacios para actividades académicas y recreativas.",
      icon: GraduationCap,
      features: [
        {
          icon: Brain,
          title: "Ambiente Espacioso",
          description: "Ideal para actividades al aire libre y aprendizaje práctico.",
        },
        {
          icon: Award,
          title: "Equipamiento Técnico",
          description: "Recursos modernos para la educación agropecuaria.",
        },
        {
          icon: Users,
          title: "Proyectos Sostenibles",
          description: "Fomentamos negocios sostenibles basados en la agricultura.",
        },
      ],
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Información de la Escuela Básica N° 271 Don Carlos Antonio López
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Bienvenidos a nuestra institución, fundada en 1960, dedicada a brindar educación integral desde nivel inicial hasta educación escolar básica con un enfoque técnico agropecuario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`p-6 bg-gradient-to-r ${program.color}`}>
                  <program.icon className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {program.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-4">
                    {program.features.map((feature, fIndex) => (
                      <ProgramFeature
                        key={fIndex}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                      />
                    ))}
                  </div>

                  <button className="mt-8 w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 px-6 rounded-lg hover:from-gray-900 hover:to-black transition-all duration-300 flex items-center justify-center space-x-2 group">
                    <span>Más Información</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
