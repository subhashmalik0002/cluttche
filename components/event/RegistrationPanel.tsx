'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Minus, Plus, Ticket } from 'lucide-react';

interface RegistrationPanelProps {
  event: {
    title: string;
    image: string;
    date: string;
    venue: string;
    ticketPrice: number;
    earlyBirdPrice: number;
  };
}

export default function RegistrationPanel({ event }: RegistrationPanelProps) {
  const [tickets, setTickets] = useState(1);
  const [ticketType, setTicketType] = useState<'early' | 'standard'>('early');

  const price = ticketType === 'early' ? event.earlyBirdPrice : event.ticketPrice;
  const total = price * tickets;

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-[#1a1a1a]">
        <h2 className="text-lg font-bold text-white">Registration Details</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Venue */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Venue</label>
          <div className="relative">
            <select className="w-full bg-[#141414] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-white/20 cursor-pointer">
              <option>Select Venue</option>
              <option>Chandigarh University Ghraun</option>
              <option>IIT Delhi Campus</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
          </div>
          <div className="mt-2 flex items-center gap-2 bg-[#141414] border border-[#2A2A2A] rounded-lg px-4 py-3">
            <span className="text-sm text-white/60">Chandigarh University Ghraun</span>
          </div>
        </div>

        {/* Ticket Price */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Ticket Price</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setTicketType('early')}
              className={cn(
                'py-2.5 px-3 rounded-lg text-sm border transition-colors text-left',
                ticketType === 'early'
                  ? 'border-white/30 bg-white/5 text-white'
                  : 'border-[#2A2A2A] text-white/40 hover:border-white/20'
              )}
            >
              <span className="block text-xs text-white/40 mb-0.5">Early Bird</span>
              <span className="font-semibold">₹{event.earlyBirdPrice}</span>
            </button>
            <div className="flex items-center justify-between bg-[#141414] border border-[#2A2A2A] rounded-lg px-3">
              <span className="text-sm text-white/60">Standard</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setTicketType('standard')}
                  className="w-6 h-6 flex items-center justify-center rounded text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Minus size={12} />
                </button>
                <button
                  onClick={() => setTicketType('early')}
                  className="w-6 h-6 flex items-center justify-center rounded text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Fields */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Registration</label>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full bg-[#141414] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors"
            />
            <div className="flex items-center bg-[#141414] border border-[#2A2A2A] rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-3 py-3 border-r border-[#2A2A2A] flex-shrink-0">
                <span>🇮🇳</span>
                <ChevronDown size={12} className="text-white/40" />
              </div>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="flex-1 bg-transparent px-3 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Enter email ID"
              className="w-full bg-[#141414] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors"
            />
          </div>
        </div>

        {/* Team Details */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Enter Team Details</label>
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-4">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-[#2A2A2A]">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white truncate">{event.title}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs mb-4">
              <div>
                <p className="text-white/40 mb-0.5">Date & Time</p>
                <p className="text-white font-medium">Monday | 9 April 2026</p>
                <p className="text-white/60">18:00</p>
              </div>
              <div>
                <p className="text-white/40 mb-0.5">Venue</p>
                <p className="text-white font-medium leading-snug">{event.venue.split(',')[0]}</p>
              </div>
            </div>
            <div className="border-t border-[#2A2A2A] pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/50">Number of tickets</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setTickets(Math.max(1, tickets - 1))}
                    className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#2A2A2A] text-white/60 hover:bg-[#3A3A3A] hover:text-white transition-colors"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="text-sm font-semibold text-white w-6 text-center">{tickets}</span>
                  <button
                    onClick={() => setTickets(tickets + 1)}
                    className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#2A2A2A] text-white/60 hover:bg-[#3A3A3A] hover:text-white transition-colors"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/50">Total Amount</span>
                <span className="text-sm font-bold text-[#E85D5D]">Rs. {total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="p-4 border-t border-[#1a1a1a]">
        <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-white text-black rounded-xl text-sm font-semibold hover:bg-white/90 transition-colors">
          <Ticket size={16} />
          Confirm Registration
        </button>
      </div>
    </div>
  );
}
