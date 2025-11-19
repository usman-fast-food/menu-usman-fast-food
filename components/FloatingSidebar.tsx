'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FloatingSidebarProps {
  onVisibilityChange?: (isVisible: boolean) => void;
}

export default function FloatingSidebar({ onVisibilityChange }: FloatingSidebarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  const categories = [
    { id: 'pizzas', icon: '🍕', name: 'Pizzas' },
    { id: 'burgers', icon: '🍔', name: 'Burgers' },
    { id: 'wraps', icon: '🌯', name: 'Wraps' },
    { id: 'sandwiches', icon: '🥪', name: 'Sandwiches' },
    { id: 'pasta', icon: '🍝', name: 'Pasta' },
    { id: 'hot-corner', icon: '🔥', name: 'Hot Corner' },
    { id: 'bbq', icon: '🍢', name: 'BBQ' },
    { id: 'deals', icon: '🎁', name: 'Deals' },
  ];

  useEffect(() => {
    if (onVisibilityChange) {
      onVisibilityChange(isVisible);
    }
  }, [isVisible, onVisibilityChange]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map(cat => ({
        id: cat.id,
        element: document.getElementById(cat.id)
      }));

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* Toggle Button - Only visible on mobile/tablet */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-1/2 -translate-y-1/2 z-50 bg-yellow-400 text-black shadow-xl transition-all duration-300 md:hidden ${
          isVisible 
            ? 'left-[60px] p-2 rounded-r-lg' 
            : 'left-0 p-2.5 rounded-r-xl'
        }`}
        aria-label={isVisible ? 'Hide sidebar' : 'Show sidebar'}
      >
        {isVisible ? <ChevronLeft size={16} /> : <ChevronRight size={18} />}
      </button>

      {/* Floating Sidebar - Only visible on mobile/tablet */}
      <div
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 transition-transform duration-300 md:hidden ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-md rounded-r-xl shadow-2xl p-1.5 space-y-1.5 border-r-2 border-yellow-400">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToSection(cat.id)}
              className={`group relative flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-200 ${
                activeSection === cat.id
                  ? 'bg-yellow-400 text-black scale-105 shadow-lg'
                  : 'bg-gray-800 hover:bg-yellow-400 hover:text-black text-white hover:scale-105'
              }`}
              aria-label={`Go to ${cat.name}`}
            >
              <span className="text-xl leading-none">{cat.icon}</span>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-2 px-2.5 py-1.5 bg-black text-white text-xs font-bold rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-xl z-50">
                {cat.name}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-[5px] border-transparent border-r-black"></div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}