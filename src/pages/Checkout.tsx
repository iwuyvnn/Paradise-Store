import { motion } from 'motion/react';
import { ShieldCheck, Zap, CreditCard, Lock, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { PRODUCTS } from '../constants';

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('crypto');
  const product = PRODUCTS[0]; // For demo

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-black min-h-screen font-sans"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 max-w-md mx-auto relative px-4">
           {[1, 2, 3].map((s) => (
             <div key={s} className="flex flex-col items-center gap-2 relative z-10">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500",
                  step >= s ? "bg-brand-primary text-black glow-white" : "bg-white/5 text-gray-500 border border-white/10"
                )}>
                  {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                </div>
                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-widest",
                  step >= s ? "text-white font-bold" : "text-gray-500"
                )}>
                  {s === 1 ? 'Details' : s === 2 ? 'Payment' : 'Complete'}
                </span>
             </div>
           ))}
           <div className="absolute top-5 left-0 w-full h-[2px] bg-white/5 -z-0">
              <motion.div 
                className="h-full bg-white glow-white"
                initial={{ width: 0 }}
                animate={{ width: `${(step - 1) * 50}%` }}
              />
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl font-display font-bold text-white">Order Details</h2>
                  <p className="text-gray-400">Please provide your delivery email address.</p>
                </div>

                <div className="space-y-6">
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:border-brand-primary transition-all"
                      />
                      <p className="text-[10px] text-gray-600 px-1">Your product will be sent to this email instantly.</p>
                   </div>

                   <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <img src={product.image} className="w-16 h-16 rounded-xl object-cover" alt="" />
                         <div>
                            <div className="text-white font-bold">{product.name}</div>
                            <div className="text-brand-secondary text-xs font-bold uppercase tracking-tighter">{product.category}</div>
                         </div>
                      </div>
                      <div className="text-2xl font-display font-bold text-white">${product.price.toFixed(2)}</div>
                   </div>

                   <button 
                     onClick={() => setStep(2)}
                     className="w-full py-5 bg-brand-primary hover:bg-brand-primary/90 text-black font-bold rounded-2xl transition-all glow-white flex items-center justify-center gap-2 group"
                   >
                     Continue to Payment
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl font-display font-bold text-white">Payment Method</h2>
                  <p className="text-gray-400">Secure and encrypted payment processing.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {[
                     { id: 'crypto', name: 'Cryptocurrency', icon: Zap, label: 'Fast & Anonymous' },
                     { id: 'card', name: 'Credit / Debit Card', icon: CreditCard, label: 'Instant Processing' },
                     { id: 'paypal', name: 'PayPal', icon: ShieldCheck, label: 'Secure Checkout' },
                     { id: 'discord', name: 'Discord Nitro Gift', icon: MessageSquare, label: 'Trusted Method' },
                   ].map((method) => (
                     <button
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={cn(
                          "p-6 rounded-2xl border text-left transition-all relative overflow-hidden group",
                          paymentMethod === method.id 
                            ? "bg-white/10 border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                            : "bg-white/5 border-white/5 text-gray-500 hover:border-white/10 hover:bg-white/10"
                        )}
                     >
                        <method.icon className={cn(
                          "w-10 h-10 mb-4 transition-colors",
                          paymentMethod === method.id ? "text-white" : "text-gray-600"
                        )} />
                        <div className="font-bold text-lg">{method.name}</div>
                        <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">{method.label}</div>
                     </button>
                   ))}
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
                   <div className="flex justify-between items-center px-2">
                      <span className="text-gray-400 font-medium">Total Amount</span>
                      <span className="text-3xl font-display font-bold text-white">${product.price.toFixed(2)}</span>
                   </div>
                   <button 
                     onClick={() => setStep(3)}
                     className="w-full py-5 bg-brand-primary hover:bg-brand-primary/90 text-black font-bold rounded-2xl transition-all glow-white flex items-center justify-center gap-2 group"
                   >
                     Complete Order
                     <Lock className="w-5 h-5" />
                   </button>
                   <button 
                     onClick={() => setStep(1)}
                     className="w-full py-3 text-gray-500 hover:text-white transition-colors text-sm font-bold"
                   >
                     Back to Details
                   </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8 py-12"
              >
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-green-500/50">
                   <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <div className="space-y-4">
                   <h2 className="text-4xl font-display font-bold text-white tracking-tight">Order Placed!</h2>
                   <p className="text-gray-400 max-w-sm mx-auto text-lg">
                      Thank you for choosing Paradise Store. Your order is being processed and will be delivered to your email address shortly.
                   </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                   <Link to="/" className="px-8 py-4 bg-white text-black rounded-xl font-bold glow-white transition-all hover:scale-105">
                      Return to Home
                   </Link>
                   <Link to="/discord" className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white/10">
                      Join Our Discord
                   </Link>
                </div>
              </motion.div>
            )}
          </div>

          {/* Verification Badges */}
          <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale pointer-events-none mt-8">
             <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-white" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">Verified Merchant</span>
             </div>
             <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-white" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">SSL Encrypted</span>
             </div>
             <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-white" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">24/7 Monitoring</span>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
