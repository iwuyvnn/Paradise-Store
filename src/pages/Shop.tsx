import { motion } from 'motion/react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Search, ShoppingCart, Star, Zap } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory) &&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 px-4 min-h-screen bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-sans font-extrabold text-white uppercase tracking-tight">Digital <span className="text-white italic">Marketplace</span></h1>
            <p className="text-gray-400">Browse our collection of premium digital services and products.</p>
          </div>
          
          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-white/30 transition-all font-bold uppercase text-xs tracking-widest"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-10 pb-4 overflow-x-auto no-scrollbar">
          <button 
            onClick={() => setActiveCategory('All')}
            className={cn(
              "px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
              activeCategory === 'All' ? "bg-white text-black glow-white" : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 uppercase tracking-widest"
            )}
          >
            All Products
          </button>
          {CATEGORIES.map(category => (
            <button 
              key={category.id}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
                activeCategory === category.name ? "bg-white text-black glow-white" : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 uppercase tracking-widest"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-3xl border border-white/5 overflow-hidden group hover:border-white/20 transition-all flex flex-col glow-white/5 shadow-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                {product.badge && <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest z-10">{product.badge}</div>}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-widest italic">{product.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-white">{product.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{product.name}</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">${product.price.toFixed(2)}</span>
                  <Link to={`/product/${product.id}`} className="p-3 bg-white text-black hover:bg-neutral-200 rounded-xl transition-all group/btn glow-white">
                    <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
