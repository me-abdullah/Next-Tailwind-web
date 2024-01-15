"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorProps {
  scaling: boolean;
}

const Cursor: React.FC<CursorProps> = ({ scaling }) => {
  const [largecircle, setLargecircle] = useState({ x: 0, y: 0 });
  const [smallcircle, setSmallcircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e: MouseEvent) => {
      setLargecircle({ x: e.clientX, y: e.clientY });
      setSmallcircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mousemove);

    return () => {
      window.removeEventListener('mousemove', mousemove);
    };
  }, []);

  return (
    <div>
      <motion.div
        animate={{
          x: largecircle.x - 32,
          y: largecircle.y - 32,
          transition: { type: 'spring', mass: 3 },
        }}
        className="large_circle"
        style={{ scale: scaling ? 0.1 : 1 }}
      ></motion.div>
      <motion.div
        animate={{
          x: smallcircle.x - 8,
          y: smallcircle.y - 8,
          transition: { type: 'spring', mass: 2 },
        }}
        className="small_circle"
      ></motion.div>
    </div>
  );
};

export default Cursor;
