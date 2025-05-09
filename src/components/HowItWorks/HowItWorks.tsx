'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MdFileUpload, MdSwapHoriz } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

// Component for each step in the process
const Step = ({ 
  number, 
  title, 
  description, 
  icon,
  delay 
}: { 
  number: number, 
  title: string, 
  description: string, 
  icon: React.ReactNode,
  delay: number 
}) => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Connector line between steps (only for desktop) */}
      {number < 3 && (
        <div className="absolute hidden md:block h-0.5 bg-primary-100 dark:bg-primary-700/30 top-24 left-1/2 w-full z-0" />
      )}
      
      <div className="bg-blue-50/80 dark:bg-secondary-900/60 backdrop-blur-sm rounded-3xl p-8 pb-10 relative z-10 overflow-hidden h-full flex flex-col items-center shadow-sm">
        {/* Step number indicator */}
        <div className="bg-primary-500 dark:bg-primary-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-primary-500/20 dark:shadow-primary-600/30">
          {number}
        </div>
        
        {/* Icon */}
        <div className="text-primary-500 dark:text-primary-400 mb-6">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
          {title}
        </h3>
        
        <p className="text-secondary-600 dark:text-secondary-300 text-center">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white dark:bg-secondary-950" id="how-it-works">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-secondary-900 dark:text-white mb-5">
            How SoftSell Works
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            Our platform makes it simple to buy and sell software licenses in just three easy steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 max-w-5xl mx-auto mb-24">
          <Step 
            number={1} 
            title="List Your License"
            description="Create an account and list your unused software licenses with just a few clicks. Provide details like purchase date and remaining seats."
            icon={
              <MdFileUpload className="w-12 h-12" />
            }
            delay={0.1}
          />

          <Step 
            number={2} 
            title="Get Verified"
            description="Our verification team ensures all licenses are legitimate and transferable. This process typically takes less than 24 hours."
            icon={
              <FaCheckCircle className="w-12 h-12" />
            }
            delay={0.2}
          />

          <Step 
            number={3} 
            title="Complete the Transfer"
            description="Once sold, our secure transfer system guides both parties through the license transfer process, including payment processing and documentation."
            icon={
              <MdSwapHoriz className="w-12 h-12" />
            }
            delay={0.3}
          />
        </div>

        {/* Call to action and stats */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 rounded-2xl p-8 md:p-12 shadow-xl shadow-primary-600/20 dark:shadow-primary-900/30">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                Ready to maximize the value of your software investments?
              </motion.h3>
              <motion.p 
                className="text-primary-100 mb-8 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                Join thousands of businesses already buying and selling on SoftSell. Get started in minutes.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <button className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium text-lg shadow-lg shadow-primary-900/20 transition-all duration-200">
                  Start Selling Today
                </button>
                <button className="bg-primary-800/30 hover:bg-primary-800/50 backdrop-blur-sm text-white border border-primary-400/30 px-8 py-3 rounded-lg font-medium text-lg transition-all duration-200">
                  Browse Marketplace
                </button>
              </motion.div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-6">
              {[
                { value: "$2.4M", label: "Licenses Sold" },
                { value: "94%", label: "Customer Satisfaction" },
                { value: "3,200+", label: "Active Users" },
                { value: "~6hrs", label: "Avg. Verification Time" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-primary-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}