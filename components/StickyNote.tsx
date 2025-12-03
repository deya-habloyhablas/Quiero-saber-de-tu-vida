import React from 'react';
import { Pin } from 'lucide-react';

interface StickyNoteProps {
  text: string;
  rotation?: number;
}

export const StickyNote: React.FC<StickyNoteProps> = ({ text, rotation = 0 }) => {
  return (
    <div 
      className="relative bg-yellow-400 w-64 h-64 p-8 flex items-center justify-center paper-shadow transition-transform duration-300 hover:scale-105"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Pushpin */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-teal-900 drop-shadow-md z-20">
        <Pin size={40} fill="#ee7760" stroke="#1b4f4d" strokeWidth={2.5} />
      </div>

      {/* Tape/Pin Shadow effect (optional visual flair) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/20 rounded-full blur-sm -z-10"></div>

      {/* Content */}
      <p className="font-sans text-3xl font-bold text-teal-900 text-center leading-tight">
        {text}
      </p>
    </div>
  );
};