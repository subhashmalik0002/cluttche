import { cn } from '@/lib/utils';

interface TimelineItem {
  date: string;
  day: string;
  event: string;
}

interface EventTimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function EventTimeline({ items, className }: EventTimelineProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="flex-shrink-0 flex items-center gap-2 min-w-0">
            <div className="w-2 h-2 rounded-full bg-white/20 mt-1.5 flex-shrink-0" />
            <span className="text-sm font-semibold text-white w-12 flex-shrink-0">{item.date}</span>
            <span className="text-sm text-[#E85D5D] flex-shrink-0 w-20">{item.day}</span>
          </div>
          <span className="text-sm text-white/60 min-w-0">— {item.event}</span>
        </div>
      ))}
    </div>
  );
}
