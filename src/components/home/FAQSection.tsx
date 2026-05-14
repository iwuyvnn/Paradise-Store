import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../../constants';
import { cn } from '../../lib/utils';

export default function FAQSection() {
  return (
    <section className="py-32 px-6 lg:px-10 bg-[#050505] relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[150px] rounded-full pointer-events-none -z-10" />

       <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full border-white/5 mx-auto"
          >
            <HelpCircle className="w-4 h-4 text-white" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">Support Center</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-sans font-extrabold text-white tracking-tight leading-tight"
          >
            Your <span className="text-white italic">Questions,</span> Answered.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 font-medium text-lg max-w-xl mx-auto"
          >
            Quick answers to common questions about our digital products and delivery process.
          </motion.p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
           className="mt-16 glass p-8 text-center glow-white flex flex-col items-center gap-6"
        >
           <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white">
              <MessageCircle className="w-8 h-8" />
           </div>
           <div>
              <h4 className="text-xl font-black text-white uppercase tracking-tight">Still have questions?</h4>
              <p className="text-white/40 font-medium text-sm mt-1">Our elite support team is available 24/7 via Discord.</p>
           </div>
           <button className="px-8 py-3 bg-white text-black rounded-xl font-black uppercase tracking-widest text-xs glow-white transform active:scale-95 transition-all">
              Chat With Us
           </button>
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index }: { faq: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        "glass border transition-all duration-500",
        isOpen ? "border-white/20 bg-white/[0.06] glow-white shadow-xl" : "border-white/5 hover:bg-white/[0.04]"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-8 text-left group"
      >
        <span className={cn(
          "text-xl font-black uppercase tracking-tighter transition-colors",
          isOpen ? "text-white" : "text-white/80 group-hover:text-white"
        )}>{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "anticipate" }}
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
            isOpen ? "bg-white text-black" : "bg-white/5 text-white/40 group-hover:text-white/80"
          )}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "anticipate" }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 pt-0">
               <div className="h-px w-full bg-white/5 mb-6" />
               <p className="text-white/50 font-medium text-lg leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

