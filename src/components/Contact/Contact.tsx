'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

type FormData = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  company?: string;
  licenseType?: string;
  message?: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error on field change
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Validate form fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call with timeout
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1000);
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-secondary-800" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Contact information */}
          <motion.div 
            className="mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-secondary-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
              Have questions about buying or selling software licenses? 
              Our team is here to help you navigate the process.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MdEmail className="w-6 h-6 text-primary-500 dark:text-primary-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-secondary-900 dark:text-white">Email</p>
                  <a href="mailto:info@softsell.com" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400">
                    info@softsell.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MdPhone className="w-6 h-6 text-primary-500 dark:text-primary-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-secondary-900 dark:text-white">Phone</p>
                  <a href="tel:+1-800-555-0123" className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400">
                    +1 (800) 555-0123
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MdLocationOn className="w-6 h-6 text-primary-500 dark:text-primary-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-secondary-900 dark:text-white">Location</p>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    123 Tech Park Way<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-secondary-800 shadow-xl rounded-xl p-8 border border-gray-100 dark:border-secondary-700">
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                Send us a message
              </h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    {/* Name field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-secondary-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-secondary-700 dark:text-white`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>
                      )}
                    </div>
                    
                    {/* Email field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-secondary-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-secondary-700 dark:text-white`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>
                      )}
                    </div>
                    
                    {/* Company field */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                        Company <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.company ? 'border-red-500' : 'border-gray-300 dark:border-secondary-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-secondary-700 dark:text-white`}
                        placeholder="Acme Inc."
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.company}</p>
                      )}
                    </div>
                    
                    {/* License Type dropdown */}
                    <div>
                      <label htmlFor="licenseType" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                        License Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="licenseType"
                        name="licenseType"
                        value={formData.licenseType}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.licenseType ? 'border-red-500' : 'border-gray-300 dark:border-secondary-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-secondary-700 dark:text-white`}
                      >
                        <option value="">Select a license type</option>
                        <option value="enterprise">Enterprise Software</option>
                        <option value="productivity">Productivity Suite</option>
                        <option value="security">Security Solutions</option>
                        <option value="cloud">Cloud Services</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.licenseType && (
                        <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.licenseType}</p>
                      )}
                    </div>
                    
                    {/* Message field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-secondary-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-secondary-700 dark:text-white`}
                        placeholder="How can we help you?"
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>
                      )}
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium text-lg shadow-md transition-colors disabled:opacity-70"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}