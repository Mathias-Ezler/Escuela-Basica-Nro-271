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

const ProgramFeature = ({
  icon: Icon,
  title,
  description,
}: Feature) => (
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
        "Nuestro programa de educación inicial está diseñado para estimular el desarrollo cognitivo, emocional y social de los niños. Fomentamos el aprendizaje a través del juego y la exploración.",
      icon: Users,
      features: [
        {
          icon: Calendar,
          title: "Horario Flexible",
          description: "Adaptado a las necesidades de los más pequeños",
        },
        {
          icon: Brain,
          title: "Desarrollo Integral",
          description: "Actividades que estimulan todas las áreas de desarrollo",
        },
        {
          icon: Award,
          title: "Método Montessori",
          description: "Incorporamos elementos de pedagogías innovadoras",
        },
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Educación Primaria",
      description:
        "Ofrecemos un currículo integral que incluye materias académicas, arte y deportes, asegurando un desarrollo armónico en los estudiantes. Nuestro enfoque se centra en la formación de competencias y habilidades.",
      icon: Book,
      features: [
        {
          icon: Clock,
          title: "Programa Bilingüe",
          description: "Inmersión gradual en el idioma inglés",
        },
        {
          icon: Users,
          title: "Grupos Reducidos",
          description: "Atención personalizada garantizada",
        },
        {
          icon: Award,
          title: "Actividades Extra",
          description: "Deportes, arte y música incluidos",
        },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Educación Secundaria",
      description:
        "La educación secundaria prepara a los jóvenes para los retos académicos y personales que enfrentarán. Fomentamos el pensamiento crítico y la autonomía en el aprendizaje.",
      icon: GraduationCap,
      features: [
        {
          icon: Brain,
          title: "Orientación Vocacional",
          description: "Guía profesional personalizada",
        },
        {
          icon: Award,
          title: "Bachillerato Internacional",
          description: "Programa reconocido mundialmente",
        },
        {
          icon: Users,
          title: "Proyectos Colaborativos",
          description: "Desarrollo de habilidades de liderazgo",
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
            Programas Académicos Innovadores
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Educación de calidad para todos los niveles, enfocada en el desarrollo integral y la excelencia académica.
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
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${program.color}`}>
                  <program.icon className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {program.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features */}
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

                  {/* CTA Button */}
                  <button className="mt-8 w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 px-6 rounded-lg hover:from-gray-900 hover:to-black transition-all duration-300 flex items-center justify-center space-x-2 group">
                    <span>Más Información</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
