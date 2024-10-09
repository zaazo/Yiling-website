"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Elevate Your Content with Professional Editing
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        I help content creators grow their channels with high-quality video editing that captivates audiences and boosts engagement.
      </p>
      <Button size="lg" asChild>
        <a href="#book">Book a Call</a>
      </Button>
    </motion.section>
  );
};

export default Hero;