import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Zap } from 'lucide-react';

const NAMES = ['Zenix', 'Kaelo', 'Elite', 'Shadow', 'Frost', 'Neon', 'Alpha', 'Ghost'];
const PRODUCTS = ['Discord Nitro', 'Netflix Premium', 'Spotify Premium', 'Game Pass', 'Valorant Points'];

export default function SocialProof() {
  const [purchase, setPurchase] = useState<any>(null);

  useEffect(() => {
    const showNotification = () => {
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const product = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
      setPurchase({ name, product });

      setTimeout(() => setPurchase(null), 5000);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        showNotification();
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-[100] pointer-events-none">
      <AnimatePresence>
        {purchase && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            className="glass-neutral p-4 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-4 max-w-xs pointer-events-auto glow-neutral"
          >
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shrink-0">
               <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
               <div className="text-[10px] text-brand-primary font-bold uppercase tracking-widest flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-brand-primary" />
                  Live Purchase
               </div>
               <div className="text-sm font-bold text-white leading-tight">
                 {purchase.name} just bought <span className="text-brand-primary">{purchase.product}</span>
               </div>
               <div className="text-[10px] text-gray-500 mt-1">Verified via Discord</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
