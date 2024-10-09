"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  { id: 1, title: 'Travel Vlog Series', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'A series of travel vlogs showcasing beautiful destinations around the world.' },
  { id: 2, title: 'Tech Review Channel', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'In-depth reviews and comparisons of the latest tech gadgets and innovations.' },
  { id: 3, title: 'Cooking Show', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'A culinary journey featuring easy-to-follow recipes and cooking tips.' },
  { id: 4, title: 'Fitness Transformation', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'Documenting a client\'s inspiring fitness journey and workout routines.' },
  { id: 5, title: 'Educational Series', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'Engaging educational content covering various academic subjects.' },
  { id: 6, title: 'Gaming Highlights', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'Exciting gaming moments and walkthroughs from popular video games.' },
];

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-10 text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="aspect-video mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      src={project.url}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </motion.div>
  );
};

export default ProjectsPage;