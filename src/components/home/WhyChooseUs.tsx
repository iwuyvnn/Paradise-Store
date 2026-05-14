import { motion } from 'motion/react';
import { ShieldCheck, Zap, Clock, Headphones, Award, CreditCard, LayoutGrid } from 'lucide-react';
import { cn } from '../../lib/utils';

const FEATURES = [
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "Our proprietary automation system ensures you receive your goods seconds after the transaction is verified.",
    color: "brand-purple",
    className: "lg:col-span-2 lg:row-span-1"
  },
  {
    icon: Award,
    title: "Elite Warranty",
    description: "Every product is backed by our signature lifetime warranty policy.",
    color: "brand-secondary",
    className: "lg:col-span-1 lg:row-span-1"
  },
  {
    icon: ShieldCheck,
    title: "Verified Safe",
    description: "We only source from premium, legal suppliers to guarantee 0% ban rates.",
    color: "green-500",
    className: "lg:col-span-1 lg:row-span-1"
  },
  {
    icon: Headphones,
    title: "24/7 Experts",
    description: "Real human experts available around the clock to provide technical assistance and answer your queries.",
    color: "brand-purple",
    className: "lg:col-span-2 lg:row-span-1"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 px-6 lg:px-10 relative overflow-hidden bg-[#050505]">
       {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neutral-400/5 blur-[150px] -z-10" />

      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full border-white/5 mx-auto"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">The Paradise Advantage</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-sans font-extrabold text-white tracking-tight leading-tight uppercase"
          >
            Engineered for <span className="text-white italic">Reliability.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 font-medium text-lg max-w-2xl mx-auto"
          >
            We've redefined the digital marketplace with a focus on speed, safety, and a user experience that prioritizes your peace of mind.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "glass p-10 relative group hover:bg-white/[0.04] transition-all overflow-hidden",
                feature.className
              )}
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                 <feature.icon className="w-32 h-32" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-white group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight uppercase">{feature.title}</h3>
                <p className="text-white/40 font-medium text-base leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
              
              <div className="mt-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                 <div className="w-1 h-1 rounded-full bg-white" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Paradise Premium Service</span>
              </div>
            </motion.div>
          ))}
          
          {/* Final Promo Card */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="glass p-10 lg:col-span-1 lg:row-span-1 bg-white flex flex-col justify-between group cursor-pointer active:scale-95 transition-all glow-white"
          >
             <h3 className="text-3xl font-black text-black uppercase tracking-tight leading-none">Ready to <br/> Upgrade?</h3>
             <div className="flex items-center justify-between mt-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-black/50">View Store</span>
                <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center group-hover:translate-x-2 transition-transform">
                   <Zap className="w-6 h-6 fill-white" />
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

