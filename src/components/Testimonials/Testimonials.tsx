'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight, FiArrowLeft, FiStar } from 'react-icons/fi';
import { BsWindows, BsFileEarmarkRichtext, BsBuilding, BsDatabase, BsCloudCheck, BsLaptop } from 'react-icons/bs';

// Testimonial data
const testimonials = [
  {
    quote: "SoftSell helped us save over $50,000 in annual software costs by purchasing pre-owned licenses. The verification process gave us confidence that everything was legitimate and the transfers were seamless.",
    name: "Sarah Johnson",
    title: "IT Director",
    company: "TechCorp Inc.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "We were able to sell unused licenses from a recent downsize, recouping nearly 60% of our initial investment. SoftSell made the entire process simple, secure, and surprisingly fast.",
    name: "Michael Chen",
    title: "CFO",
    company: "Innovate Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "As a growing startup, we needed to manage our resources carefully. SoftSell allowed us to acquire enterprise-grade software at prices that actually fit our budget.",
    name: "Emma Rodriguez",
    title: "Operations Manager",
    company: "NextGen Startup",
    rating: 4,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "The ROI on using SoftSell has been incredible. Not only did we save on purchases, but we also recouped costs on software we were no longer using after our department restructured.",
    name: "David Wilson",
    title: "CTO",
    company: "Global Systems",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop"
  }
];

// Testimonial card component
const TestimonialCard = ({
  quote,
  name,
  title,
  company,
  rating,
  image,
  featured = false
}: {
  quote: string,
  name: string,
  title: string,
  company: string,
  rating: number,
  image: string,
  featured?: boolean
}) => {
  return (
    <div className={`card h-full ${featured ? 'border-primary-200 dark:border-primary-800' : ''}`}>
      <div className="p-8 sm:p-10 flex flex-col h-full">
        {/* Rating */}
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <FiStar 
              key={i}
              className={`w-5 h-5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-secondary-300 dark:text-secondary-700'}`}
            />
          ))}
        </div>
        
        {/* Quote */}
        <p className="text-secondary-700 dark:text-secondary-300 mb-8 text-lg leading-relaxed">"{quote}"</p>
        
        {/* Person info */}
        <div className="flex items-center mt-auto">
          <div className="w-12 h-12 rounded-full mr-4 flex-shrink-0 overflow-hidden border border-secondary-200 dark:border-secondary-700">
            {image ? (
              <Image 
                src={image} 
                alt={name} 
                width={48} 
                height={48}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary-200 to-primary-400 dark:from-primary-800 dark:to-primary-600"></div>
            )}
          </div>
          <div>
            <h4 className="font-bold text-secondary-900 dark:text-white">{name}</h4>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">{title}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  // State for featured testimonial (for mobile view)
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Navigation functions
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-gradient-to-b from-white to-primary-50/30 dark:from-secondary-950 dark:to-primary-950/20" id="testimonials">
      <div className="container-wide">
        {/* Background decorative elements */}
        <div className="absolute left-0 right-0 pointer-events-none">
          <div className="absolute -top-10 left-1/4 text-8xl text-primary-100 dark:text-primary-900 opacity-80 transform -translate-x-1/2 font-serif">"</div>
          <div className="absolute top-20 right-1/4 text-6xl text-primary-100 dark:text-primary-900 opacity-60 transform translate-x-1/3 font-serif">"</div>
        </div>
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block text-primary-600 dark:text-primary-400 font-semibold mb-3">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-secondary-900 dark:text-white mb-6">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            Here's what our customers are saying about their experience with SoftSell
          </p>
        </motion.div>

        {/* Desktop testimonial grid */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
        
        {/* Mobile/tablet testimonial carousel */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            key={currentIndex}
          >
            <TestimonialCard {...testimonials[currentIndex]} featured={true} />
          </motion.div>
          
          {/* Carousel controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentIndex 
                      ? 'bg-primary-600 dark:bg-primary-400 w-6' 
                      : 'bg-secondary-300 dark:bg-secondary-700'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-secondary-200 dark:border-secondary-700 text-secondary-700 dark:text-secondary-400 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <FiArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-secondary-200 dark:border-secondary-700 text-secondary-700 dark:text-secondary-400 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
                aria-label="Next testimonial"
              >
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Customer logos */}
        <div className="mt-20 border-t border-secondary-200 dark:border-secondary-800 pt-16">
          <p className="text-center text-sm uppercase tracking-wider text-secondary-500 dark:text-secondary-400 font-medium mb-8">
            Hundreds of companies trust SoftSell with their software needs
          </p>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { name: "Windows", icon: <BsWindows className="h-8 w-auto dark:invert" /> },
              { name: "Rich Text", icon: <BsFileEarmarkRichtext className="h-8 w-auto dark:invert" /> },
              { name: "Building", icon: <BsBuilding className="h-8 w-auto dark:invert" /> },
              { name: "Database", icon: <BsDatabase className="h-8 w-auto dark:invert" /> },
              { name: "Cloud Check", icon: <BsCloudCheck className="h-8 w-auto dark:invert" /> },
              { name: "Laptop", icon: <BsLaptop className="h-8 w-auto dark:invert" /> }
            ].map((company, i) => (
              <div key={i} className="h-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                {company.icon}
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-block bg-secondary-50 dark:bg-secondary-800/50 px-6 py-2 rounded-full text-secondary-700 dark:text-secondary-300 mb-4">
            Ready to experience it yourself?
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="btn-primary py-3 px-8 text-center">
              Get Started Today
            </a>
            <a href="#" className="btn-secondary py-3 px-8 text-center">
              Read Case Studies
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}