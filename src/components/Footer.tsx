import { Link } from 'react-router-dom';
import { Zap, MessageSquare, Twitter, Instagram, Github, Mail, ShieldCheck, Globe, Clock } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      {/* Top Footer Section */}
      <div className="max-w-[1600px] mx-auto px-10 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-8">
           <Link to="/" className="flex items-center gap-3 active:scale-95 transition-transform group">
            <div className="w-10 h-10 bg-gradient-to-br from-white to-neutral-400 rounded-xl flex items-center justify-center glow-white">
              <span className="font-black text-black italic text-xl">P</span>
            </div>
            <span className="text-xl font-sans font-extrabold tracking-tighter uppercase">
              Paradise <span className="text-white">Store</span>
            </span>
          </Link>
          <p className="text-white/40 font-medium text-sm leading-relaxed max-w-sm">
            The world's leading marketplace for premium digital assets. We provide elite services with a focus on speed, security, and lifetime reliability.
          </p>
          <div className="flex items-center gap-3">
             <a href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all">
               <Twitter className="w-5 h-5" />
             </a>
             <a href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all">
               <FaDiscord className="w-5 h-5" />
             </a>
             <a href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all">
               <Instagram className="w-5 h-5" />
             </a>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
           <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Marketplace</h4>
           <ul className="space-y-3 text-sm font-bold text-white/40 uppercase tracking-tighter">
              <li><Link to="/shop" className="hover:text-white transition-colors">Store</Link></li>
              <li><Link to="/games" className="hover:text-white transition-colors">Games</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
           </ul>
        </div>

        <div className="md:col-span-2 space-y-6">
           <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Trust Center</h4>
           <ul className="space-y-3 text-sm font-bold text-white/40 uppercase tracking-tighter">
              <li><Link to="/tos" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link to="/refunds" className="hover:text-white transition-colors">Refunds</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Support</Link></li>
           </ul>
        </div>

        <div className="md:col-span-3 space-y-6">
           <div className="glass p-6 space-y-4 glow-white border-white/10">
              <h4 className="text-xs font-black text-white uppercase tracking-tight">Stay Updated</h4>
              <p className="text-[10px] text-white/40 font-medium tracking-tight leading-relaxed">Join 15k+ others getting flash sale alerts directly.</p>
              <div className="flex gap-2">
                <input 
                   type="email" 
                   placeholder="Email Address" 
                   className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-[10px] focus:outline-none focus:border-white/30 w-full font-bold uppercase tracking-tight"
                />
                <button className="bg-white text-black p-2 rounded-xl hover:bg-neutral-200 transition-all transform active:scale-95 glow-white">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
           </div>
        </div>
      </div>

      {/* Bottom Ribbon */}
      <div className="h-20 lg:h-12 border-t border-white/5 bg-white/[0.01]">
         <div className="max-w-[1600px] mx-auto h-full px-10 flex flex-col lg:flex-row items-center justify-between gap-4 py-4 lg:py-0">
            <div className="flex flex-wrap justify-center gap-8">
               <div className="flex items-center gap-2 opacity-50">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="text-[10px] font-black uppercase tracking-tighter text-white">Instant Delivery</span>
               </div>
               <div className="flex items-center gap-2 opacity-50">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                  <span className="text-[10px] font-black uppercase tracking-tighter text-white">Verified Secure</span>
               </div>
               <div className="flex items-center gap-2 opacity-50">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                  <span className="text-[10px] font-black uppercase tracking-tighter text-white">24/7 Support</span>
               </div>
            </div>

            <div className="flex items-center gap-8">
               <div className="flex items-center gap-4 grayscale opacity-20 hover:opacity-50 transition-opacity">
                  <span className="text-[10px] font-black tracking-tighter uppercase whitespace-nowrap">Visa</span>
                  <span className="text-[10px] font-black tracking-tighter uppercase whitespace-nowrap">BTC</span>
                  <span className="text-[10px] font-black tracking-tighter uppercase whitespace-nowrap">Stripe</span>
               </div>
               <span className="text-[10px] text-white/20 font-black tracking-widest uppercase">© 2024 Paradise Store</span>
            </div>
         </div>
      </div>
    </footer>
  );
}

