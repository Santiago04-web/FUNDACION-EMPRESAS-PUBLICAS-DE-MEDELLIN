import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { LEGAL_DATA } from '../data/institutionalData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Enfoque', href: '#enfoque' },
    { name: 'Impacto', href: '#impacto' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Legal bar for quick institutional identification */}
      <div className="bg-epm-dark text-white/90 text-xs py-2 px-4 border-b border-epm-green/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="font-semibold text-epm-accent">{LEGAL_DATA.razonSocial}</span>
            <span className="text-white/60">|</span>
            <span>NIT: {LEGAL_DATA.nit}</span>
            <span className="text-white/60">|</span>
            <span>{LEGAL_DATA.tipoEntidad}</span>
          </div>
          <div className="flex items-center space-x-6 text-white/80">
            <a href={`tel:${LEGAL_DATA.telefono}`} className="flex items-center space-x-1.5 hover:text-epm-accent transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>{LEGAL_DATA.telefono}</span>
            </a>
            <a href={`mailto:${LEGAL_DATA.correo}`} className="flex items-center space-x-1.5 hover:text-epm-accent transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>{LEGAL_DATA.correo}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-header shadow-md py-3 border-b border-epm-green/10'
            : 'bg-white py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo + Identity */}
            <a href="#inicio" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-epm-green/20 group-hover:border-epm-green transition-all shadow-sm">
                <img
                  src="/images/logo.jpg"
                  alt="Logo Fundación EPM"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-epm-dark group-hover:text-epm-green transition-colors">
                  {LEGAL_DATA.nombrePublico}
                </span>
                <span className="text-[10px] font-medium text-epm-textMuted uppercase tracking-wider hidden sm:inline-block">
                  {LEGAL_DATA.razonSocial}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-semibold text-epm-textDark hover:text-epm-green transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-epm-green hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, '#contacto')}
                className="bg-epm-green hover:bg-epm-deep text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Contáctanos
              </a>
            </div>

            {/* Mobile Hamburguer Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-epm-dark hover:bg-epm-bgLight focus:outline-none"
                aria-label="Abrir menú"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <div className="pb-2 border-b border-gray-100 text-xs text-epm-textMuted font-semibold">
                {LEGAL_DATA.razonSocial} | NIT {LEGAL_DATA.nit}
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-semibold text-epm-textDark hover:text-epm-green py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-gray-100 flex flex-col space-y-3">
                <a
                  href="#contacto"
                  onClick={(e) => handleNavClick(e, '#contacto')}
                  className="w-full text-center bg-epm-green text-white font-semibold text-sm px-5 py-3 rounded-xl shadow-sm"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
