import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-2xl font-bold text-brand-dark">Sargas</span>
            </div>
            <p className="text-brand-gray max-w-md">
              AI-powered web and mobile development solutions delivered in 12 weeks. 
              We help businesses transform their ideas into reality.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-brand-dark mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#services" className="block text-brand-gray hover:text-brand-blue transition-colors">Services</a>
              <a href="#portfolio" className="block text-brand-gray hover:text-brand-blue transition-colors">Portfolio</a>
              <a href="#about" className="block text-brand-gray hover:text-brand-blue transition-colors">About</a>
              <a href="#contact" className="block text-brand-gray hover:text-brand-blue transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-brand-dark mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-brand-gray">contact@sargas.io</p>
              <p className="text-brand-gray">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-gray text-sm">
            © 2024 Sargas. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-brand-gray hover:text-brand-blue text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-brand-gray hover:text-brand-blue text-sm transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;