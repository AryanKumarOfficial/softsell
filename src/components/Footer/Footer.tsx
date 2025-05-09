'use client';

import React from 'react';
import Link from 'next/link';
import { BsLaptop } from 'react-icons/bs';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Footer link sections
  const footerLinks = [
    {
      title: 'Solutions',
      links: [
        { label: 'Enterprise Software', href: '#' },
        { label: 'Productivity Suites', href: '#' },
        { label: 'Creative Tools', href: '#' },
        { label: 'Development Tools', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Press', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'License Guide', href: '#' },
        { label: 'FAQs', href: '#' },
        { label: 'Contact Support', href: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Compliance', href: '#' },
        { label: 'Security', href: '#' },
      ]
    },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center mb-5">
              <span className="h-8 w-8 bg-primary-600 rounded-md flex items-center justify-center mr-2">
                <BsLaptop className="w-5 h-5 text-white" />
              </span>
              <span className="text-xl font-bold text-white">SoftSell</span>
            </Link>
            <p className="text-secondary-300 mb-4 max-w-xs">
              The marketplace for buying and selling software licenses at unbeatable prices.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="mt-4 md:mt-0">
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-secondary-300 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-secondary-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-secondary-400">
              &copy; {currentYear} SoftSell, Inc. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <img
                className="h-12"
                src="https://via.placeholder.com/240x48?text=Payment+Methods"
                alt="Payment methods"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}