import React from 'react';
import { X } from 'lucide-react';

const CookieConsent = ({ onClose }) => {
  const handleAccept = () => {
    onClose();
  };

  const handleDeny = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="cookie-modal rounded-2xl p-8 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-gray hover:text-brand-dark"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h3 className="text-xl font-bold text-brand-dark mb-4">
          This site uses cookies
        </h3>
        
        <p className="text-brand-gray mb-4 text-sm leading-relaxed">
          We and selected third parties use cookies (or similar technologies) for 
          technical purposes, to enhance and analyze site usage, to support our 
          marketing efforts, and for other purposes described below.
        </p>
        
        <p className="text-brand-gray mb-6 text-sm leading-relaxed">
          By clicking "Accept all", you agree to the storing of cookies on your 
          device for these purposes.
        </p>
        
        <div className="flex space-x-3">
          <button 
            onClick={handleDeny}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-brand-dark hover:bg-gray-50 transition-colors"
          >
            Deny
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 btn-secondary"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;