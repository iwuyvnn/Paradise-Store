import { motion } from 'motion/react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import WhyChooseUs from '../components/home/WhyChooseUs';
import LiveStats from '../components/home/LiveStats';
import ReviewsSection from '../components/home/ReviewsSection';
import FAQSection from '../components/home/FAQSection';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 pb-20 overflow-hidden"
    >
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <LiveStats />
      <ReviewsSection />
      <FAQSection />
    </motion.div>
  );
}
