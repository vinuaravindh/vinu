// components/CursorGlow.tsx

"use client";

import { useState, useEffect } from 'react';

const CursorGlow = () => {
  // 1. State to store the mouse position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // 2. Effect to track mouse movement (this logic stays the same)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this runs once on mount

  // 3. The new glow element
  return (
    <div 
      className="
        pointer-events-none 
        fixed inset-0 z-30 
        transition duration-300
        hidden md:block
      "
      style={{
        // Use the dynamic style from the example
        background: `radial-gradient(
          600px at ${position.x}px ${position.y}px, 
          rgba(29, 78, 216, 0.15), 
          transparent 80%
        )`
      }}
    />
  );
};

export default CursorGlow;