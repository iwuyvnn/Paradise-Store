import { motion } from 'motion/react';
import { Users, ShoppingBag, MessageSquare, Star } from 'lucide-react';

const STATS = [
  { icon: Users, label: "Total Customers", value: "9,500+", color: "text-brand-primary" },
  { icon: ShoppingBag, label: "Orders Delivered", value: "24,000+", color: "text-brand-secondary" },
  { icon: MessageSquare, label: "Discord Members", value: "12,000+", color: "text-brand-accent" },
  { icon: Star, label: "Positive Reviews", value: "4,900+", color: "text-white/60" },
];

export default function LiveStats() {
  return (
    <section className="py-20 px-4 bg-brand-primary/5 border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {STATS.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className={`w-12 h-12 bg-white/5 rounded-full flex items-center justify-center ${stat.color}`}>
               <stat.icon className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
