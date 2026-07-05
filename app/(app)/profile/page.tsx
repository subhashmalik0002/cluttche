'use client';

import { useState } from 'react';
import { Pencil, Instagram, Github, Share2 } from 'lucide-react';
import AccountSettingsPanel from '@/components/profile/AccountSettingsPanel';
import PillTag from '@/components/ui/PillTag';

const skills = [
  'Full Stack Development',
  'MongoDB',
  'ExpressJS',
  'Redis',
  'Node JS',
  'React',
  'Next.js',
  'Docker',
  'AWS',
  'C++',
];

const experiences = [
  {
    title: 'Hackathon Winner',
    description:
      'A 24-hour national-level hackathon for AI & Web3 builders. A Designed to inspire clarity in both personal and professional. curious minds to explore how simplicity can drive deeper impact. To matters.',
  },
  {
    title: 'Hackathon Winner',
    description:
      'A 24-hour national-level hackathon for AI & Web3 builders. A Designed to inspire clarity. To matters.',
  },
];

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    date: '7.04.2026',
    caption: 'Just got the confirmation to attend the StartUpX on 18.04.26 in New Delhi. #ExcitedLetsGo',
  },
  {
    src: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=400',
    date: '7.04.2026',
    caption: 'Just got the confirmation to attend the StartUpX on 18.04.26 in New Delhi. #ExcitedLetsGo',
  },
];

export default function ProfilePage() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="flex h-full min-h-0">
      {/* Main profile content */}
      <div className="flex-1 min-w-0 overflow-y-auto p-6 space-y-6">
        {/* Profile header */}
        <div className="rounded-2xl bg-[#0F0F0F] border border-[#2A2A2A] p-6">
          <div className="flex items-start gap-5">
            <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden ring-2 ring-[#2A2A2A]">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Aman Kumar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-xl font-bold text-white">Aman Kumar</h1>
                    <PillTag variant="outline">Student</PillTag>
                  </div>
                  <p className="text-xs text-white/40">amankumarunofficial2810@gmail.com</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button className="flex items-center gap-1.5 px-3 py-2 border border-[#2A2A2A] rounded-lg text-xs text-white hover:bg-[#1A1A1A] transition-colors">
                    <Share2 size={12} />
                    Share
                  </button>
                  <button
                    onClick={() => setSettingsOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-2 bg-white text-black rounded-lg text-xs font-medium hover:bg-white/90 transition-colors"
                  >
                    View Profile →
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#141414] border border-[#2A2A2A] rounded-lg text-xs text-white/60 hover:text-white transition-colors">
                  <Instagram size={11} />
                  Instagram
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#141414] border border-[#2A2A2A] rounded-lg text-xs text-white/60 hover:text-white transition-colors">
                  <span className="text-xs">🎮</span>
                  Discord
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#141414] border border-[#2A2A2A] rounded-lg text-xs text-white/60 hover:text-white transition-colors">
                  <Github size={11} />
                  GitHub
                </button>
                <button className="ml-auto flex items-center gap-1.5 px-3 py-1.5 bg-[#141414] border border-[#2A2A2A] rounded-lg text-xs text-white/60 hover:text-white transition-colors">
                  📍 Chandigarh University
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2-col grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* About Me */}
          <div className="rounded-xl bg-[#0F0F0F] border border-[#2A2A2A] p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-white">About me</h3>
              <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#1A1A1A] transition-colors">
                <Pencil size={13} className="text-white/40" />
              </button>
            </div>
            <p className="text-xs text-white/50 leading-relaxed line-clamp-4">
              A 24-hour national-level hackathon for AI & Web3 builders. A Designed to inspire clarity in both personal
              and professional. curious minds to explore how simplicity can drive deeper impact. Through engaging
              sessions, interactive showcases, and collaborative discussions, attendees discover ways to str excess and
              focus on what truly matters. Simplicidade matters. Simplicidade encourages...
            </p>
            <button className="text-xs text-[#E85D5D] mt-2 hover:text-[#E85D5D]/80 transition-colors">
              Read More
            </button>
          </div>

          {/* Skills */}
          <div className="rounded-xl bg-[#0F0F0F] border border-[#2A2A2A] p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-white">Skills</h3>
              <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#1A1A1A] transition-colors">
                <Pencil size={13} className="text-white/40" />
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-full text-xs bg-[#1A1A1A] border border-[#2A2A2A] text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="rounded-xl bg-[#0F0F0F] border border-[#2A2A2A] p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-white">Experience</h3>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#1A1A1A] transition-colors">
              <Pencil size={13} className="text-white/40" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {experiences.map((exp, i) => (
              <div key={i} className="rounded-xl bg-[#141414] border border-[#2A2A2A] p-4">
                <h4 className="text-sm font-semibold text-white mb-2">{exp.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed line-clamp-3">{exp.description}</p>
                <button className="text-xs text-white/50 mt-2 hover:text-white transition-colors">See More</button>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="rounded-xl bg-[#0F0F0F] border border-[#2A2A2A] p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-white">Gallery</h3>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#1A1A1A] transition-colors">
              <Pencil size={13} className="text-white/40" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-[#141414] border border-[#2A2A2A]">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2">
                    <span className="px-1.5 py-0.5 rounded text-xs bg-black/60 text-white/70 backdrop-blur-sm">
                      Posted On
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-xs bg-black/60 text-white/70 backdrop-blur-sm ml-1">
                      {img.date}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">{img.caption}</p>
                  <button className="text-xs text-white/40 mt-1.5 hover:text-white transition-colors">See More</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Profile / QR */}
        <div className="rounded-xl bg-[#0F0F0F] border border-[#2A2A2A] p-5 flex items-center gap-8">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-white mb-1">Share Profile with friends</h3>
            <p className="text-xs text-white/40 mb-3">Let others discover your profile and connect</p>
            <button className="px-4 py-2 bg-[#141414] border border-[#2A2A2A] rounded-lg text-xs text-white hover:bg-[#1A1A1A] transition-colors">
              Copy Link
            </button>
          </div>
          {/* QR placeholder */}
          <div className="flex-shrink-0 w-28 h-28 bg-white rounded-xl flex items-center justify-center overflow-hidden">
            <div className="grid grid-cols-7 gap-0.5 p-1">
              {Array.from({ length: 49 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-sm ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right: Account Settings Panel */}
      <div className="w-[300px] flex-shrink-0 border-l border-[#1a1a1a] h-[calc(100vh-56px)] sticky top-0 overflow-hidden">
        <AccountSettingsPanel />
      </div>
    </div>
  );
}
