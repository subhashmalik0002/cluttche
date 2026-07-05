'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface DashedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const DashedInput = forwardRef<HTMLInputElement, DashedInputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="relative">
        {label && (
          <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full bg-transparent border border-dashed border-white/30 rounded-lg',
            'px-4 py-3.5 text-white placeholder:text-white/30',
            'text-sm focus:outline-none focus:border-white/60 transition-colors duration-200',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

DashedInput.displayName = 'DashedInput';
export default DashedInput;
