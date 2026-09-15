import React from 'react';
import { MapPin, Phone, Mail, Globe, ShieldCheck } from 'lucide-react';
import { LEGAL_DATA } from '../data/institutionalData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-epm-dark text-white pt-16 pb-8 border-t border-epm-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Institutional Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-epm-lime/30 bg-white">
                <img src="/images/logo.jpg" alt="Logo Fundación EPM" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">{LEGAL_DATA.nombrePublico}</h3>
                <p className="text-xs text-epm-accent font-semibold">{LEGAL_DATA.razonSocial}</p>
              </div>
            </div>

            <p className="text-sm text-gray-300 max-w-md leading-relaxed">
              Entidad sin ánimo de lucro dedicada a promover iniciativas de desarrollo, bienestar y fortalecimiento de comunidades en Medellín y sus territorios.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center space-x-2 text-xs font-mono font-bold bg-white/10 text-epm-lime px-3 py-1.5 rounded-lg border border-white/10">
                <ShieldCheck className="w-4 h-4" />
                <span>NIT {LEGAL_DATA.nit}</span>
              </span>
            </div>
          </div>

          {/* Column 2: Nav Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-epm-accent">Navegación</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" onClick={(e) => handleScroll(e, '#inicio')} className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" onClick={(e) => handleScroll(e, '#nosotros')} className="text-gray-300 hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#enfoque" onClick={(e) => handleScroll(e, '#enfoque')} className="text-gray-300 hover:text-white transition-colors">
                  Enfoque
                </a>
              </li>
              <li>
                <a href="#contacto" onClick={(e) => handleScroll(e, '#contacto')} className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <button onClick={onOpenPrivacy} className="text-gray-300 hover:text-white transition-colors text-left">
                  Política de privacidad
                </button>
              </li>
              <li>
                <button onClick={onOpenTerms} className="text-gray-300 hover:text-white transition-colors text-left">
                  Términos y condiciones
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Domicile */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-epm-accent">Sede Legal</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-epm-lime flex-shrink-0 mt-0.5" />
                <span>
                  {LEGAL_DATA.direccion}<br />
                  {LEGAL_DATA.domicilio}
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-epm-lime flex-shrink-0" />
                <a href={`tel:${LEGAL_DATA.telefono}`} className="hover:text-white transition-colors">
                  {LEGAL_DATA.telefono}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-epm-lime flex-shrink-0" />
                <a href={`mailto:${LEGAL_DATA.correo}`} className="hover:text-white transition-colors break-all">
                  {LEGAL_DATA.correo}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Globe className="w-4 h-4 text-epm-lime flex-shrink-0" />
                <a href={LEGAL_DATA.sitioWeb} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {LEGAL_DATA.dominioSimple}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p className="text-center sm:text-left">
            © {LEGAL_DATA.copyrightYear} {LEGAL_DATA.razonSocial}. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-4 text-gray-400">
            <span>Medellín, Colombia</span>
            <span>•</span>
            <button onClick={onOpenPrivacy} className="hover:text-white transition-colors">Privacidad</button>
            <span>•</span>
            <button onClick={onOpenTerms} className="hover:text-white transition-colors">Términos</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
