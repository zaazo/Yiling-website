"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { InfiniteMovingCards } from './InfiniteMovingCards';

const testimonials = [
  {
    quote: "Yiling's editing skills transformed my content. The quality improvement was incredible!",
    name: "Alex Johnson",
    title: "Travel Vlogger"
  },
  {
    quote: "Working with Yiling helped me double my subscriber count in just three months.",
    name: "Sarah Lee",
    title: "Lifestyle YouTuber"
  },
  {
    quote: "The attention to detail in Yiling's edits is unmatched. Highly recommended!",
    name: "Mike Chen",
    title: "Tech Reviewer"
  },
  {
    quote: "Yiling's edits made my cooking videos so much more engaging. My viewers love it!",
    name: "Emily Patel",
    title: "Culinary Content Creator"
  },
  {
    quote: "I've worked with many editors, but Yiling's work stands out. True professional!",
    name: "Chris Wong",
    title: "Fitness Influencer"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">What Clients Say</h2>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;