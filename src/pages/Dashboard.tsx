import { motion } from 'motion/react';
import { User, ShoppingBag, CreditCard, Headphones, Settings, LogOut, Zap, ShieldCheck, Clock } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview');

  const TABS = [
    { name: 'Overview', icon: User },
    { name: 'My Orders', icon: ShoppingBag },
    { name: 'Subscriptions', icon: CreditCard },
    { name: 'Support', icon: Headphones },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-black min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="glass p-8 rounded-[2.5rem] border border-white/5 text-center space-y-4">
               <div className="relative inline-block">
                  <img 
                    src="https://i.pravatar.cc/150?u=angel" 
                    className="w-24 h-24 rounded-full border-4 border-brand-primary/20 p-1" 
                    alt="User" 
                  />
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center border-4 border-black">
                     <ShieldCheck className="w-4 h-4 text-black" />
                  </div>
               </div>
               <div>
                  <h3 className="text-xl font-bold text-white">Angel Will</h3>
                  <p className="text-gray-500 text-sm">Customer since 2024</p>
               </div>
               <div className="pt-4 flex flex-col gap-2">
                  {TABS.map((tab) => (
                    <button
                      key={tab.name}
                      onClick={() => setActiveTab(tab.name)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold",
                        activeTab === tab.name 
                          ? "bg-brand-primary text-black glow-white" 
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                       <tab.icon className="w-5 h-5" />
                       {tab.name}
                    </button>
                  ))}
                  <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-all text-sm font-bold mt-4">
                     <LogOut className="w-5 h-5" />
                     Logout
                  </button>
               </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 space-y-8">
            <div className="flex items-center justify-between">
               <h2 className="text-3xl font-display font-bold text-white">{activeTab}</h2>
               <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
            </div>

            {activeTab === 'Overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <div className="glass p-8 rounded-3xl border border-white/5 space-y-2 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-5"><ShoppingBag className="w-16 h-16" /></div>
                      <div className="text-gray-500 text-sm font-bold uppercase tracking-widest">Total Orders</div>
                      <div className="text-4xl font-display font-bold text-white">12</div>
                   </div>
                   <div className="glass p-8 rounded-3xl border border-white/5 space-y-2 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-5"><Zap className="w-16 h-16 text-brand-purple" /></div>
                      <div className="text-gray-500 text-sm font-bold uppercase tracking-widest">Active Subscriptions</div>
                      <div className="text-4xl font-display font-bold text-white">3</div>
                   </div>
                   <div className="glass p-8 rounded-3xl border border-white/5 space-y-2 relative overflow-hidden text-brand-primary">
                      <div className="absolute top-0 right-0 p-4 opacity-10"><ShieldCheck className="w-16 h-16" /></div>
                      <div className="text-gray-500 text-sm font-bold uppercase tracking-widest">Account Status</div>
                      <div className="text-4xl font-display font-bold text-white">VIP</div>
                   </div>
                </div>

                {/* Recent Orders */}
                <div className="glass rounded-[2rem] border border-white/5 overflow-hidden">
                   <div className="p-8 border-b border-white/5 flex items-center justify-between">
                      <h4 className="text-xl font-bold text-white">Recent Orders</h4>
                      <button className="text-brand-primary text-sm font-bold hover:underline">View All</button>
                   </div>
                   <div className="divide-y divide-white/5">
                      {[ 
                        { id: '#4582', product: 'Discord Nitro (1 Year)', date: 'May 12, 2024', price: '$45.00', status: 'Completed' },
                        { id: '#4510', product: 'Netflix Premium', date: 'April 28, 2024', price: '$3.50', status: 'Completed' },
                        { id: '#4492', product: 'Spotify Premium', date: 'April 05, 2024', price: '$12.00', status: 'Completed' }
                      ].map((order) => (
                        <div key={order.id} className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center font-bold text-xs text-gray-400">{order.id}</div>
                              <div>
                                 <div className="text-white font-bold">{order.product}</div>
                                 <div className="text-gray-500 text-xs">{order.date}</div>
                              </div>
                           </div>
                           <div className="flex items-center gap-8">
                              <div className="text-white font-bold">{order.price}</div>
                              <div className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-bold rounded-lg border border-green-500/20">{order.status}</div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </motion.div>
            )}

            {activeTab !== 'Overview' && (
              <div className="glass p-20 rounded-[3rem] border border-white/5 text-center space-y-6">
                 <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto text-brand-primary">
                    <Clock className="w-10 h-10" />
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">{activeTab} Details</h3>
                    <p className="text-gray-500 max-w-sm mx-auto">This section is currently under development. Stay tuned for updates!</p>
                 </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </motion.div>
  );
}
