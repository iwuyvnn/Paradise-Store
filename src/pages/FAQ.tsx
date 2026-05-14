import { motion } from 'motion/react';
import FAQSection from '../components/home/FAQSection';
import { HelpCircle, MessageSquare } from 'lucide-react';

export default function FAQ() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-black min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center py-20 bg-brand-primary/5 rounded-[3rem] border border-white/5 mb-20 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="relative z-10 space-y-6"
           >
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight">Need <span className="text-gradient">Help?</span></h1>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Got questions? We've got answers. If you can't find what you're looking for, join our discord for 24/7 assistance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                 <button className="px-8 py-4 bg-brand-primary text-black font-bold rounded-xl glow-white hover:scale-105 transition-all flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Open Support Ticket
                 </button>
                 <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                    Email Contact
                 </button>
              </div>
           </motion.div>
        </div>

        <FAQSection />

        <div className="mt-20 glass p-12 rounded-[3rem] border border-white/5 text-center space-y-6">
           <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto">
              <HelpCircle className="w-8 h-8 text-brand-primary" />
           </div>
           <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Still have questions?</h3>
              <p className="text-gray-400">Our team is always ready to help you with any issues or inquiries.</p>
           </div>
           <button className="text-brand-primary font-bold hover:underline">
              Contact our sales team &rarr;
           </button>
        </div>
      </div>
    </motion.div>
  );
}
