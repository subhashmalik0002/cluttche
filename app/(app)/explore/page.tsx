'use client';

import { useState } from 'react';
import EventCard from '@/components/cards/EventCard';
import HostCard from '@/components/cards/HostCard';
import { mockEvents, featuredEvent, cities, techFutureEvent } from '@/lib/mockData';
import { Bookmark, MapPin } from 'lucide-react';
import Link from 'next/link';

const secondaryEvents = mockEvents.slice(1, 3);
const nearYouEvents = mockEvents.slice(0, 5);
const popularEvents = mockEvents.slice(3, 8);

export default function ExplorePage() {
  const [selectedCity, setSelectedCity] = useState('bengaluru');

  return (
    <div className="flex h-full min-h-0">
      {/* Main content */}
      <div className="flex-1 min-w-0 overflow-y-auto p-6 space-y-8">
        {/* City chips */}
        <div>
          <div className="grid grid-cols-4 gap-2">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city.id)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all duration-150 ${
                  selectedCity === city.id
                    ? 'border-white/30 bg-white/5 text-white'
                    : 'border-[#2A2A2A] text-white/50 bg-[#0F0F0F] hover:border-white/20 hover:text-white/80'
                }`}
              >
                <span className="text-base flex-shrink-0">{city.icon}</span>
                <span className="truncate text-xs">{city.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Picked for you */}
        <section>
          <h2 className="text-sm font-semibold text-white mb-4">Picked for you</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <EventCard event={featuredEvent} variant="featured" className="h-full" />
            </div>
            <div className="col-span-1">
              <EventCard event={secondaryEvents[0]} variant="featured" className="h-full" />
            </div>
            <div className="col-span-1">
              <EventCard event={secondaryEvents[1]} variant="featured" className="h-full" />
            </div>
          </div>
        </section>

        {/* Events Near You */}
        <section>
          <h2 className="text-sm font-semibold text-white mb-4">Events Near You</h2>
          <div className="grid grid-cols-5 gap-4">
            {nearYouEvents.map((event) => (
              <EventCard key={event.id} event={event} variant="grid" />
            ))}
          </div>
        </section>

        {/* Popular Events */}
        <section>
          <h2 className="text-sm font-semibold text-white mb-4">Popular Events</h2>
          <div className="grid grid-cols-5 gap-4">
            {popularEvents.map((event) => (
              <EventCard key={event.id} event={event} variant="grid" />
            ))}
          </div>
        </section>
      </div>

      {/* Right sticky panel */}
      <div className="w-[300px] flex-shrink-0 border-l border-[#1a1a1a] h-[calc(100vh-56px)] sticky top-0 overflow-y-auto bg-black">
        <div className="px-5 py-6 space-y-6">
          {/* Event header */}
          <div>
            <Link href="/explore/tech-future-40" className="text-xs text-white/40 hover:text-white/60 transition-colors mb-3 block">
              Full Event Page ↗
            </Link>
            <div className="relative rounded-xl overflow-hidden aspect-video mb-3">
              <img
                src={techFutureEvent.image}
                alt={techFutureEvent.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h3 className="font-bold text-white text-base truncate">{techFutureEvent.title}</h3>
                <p className="text-xs text-white/40 mt-0.5 truncate">{techFutureEvent.venue}</p>
              </div>
              <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#1A1A1A] transition-colors">
                <Bookmark size={15} className="text-white/50" />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/explore/tech-future-40"
              className="flex items-center justify-center gap-1.5 py-2.5 bg-white text-black rounded-xl text-xs font-semibold hover:bg-white/90 transition-colors"
            >
              Register
            </Link>
            <button className="flex items-center justify-center gap-1.5 py-2.5 border border-[#2A2A2A] text-white rounded-xl text-xs font-medium hover:bg-[#1A1A1A] transition-colors">
              Contact
            </button>
          </div>

          {/* Hosts */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Hosts</h4>
              <button className="text-xs text-white/40 hover:text-white transition-colors">Show all</button>
            </div>
            <div className="space-y-3">
              {techFutureEvent.hosts.map((host) => (
                <HostCard key={host.name} host={host} />
              ))}
            </div>
          </div>

          {/* Rounds */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Rounds</h4>
              <button className="text-xs text-white/40 hover:text-white transition-colors">Show all</button>
            </div>
            <div className="space-y-3">
              {techFutureEvent.rounds.map((round) => (
                <div key={round.name} className="flex items-start gap-3 pb-3 border-b border-[#1a1a1a] last:border-0 last:pb-0">
                  <div className="flex-shrink-0 w-10 text-center">
                    <div className="text-xs text-white/40">{round.month}</div>
                    <div className="text-lg font-bold text-white leading-none">{round.day}</div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white truncate">{round.name}</p>
                    <p className="text-xs text-white/40 mt-0.5">{round.round} · {round.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About competition */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">About the competition</h4>
            <p className="text-xs text-white/50 leading-relaxed line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis mollis arcu ac gravida.
              Vivamus finibus sapien id elit volutpat pharetra ac ut purus. Maecenas vestibulum, sem vitae malesuada
              ultrices...
            </p>
            <button className="text-xs text-[#E85D5D] hover:text-[#E85D5D]/80 mt-1 transition-colors">Read More</button>
          </div>

          {/* About organizer */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">About the organizer</h4>
            <div className="rounded-xl overflow-hidden bg-[#141414] border border-[#2A2A2A]">
              <div className="aspect-[16/7] overflow-hidden">
                <img
                  src={techFutureEvent.organizerImage}
                  alt={techFutureEvent.organizerName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-white">{techFutureEvent.organizerName}</p>
                <div className="flex items-center justify-between mt-1.5">
                  <p className="text-xs text-white/40">{techFutureEvent.organizerParticipants}</p>
                  <button className="px-2.5 py-1 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-xs text-white hover:bg-[#2A2A2A] transition-colors">
                    Follow
                  </button>
                </div>
                <p className="text-xs text-white/40 mt-2 line-clamp-3 leading-relaxed">
                  Maroon 5 — and, specifically, its frontman Adam Levine — became the face of blue-eyed soul in the 21st century,
                  managing to navigat...
                </p>
              </div>
            </div>
          </div>

          {/* Related hackathons */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Related hackathons</h4>
            <div className="grid grid-cols-2 gap-2">
              {mockEvents.slice(6, 8).map((event) => (
                <EventCard key={event.id} event={event} variant="mini" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
