import React from 'react';
import { Building2, FileCheck, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ABOUT_DATA, LEGAL_DATA } from '../data/institutionalData';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative subtle background pattern */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-epm-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-epm-lime/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Institutional Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-epm-bgLight text-epm-green text-xs font-bold uppercase tracking-wider">
              <span>{ABOUT_DATA.subtitulo}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-epm-dark tracking-tight leading-tight">
              {ABOUT_DATA.titulo}
            </h2>

            <p className="text-xl font-medium text-epm-green leading-relaxed">
              "{ABOUT_DATA.texto}"
            </p>

            <p className="text-epm-textMuted text-base leading-relaxed">
              {ABOUT_DATA.descripcionAmpliada}
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-epm-bgLight border border-epm-green/10">
                <CheckCircle2 className="w-5 h-5 text-epm-green flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-epm-dark">Compromiso Comunitario</h4>
                  <p className="text-xs text-epm-textMuted mt-1">Enfocado en las necesidades del territorio y sus habitantes.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-xl bg-epm-bgLight border border-epm-green/10">
                <CheckCircle2 className="w-5 h-5 text-epm-green flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-epm-dark">Transparencia e Identidad</h4>
                  <p className="text-xs text-epm-textMuted mt-1">Organización legalmente registrada y comprometida con el interés social.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Legal Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-epm-dark to-epm-deep text-white rounded-3xl p-8 shadow-2xl relative border border-epm-lime/20">
              <div className="absolute top-4 right-4 text-epm-lime/20">
                <Building2 className="w-24 h-24" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white p-1 flex items-center justify-center shadow-md">
                    <img src="/images/logo.jpg" alt="Badge Fundación EPM" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div>
                    <span className="text-xs text-epm-accent uppercase font-bold tracking-wider">Identidad Legal Oficial</span>
                    <h3 className="text-lg font-bold text-white leading-snug">{LEGAL_DATA.nombrePublico}</h3>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
                  <div className="flex items-start justify-between">
                    <span className="text-white/60 font-medium">Razón Social:</span>
                    <span className="font-bold text-white text-right max-w-[200px]">{LEGAL_DATA.razonSocial}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/60 font-medium flex items-center space-x-1.5">
                      <FileCheck className="w-4 h-4 text-epm-lime" />
                      <span>NIT:</span>
                    </span>
                    <span className="font-mono font-bold text-epm-accent text-base bg-white/10 px-2.5 py-0.5 rounded-md">
                      {LEGAL_DATA.nit}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/60 font-medium flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4 text-epm-lime" />
                      <span>Tipo:</span>
                    </span>
                    <span className="font-semibold text-white">{LEGAL_DATA.tipoEntidad}</span>
                  </div>

                  <div className="flex items-start justify-between">
                    <span className="text-white/60 font-medium flex items-center space-x-1.5">
                      <MapPin className="w-4 h-4 text-epm-lime" />
                      <span>Ubicación:</span>
                    </span>
                    <span className="font-semibold text-white text-right">{LEGAL_DATA.domicilio}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <span className="text-xs text-white/50 block">Certificado de Existencia y Representación Legal</span>
                  <span className="text-xs font-semibold text-epm-accent mt-0.5 block">Cámara de Comercio de Medellín para Antioquia</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
