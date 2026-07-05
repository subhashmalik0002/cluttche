'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Compass,
  Radio,
  Heart,
  Bookmark,
  BarChart2,
  Users,
  Building2,
  Settings,
  HelpCircle,
  MoreHorizontal,
  Ticket,
  Zap,
  Plus,
} from 'lucide-react';

interface SidebarProps {
  activeSection?: 'ai' | 'explore';
}

const mainNavItems = [
  { icon: Compass, label: 'Browse', href: '/explore' },
  { icon: Radio, label: 'Live Events', href: '/explore?filter=live' },
  { icon: BarChart2, label: 'Leaderboard', href: '/explore?tab=leaderboard' },
  { icon: Users, label: 'Organizers', href: '/explore?tab=organizers' },
];

const bookingNavItems = [
  { icon: Radio, label: 'Live Events', href: '/explore?filter=live' },
  { icon: Heart, label: 'Saved Events', href: '/explore?filter=saved' },
  { icon: Bookmark, label: 'My Bookings', href: '/bookings' },
  { icon: Building2, label: 'Organisations', href: '/explore?tab=orgs' },
];

const profileNavItems = [
  { icon: Settings, label: 'Account Setting', href: '/profile/settings' },
  { icon: Radio, label: 'Login & Security', href: '/profile/settings?tab=security' },
  { icon: Zap, label: 'Notifications', href: '/profile/settings?tab=notifications' },
  { icon: Compass, label: 'Interface', href: '/profile/settings?tab=interface' },
  { icon: BarChart2, label: 'Skills', href: '/profile/settings?tab=skills' },
  { icon: MoreHorizontal, label: 'More', href: '/profile/settings?tab=more' },
];

const bottomNavItems = [
  { icon: Settings, label: 'App Settings', href: '/explore?tab=settings' },
  { icon: HelpCircle, label: 'Help & Support', href: '/explore?tab=help' },
];

export default function Sidebar({ activeSection = 'explore' }: SidebarProps) {
  const pathname = usePathname();

  const isProfile = pathname.startsWith('/profile');
  const isBookings = pathname.startsWith('/bookings');

  const navItems = isProfile
    ? profileNavItems
    : isBookings
    ? bookingNavItems
    : mainNavItems;

  const isActive = (href: string) => {
    const base = href.split('?')[0];
    return pathname === base || (base !== '/explore' && pathname.startsWith(base));
  };

  return (
    <aside className="w-[260px] flex-shrink-0 h-[calc(100vh-56px)] sticky top-14 overflow-y-auto flex flex-col border-r border-[#1a1a1a] bg-black">
      {/* AI / Explore Toggle */}
      <div className="p-3 border-b border-[#1a1a1a]">
        <div className="flex bg-[#0F0F0F] border border-[#2A2A2A] rounded-xl p-1 gap-1">
          <Link
            href="/ai"
            className={cn(
              'flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium transition-all duration-200',
              pathname === '/ai'
                ? 'bg-white text-black'
                : 'text-white/50 hover:text-white hover:bg-white/5'
            )}
          >
            <Zap size={13} />
            Clutch AI
          </Link>
          <Link
            href="/explore"
            className={cn(
              'flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium transition-all duration-200',
              pathname !== '/ai'
                ? 'bg-white text-black'
                : 'text-white/50 hover:text-white hover:bg-white/5'
            )}
          >
            <Compass size={13} />
            Explore
          </Link>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 p-3">
        <ul className="space-y-0.5">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  'flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm transition-all duration-150',
                  isActive(item.href)
                    ? 'bg-[#1A1A1A] text-white font-medium'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                )}
              >
                <item.icon size={17} className="flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* More (non-profile) */}
        {!isProfile && (
          <Link
            href="/explore"
            className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all duration-150 mt-0.5"
          >
            <MoreHorizontal size={17} className="flex-shrink-0" />
            <span>More</span>
          </Link>
        )}

        {/* Divider */}
        <div className="border-t border-[#1a1a1a] my-4 pt-4">
          {bottomNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm transition-all duration-150 mb-0.5',
                isActive(item.href)
                  ? 'bg-[#1A1A1A] text-white font-medium'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              )}
            >
              <item.icon size={17} className="flex-shrink-0" />
              <span className="truncate">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Recent threads */}
        <div className="border-t border-[#1a1a1a] pt-4">
          <p className="px-3 text-xs text-white/30 uppercase tracking-wider mb-2">Recent</p>
          <p className="px-3 text-xs text-white/25 leading-relaxed">
            Recent and active threads will appear here.
          </p>
        </div>
      </nav>

      {/* Promo card */}
      <div className="p-3 border-t border-[#1a1a1a]">
        <div className="rounded-xl bg-[#0F0F0F] border border-[#2A2A2A] p-4 text-center">
          <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#1A1A1A] flex items-center justify-center">
            <Ticket size={18} className="text-white/60" />
          </div>
          <p className="text-sm font-semibold text-white mb-1">Host your own event</p>
          <p className="text-xs text-white/40 mb-3 leading-relaxed">
            Create and manage events seamlessly with Clutch.
          </p>
          <Link
            href="/explore"
            className="block w-full py-2 text-xs font-medium rounded-lg border border-[#2A2A2A] text-white/70 hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            Register as Organiser
          </Link>
        </div>
      </div>
    </aside>
  );
}
