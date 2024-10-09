"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const videos = [
  { id: 1, title: 'Client Project 1', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 2, title: 'Client Project 2', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 3, title: 'Client Project 3', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 4, title: 'Client Project 4', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;