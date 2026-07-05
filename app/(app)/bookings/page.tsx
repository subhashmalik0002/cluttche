'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Ticket, Calendar, ExternalLink, Sparkles } from 'lucide-react';
import SegmentedTabs from '@/components/ui/SegmentedTabs';

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'completed', label: 'Completed' },
  { id: 'cancelled', label: 'Cancelled' },
];

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="p-6 space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">My Bookings</h1>
        <p className="text-sm text-white/40 mt-1">All the events you&apos;ve booked are listed here.</p>
      </div>

      {/* Tabs */}
      <SegmentedTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {/* Empty state */}
      <div className="rounded-2xl border border-[#2A2A2A] bg-[#0A0A0A] p-12 flex flex-col items-center justify-center text-center">
        {/* Sparkle + ticket icon */}
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full bg-[#141414] border border-[#2A2A2A] flex items-center justify-center">
            <Ticket size={36} className="text-white/40" />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center">
            <span className="text-xs">✦</span>
          </div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center">
            <span className="text-[9px]">✦</span>
          </div>
          <div className="absolute top-2 -left-3">
            <span className="text-white/20 text-xs">+</span>
          </div>
          <div className="absolute -top-2 left-6">
            <span className="text-white/20 text-xs">+</span>
          </div>
          <div className="absolute bottom-2 -right-3">
            <span className="text-white/20 text-xs">+</span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-white mb-2">No Bookings Yet!</h2>
        <p className="text-sm text-white/40 mb-6 max-w-xs leading-relaxed">
          You haven&apos;t booked any events yet. Explore exciting events and book your spot.
        </p>

        <Link
          href="/explore"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#141414] border border-[#2A2A2A] text-white rounded-xl text-sm font-medium hover:bg-[#1A1A1A] hover:border-[#3A3A3A] transition-all"
        >
          <Sparkles size={15} className="text-white/60" />
          Explore Events
        </Link>
      </div>

      {/* Can't find card */}
      <div className="rounded-2xl border border-[#2A2A2A] bg-[#0A0A0A] p-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#141414] border border-[#2A2A2A] flex items-center justify-center">
            <Calendar size={16} className="text-white/50" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Can&apos;t find what you&apos;re looking for?</p>
            <p className="text-xs text-white/40 mt-0.5">Explore more events and book your next experience.</p>
          </div>
        </div>
        <Link
          href="/explore"
          className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 border border-[#2A2A2A] text-white rounded-xl text-xs font-medium hover:bg-[#1A1A1A] transition-colors"
        >
          Explore Events
          <ExternalLink size={12} />
        </Link>
      </div>
    </div>
  );
}
