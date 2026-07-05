'use client';

import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
}

interface SegmentedTabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export default function SegmentedTabs({ tabs, activeTab, onChange, className }: SegmentedTabsProps) {
  return (
    <div className={cn('inline-flex items-center bg-[#141414] border border-[#2A2A2A] rounded-xl p-1 gap-1', className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
            activeTab === tab.id
              ? 'bg-white text-black'
              : 'text-white/50 hover:text-white hover:bg-white/5'
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
