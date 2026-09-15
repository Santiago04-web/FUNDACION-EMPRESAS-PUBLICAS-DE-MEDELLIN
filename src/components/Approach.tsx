import React from 'react';
import { Users, MapPin, Lightbulb, HeartHandshake, Sparkles } from 'lucide-react';
import { PILLARS_DATA } from '../data/institutionalData';

export const Approach: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-8 h-8 text-epm-green" />;
      case 'MapPin':
        return <MapPin className="w-8 h-8 text-epm-green" />;
      case 'Lightbulb':
        return <Lightbulb className="w-8 h-8 text-epm-green" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-8 h-8 text-epm-green" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-epm-green" />;
      default:
        return <Sparkles className="w-8 h-8 text-epm-green" />;
    }
  };

  return (
    <section id="enfoque" className="py-24 bg-epm-bgLight relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-epm-green/10 text-epm-green text-xs font-bold uppercase tracking-wider mb-4">
            <span>Pilares Institucionales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-epm-dark tracking-tight">
            Nuestro enfoque
          </h2>
          <p className="mt-4 text-lg text-epm-textMuted">
            Estrategia social articulada alrededor de los valores fundamentales para la transformación comunitaria.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS_DATA.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-epm-bgLight group-hover:bg-epm-green/10 flex items-center justify-center mb-6 transition-colors">
                  {getIcon(pillar.iconName)}
                </div>
                
                <div className="text-xs font-bold text-epm-green/80 uppercase tracking-widest mb-1">
                  Pilar {idx + 1}
                </div>
                
                <h3 className="text-2xl font-bold text-epm-dark group-hover:text-epm-green transition-colors mb-3">
                  {pillar.title}
                </h3>
                
                <p className="text-epm-textMuted text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-epm-textMuted group-hover:text-epm-green font-semibold">
                <span>Fundación EPM</span>
                <span>• • •</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
