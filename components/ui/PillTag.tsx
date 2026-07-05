import { cn } from '@/lib/utils';

interface PillTagProps {
  children: React.ReactNode;
  variant?: 'default' | 'red' | 'green' | 'blue' | 'outline';
  className?: string;
}

export default function PillTag({ children, variant = 'default', className }: PillTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        variant === 'default' && 'bg-white/10 text-white/80',
        variant === 'red' && 'border border-dashed border-[#E85D5D]/50 text-[#E85D5D] bg-[#E85D5D]/5',
        variant === 'green' && 'bg-green-500/15 text-green-400',
        variant === 'blue' && 'bg-blue-500/15 text-blue-400',
        variant === 'outline' && 'border border-white/20 text-white/70 bg-transparent',
        className
      )}
    >
      {children}
    </span>
  );
}
