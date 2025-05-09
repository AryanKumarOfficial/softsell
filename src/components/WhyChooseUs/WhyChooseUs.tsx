'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsCash, BsShieldCheck, BsClock, BsChatDots } from 'react-icons/bs';
import { FaChevronRight, FaArrowUp, FaArrowDown, FaCheck } from 'react-icons/fa';

// Benefit card component
const BenefitCard = ({ 
  icon, 
  title, 
  description,
  delay
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  delay: number
}) => {
  return (
    <motion.div 
      className="card card-hover h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
    >
      <div className="p-6 sm:p-8 flex flex-col h-full">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 p-4 rounded-xl mb-5 w-16 h-16 flex items-center justify-center text-primary-600 dark:text-primary-400">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">{title}</h3>
        <p className="text-secondary-600 dark:text-secondary-400 mb-4">{description}</p>
        <div className="mt-auto">
          <a href="#" className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300">
            Learn more
            <FaChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function WhyChooseUs() {
  return (
    <section className="section bg-secondary-50 dark:bg-secondary-900/50 relative overflow-hidden" id="why-choose-us">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-300/20 to-primary-500/0 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-secondary-300/20 dark:from-secondary-700/20 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block text-primary-600 dark:text-primary-400 font-semibold mb-3">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-secondary-900 dark:text-white mb-6">
              We're Revolutionizing Software Asset Management
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-8">
              Our platform enables businesses of all sizes to optimize their software costs and extract value from unused licenses, creating a win-win marketplace for buyers and sellers.
            </p>
            <div className="flex flex-col sm:flex-row gap-y-4 gap-x-8">
              {[
                { value: '70%', label: 'Average Savings' },
                { value: '12,000+', label: 'Successful Transfers' },
                { value: '100%', label: 'Secure Transactions' }
              ].map((stat, i) => (
                <div key={i} className="flex items-baseline">
                  <span className="text-3xl font-bold text-primary-600 dark:text-primary-400 mr-2">{stat.value}</span>
                  <span className="text-secondary-600 dark:text-secondary-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Image/illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:ml-auto"
          >
            <div className="relative">
              {/* This would ideally be your custom image */}
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-secondary-900/10 dark:shadow-secondary-900/20 border border-secondary-200/50 dark:border-secondary-700/50 aspect-[4/3]">
                <div className="bg-gradient-to-br from-secondary-100 to-primary-50 dark:from-secondary-800 dark:to-primary-900/30 w-full h-full relative">
                  {/* Placeholder for your actual image/chart */}
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-6">
                    <div className="card bg-white dark:bg-secondary-800 p-4 flex flex-col">
                      <div className="text-xs text-secondary-500 dark:text-secondary-400 mb-1">Total Savings</div>
                      <div className="text-xl font-bold text-secondary-900 dark:text-white">$1.2M+</div>
                      <div className="mt-auto pt-3 flex items-center text-green-600 text-sm font-medium">
                        <FaArrowUp className="w-4 h-4 mr-1" />
                        24.5% increase
                      </div>
                    </div>
                    <div className="card bg-white dark:bg-secondary-800 p-4">
                      <div className="text-xs text-secondary-500 dark:text-secondary-400 mb-1">Verified Businesses</div>
                      <div className="text-xl font-bold text-secondary-900 dark:text-white">3,482</div>
                      <div className="mt-2 w-full bg-secondary-100 dark:bg-secondary-700 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div className="card bg-white dark:bg-secondary-800 p-4">
                      <div className="text-xs text-secondary-500 dark:text-secondary-400 mb-1">Success Rate</div>
                      <div className="font-bold text-secondary-900 dark:text-white flex items-baseline">
                        <span className="text-xl">98.7%</span>
                        <span className="ml-1 text-xs text-green-600">↑2.1%</span>
                      </div>
                      <div className="flex space-x-1 mt-2">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="text-amber-400">★</div>
                        ))}
                      </div>
                    </div>
                    <div className="card bg-white dark:bg-secondary-800 p-4">
                      <div className="text-xs text-secondary-500 dark:text-secondary-400 mb-1">Avg. Response Time</div>
                      <div className="text-xl font-bold text-secondary-900 dark:text-white">6 hrs</div>
                      <div className="mt-auto pt-3 flex items-center text-green-600 text-sm font-medium">
                        <FaArrowDown className="w-4 h-4 mr-1" />
                        30% faster
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating element */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-secondary-800 rounded-lg p-4 shadow-lg border border-secondary-100 dark:border-secondary-700 max-w-[180px]">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-500 rounded-full flex items-center justify-center mr-3">
                    <FaCheck className="h-5 w-5" />
                  </div>
                  <div className="font-medium text-secondary-900 dark:text-white">SOC 2 Compliant</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard 
            icon={<BsCash className="w-8 h-8" />} 
            title="Save Up to 70% on Software"
            description="Purchase verified pre-owned licenses at a fraction of retail prices, helping you optimize your IT budget significantly."
            delay={0.1}
          />
          <BenefitCard 
            icon={<BsShieldCheck className="w-8 h-8" />} 
            title="100% Secure Transfers"
            description="Our escrow system and verification team ensure legitimate licenses and secure transfers, giving you complete peace of mind."
            delay={0.2}
          />
          <BenefitCard 
            icon={<BsClock className="w-8 h-8" />} 
            title="Quick Turnaround"
            description="Most licenses are verified within 24 hours and transfers completed within 48 hours, getting you up and running in no time."
            delay={0.3}
          />
          <BenefitCard 
            icon={<BsChatDots className="w-8 h-8" />} 
            title="Dedicated Support"
            description="Our experienced support team is available to assist you throughout the entire process, from listing to transfer completion."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}