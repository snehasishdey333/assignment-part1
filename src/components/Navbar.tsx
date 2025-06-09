'use client';

import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const menuItems = [
    'SAP Talent Cloud',
    'Enterprise Talent Cloud', 
    'AI-Powered Vetting',
    'Tech Talent Solutions',
    'About Us'
  ];


  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-indigo-900">
              SkillsCapital
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-3">
            {menuItems.map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <div
                  className="flex items-center text-gray-700 hover:text-indigo-900 px-3 py-2 text-sm font-bold transition-colors duration-200"
                >
                  {item}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </div>
             
              </div>
            ))}
          </div>

          {/* Find Talent Button */}
          <div className="hidden lg:block">
            <button className="flex items-center text-gray-900 px-3 py-1 text-sm font-semibold border border-gray-300 rounded-4xl">
              Find Talent
              <div className='flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 h-8 w-8 ml-2'>
              <ArrowRight className="h-4 w-4 text-black" />
              </div>
              
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 text-gray-700 hover:text-indigo-900"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            {menuItems.map((item) => (
              <div key={item} className="flex items-center space-x-2">
              <div
                className="flex items-center text-gray-700 hover:text-indigo-900 px-3 py-2 text-sm font-bold transition-colors duration-200"
              >
                {item}
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>
           
            </div>
            ))}
            
            <div className="px-4 pt-4">
              <button className="w-full flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-5 py-3 rounded-full font-semibold">
                Find Talent
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;