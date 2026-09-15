import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { LEGAL_DATA } from '../data/institutionalData';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'privacy' | 'terms';
}

export const Modals: React.FC<ModalProps> = ({ isOpen, onClose, title, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-gray-100">
        
        {/* Modal Header */}
        <div className="p-6 bg-epm-dark text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {type === 'privacy' ? <ShieldCheck className="w-6 h-6 text-epm-lime" /> : <FileText className="w-6 h-6 text-epm-lime" />}
            <div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-xs text-epm-accent">{LEGAL_DATA.razonSocial}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-epm-textMuted leading-relaxed">
          {type === 'privacy' ? (
            <>
              <h4 className="font-bold text-epm-dark text-base">Política de Tratamiento de Datos Personales</h4>
              <p>
                En cumplimiento de la Ley 1581 de 2012 y sus decretos reglamentarios, la <strong>{LEGAL_DATA.razonSocial}</strong>, identificada con NIT <strong>{LEGAL_DATA.nit}</strong>, informa a la comunidad que la información suministrada a través de nuestros canales digitales será tratada con estricta confidencialidad.
              </p>
              <h5 className="font-bold text-epm-dark">Finalidad de la recolección:</h5>
              <p>
                Los datos solicitados en el formulario de contacto (Nombre, Correo, Teléfono y Mensaje) serán utilizados exclusivamente para atender solicitudes institucionales, proporcionar respuesta a inquietudes y brindar información referente a nuestras iniciativas en el territorio.
              </p>
              <h5 className="font-bold text-epm-dark">Derechos de los titulares:</h5>
              <p>
                Como titular de los datos, usted tiene derecho a conocer, actualizar, rectificar y solicitar la supresión de su información personal. Para hacer uso de sus derechos puede escribir al correo electrónico <strong>{LEGAL_DATA.correo}</strong> o dirigir una comunicación a la <strong>{LEGAL_DATA.direccion}</strong> en Medellín, Antioquia.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-bold text-epm-dark text-base">Términos y Condiciones de Uso</h4>
              <p>
                El presente sitio web forma parte de la presencia digital oficial de la <strong>{LEGAL_DATA.razonSocial}</strong> (Fundación EPM). Al navegar por este portal, el usuario acepta las condiciones de uso descritas a continuación.
              </p>
              <h5 className="font-bold text-epm-dark">Propiedad Intelectual y Contenidos:</h5>
              <p>
                Todos los contenidos institucionales, distintivos visuales, marcas y elementos gráficos exhibidos en este sitio son propiedad exclusiva de la Fundación EPM o se utilizan con fines netamente representativos y legítimos. Queda prohibida la reproducción no autorizada con fines comerciales o engañosos.
              </p>
              <h5 className="font-bold text-epm-dark">Veracidad de la Información:</h5>
              <p>
                La información publicada refleja la naturaleza jurídica y social de la entidad como Entidad sin Ánimo de Lucro domiciliada en Medellín, Antioquia, Colombia. La organización garantiza la veracidad de su identificación legal y datos de contacto oficial.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="bg-epm-green hover:bg-epm-deep text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-sm transition-all"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
