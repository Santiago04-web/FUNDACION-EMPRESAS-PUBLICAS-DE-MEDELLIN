import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { CTA_DATA } from '../data/institutionalData';

export const CTA: React.FC = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-epm-dark via-epm-deep to-epm-dark text-white relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-epm-lime/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-epm-green/30 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
          <Mail className="w-8 h-8 text-epm-accent" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          {CTA_DATA.titulo}
        </h2>

        <p className="text-lg sm:text-xl text-gray-200 font-normal max-w-2xl mx-auto mb-8 leading-relaxed">
          {CTA_DATA.texto}
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => handleScroll('#contacto')}
            className="bg-epm-lime hover:bg-epm-accent text-epm-dark font-bold text-base px-9 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center space-x-2"
          >
            <span>{CTA_DATA.boton}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
