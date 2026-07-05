import { cn } from '@/lib/utils';

interface PromptChipProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export default function PromptChip({ label, onClick, className }: PromptChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex-shrink-0 px-4 py-2 rounded-full bg-[#141414] border border-[#2A2A2A] text-sm text-white/60',
        'hover:bg-[#1A1A1A] hover:text-white hover:border-[#3A3A3A] transition-all duration-150 whitespace-nowrap',
        className
      )}
    >
      {label}
    </button>
  );
}
