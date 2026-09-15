import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Approach } from './components/Approach';
import { VisualGallery } from './components/VisualGallery';
import { Transformation } from './components/Transformation';
import { Impact } from './components/Impact';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';

export const App: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    type: 'privacy' | 'terms';
  }>({
    isOpen: false,
    title: '',
    type: 'privacy'
  });

  const openPrivacyModal = () => {
    setModalState({
      isOpen: true,
      title: 'Política de Privacidad',
      type: 'privacy'
    });
  };

  const openTermsModal = () => {
    setModalState({
      isOpen: true,
      title: 'Términos y Condiciones',
      type: 'terms'
    });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-epm-bgLight text-epm-textDark font-sans selection:bg-epm-green/20">
      {/* Navigation Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Approach />
        <VisualGallery />
        <Transformation />
        <Impact />
        <CTA />
        <Contact />
      </main>

      {/* Institutional Footer */}
      <Footer onOpenPrivacy={openPrivacyModal} onOpenTerms={openTermsModal} />

      {/* Legal Information Modals */}
      <Modals
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        type={modalState.type}
      />
    </div>
  );
};

export default App;
