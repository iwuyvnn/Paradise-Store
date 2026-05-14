import { motion } from 'motion/react';
import { Star, MessageSquare, Quote } from 'lucide-react';
import { REVIEWS } from '../../constants';
import { FaDiscord } from 'react-icons/fa';

export default function ReviewsSection() {
  return (
    <section className="py-32 px-6 lg:px-10 bg-[#050505] relative overflow-hidden">
       {/* Accents */}
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full -z-10" />

       <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full border-white/5 mx-auto"
          >
            <FaDiscord className="w-4 h-4 text-white" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">Discord Community</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-sans font-extrabold text-white tracking-tight leading-tight uppercase"
          >
             Customer <span className="text-white italic">Voices.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 font-medium text-lg max-w-2xl mx-auto"
          >
            Don't just take our word for it. Join our elite community of over 45k members sharing their experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 relative group hover:bg-white/[0.04] glow-neutral transition-all border border-white/5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 p-0.5 overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors">
                    <img 
                      src={review.userAvatar} 
                      alt={review.userName} 
                      className="w-full h-full object-cover rounded-[14px]"
                    />
                  </div>
                  {review.isDiscordVerified && (
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-lg flex items-center justify-center border-2 border-[#050505] glow-white">
                      <FaDiscord className="text-black w-3 h-3" />
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-white font-black text-base uppercase tracking-tighter">{review.userName}</h4>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < review.rating ? 'text-white fill-white' : 'text-white/10'}`} 
                      />
                    ))}
                  </div>
                </div>
                <span className="ml-auto text-[10px] text-white/20 font-black uppercase tracking-widest self-start mt-1">
                  {review.date}
                </span>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white opacity-10" />
                <p className="text-white/60 font-medium text-base leading-relaxed italic relative z-10 pl-6">
                  {review.comment}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2">
                 <span className="text-[10px] bg-white/5 text-white/40 px-2 py-0.5 rounded-md font-black uppercase tracking-tight">Verified Order</span>
                 <span className="text-[10px] bg-white text-black px-2 py-0.5 rounded-md font-black uppercase tracking-tight">Elite Tier</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="/discord"
            className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-sm rounded-2xl transition-all hover:bg-neutral-200 glow-white group active:scale-95"
          >
            <FaDiscord className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>Join 15,000+ Verified Members</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

