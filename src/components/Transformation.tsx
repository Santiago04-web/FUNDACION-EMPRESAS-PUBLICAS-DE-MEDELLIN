import React from 'react';
import { Users, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import { TRANSFORMATION_DATA } from '../data/institutionalData';

export const Transformation: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'personas':
        return <Users className="w-10 h-10 text-epm-green" />;
      case 'territorio':
        return <MapPin className="w-10 h-10 text-epm-green" />;
      case 'oportunidades':
        return <Sparkles className="w-10 h-10 text-epm-green" />;
      default:
        return <Sparkles className="w-10 h-10 text-epm-green" />;
    }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-epm-lime/20 text-epm-dark text-xs font-bold uppercase tracking-wider mb-4">
            <span>Visión Social Institucional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-epm-dark tracking-tight">
            {TRANSFORMATION_DATA.titulo}
          </h2>
          <p className="mt-4 text-lg text-epm-textMuted leading-relaxed">
            "{TRANSFORMATION_DATA.texto}"
          </p>
        </div>

        {/* 3 Blocks Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRANSFORMATION_DATA.bloques.map((block) => (
            <div
              key={block.id}
              className="bg-epm-bgLight rounded-3xl p-8 border border-epm-green/10 hover:border-epm-green/30 transition-all shadow-sm hover:shadow-md group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    {getIcon(block.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-epm-green/60 bg-white/60 px-3 py-1 rounded-full border border-gray-100">
                    EJE {block.title}
                  </span>
                </div>

                <div className="text-xs font-bold text-epm-green uppercase tracking-wider mb-1">
                  {block.subtitle}
                </div>

                <h3 className="text-2xl font-bold text-epm-dark mb-4 group-hover:text-epm-green transition-colors">
                  {block.title}
                </h3>

                <p className="text-epm-textMuted text-sm leading-relaxed">
                  {block.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200/60 flex items-center text-xs font-semibold text-epm-green group-hover:text-epm-deep">
                <span>Fundación EPM</span>
                <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
