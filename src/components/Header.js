import React, { useState } from 'react';
import { Menu, X, ChevronDown, Star } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-2xl font-bold text-brand-dark">Sargas</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button 
                className="flex items-center space-x-1 text-brand-dark hover:text-brand-blue transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <a href="#web-dev" className="block px-4 py-2 text-sm text-brand-dark hover:bg-gray-50">Web Development</a>
                  <a href="#mobile-dev" className="block px-4 py-2 text-sm text-brand-dark hover:bg-gray-50">Mobile Development</a>
                  <a href="#support" className="block px-4 py-2 text-sm text-brand-dark hover:bg-gray-50">Support and Maintenance</a>
                </div>
              )}
            </div>
            <a href="#portfolio" className="text-brand-dark hover:text-brand-blue transition-colors">Portfolio</a>
            <a href="#about" className="text-brand-dark hover:text-brand-blue transition-colors">About</a>
            <a href="#contacts" className="text-brand-dark hover:text-brand-blue transition-colors">Contacts</a>
          </nav>

          {/* Rating and CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-brand-dark text-white px-3 py-2 rounded-lg">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-brand-dark font-bold text-xs">C</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-bold">4.9</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <span className="text-xs text-brand-gray">Based on 6 Clutch reviews</span>
            <button className="btn-primary">Book a Call</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mobile-menu border-t">
          <div className="container-custom py-4">
            <div className="flex flex-col space-y-4">
              <div>
                <h3 className="font-semibold text-brand-dark mb-2">Menu</h3>
                <div className="space-y-2">
                  <a href="#case-studies" className="block text-brand-gray hover:text-brand-blue">Case Studies</a>
                  <a href="#blog" className="block text-brand-gray hover:text-brand-blue">Blog</a>
                  <a href="#contacts" className="block text-brand-gray hover:text-brand-blue">Contacts</a>
                  <a href="#about" className="block text-brand-gray hover:text-brand-blue">About Us</a>
                  <a href="#faq" className="block text-brand-gray hover:text-brand-blue">FAQ</a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-brand-dark mb-2">Services</h3>
                <div className="space-y-2">
                  <a href="#web-dev" className="block text-brand-gray hover:text-brand-blue">Web Development</a>
                  <a href="#mobile-dev" className="block text-brand-gray hover:text-brand-blue">Mobile Development</a>
                  <a href="#support" className="block text-brand-gray hover:text-brand-blue">Support and Maintenance</a>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-sm text-brand-gray mb-2">Feel free to drop us a note:</p>
                <p className="text-sm font-medium text-brand-dark">contact@sargas.io</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;