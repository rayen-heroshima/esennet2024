"use client";

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 px-4 md:px-8 bg-[#001f3f] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex justify-center space-x-8 mb-10">
            <SocialLink icon={<Facebook className="w-6 h-6" />} />
            <SocialLink icon={<Linkedin className="w-6 h-6" />} />
            <SocialLink icon={<Instagram className="w-6 h-6" />} />
          </div>
          <p className="text-center text-white/60">
            © 2024 ESENet Job Fair. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="text-white/60 hover:text-white transition-colors"
    >
      {icon}
    </motion.a>
  );
}