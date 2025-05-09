'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiTrendingUp, FiDollarSign, FiShield } from 'react-icons/fi';
import { BsWindows, BsFileEarmarkRichtext, BsBuilding, BsDatabase, BsCloudCheck } from 'react-icons/bs';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 lg:pt-32 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 via-primary-500/5 to-transparent dark:from-primary-900/20 dark:via-primary-900/10 -z-10"></div>
      
      {/* Background blur shapes - purely decorative */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-400/20 dark:bg-secondary-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text content */}
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/40 border border-primary-100 dark:border-primary-700/40 mb-6 text-sm font-medium text-primary-700 dark:text-primary-300">
              <span className="flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              New: Business License Exchange Platform
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-secondary-950 dark:text-white">
              <span className="text-primary-600 dark:text-primary-400">Monetize</span> Your Unused Software Licenses
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-700 dark:text-secondary-300 mb-8 max-w-xl">
              SoftSell helps businesses unlock the value of unused software licenses. Sell what you don't need and buy what you do—at a fraction of retail prices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary py-3 px-8 text-lg"
              >
                Sell Your Licenses
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary py-3 px-8 text-lg"
              >
                Browse Marketplace
              </motion.button>
            </div>
            
            {/* Key benefits */}
            <div className="grid grid-cols-2 gap-4 max-w-xl">
              {[
                { icon: <FiDollarSign />, text: "Save up to 70% on licenses" },
                { icon: <FiCheckCircle />, text: "Verified software authenticity" },
                { icon: <FiTrendingUp />, text: "Maximize ROI on unused assets" },
                { icon: <FiShield />, text: "Secure compliance management" }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-sm sm:text-base text-secondary-800 dark:text-secondary-200"
                >
                  <span className="text-primary-500 flex-shrink-0">
                    {benefit.icon}
                  </span>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Hero illustration/showcase */}
          <motion.div 
            className="relative lg:ml-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="card overflow-visible">
              {/* Discount badge - positioned outside the card */}
              <div className="absolute -top-6 -right-6 z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-600 rounded-full blur-md opacity-30"></div>
                  <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white p-4 rounded-full shadow-xl">
                    <span className="text-xs font-medium uppercase">Save up to</span>
                    <span className="text-2xl font-bold block">70%</span>
                  </div>
                </div>
              </div>
              
              {/* Card header */}
              <div className="p-5 border-b border-secondary-100 dark:border-secondary-800">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Software Marketplace</h3>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
              </div>
              
              {/* Card content */}
              <div className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { name: "Adobe Creative Cloud", price: "$29.99", discount: "70% off" },
                    { name: "Microsoft 365", price: "$4.99", discount: "65% off" },
                    { name: "Salesforce License", price: "$79.99", discount: "55% off" },
                    { name: "Figma Enterprise", price: "$11.99", discount: "60% off" },
                    { name: "Slack Premium", price: "$5.99", discount: "50% off" },
                    { name: "Zoom Pro Account", price: "$7.49", discount: "55% off" }
                  ].map((item, i) => (
                    <div key={i} className="bg-secondary-50 dark:bg-secondary-800/50 p-3.5 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <div className="h-8 w-8 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-700 rounded-md flex items-center justify-center text-primary-700 dark:text-primary-300 text-xs">
                          {item.name.split(' ').map(word => word[0]).join('')}
                        </div>
                        <div className="text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded">
                          {item.discount}
                        </div>
                      </div>
                      <div className="text-sm font-medium text-secondary-900 dark:text-secondary-100 mb-1 truncate">
                        {item.name}
                      </div>
                      <div className="text-sm text-primary-600 dark:text-primary-400 font-bold">
                        {item.price}<span className="text-xs text-secondary-500 dark:text-secondary-400 font-normal">/mo</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Card footer with action button */}
                <div className="mt-6 pt-4 border-t border-secondary-100 dark:border-secondary-800 flex justify-between items-center">
                  <div>
                    <div className="text-xs text-secondary-500 dark:text-secondary-400">Average savings</div>
                    <div className="text-lg font-bold text-primary-600 dark:text-primary-400">60% off retail</div>
                  </div>
                  <button className="btn-primary text-sm py-2 px-4">
                    View All Listings
                  </button>
                </div>
              </div>
            </div>
            
            {/* Floating notification - adds dynamic feel */}
            <motion.div 
              className="absolute -bottom-6 -left-6 shadow-xl rounded-lg max-w-[240px] z-20 glass"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">✓</div>
                  <div>
                    <div className="text-sm font-medium text-secondary-900 dark:text-white">License Sold!</div>
                    <div className="text-xs text-secondary-600 dark:text-secondary-400">2 minutes ago</div>
                  </div>
                </div>
                <p className="text-xs text-secondary-700 dark:text-secondary-300">
                  "<span className="font-medium">Adobe Creative Cloud</span>" license sold for <span className="font-medium">$349.99</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Trusted by logos */}
        <motion.div 
          className="mt-20 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-center text-sm uppercase tracking-wider text-secondary-500 dark:text-secondary-400 font-medium mb-7">
            Trusted by leading companies worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {[
              { name: "Windows", icon: <BsWindows size={40} className="text-secondary-500 dark:text-secondary-400" /> },
              { name: "Rich Text", icon: <BsFileEarmarkRichtext size={40} className="text-secondary-500 dark:text-secondary-400" /> },
              { name: "Building", icon: <BsBuilding size={40} className="text-secondary-500 dark:text-secondary-400" /> },
              { name: "Database", icon: <BsDatabase size={40} className="text-secondary-500 dark:text-secondary-400" /> },
              { name: "Cloud Check", icon: <BsCloudCheck size={40} className="text-secondary-500 dark:text-secondary-400" /> }
            ].map((company, i) => (
              <div key={i} className="h-8 opacity-70 hover:opacity-100 transition-opacity">
                {company.icon}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}