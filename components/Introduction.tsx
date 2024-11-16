"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Introduction() {
  return (
    <section id="introduction" className="py-32 px-4 md:px-8 bg-white text-[#002b56]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] rounded-2xl overflow-hidden group"
        >
          <motion.img
            src="/gallery/121.jpg"
            alt="ecole"
            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002b56]/50 to-transparent" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#002b56] to-blue-400">
          Bienvenue à l'ESEN
          </h2>
          <p className="text-xl leading-relaxed mb-10 text-gray-600">
          L'École Supérieure d'Économie Numérique (ESEN) de l'Université de La Manouba (UMA), fondée en 2004 et réformée profondément en 2012, est un établissement d'enseignement supérieur qui s'est positionné dans un domaine de formation en évolution constante, à savoir l'économie numérique. Ainsi, l'ESEN a toujours porté dans ses gênes une capacité d'adaptation et une agilité exceptionnelles à répondre aux changements.

L'ESEN offre des licences et des mastères en E-Business (spécialité de prédilection de l'école), Business Inteligence, Information System, Data Science, Veille et intelligence compétitive et en contrôle de gestion digitalisé.
          </p>
          <a
  href="https://www.esen.tn/portail/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-xl"
  >
    Découvrez l'ESEN
  </Button>
</a>
        </motion.div>
      </div>
    </section>
  );
}