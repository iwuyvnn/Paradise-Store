import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart, User, Zap, MessageSquare, Search } from 'lucide-react';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'Store', path: '/shop' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Support', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[60] transition-all duration-500 h-20 px-6 lg:px-10 flex items-center justify-between',
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 active:scale-95 transition-transform group">
          <div className="w-10 h-10 bg-gradient-to-br from-white to-neutral-400 rounded-xl flex items-center justify-center glow-white">
            <span className="font-black text-black italic text-xl">P</span>
          </div>
          <span className="text-xl font-sans font-extrabold tracking-tighter uppercase hidden sm:block">
            Paradise <span className="text-white">Store</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-bold uppercase tracking-widest transition-all hover:text-white',
                location.pathname === link.path ? 'text-white' : 'text-white/40'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/cart" className="text-white/40 hover:text-white transition-colors relative group">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full glow-white group-hover:scale-125 transition-transform" />
          </Link>
          <div className="flex items-center gap-4">
             <Link
               to="/login"
               className="px-6 py-2.5 glass text-sm font-black uppercase tracking-tighter rounded-full border-white/10 hover:bg-white/5 transition-all active:scale-95"
             >
               Login
             </Link>
             <Link
               to="/discord"
               className="px-6 py-2.5 bg-white text-black text-sm font-black uppercase tracking-tighter rounded-full hover:bg-neutral-200 transition-all active:scale-95 glow-white"
             >
               Join Discord
             </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden w-10 h-10 glass rounded-full flex items-center justify-center text-white/70"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 bg-black/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden z-50"
          >
            <div className="flex flex-col gap-6 items-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-black uppercase tracking-[0.2em]',
                    location.pathname === link.path ? 'text-white' : 'text-white/60'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col w-full gap-4 pt-6 border-t border-white/5">
                <Link
                  to="/login"
                  className="w-full py-4 glass text-center font-black uppercase tracking-widest rounded-2xl"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/discord"
                  className="w-full py-4 bg-white text-black text-center font-black uppercase tracking-widest rounded-2xl glow-white"
                  onClick={() => setIsOpen(false)}
                >
                  Join Discord
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

