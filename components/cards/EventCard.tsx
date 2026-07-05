import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Event } from '@/lib/mockData';

interface EventCardProps {
  event: Event;
  variant?: 'grid' | 'featured' | 'mini';
  className?: string;
}

export default function EventCard({ event, variant = 'grid', className }: EventCardProps) {
  if (variant === 'featured') {
    return (
      <Link href={`/explore/${event.id}`} className={cn('block relative rounded-xl overflow-hidden group', className)}>
        <div className="aspect-[16/9] relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs text-white/60 mb-1">{event.category}</p>
            <p className="text-lg font-bold text-white leading-tight">{event.title}</p>
            <p className="text-sm text-white/60 mt-1 truncate">{event.venue}</p>
          </div>
          <div className="absolute top-3 right-3 flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/70 hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'mini') {
    return (
      <Link href={`/explore/${event.id}`} className={cn('block rounded-xl overflow-hidden bg-[#141414] border border-[#2A2A2A] group hover:border-[#3A3A3A] transition-colors', className)}>
        <div className="aspect-square overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-2">
          <p className="text-xs font-semibold text-white truncate">{event.title}</p>
          <p className="text-xs text-white/40 truncate mt-0.5">{event.city}</p>
        </div>
      </Link>
    );
  }

  // Default: grid card
  return (
    <Link
      href={`/explore/${event.id}`}
      className={cn(
        'block rounded-xl overflow-hidden bg-[#141414] border border-[#2A2A2A] group hover:border-[#3A3A3A] transition-all duration-200',
        className
      )}
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {event.tag && (
          <div className="absolute top-2 left-2">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-black/60 text-white/80 backdrop-blur-sm border border-white/10">
              {event.tag}
            </span>
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="text-sm font-semibold text-white truncate" title={event.title}>
          {event.title}
        </p>
        <p className="text-xs text-white/40 mt-0.5 truncate">{event.venue}</p>
      </div>
    </Link>
  );
}
