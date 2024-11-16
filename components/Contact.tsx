"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';


export function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    Tele: '',
    faculte: '',
    niveau: '',
    specialite: '',
    recherche: '',
    source: '',
  });

  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModalContent("Form submitted successfully!, Check your inbox.");
      } else {
        setModalContent('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setModalContent('An error occurred. Please try again later.');
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Automatically close the modal after 5 seconds
  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        setIsModalOpen(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  return (
    <section className="py-32 px-4 md:px-8 bg-[#001f3f] relative overflow-hidden">
      <BackgroundLines />
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-200">
            inscrivez vous
          </h2>
          <Card className="p-8 bg-white/5 backdrop-blur-lg border-white/10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Input
                  name="nom"
                  placeholder="Nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                />
                <Input
                  name="prenom"
                  placeholder="Prénom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                />
              </div>
              <Input
                name="email"
                type="email"
                placeholder="Adresse e-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              />
              <Input
                name="Tele"
                type="tel"
                placeholder="Numéro de téléphone"
                value={formData.Tele}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              />
              <select
                name="faculte"
                value={formData.faculte }
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 w-full"
              >
                <option value="">votre faculté</option>
                <option value="ESEN" className='text-black'>Ecole Supérieure de l Economie Numérique de la Manouba (ESEN)</option>
                <option value="ENSI" className='text-black'>Ecole Nationale des Sciences de l Informatique (ENSI)</option>
                <option value="ISAMM" className='text-black'>Institut Supérieur des Arts Multimédia de la Manouba (ISAMM)</option>
                <option value="ESC" className='text-black'>Ecole Supérieure de Commerce(ESC)</option>
                <option value="ISCAE" className='text-black'>Institut Supérieur de Comptabilité et d'Administration des Entreprises(ISCAE)</option>
                <option value="TBS" className='text-black'>Tunisia Buisness school (TBS)</option>
                <option value="ISI" className='text-black'>Institut Supérieur d'Informatique (ISI)</option>
                <option value="FST" className='text-black'>Mathématiques, informatique, sciences et technologie de la matière ( FST )</option>
                <option value="ESSECT" className='text-black'>ESSECT</option>
                <option value="IHEC" className='text-black'>Institut des Hautes Etudes Commerciales de Carthage (IHEC)</option>
                <option value="ISGT" className='text-black'>ISG Tunis</option>
                <option value="FSEGT" className='text-black'>Faculté des Sciences Economiques et de Gestion de Tunis (FSEGT)</option>
                <option value="INSAT" className='text-black'> Institut National des Sciences Appliquées et de Technologie (INSAT)</option>
                <option value="ISTIC" className='text-black'> Institut Supérieur des Technologies de l’Information et des Communications (ISTIC)</option>
                <option value="SUPCOM" className='text-black'>Ecole Supérieure des Communications de Tunis (SUPCOM)</option>
                <option value="ENSIT" className='text-black'>ENSIT</option>
                <option value="autre" className='text-black'>autre</option>
                <option value="ESSTD" className='text-black'>Ecole Supérieure des Sciences et Technologies du Design</option>
                <option value="ISSEPK" className='text-black'>Institut Supérieur du Sport et de l Education Physique de Ksar Saïd </option>
                <option value="IPSI" className='text-black'>Institut de Presse et des Sciences de l Information</option>
                <option value="FSB" className='text-black'>Faculté des Sciences de Bizerte (FSB)</option>
                <option value="ISGB" className='text-black'> Institut Supérieur de Gestion de Bizerte (ISGB)</option>
                <option value="FSEGN" className='text-black'>Faculté des Sciences Economiques et de Gestion de Nabeul (FSEGN)</option>
                <option value="FSJPST" className='text-black'>Faculté des Sciences Juridiques, Politiques et Sociales de Tunis (FSJPST)</option>
                <option value="ISSAT" className='text-black'>Institut Supérieur des Sciences Appliquées et de Technologie de Mateur (ISSAT)</option>
                <option value="EPT" className='text-black'> Ecole Polytechnique de Tunisie (EPT)</option>
                <option value="ENICar" className='text-black'>Ecole Nationale d’Ingénieurs de Carthage (ENICar)</option>
                <option value="ISES" className='text-black'>Institut Supérieur de l Education Spécialisée </option>
                <option value="FLAH" className='text-black'>Faculté des Lettres, des Arts et des Humanités</option>
                <option value="ISDT" className='text-black'>Institut Supérieur de Documentation de Tunis</option>
                <option value="IBLV" className='text-black'>Institut Bourguiba des Langues Vivantes (IBLV)</option>
                <option value="IPEIM" className='text-black'>Institut Préparatoire aux Eudes d'Ingénieurs El Manar (IPEIM)</option>
                <option value="ISSBAT" className='text-black'>Institut Supérieur des Sciences Biologiques Appliquées de Tunis (ISSBAT)</option>
                <option value="ISSHT" className='text-black'>Institut Supérieur des Sciences Humaines de Tunis (ISSHT)</option>
                <option value="ISSIT" className='text-black'>Institut Supérieur des Sciences Infirmières de Tunis (ISSIT)</option>
                <option value="ISTMT" className='text-black'>Institut Supérieur des Technologies Médicales de Tunis (ISTMT)</option>
                <option value="ENIT" className='text-black'>Ecole Nationale d'Ingénieurs de Tunis (ENIT)</option>
                <option value="FSHST" className='text-black'>FSHST</option>
                <option value="IPEIT" className='text-black'>IPEIT</option>
                <option value="ISBAT" className='text-black'>ISBAT</option>
                <option value="ISMT" className='text-black'>ISMT</option>
                <option value="ISAD" className='text-black'>ISAD</option>
                <option value="ISMPT" className='text-black'>ISMPT</option>
                <option value="ISEAHT" className='text-black'>ISEAHT</option>
                <option value="ISAJC" className='text-black'>ISAJC</option>
                <option value="ENS" className='text-black'>ENS</option>
                <option value="ISEAHZ" className='text-black'>ISEAHZ</option>
              
                
              </select>
              <select
                name="niveau"
                value={formData.niveau}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 w-full"
              >
                <option value="">Niveau d'études (L1, L2, L3, M1, M2)</option>
                <option value="L1" className='text-black'>L1</option>
                <option value="L2" className='text-black'>L2</option>
                <option value="L3" className='text-black'>L3</option>
                <option value="M1" className='text-black'>M1</option>
                <option value="M2" className='text-black'>M2</option>
              </select>
              <Input
                name="specialite"
                placeholder="Spécialité"
                value={formData.specialite}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              />
              <select
                name="recherche"
                value={formData.recherche}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 w-full"
              >
                <option value="">Êtes-vous à la recherche :</option>
                <option value="stage" className='text-black'>D’un stage</option>
                <option value="emploi" className='text-black'>D’un emploi</option>
                <option value="apprentissage" className='text-black'>D’un apprentissage</option>
                <option value="information" className='text-black'>Juste d’information</option>
              </select>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 w-full"
              >
                
                <option value="officialPage" className='text-black'>Via page officielle</option>
                <option value="website" className='text-black'>Via site web</option>
                <option value="email" className='text-black'>Par e-mail</option>
                <option value="radio" className='text-black'>Via radio</option>
                <option value="socialMedia" className='text-black'>Sur les réseaux sociaux (Facebook, Instagram, LinkedIn)</option>
                <option value="friend" className='text-black'>Par un(e) ami(e) ou un(e) camarade de classe</option>
              </select>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-white text-[#001f3f] hover:bg-blue-50 h-12 text-lg font-semibold"
              >
                Submit <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-8 right-8 bg-black text-white p-4 rounded-lg shadow-lg z-50"
        >
          <p>{modalContent}</p>
        </motion.div>
      )}
    </section>
  );

}

function BackgroundLines() {
  return (
    <div className="absolute inset-0 opacity-10">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-500"
          animate={{
            x: [0, Math.random() * 100, 0],
            y: [0, Math.random() * 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          style={{
            width: Math.random() * 300 + 50,
            height: 2,
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            transform: 'rotate(' + Math.random() * 360 + 'deg)',
          }}
        />
      ))}
    </div>
  );
}
