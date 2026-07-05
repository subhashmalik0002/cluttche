'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Share2, Star, Bell, ExternalLink, MapPin } from 'lucide-react';
import EventTimeline from '@/components/event/EventTimeline';
import RegistrationPanel from '@/components/event/RegistrationPanel';
import PillTag from '@/components/ui/PillTag';
import { techFutureEvent } from '@/lib/mockData';

export default function EventDetailPage() {
  const [expanded, setExpanded] = useState(false);
  const event = techFutureEvent;

  return (
    <div className="flex h-full min-h-0">
      {/* Main content */}
      <div className="flex-1 min-w-0 overflow-y-auto p-6">
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft size={15} />
          Back
        </Link>

        <div className="flex gap-8">
          {/* Left: poster */}
          <div className="flex-shrink-0 w-64">
            <div className="rounded-xl overflow-hidden aspect-[3/4]">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: details */}
          <div className="flex-1 min-w-0">
            {/* Title */}
            <div className="flex items-start gap-2 mb-2">
              <h1 className="text-2xl font-black text-white leading-tight">{event.title}</h1>
              <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-[#141414] border border-[#2A2A2A] hover:bg-[#1A1A1A] transition-colors mt-0.5">
                <ExternalLink size={13} className="text-white/60" />
              </button>
            </div>

            <p className="text-white/60 text-sm mb-3">{event.venue}</p>

            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <PillTag variant="green">{event.category}</PillTag>
              <div className="flex items-center gap-1.5 text-xs text-white/50">
                <MapPin size={12} />
                {event.location}
              </div>
            </div>

            <p className="text-xs text-white/40 mb-4">
              By <span className="text-white/60">{event.organizer}</span>
            </p>

            {/* Actions */}
            <div className="flex items-center gap-3 mb-6">
              <button className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors">
                <Share2 size={13} />
                Share
              </button>
              <span className="text-white/20">|</span>
              <button className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors">
                <Star size={13} />
                Interested
              </button>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className={`text-sm text-white/60 leading-relaxed ${expanded ? '' : 'line-clamp-4'}`}>
                {event.description}
              </p>
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-sm text-[#E85D5D] hover:text-[#E85D5D]/80 mt-1 transition-colors"
              >
                {expanded ? 'Read Less' : 'Read More'}
              </button>
            </div>

            {/* Date/Time */}
            <div className="flex items-center justify-between bg-[#141414] border border-[#2A2A2A] rounded-xl px-4 py-3 mb-6">
              <div>
                <p className="text-base font-bold text-white">{event.date}</p>
                <p className="text-sm text-white/50">{event.time}</p>
              </div>
              <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] hover:bg-[#2A2A2A] transition-colors">
                <Bell size={15} className="text-white/60" />
              </button>
            </div>

            {/* Timeline */}
            <div className="mb-8">
              <EventTimeline items={event.timeline} />
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <Link
                href={`/explore/${event.id}`}
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Register Now
              </Link>
              <button className="flex items-center gap-2 px-6 py-3 border border-[#2A2A2A] text-white rounded-xl text-sm font-medium hover:bg-[#1A1A1A] transition-colors">
                Contact Host
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Registration Panel */}
      <div className="w-[300px] flex-shrink-0 border-l border-[#1a1a1a] h-[calc(100vh-56px)] sticky top-0 overflow-hidden">
        <RegistrationPanel
          event={{
            title: event.title,
            image: event.image,
            date: event.date,
            venue: event.venue,
            ticketPrice: event.ticketPrice,
            earlyBirdPrice: event.earlyBirdPrice,
          }}
        />
      </div>
    </div>
  );
}
