import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, FileText } from 'lucide-react';
import { LEGAL_DATA } from '../data/institutionalData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean contact submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-epm-green/10 text-epm-green text-xs font-bold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Canal Oficial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-epm-dark tracking-tight">
            Información de contacto
          </h2>
          <p className="mt-4 text-lg text-epm-textMuted">
            Estamos disponibles para atender tus inquietudes institucionales y requerimientos comunitarios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Official Legal Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-epm-bgLight rounded-3xl p-8 border border-epm-green/15 shadow-sm space-y-6">
              
              <div className="pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-epm-green/30">
                    <img src="/images/logo.jpg" alt="Logo Fundación EPM" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-epm-dark leading-tight">{LEGAL_DATA.nombrePublico}</h3>
                    <p className="text-xs text-epm-green font-bold uppercase">{LEGAL_DATA.tipoEntidad}</p>
                  </div>
                </div>
                <p className="text-sm font-bold text-epm-textDark mt-3">
                  {LEGAL_DATA.razonSocial}
                </p>
                <div className="inline-flex items-center space-x-1.5 mt-2 px-2.5 py-1 rounded-md bg-white text-xs font-mono font-bold text-epm-dark border border-gray-200">
                  <FileText className="w-3.5 h-3.5 text-epm-green" />
                  <span>NIT: {LEGAL_DATA.nit}</span>
                </div>
              </div>

              {/* Exact Legal Contact List */}
              <div className="space-y-5 text-sm">
                
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-epm-green flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-epm-textMuted uppercase block">Dirección</span>
                    <p className="font-semibold text-epm-textDark leading-snug">
                      {LEGAL_DATA.direccion}
                    </p>
                    <p className="text-xs text-epm-textMuted">
                      {LEGAL_DATA.domicilio}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-epm-green flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-epm-textMuted uppercase block">Teléfono</span>
                    <a href={`tel:${LEGAL_DATA.telefono}`} className="font-semibold text-epm-dark hover:text-epm-green transition-colors">
                      {LEGAL_DATA.telefono}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-epm-green flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-epm-textMuted uppercase block">Correo Electrónico</span>
                    <a href={`mailto:${LEGAL_DATA.correo}`} className="font-semibold text-epm-dark hover:text-epm-green transition-colors break-all">
                      {LEGAL_DATA.correo}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-epm-green flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-epm-textMuted uppercase block">Sitio Web Oficial</span>
                    <a href={LEGAL_DATA.sitioWeb} target="_blank" rel="noopener noreferrer" className="font-semibold text-epm-green hover:underline break-all">
                      {LEGAL_DATA.sitioWeb}
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-md">
              <h3 className="text-2xl font-bold text-epm-dark mb-2">Envíanos un mensaje</h3>
              <p className="text-sm text-epm-textMuted mb-6">
                Completa el siguiente formulario para ponernos en contacto contigo a la brevedad.
              </p>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-center space-x-3 text-green-800 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Tu mensaje ha sido enviado exitosamente. Nos comunicaremos contigo pronto.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-bold text-epm-dark uppercase mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ej. María Rodríguez"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-epm-green focus:border-epm-green outline-none transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="correo" className="block text-xs font-bold text-epm-dark uppercase mb-1.5">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      required
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="ejemplo@correo.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-epm-green focus:border-epm-green outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-xs font-bold text-epm-dark uppercase mb-1.5">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="300 000 0000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-epm-green focus:border-epm-green outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-xs font-bold text-epm-dark uppercase mb-1.5">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje institucional aquí..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-epm-green focus:border-epm-green outline-none transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-epm-green hover:bg-epm-deep text-white font-bold text-base px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Enviando mensaje...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
