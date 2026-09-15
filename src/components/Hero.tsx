import React from 'react';
import { ArrowRight, ChevronDown, ShieldCheck, Heart, MapPin, Sparkles } from 'lucide-react';
import { HERO_DATA, LEGAL_DATA } from '../data/institutionalData';

export const Hero: React.FC = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-epm-dark text-white pt-8 pb-16">
      {/* Background Image Overlay with Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_banner.jpg"
          alt="Medellín y Territorio Fundación EPM"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transform hover:scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-epm-dark via-epm-dark/90 to-epm-deep/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-epm-lime/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        {/* Institutional Pill Tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-epm-accent text-xs font-semibold uppercase tracking-wider mb-8 animate-fadeIn">
          <ShieldCheck className="w-4 h-4 text-epm-lime" />
          <span>{LEGAL_DATA.nombrePublico} — {LEGAL_DATA.tipoEntidad}</span>
        </div>

        {/* Hero Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] max-w-5xl text-white mb-6">
          {HERO_DATA.titulo}
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-normal max-w-3xl leading-relaxed mb-10">
          {HERO_DATA.subtitulo}
        </p>

        {/* Hero Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={() => handleScroll('#nosotros')}
            className="w-full sm:w-auto bg-epm-lime hover:bg-epm-accent text-epm-dark font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
          >
            <span>{HERO_DATA.btnConocenos}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => handleScroll('#contacto')}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 rounded-full border border-white/20 backdrop-blur-sm transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
          >
            <span>{HERO_DATA.btnContactanos}</span>
          </button>
        </div>

        {/* Key Values Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl pt-8 border-t border-white/10">
          <div className="flex items-center justify-center space-x-3 text-white/90 bg-white/5 py-3 px-4 rounded-xl border border-white/5 backdrop-blur-sm">
            <Heart className="w-5 h-5 text-epm-lime" />
            <span className="font-semibold text-sm">PERSONAS</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-white/90 bg-white/5 py-3 px-4 rounded-xl border border-white/5 backdrop-blur-sm">
            <MapPin className="w-5 h-5 text-epm-lime" />
            <span className="font-semibold text-sm">TERRITORIO</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-white/90 bg-white/5 py-3 px-4 rounded-xl border border-white/5 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-epm-lime" />
            <span className="font-semibold text-sm">OPORTUNIDADES</span>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 text-white/40 hidden md:block">
        <button onClick={() => handleScroll('#nosotros')} className="hover:text-white transition-colors" aria-label="Desplazar hacia abajo">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
