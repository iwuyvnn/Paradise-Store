import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Zap, Eye, LayoutGrid } from 'lucide-react';
import { PRODUCTS } from '../../constants';
import { cn } from '../../lib/utils';

export default function FeaturedProducts() {
  return (
    <section className="py-32 px-6 lg:px-10 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-6">
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full border-white/5 w-fit"
            >
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] uppercase font-black tracking-[0.2em] text-white/70">Top Sellers</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-sans font-extrabold tracking-tight text-white leading-tight"
            >
              Featured <span className="text-white italic">Items.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pb-2"
          >
            <Link to="/shop" className="px-8 py-4 glass hover:bg-white/5 rounded-full text-sm font-black uppercase tracking-widest transition-all flex items-center gap-3 group border-white/10">
              Browse All
              <LayoutGrid className="w-4 h-4 transition-transform group-hover:rotate-90" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {PRODUCTS.slice(0, 4).map((product, index) => {
            // Bento logic: alternating big and small cards
            const colSpan = index === 0 || index === 3 ? 'lg:col-span-7' : 'lg:col-span-5';
            return (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index} 
                className={colSpan}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index, className }: { product: any, index: number, className?: string }) {
  const isLarge = className?.includes('lg:col-span-7');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "group relative flex flex-col glass p-8 transition-all hover:bg-white/[0.04] overflow-hidden",
        className
      )}
      style={{
        // Add a very subtle brand-colored glow on hover
        ['--glow-color' as any]: product.brandColor || '#FFFFFF'
      }}
    >
      {/* Product Background Image/Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700 blur-[4px] group-hover:blur-0"
          />
        ) : (
          <div 
            className="w-full h-full opacity-5 group-hover:opacity-10 transition-opacity"
            style={{ backgroundColor: product.brandColor }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent" />
      </div>

      {/* Decorative Brand Accent */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent -mr-32 -mt-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
        style={{ backgroundImage: `radial-gradient(circle at center, ${product.brandColor}15 0%, transparent 70%)` }}
      />

      <div className="flex justify-between items-start mb-8 relative z-10">
        <div 
          className={cn(
            "rounded-2xl flex items-center justify-center font-black transition-all duration-500 shadow-xl",
            isLarge ? "w-20 h-20 text-3xl" : "w-14 h-14 text-xl"
          )}
          style={{ 
            backgroundColor: `${product.brandColor}20`,
            border: `1px solid ${product.brandColor}40`,
            color: product.brandColor || '#FFFFFF'
          }}
        >
          {product.name.charAt(0)}
        </div>
        
        <div className="flex flex-col items-end gap-2">
            {product.badge && (
              <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/20">
                {product.badge}
              </span>
            )}
            <div className="flex items-center gap-1 opacity-40">
              <Star className="w-3 h-3 fill-white" />
              <span className="text-[10px] font-black">{product.rating}</span>
            </div>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-end">
        <h3 className={cn(
          "font-black text-white mb-2 tracking-tight",
          isLarge ? "text-4xl" : "text-2xl"
        )}>
            {product.name}
        </h3>
        <p className="text-white/40 font-medium text-sm line-clamp-2 max-w-sm mb-8">
            {product.description}
        </p>

        <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-white/40 uppercase tracking-tighter italic">Instant Delivery</span>
            <span className="text-3xl font-black">${product.price.toFixed(2)}</span>
          </div>
          <button className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center hover:bg-neutral-200 transition-all transform active:scale-95 glow-white">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

