import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS, REVIEWS } from '../constants';
import { Star, ShieldCheck, Zap, Clock, ShoppingCart, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import ReviewsSection from '../components/home/ReviewsSection';

export default function ProductDetails() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  const [selectedPlan, setSelectedPlan] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-black min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumbs */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Image & Info */}
          <div className="lg:col-span-7 space-y-8">
            <div className="aspect-video rounded-3xl overflow-hidden glass border border-white/5 relative group">
              <img 
                src={product.image} 
                className="w-full h-full object-cover" 
                alt={product.name} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/50 text-[10px] font-black uppercase tracking-widest italic">
                    {product.category}
                 </div>
                 <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-white font-bold">{product.rating}</span>
                    <span className="text-gray-500 text-sm">({product.reviewsCount} reviews)</span>
                 </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-sans font-extrabold text-white tracking-tight leading-tight uppercase">
                {product.name}
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                {product.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 glass rounded-2xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-white/50" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Pricing & Actions */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="glass p-8 rounded-[2.5rem] border border-white/10 glow-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                   <Zap className="w-24 h-24 text-white" />
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-end gap-3">
                    <span className="text-5xl font-sans font-black text-white tracking-tighter">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="text-xl text-gray-500 line-through mb-1">${product.originalPrice.toFixed(2)}</span>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Available Plans</h4>
                    {[ '1 Month Subscription', '3 Month Subscription', '12 Month (Best Value)' ].map((plan, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedPlan(i)}
                        className={cn(
                          "w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between group",
                          selectedPlan === i 
                            ? "bg-white/10 border-white text-white shadow-xl" 
                            : "bg-white/5 border-white/5 text-gray-400 hover:border-white/20"
                        )}
                      >
                        <span className="font-bold">{plan}</span>
                        <div className={cn(
                          "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                          selectedPlan === i ? "border-white bg-white" : "border-gray-600"
                        )}>
                          {selectedPlan === i && <CheckCircle2 className="w-3 h-3 text-black" />}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 space-y-4">
                    <Link to="/checkout" className="flex items-center justify-center gap-3 w-full py-5 bg-white hover:bg-neutral-200 text-black font-black uppercase tracking-widest text-sm rounded-2xl transition-all shadow-xl shadow-white/5 group glow-white">
                      <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      Buy Now - Instant Delivery
                    </Link>
                    <div className="flex items-center justify-center gap-6 text-gray-500">
                       <div className="flex items-center gap-2">
                         <Zap className="w-4 h-4" />
                         <span className="text-xs font-bold uppercase">Instant</span>
                       </div>
                       <div className="flex items-center gap-2">
                         <ShieldCheck className="w-4 h-4" />
                         <span className="text-xs font-bold uppercase">Warranty</span>
                       </div>
                       <div className="flex items-center gap-2">
                         <Clock className="w-4 h-4" />
                         <span className="text-xs font-bold uppercase">24/7 Support</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="glass p-6 rounded-2xl border border-white/5 text-center">
                 <p className="text-gray-400 text-sm mb-4">Trusted by over 9,500+ happy customers worldwide.</p>
                 <div className="flex items-center justify-center gap-4 grayscale opacity-50">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
                     <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin" className="h-4" />
                     <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section at bottom */}
        <div className="mt-32">
           <ReviewsSection />
        </div>
      </div>
    </motion.div>
  );
}
