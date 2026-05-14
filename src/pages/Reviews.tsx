import { motion } from 'motion/react';
import ReviewsSection from '../components/home/ReviewsSection';
import { Star, MessageSquare } from 'lucide-react';
import { REVIEWS } from '../constants';
import { FaDiscord } from 'react-icons/fa';

export default function Reviews() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-black min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20 px-8 py-16 glass rounded-[3rem] border border-white/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[100px] pointer-events-none" />
           <div className="space-y-6 relative z-10 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-brand-primary font-bold uppercase tracking-widest text-sm">
                 <Star className="w-5 h-5 fill-brand-primary" />
                 Trusted by Thousands
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight">
                Customer <span className="text-gradient">Reviews</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-md">
                Real feedback from real customers. We maintain a 99% satisfaction rate across all our digital services.
              </p>
           </div>
           
           <div className="glass p-8 rounded-3xl border border-white/10 text-center space-y-6 min-w-[300px]">
              <div className="text-6xl font-display font-bold text-white">4.9<span className="text-brand-primary">/5</span></div>
              <div className="flex items-center justify-center gap-1">
                 {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />)}
              </div>
              <div className="text-sm text-gray-500 font-medium">Based on 12,000+ total reviews</div>
              <button className="w-full py-3 bg-brand-primary text-black rounded-xl font-bold flex items-center justify-center gap-2 group">
                 <FaDiscord className="w-5 h-5" />
                 Post a Review
              </button>
           </div>
        </div>

        <ReviewsSection />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
           {REVIEWS.map((review, i) => (
             <motion.div
               key={`${review.id}-extra`}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="glass p-8 rounded-3xl border border-white/5 flex gap-6"
             >
                <img src={review.userAvatar} className="w-16 h-16 rounded-full border border-white/10" alt="" />
                <div className="space-y-4">
                   <div className="flex items-center justify-between">
                      <h4 className="text-white font-bold">{review.userName}</h4>
                      <span className="text-xs text-gray-500 uppercase font-bold">{review.date}</span>
                   </div>
                   <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-700'}`} />)}
                   </div>
                   <p className="text-gray-400 text-sm leading-relaxed italic">"{review.comment}"</p>
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full text-green-500 text-[10px] font-bold uppercase tracking-widest">
                      <ShieldCheck className="w-3 h-3" />
                      Verified Purchase
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </motion.div>
  );
}

function ShieldCheck(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
