import { motion } from 'motion/react';
import { Megaphone, X } from 'lucide-react';
import { useState } from 'react';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[100] px-4 py-2"
    >
      <div className="max-w-4xl mx-auto glass border border-white/20 rounded-full px-6 py-2 flex items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="bg-white p-1.5 rounded-full">
            <Megaphone className="w-4 h-4 text-black" />
          </div>
          <p className="text-xs md:text-sm font-bold text-white tracking-tight uppercase">
            <span className="italic">FLASH SALE:</span> Get 20% off on all Discord Nitro packages. Use code <span className="bg-white/10 px-2 py-0.5 rounded text-white italic">PARADISE20</span>
          </p>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-white/40 hover:text-white transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
