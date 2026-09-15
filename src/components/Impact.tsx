import React from 'react';
import { Target, CheckCircle } from 'lucide-react';
import { CONCEPTUAL_IMPACT } from '../data/institutionalData';

export const Impact: React.FC = () => {
  return (
    <section id="impacto" className="py-24 bg-epm-bgLight relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-epm-green/10 text-epm-green text-xs font-bold uppercase tracking-wider mb-4">
            <Target className="w-3.5 h-3.5" />
            <span>Dimensión Institucional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-epm-dark tracking-tight">
            Compromiso social y desarrollo
          </h2>
          <p className="mt-4 text-lg text-epm-textMuted">
            Nuestra acción se orienta a consolidar procesos sostenibles y de valor público para el territorio.
          </p>
        </div>

        {/* 4 Conceptual Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONCEPTUAL_IMPACT.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-epm-green/10 text-epm-green">
                    {item.badge}
                  </span>
                  <CheckCircle className="w-5 h-5 text-epm-lime" />
                </div>
                
                <h3 className="text-xl font-bold text-epm-dark mb-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-epm-textMuted leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] font-semibold text-epm-textMuted flex items-center justify-between">
                <span>Fundación EPM</span>
                <span className="text-epm-green">Enfoque Cualitativo</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
