import React from 'react';

interface BannerProps {
  title: string;
  className?: string;
}

export const Banner: React.FC<BannerProps> = ({ title, className = "" }) => {
  return (
    <div className={`relative flex justify-center items-center py-6 px-4 ${className}`}>
      {/* Banner Background Shape */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <svg
          viewBox="0 0 500 120"
          fill="none"
          preserveAspectRatio="none"
          className="w-full max-w-3xl h-full drop-shadow-lg"
        >
          {/* Main banner body */}
          <path
            d="M20 20 H480 L460 60 L480 100 H20 L40 60 L20 20 Z"
            fill="#ee7760"
            stroke="#1b4f4d"
            strokeWidth="3"
          />
          {/* Folds/Shadows for depth */}
          <path d="M20 20 L40 60 L20 100" fill="none" stroke="#1b4f4d" strokeWidth="2" opacity="0.3" />
          <path d="M480 20 L460 60 L480 100" fill="none" stroke="#1b4f4d" strokeWidth="2" opacity="0.3" />
        </svg>
      </div>
      
      {/* Text */}
      <h1 className="relative z-10 font-hand text-3xl md:text-5xl text-teal-900 font-bold text-center px-8 transform -rotate-1 drop-shadow-sm">
        {title}
      </h1>
    </div>
  );
};