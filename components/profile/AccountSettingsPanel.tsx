'use client';

import { ChevronDown, Info } from 'lucide-react';

export default function AccountSettingsPanel() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-[#1a1a1a]">
        <h2 className="text-lg font-bold text-white">Account Settings</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Profile Picture */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-3">
            Your Profile Picture
          </label>
          <div className="w-20 h-20 rounded-xl border-2 border-dashed border-[#2A2A2A] bg-[#0F0F0F] flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-white/20 transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </div>
            <span className="text-xs text-white/30 text-center leading-tight">Upload your photo</span>
          </div>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Full Name</label>
          <div className="relative">
            <input
              type="text"
              defaultValue="Aman Kumar"
              className="w-full bg-[#141414] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors pl-9"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>

        {/* Position */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Position</label>
          <div className="relative">
            <input
              type="text"
              defaultValue="Student"
              className="w-full bg-[#141414] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors pl-9"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Email Address</label>
          <div className="relative">
            <input
              type="email"
              defaultValue="amankumarunofficial2810@gmail.com"
              className="w-full bg-[#141414] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors pl-9"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Phone Number (Priv)</label>
          <div className="flex items-center bg-[#141414] border border-[#2A2A2A] rounded-lg overflow-hidden">
            <button className="flex items-center gap-1.5 px-3 py-3 border-r border-[#2A2A2A] flex-shrink-0 text-sm">
              <span>🇮🇳</span>
              <ChevronDown size={12} className="text-white/40" />
            </button>
            <input
              type="tel"
              defaultValue="+91  123.456.9878"
              className="flex-1 bg-transparent px-3 py-3 text-sm text-white focus:outline-none"
            />
            <button className="px-3 py-3 text-white/30 hover:text-white/60 transition-colors">
              <Info size={14} />
            </button>
          </div>
        </div>

        {/* Socials */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-3">Socials</label>
          <div className="space-y-2">
            {[
              { icon: '📷', placeholder: 'https://www.instagram.com/u/*****', label: 'Instagram' },
              { icon: '💼', placeholder: 'https://www.linkedin.com/in/*****', label: 'LinkedIn' },
              { icon: '🎮', placeholder: 'https://www.discord.com/invite/*****', label: 'Discord' },
            ].map((social) => (
              <div key={social.label} className="flex items-center bg-[#141414] border border-[#2A2A2A] rounded-lg overflow-hidden">
                <span className="px-3 py-3 text-base flex-shrink-0">{social.icon}</span>
                <input
                  type="url"
                  placeholder={social.placeholder}
                  defaultValue={social.placeholder}
                  className="flex-1 bg-transparent px-2 py-3 text-sm text-[#E85D5D] placeholder:text-white/30 focus:outline-none truncate"
                />
                <button className="px-3 py-3 text-white/30 hover:text-white/60 transition-colors flex-shrink-0">
                  <Info size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* About Me */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">About Me</label>
          <textarea
            rows={4}
            defaultValue="Full Stack Engineer with a strong foundation in AI-driven applications and scalable web systems, currently contributing at CU-TBI, Chandigarh University...."
            className="w-full bg-[#141414] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors resize-none"
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
            Skills <span className="normal-case text-white/20">(comma separated)</span>
          </label>
          <textarea
            rows={3}
            defaultValue="full stack development, mongo db, redis, NodeJS, expressjs, react, nextjs, cpp, PostgreSQL, supabase, aws, docker"
            className="w-full bg-[#141414] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors resize-none"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 border-t border-[#1a1a1a] flex gap-3">
        <button className="flex-1 py-3 bg-white text-black rounded-xl text-sm font-semibold hover:bg-white/90 transition-colors">
          Save Changes
        </button>
        <button className="flex-1 py-3 bg-[#141414] border border-[#2A2A2A] text-white rounded-xl text-sm font-medium hover:bg-[#1A1A1A] transition-colors">
          Discard
        </button>
      </div>
    </div>
  );
}
