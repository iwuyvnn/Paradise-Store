import { motion } from 'motion/react';
import { ShoppingCart, MessageSquare, ShieldCheck, Zap, Star, LayoutGrid, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6 lg:px-10 overflow-hidden bg-[#050505]">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neutral-500/5 blur-[150px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Section: Hero Content */}
        <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full border-white/5 w-fit mx-auto lg:mx-0"
          >
            <div className="neon-pulse animate-pulse" />
            <span className="text-[10px] uppercase font-black tracking-[0.2em] text-white/70">2,481 Active Customers Online</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-sans font-extrabold leading-[1.1] tracking-tight gradient-text"
          >
            Premium Digital <br />
            <span className="text-white">Products</span> Delivered.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg md:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            Elite marketplace offering Discord Nitro, streaming accounts, and game keys with instant delivery and 24/7 technical support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Link
              to="/shop"
              className="px-8 py-4 bg-white rounded-2xl font-bold text-lg text-black glow-white hover:scale-105 transition-all group flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Shop Collection
            </Link>
            <div className="flex -space-x-3 items-center ml-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-white/5 flex items-center justify-center overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 123}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
              <span className="pl-6 text-sm font-bold text-white/50 tracking-tight">45k+ Members</span>
            </div>
          </motion.div>
        </div>

        {/* Right Section: Bento Grid Visualistion */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4 h-full min-h-[500px]">
          
          {/* Main Card - Big Product */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="glass col-span-2 row-span-2 p-8 flex flex-col justify-between relative overflow-hidden group glow-white"
            style={{ '--glow-color': '#5865F2' } as any}
          >
            <div className="absolute inset-0 bg-[#5865F2]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-40 h-40 text-white" />
            </div>
            <div className="flex justify-between items-start relative z-10">
              <div className="w-16 h-16 bg-[#5865F2]/20 rounded-2xl flex items-center justify-center text-white border border-[#5865F2]/30">
                <LayoutGrid className="w-8 h-8 text-[#5865F2]" />
              </div>
              <span className="px-3 py-1 rounded-full bg-[#5865F2]/20 text-[#5865F2] text-[10px] font-black uppercase tracking-widest border border-[#5865F2]/30">
                Trending
              </span>
            </div>
            <div className="relative z-10 translate-y-4">
              <h3 className="text-3xl font-black text-white mb-2">Discord Nitro</h3>
              <p className="text-white/40 font-medium mb-6">Full features, instant activation, 100% legal.</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-white/40 text-[10px] font-black uppercase tracking-tighter">Starting at</span>
                  <span className="text-4xl font-black text-white">$2.99</span>
                </div>
                <button className="px-6 py-3 bg-[#5865F2] text-white font-black rounded-xl hover:bg-[#4752C4] transition-all glow-[#5865F2]/50 shadow-[0_0_20px_rgba(88,101,242,0.4)]">
                  GET NOW
                </button>
              </div>
            </div>
          </motion.div>

          {/* Stat Card 1 */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.5 }}
             className="glass p-6 flex flex-col items-center justify-center text-center space-y-2 bg-gradient-to-br from-white/5 to-transparent shadow-xl"
          >
            <span className="text-4xl font-black text-white">12k+</span>
            <span className="text-[10px] text-white/40 font-black uppercase tracking-widest leading-none">Successful Sales</span>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.6 }}
             className="glass p-6 flex flex-col items-center justify-center text-center space-y-2"
          >
            <span className="text-4xl font-black text-neutral-400">4.9</span>
            <span className="text-[10px] text-white/40 font-black uppercase tracking-widest leading-none">Trustpilot Rating</span>
          </motion.div>

          {/* Feature Mini Card 1 */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.7 }}
             className="glass p-6 col-span-2 md:col-span-1 flex items-center gap-4 glow-white/10"
          >
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">
               <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black text-white uppercase tracking-tight">Verified</div>
              <div className="text-[10px] text-white/40 leading-none">Legal & Safe</div>
            </div>
          </motion.div>

          {/* Product Mini 1 - Spotify */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.8 }}
             className="glass p-5 flex flex-col justify-between group relative overflow-hidden"
             style={{ '--glow-color': '#1DB954' } as any}
          >
             <div className="absolute inset-0 bg-[#1DB954]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="flex justify-between items-start relative z-10">
               <div className="w-8 h-8 bg-[#1DB954]/20 rounded-lg flex items-center justify-center font-bold text-[#1DB954]">S</div>
               <span className="text-[8px] bg-[#1DB954]/20 text-[#1DB954] px-2 py-0.5 rounded-full font-bold">HOT</span>
             </div>
             <div className="mt-4 relative z-10">
               <h4 className="font-bold text-xs uppercase tracking-tight">Spotify</h4>
               <div className="text-lg font-black">$4.99</div>
             </div>
          </motion.div>

          {/* Product Mini 2 - Netflix */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.9 }}
             className="glass p-5 flex flex-col justify-between group relative overflow-hidden"
             style={{ '--glow-color': '#E50914' } as any}
          >
             <div className="absolute inset-0 bg-[#E50914]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="flex justify-between items-start relative z-10">
               <div className="w-8 h-8 bg-[#E50914]/20 rounded-lg flex items-center justify-center font-bold text-[#E50914]">N</div>
               <span className="text-[8px] bg-[#E50914]/20 text-[#E50914] px-2 py-0.5 rounded-full font-bold">NEW</span>
             </div>
             <div className="mt-4 relative z-10">
               <h4 className="font-bold text-xs uppercase tracking-tight">Netflix</h4>
               <div className="text-lg font-black">$5.99</div>
             </div>
          </motion.div>

           {/* Discord Link Card - Wide */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 1.0 }}
             className="glass col-span-2 p-6 flex items-center justify-between border-white/10"
           >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-neutral-400">
                   <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="text-sm font-black text-white uppercase tracking-tight">The Community</h4>
                   <p className="text-[10px] text-white/40">Giveaways, Support, & Updates</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-white text-black rounded-xl text-[10px] font-black uppercase glow-white hover:bg-neutral-200 transition-all">Join Us</button>
           </motion.div>

        </div>
      </div>
    </section>
  );
}

