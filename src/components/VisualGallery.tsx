import React from 'react';
import { Camera, MapPin, Trees, GraduationCap, Users2 } from 'lucide-react';

export const VisualGallery: React.FC = () => {
  const items = [
    {
      title: "Medellín y su Territorio",
      category: "Territorio",
      icon: <MapPin className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1599309329928-478809964b07?auto=format&fit=crop&w=1000&q=80",
      aspect: "col-span-1 md:col-span-2 row-span-2"
    },
    {
      title: "Construcción Comunitaria",
      category: "Comunidad",
      icon: <Users2 className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80",
      aspect: "col-span-1"
    },
    {
      title: "Entorno y Naturaleza",
      category: "Sostenibilidad",
      icon: <Trees className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
      aspect: "col-span-1"
    },
    {
      title: "Oportunidades de Futuro",
      category: "Bienestar",
      icon: <GraduationCap className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      aspect: "col-span-1 md:col-span-2"
    }
  ];

  return (
    <section className="py-20 bg-epm-dark text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-epm-green/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-white/10 text-epm-accent text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
              <Camera className="w-3.5 h-3.5" />
              <span>Galería Institucional</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Identidad, comunidad y entorno
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-gray-300 max-w-md text-sm leading-relaxed">
            Una visión integrada de nuestro contexto social, urbano y ambiental en la región de Medellín y Antioquia.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden group shadow-lg border border-white/10 ${item.aspect}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-epm-dark/90 via-epm-dark/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-epm-green/80 text-white text-xs font-semibold backdrop-blur-md w-fit mb-2">
                  {item.icon}
                  <span>{item.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-epm-accent transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
