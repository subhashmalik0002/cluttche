'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Bell, Users, ShoppingBag, Home, Plus } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center h-14 px-4 bg-black/95 border-b border-[#1a1a1a] backdrop-blur-sm">
      {/* Logo */}
      <Link href="/explore" className="flex-shrink-0 mr-6">
        <span className="text-xl font-black tracking-tight text-white uppercase">CLUTXH</span>
      </Link>

      {/* Center: Home icon + Search */}
      <div className="flex items-center gap-2 flex-1 max-w-xl mx-auto">
        <Link
          href="/explore"
          className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-[#141414] border border-[#2A2A2A] hover:bg-[#1A1A1A] transition-colors"
        >
          <Home size={16} className="text-white/70" />
        </Link>
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
          <input
            type="text"
            placeholder="What do you want to compete in?"
            className="w-full bg-[#0F0F0F] border border-[#2A2A2A] rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors"
          />
        </div>
        <button className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-[#141414] border border-[#2A2A2A] hover:bg-[#1A1A1A] transition-colors">
          <ShoppingBag size={16} className="text-white/70" />
        </button>
      </div>

      {/* Right cluster */}
      <div className="flex items-center gap-2 ml-6 flex-shrink-0">
        <Link
          href="/explore"
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#2A2A2A] text-xs text-white/70 hover:bg-[#1A1A1A] transition-colors"
        >
          <Plus size={13} />
          Create Event
        </Link>

        <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#141414] transition-colors">
          <Bell size={16} className="text-white/70" />
        </button>

        <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#141414] transition-colors">
          <Users size={16} className="text-white/70" />
        </button>

        <Link href="/profile">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-[#2A2A2A] ring-1 ring-[#3A3A3A] hover:ring-white/30 transition-all">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
