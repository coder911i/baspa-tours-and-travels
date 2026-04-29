'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-background flex flex-col items-center justify-center"
        >
          <div className="relative w-32 h-32 mb-8">
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1 }}
               className="w-full h-full border-b-2 border-gold flex items-end justify-center"
             >
                <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-gold mb-[-1px]" />
             </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h2 className="font-display text-2xl text-snow tracking-widest uppercase mb-2">Baspa Travels</h2>
            <p className="text-gold text-[10px] uppercase tracking-[0.4em]">Ascending...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
