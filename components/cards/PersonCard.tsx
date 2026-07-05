import { cn } from '@/lib/utils';
import { Person } from '@/lib/mockData';

interface PersonCardProps {
  person: Person;
  className?: string;
}

export default function PersonCard({ person, className }: PersonCardProps) {
  return (
    <div
      className={cn(
        'flex-shrink-0 w-40 rounded-xl overflow-hidden bg-[#141414] border border-[#2A2A2A] p-3 text-center hover:border-[#3A3A3A] transition-colors cursor-pointer',
        className
      )}
    >
      <div className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-2 ring-2 ring-[#2A2A2A]">
        <img
          src={person.avatar}
          alt={person.name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-sm font-semibold text-white truncate">{person.name}</p>
      <p className="text-xs text-white/40 mt-0.5 line-clamp-2 leading-snug">{person.bio}</p>
    </div>
  );
}
