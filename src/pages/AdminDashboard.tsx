import { motion } from 'motion/react';
import { 
  BarChart3, Users, ShoppingCart, Package, 
  Settings, MessageSquare, TrendingUp, DollarSign,
  ArrowUpRight, ArrowDownRight, Search, Filter,
  MoreVertical, CheckCircle2, XCircle, Clock
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');

  const TABS = [
    { name: 'Overview', icon: BarChart3 },
    { name: 'Orders', icon: ShoppingCart },
    { name: 'Products', icon: Package },
    { name: 'Users', icon: Users },
    { name: 'Tickets', icon: MessageSquare },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#050505] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Admin Sidebar */}
          <aside className="lg:w-64 shrink-0">
             <div className="glass p-6 rounded-3xl border border-white/5 space-y-6">
                <div className="px-2">
                   <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Admin Panel</div>
                   <div className="text-white font-display font-bold">Paradise Control</div>
                </div>
                <div className="space-y-1">
                   {TABS.map((tab) => (
                     <button
                       key={tab.name}
                       onClick={() => setActiveTab(tab.name)}
                       className={cn(
                         "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all",
                         activeTab === tab.name 
                           ? "bg-brand-purple text-white glow-purple" 
                           : "text-gray-400 hover:text-white hover:bg-white/5"
                       )}
                     >
                        <tab.icon className="w-4 h-4" />
                        {tab.name}
                     </button>
                   ))}
                </div>
             </div>
          </aside>

          {/* Admin Content */}
          <main className="flex-1 space-y-8">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-3xl font-display font-bold text-white">{activeTab}</h2>
                <div className="flex items-center gap-4">
                   <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input 
                        type="text" 
                        placeholder="Search records..." 
                        className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-brand-primary transition-all"
                      />
                   </div>
                   <button className="flex items-center gap-2 px-4 py-2 bg-brand-primary rounded-xl text-sm font-bold text-black glow-white">
                      <Package className="w-4 h-4" />
                      Add Product
                   </button>
                </div>
             </div>

             {activeTab === 'Overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                   {/* Stats Grid */}
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[ 
                        { label: 'Total Revenue', value: '$42,500', trend: '+12.5%', isUp: true, icon: DollarSign, color: 'text-green-500' },
                        { label: 'Active Users', value: '1,284', trend: '+8.2%', isUp: true, icon: Users, color: 'text-brand-primary' },
                        { label: 'New Orders', value: '156', trend: '-2.4%', isUp: false, icon: ShoppingCart, color: 'text-brand-secondary' },
                        { label: 'Pending Tickets', value: '12', trend: 'Low', isUp: true, icon: MessageSquare, color: 'text-yellow-500' }
                      ].map((stat, i) => (
                        <div key={i} className="glass p-6 rounded-3xl border border-white/5 space-y-4">
                           <div className="flex items-center justify-between">
                              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-white/5", stat.color)}>
                                 <stat.icon className="w-5 h-5" />
                              </div>
                              <div className={cn(
                                "flex items-center gap-1 text-xs font-bold",
                                stat.label === 'Pending Tickets' ? "text-gray-400" : (stat.isUp ? "text-green-500" : "text-red-500")
                              )}>
                                 {stat.label !== 'Pending Tickets' && (stat.isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />)}
                                 {stat.trend}
                              </div>
                           </div>
                           <div>
                              <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                              <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
                           </div>
                        </div>
                      ))}
                   </div>

                   {/* Charts or Secondary Stats would go here */}
                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2 glass p-8 rounded-[2.5rem] border border-white/5 h-[400px] flex flex-col items-center justify-center space-y-4">
                         <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                            <TrendingUp className="w-10 h-10" />
                         </div>
                         <p className="text-gray-500 font-medium">Revenue Analytics Chart Placeholder</p>
                      </div>
                      
                      <div className="glass p-8 rounded-[2.5rem] border border-white/5 space-y-6">
                         <h4 className="text-white font-bold flex items-center gap-2">
                            <Clock className="w-5 h-5 text-brand-secondary" />
                            Recent Activity
                         </h4>
                         <div className="space-y-6">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <div key={i} className="flex gap-4 relative">
                                 {i < 5 && <div className="absolute top-8 left-4 w-px h-8 bg-white/5" />}
                                 <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                 </div>
                                 <div className="space-y-1">
                                    <div className="text-white text-sm font-bold">Order #9482 Processed</div>
                                    <div className="text-gray-500 text-[10px]">2 minutes ago</div>
                                 </div>
                              </div>
                            ))}
                         </div>
                      </div>
                   </div>
                </motion.div>
             )}

             {activeTab !== 'Overview' && (
                <div className="glass p-20 rounded-[3rem] border border-white/5 text-center space-y-4">
                   <h3 className="text-xl font-bold text-white">{activeTab} Management</h3>
                   <p className="text-gray-500 max-w-sm mx-auto">Full management system for {activeTab.toLowerCase()} is coming in the next update.</p>
                </div>
             )}
          </main>
        </div>
      </div>
    </div>
  );
}
