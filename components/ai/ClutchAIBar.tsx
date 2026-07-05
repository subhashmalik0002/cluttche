'use client';

import { Send, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { aiActionChips, aiSuggestions } from '@/lib/mockData';

export default function ClutchAIBar() {
  const [query, setQuery] = useState('');

  return (
    <div className="border-t border-[#1a1a1a] bg-black/95 backdrop-blur-sm p-6">
      {/* Suggestion prompts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 max-w-2xl mx-auto">
        {aiSuggestions.map((suggestion) => (
          <button
            key={suggestion.label}
            onClick={() => setQuery(suggestion.label)}
            className="text-left p-3.5 rounded-xl bg-[#141414] border border-[#2A2A2A] hover:bg-[#1A1A1A] hover:border-[#3A3A3A] transition-all group"
          >
            <p className="text-sm font-medium text-white group-hover:text-white/90">{suggestion.label}</p>
            <p className="text-xs text-white/40 mt-0.5 line-clamp-1">{suggestion.description}</p>
          </button>
        ))}
      </div>

      {/* Input area */}
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 bg-[#141414] border border-[#2A2A2A] rounded-2xl p-3 focus-within:border-white/20 transition-colors">
          <Sparkles size={16} className="text-white/30 flex-shrink-0 ml-1" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask Clutch AI anything..."
            className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
          />
          <button className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-xl bg-white text-black hover:bg-white/90 transition-colors">
            <Send size={13} />
          </button>
        </div>

        {/* Action chips */}
        <div className="flex gap-2 mt-3 flex-wrap">
          {aiActionChips.map((chip) => (
            <button
              key={chip}
              onClick={() => setQuery(chip)}
              className="px-3 py-1.5 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs text-white/50 hover:text-white hover:bg-[#1A1A1A] hover:border-[#3A3A3A] transition-all"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
