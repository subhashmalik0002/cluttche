'use client';

import { useState, useRef } from 'react';
import {
  ChevronUp,
  ChevronDown,
  MapPin,
  Mic,
  Upload,
} from 'lucide-react';

function Stepper({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center">
      <span className="text-sm font-semibold text-white mr-1">{value}</span>
      <div className="flex flex-col">
        <button
          onClick={() => onChange(value + 1)}
          className="flex items-center justify-center w-4 h-3.5 text-white/40 hover:text-white transition-colors"
        >
          <ChevronUp size={10} />
        </button>
        <button
          onClick={() => onChange(Math.max(1, value - 1))}
          className="flex items-center justify-center w-4 h-3.5 text-white/40 hover:text-white transition-colors"
        >
          <ChevronDown size={10} />
        </button>
      </div>
    </div>
  );
}

function DashedField({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative border border-dashed border-white/20 rounded-xl bg-[#0D0D0D] ${className}`}
    >
      {children}
    </div>
  );
}

export default function CreateEventPage() {
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [themeColor, setThemeColor] = useState('#C26B6B');
  const [ticketPrice, setTicketPrice] = useState(5);
  const [teamMembers, setTeamMembers] = useState(5);
  const [startTime] = useState('09:00 am');
  const [startDate] = useState('Thu, 9 April');
  const [endTime] = useState('09:00 am');
  const [endDate] = useState('Thu, 9 April');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
  };

  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center p-8 bg-black">
      {/* Ticket card wrapper */}
      <div className="relative w-full max-w-5xl">
        {/* Ticket notch — right side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
          <div className="w-8 h-8 rounded-full bg-black border border-dashed border-white/20" />
        </div>
        {/* Ticket notch — left side */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
          <div className="w-8 h-8 rounded-full bg-black border border-dashed border-white/20" />
        </div>

        {/* Main ticket card */}
        <div className="border border-dashed border-white/20 rounded-2xl bg-[#0A0A0A] overflow-hidden">
          <div className="flex min-h-[520px]">
            {/* LEFT: Image + theme */}
            <div className="w-[360px] flex-shrink-0 p-6 flex flex-col gap-4">
              {/* Image upload */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 rounded-xl overflow-hidden border border-dashed border-white/15 cursor-pointer relative group bg-[#141414]"
                style={{ minHeight: '340px' }}
              >
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt="Event cover"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center group-hover:bg-[#2A2A2A] transition-colors">
                      <Upload size={18} className="text-white/30" />
                    </div>
                    <p className="text-xs text-white/30">Upload event cover</p>
                    <p className="text-xs text-white/20">PNG, JPG up to 10MB</p>
                  </div>
                )}
                {/* Hover overlay */}
                {coverImage && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs text-white/80">Change image</span>
                  </div>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              {/* Change Theme row */}
              <DashedField>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm text-white/40">Change Theme</span>
                  <label className="cursor-pointer">
                    <input
                      type="color"
                      value={themeColor}
                      onChange={(e) => setThemeColor(e.target.value)}
                      className="sr-only"
                    />
                    <div
                      className="w-8 h-8 rounded-lg border border-white/10 transition-transform hover:scale-105"
                      style={{ backgroundColor: themeColor }}
                    />
                  </label>
                </div>
              </DashedField>
            </div>

            {/* Vertical dashed divider */}
            <div className="flex-shrink-0 w-px">
              <div className="h-full border-l border-dashed border-white/15" />
            </div>

            {/* RIGHT: Form */}
            <div className="flex-1 p-6 flex flex-col gap-3">
              {/* Row 1: Event name + Time zone */}
              <div className="grid grid-cols-2 gap-3">
                <DashedField>
                  <input
                    type="text"
                    placeholder="Name of the event"
                    className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                </DashedField>
                <DashedField>
                  <input
                    type="text"
                    placeholder="Time Zone"
                    className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                </DashedField>
              </div>

              {/* Row 2: Start + End */}
              <div className="grid grid-cols-2 gap-3">
                <DashedField>
                  <div className="flex items-center gap-0 px-4 py-3">
                    <span className="text-sm text-white/50 mr-3 flex-shrink-0">Start</span>
                    <div className="flex items-center gap-2 ml-auto">
                      <span className="px-2.5 py-1 rounded-lg bg-[#1A1A1A] text-xs font-medium text-[#E85D5D] border border-[#2A2A2A]">
                        {startTime}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-[#1A1A1A] text-xs font-medium text-[#E85D5D] border border-[#2A2A2A]">
                        {startDate}
                      </span>
                    </div>
                  </div>
                </DashedField>
                <DashedField>
                  <div className="flex items-center gap-0 px-4 py-3">
                    <span className="text-sm text-white/50 mr-3 flex-shrink-0">End</span>
                    <div className="flex items-center gap-2 ml-auto">
                      <span className="px-2.5 py-1 rounded-lg bg-[#1A1A1A] text-xs font-medium text-[#E85D5D] border border-[#2A2A2A]">
                        {endTime}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-[#1A1A1A] text-xs font-medium text-[#E85D5D] border border-[#2A2A2A]">
                        {endDate}
                      </span>
                    </div>
                  </div>
                </DashedField>
              </div>

              {/* Row 3: Location */}
              <div className="grid grid-cols-2 gap-3">
                <DashedField>
                  <div className="flex items-center justify-between px-4 py-3.5">
                    <span className="text-sm text-white/30">Add Event Location</span>
                    <div className="flex flex-col flex-shrink-0 ml-2">
                      <ChevronUp size={11} className="text-white/30" />
                      <ChevronDown size={11} className="text-white/30" />
                    </div>
                  </div>
                </DashedField>
                <DashedField>
                  <div className="flex items-center justify-between px-4 py-3.5">
                    <span className="text-sm font-medium text-white/70">Select current location</span>
                    <MapPin size={15} className="text-white/30 flex-shrink-0 ml-2" />
                  </div>
                </DashedField>
              </div>

              {/* Row 4: Description */}
              <DashedField className="flex-1">
                <div className="flex items-start justify-between px-4 pt-3.5 pb-2">
                  <span className="text-sm text-white/30">Add Description</span>
                  <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-xs text-white/50 hover:text-white hover:bg-[#2A2A2A] transition-colors flex-shrink-0">
                    AI Mode
                    <Mic size={11} />
                  </button>
                </div>
                <textarea
                  placeholder="Describe your event..."
                  className="w-full bg-transparent px-4 pb-3 text-sm text-white placeholder:text-white/20 focus:outline-none resize-none"
                  rows={3}
                />
              </DashedField>

              {/* Row 5: Ticket Price + Team members */}
              <div className="grid grid-cols-2 gap-3">
                <DashedField>
                  <div className="flex items-center justify-between px-4 py-3.5">
                    <span className="text-sm text-white/30">Ticket Price</span>
                    <Stepper value={ticketPrice} onChange={setTicketPrice} />
                  </div>
                </DashedField>
                <DashedField>
                  <div className="flex items-center justify-between px-4 py-3.5">
                    <span className="text-sm text-white/30">Team members</span>
                    <Stepper value={teamMembers} onChange={setTeamMembers} />
                  </div>
                </DashedField>
              </div>

              {/* Create Event button */}
              <button className="w-full py-4 bg-[#1C1C1C] border border-dashed border-white/20 rounded-xl text-sm font-semibold text-white hover:bg-[#252525] hover:border-white/35 transition-all duration-200 tracking-wide">
                Create Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
