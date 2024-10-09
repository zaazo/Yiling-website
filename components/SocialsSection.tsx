"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Youtube } from 'lucide-react';

const SocialsSection = () => {
  return (
    <section id="book" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 max-w-2xl mx-auto"
        >
          Ready to take your content to the next level? Reach out to me on social media or book a call to discuss your project.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <a href="https://twitter.com/Yiling_27" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-white" />
          </a>
          <a href="https://www.instagram.com/yiling_27" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-6 w-6 text-white" />
          </a>
          <a href="https://www.youtube.com/@yiling_27" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Youtube className="h-6 w-6 text-white" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://calendly.com/yiling27/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors"
          >
            Book a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialsSection;