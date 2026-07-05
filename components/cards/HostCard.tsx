import { cn } from '@/lib/utils';

interface Host {
  name: string;
  role: string;
  avatar: string;
}

interface HostCardProps {
  host: Host;
  className?: string;
}

export default function HostCard({ host, className }: HostCardProps) {
  return (
    <div className={cn('flex items-center gap-3 min-w-0', className)}>
      <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden ring-1 ring-[#2A2A2A]">
        <img
          src={host.avatar}
          alt={host.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-white truncate">{host.name}</p>
        <p className="text-xs text-white/40 truncate">{host.role}</p>
      </div>
      <button className="flex-shrink-0 ml-auto px-3 py-1.5 rounded-lg border border-[#2A2A2A] text-xs text-white/70 hover:bg-[#1A1A1A] hover:text-white transition-colors">
        Follow
      </button>
    </div>
  );
}
