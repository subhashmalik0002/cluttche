'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface DashedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

const DashedButton = forwardRef<HTMLButtonElement, DashedButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'border border-dashed rounded-lg px-6 py-3 text-sm font-medium',
          'transition-all duration-200 cursor-pointer',
          variant === 'primary'
            ? 'border-white/40 bg-white text-black hover:bg-white/90'
            : 'border-white/30 text-white hover:border-white/60 hover:bg-white/5',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

DashedButton.displayName = 'DashedButton';
export default DashedButton;
