import { motion } from 'motion/react';
import { Gamepad2, Star, Zap, ShoppingCart, Search, TrendingUp, Trophy, Flame } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const GAMES = [
  { id: 'elden-ring', name: 'Elden Ring: Shadow of the Erdtree', category: 'Soulslike', price: 34.99, image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=800&auto=format&fit=crop', badge: 'Trending', rating: 5.0 },
  { id: 'valorant-points', name: 'Valorant Points (5350 VP)', category: 'FPS', price: 45.00, image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop', badge: 'Popular', rating: 4.8 },
  { id: 'steam-gift-card', name: '$50 Steam Gift Card', category: 'Gift Cards', price: 48.00, image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop', badge: 'Best Seller', rating: 4.9 },
  { id: 'minecraft-deluxe', name: 'Minecraft Deluxe Edition', category: 'Open World', price: 24.99, image: 'https://images.unsplash.com/photo-1587573089734-09cb99c7a09d?q=80&w=800&auto=format&fit=crop', badge: 'Classic', rating: 4.7 },
  { id: 'gta-v-premium', name: 'GTA V Premium Edition', category: 'Open World', price: 15.00, image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?q=80&w=800&auto=format&fit=crop', badge: 'Sale', rating: 4.6 },
  { id: 'fifa-24', name: 'EA Sports FC 24', category: 'Sports', price: 29.99, image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=800&auto=format&fit=crop', badge: 'Hot', rating: 4.5 }
];

export default function GamesStore() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-black min-h-screen"
    >
      {/* Gaming Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
         <div className="relative h-[400px] rounded-[3rem] overflow-hidden border border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" 
              alt="Gaming Banner" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent flex flex-col justify-center p-12">
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="space-y-6 max-w-xl"
               >
                  <div className="flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-sm">
                     <Flame className="w-4 h-4 fill-brand-primary" />
                     Hot Game Deals
                  </div>
                  <h1 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-tight">
                    Level Up Your <span className="text-gradient">Gaming Library.</span>
                  </h1>
                  <p className="text-gray-300 text-lg">
                    Discover trending games, currency, and exclusive bundles at prices that beat every major store.
                  </p>
                  <button className="px-8 py-4 bg-brand-primary text-black font-bold rounded-xl glow-white hover:scale-105 transition-all">
                    Explore Deals
                  </button>
               </motion.div>
            </div>
            <div className="absolute bottom-10 right-10 flex gap-4">
               {[1, 2, 3].map(i => <div key={i} className={cn("w-3 h-3 rounded-full border border-white/50", i === 1 ? "bg-white" : "")} />)}
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
         <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 space-y-8">
               <div className="space-y-4">
                  <h3 className="text-white font-bold flex items-center gap-2">
                     <Gamepad2 className="w-5 h-5 text-brand-primary" />
                     Categories
                  </h3>
                  <div className="flex flex-col gap-2">
                     {['All Games', 'FPS', 'RPG', 'Soulslike', 'Open World', 'Multiplayer', 'Survival'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={cn(
                            "text-left px-4 py-3 rounded-xl transition-all font-medium text-sm",
                            activeCategory === cat ? "bg-brand-primary text-black glow-white" : "text-gray-500 hover:text-white hover:bg-white/5"
                          )}
                        >
                           {cat}
                        </button>
                     ))}
                  </div>
               </div>

               <div className="space-y-4">
                  <h3 className="text-white font-bold flex items-center gap-2">
                     <TrendingUp className="w-5 h-5 text-brand-secondary" />
                     Trending Now
                  </h3>
                  <div className="space-y-4">
                     {GAMES.slice(0, 3).map(game => (
                        <div key={game.id} className="flex items-center gap-3 group cursor-pointer">
                           <img src={game.image} className="w-12 h-12 rounded-lg object-cover" alt="" />
                           <div>
                              <div className="text-white text-xs font-bold line-clamp-1 group-hover:text-brand-primary transition-colors">{game.name}</div>
                              <div className="text-brand-primary text-[10px] font-bold">${game.price}</div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </aside>

            {/* Main Grid */}
            <div className="flex-1 space-y-8">
               <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wider">Trending <span className="text-brand-primary">Games</span></h2>
                  <div className="flex gap-2">
                     <button className="p-2 glass rounded-lg text-gray-400 hover:text-white transition-colors">
                        <Search className="w-5 h-5" />
                     </button>
                     <button className="p-2 glass rounded-lg text-gray-400 hover:text-white transition-colors">
                        <Trophy className="w-5 h-5" />
                     </button>
                  </div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {GAMES.map((game, i) => (
                     <motion.div
                        key={game.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass rounded-3xl border border-white/5 overflow-hidden group hover:border-brand-primary/30 transition-all flex flex-col"
                     >
                        <div className="aspect-[16/10] overflow-hidden relative">
                           <img src={game.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                           <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 group-hover:bg-brand-primary transition-colors">
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                              {game.rating}
                           </div>
                           {game.badge && (
                              <div className="absolute top-4 left-4 bg-brand-primary text-black px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest glow-white">
                                 {game.badge}
                              </div>
                           )}
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                           <div className="text-[10px] font-bold text-brand-primary uppercase mb-1">{game.category}</div>
                           <h3 className="text-lg font-bold text-white mb-6 line-clamp-1">{game.name}</h3>
                           <div className="mt-auto flex items-center justify-between">
                              <div className="text-2xl font-display font-bold text-white">${game.price.toFixed(2)}</div>
                              <Link to="/checkout" className="p-3 bg-white/5 hover:bg-brand-primary hover:text-black rounded-xl transition-all group/buy">
                                 <ShoppingCart className="w-5 h-5 group-hover/buy:scale-110 transition-transform" />
                              </Link>
                           </div>
                        </div>
                     </motion.div>
                  ))}

               </div>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
