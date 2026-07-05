'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  ChevronUp,
  ChevronDown,
  MapPin,
  Mic,
  Upload,
  CheckCircle,
  Loader2,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

function Stepper({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-0.5">
      <span className="text-sm font-semibold text-white mr-1">{value}</span>
      <div className="flex flex-col">
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="flex items-center justify-center w-4 h-3.5 text-white/40 hover:text-white transition-colors"
        >
          <ChevronUp size={10} />
        </button>
        <button
          type="button"
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
    <div className={`border border-dashed border-white/20 rounded-xl bg-[#0D0D0D] ${className}`}>
      {children}
    </div>
  );
}

export default function CreateEventPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [themeColor, setThemeColor] = useState('#C26B6B');
  const [title, setTitle] = useState('');
  const [timezone, setTimezone] = useState('');
  const [startTime, setStartTime] = useState('09:00 am');
  const [startDate, setStartDate] = useState('Thu, 9 April');
  const [endTime, setEndTime] = useState('09:00 am');
  const [endDate, setEndDate] = useState('Thu, 9 April');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [ticketPrice, setTicketPrice] = useState(5);
  const [teamMembers, setTeamMembers] = useState(5);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setCoverImage(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!title.trim()) {
      setError('Event name is required.');
      return;
    }
    setLoading(true);
    setError(null);

    const { error: dbError } = await supabase.from('events').insert({
      title: title.trim(),
      timezone: timezone.trim() || null,
      start_time: startTime,
      start_date: startDate,
      end_time: endTime,
      end_date: endDate,
      location: location.trim() || null,
      description: description.trim() || null,
      ticket_price: ticketPrice,
      team_members: teamMembers,
      theme_color: themeColor,
      cover_image_url: coverImage,
    });

    setLoading(false);

    if (dbError) {
      setError(dbError.message);
      return;
    }

    setSuccess(true);
    setTimeout(() => router.push('/explore'), 1800);
  };

  if (success) {
    return (
      <div className="min-h-[calc(100vh-56px)] flex items-center justify-center bg-black">
        <div className="flex flex-col items-center gap-4 text-center">
          <CheckCircle size={48} className="text-green-400" />
          <h2 className="text-2xl font-bold text-white">Event Created!</h2>
          <p className="text-sm text-white/50">Redirecting to explore...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center p-8 bg-black">
      {/* Ticket wrapper */}
      <div className="relative w-full max-w-5xl">
        {/* Right notch */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-8 h-8 rounded-full bg-black border border-dashed border-white/25" />
        {/* Left notch */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-black border border-dashed border-white/25" />

        {/* Ticket card */}
        <div className="border border-dashed border-white/20 rounded-2xl bg-[#0A0A0A] overflow-hidden">
          <div className="flex min-h-[540px]">

            {/* LEFT panel */}
            <div className="w-[340px] flex-shrink-0 p-6 flex flex-col gap-4">
              {/* Cover image */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 rounded-xl overflow-hidden border border-dashed border-white/15 cursor-pointer relative group bg-[#141414]"
                style={{ minHeight: '360px' }}
              >
                {coverImage ? (
                  <>
                    <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs text-white font-medium">Change photo</span>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center group-hover:bg-[#2A2A2A] transition-colors">
                      <Upload size={18} className="text-white/30" />
                    </div>
                    <p className="text-xs text-white/30">Upload event cover</p>
                    <p className="text-xs text-white/20">PNG, JPG up to 10MB</p>
                  </div>
                )}
              </div>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />

              {/* Theme color */}
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
                      className="w-8 h-8 rounded-lg border border-white/10 hover:scale-105 transition-transform"
                      style={{ backgroundColor: themeColor }}
                    />
                  </label>
                </div>
              </DashedField>
            </div>

            {/* Vertical divider */}
            <div className="w-px flex-shrink-0 border-l border-dashed border-white/15" />

            {/* RIGHT panel — form */}
            <div className="flex-1 p-6 flex flex-col gap-3">

              {/* Error banner */}
              {error && (
                <div className="px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400">
                  {error}
                </div>
              )}

              {/* Row 1: Name + Timezone */}
              <div className="grid grid-cols-2 gap-3">
                <DashedField>
                  <input
                    type="text"
                    placeholder="Name of the event"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                </DashedField>
                <DashedField>
                  <input
                    type="text"
                    placeholder="Time Zone"
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                </DashedField>
              </div>

              {/* Row 2: Start + End */}
              <div className="grid grid-cols-2 gap-3">
                <DashedField>
                  <div className="flex items-center px-4 py-3">
                    <span className="text-sm text-white/50 mr-3 flex-shrink-0">Start</span>
                    <div className="flex items-center gap-2 ml-auto">
                      <input
                        type="text"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="w-20 px-2 py-1 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-medium text-[#E85D5D] focus:outline-none text-center"
                      />
                      <input
                        type="text"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-24 px-2 py-1 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-medium text-[#E85D5D] focus:outline-none text-center"
                      />
                    </div>
                  </div>
                </DashedField>
                <DashedField>
                  <div className="flex items-center px-4 py-3">
                    <span className="text-sm text-white/50 mr-3 flex-shrink-0">End</span>
                    <div className="flex items-center gap-2 ml-auto">
                      <input
                        type="text"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="w-20 px-2 py-1 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-medium text-[#E85D5D] focus:outline-none text-center"
                      />
                      <input
                        type="text"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-24 px-2 py-1 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-medium text-[#E85D5D] focus:outline-none text-center"
                      />
                    </div>
                  </div>
                </DashedField>
              </div>

              {/* Row 3: Location */}
              <div className="grid grid-cols-2 gap-3">
                <DashedField>
                  <input
                    type="text"
                    placeholder="Add Event Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                </DashedField>
                <DashedField>
                  <button
                    type="button"
                    onClick={() => navigator.geolocation?.getCurrentPosition(
                      (pos) => setLocation(`${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`),
                      () => {}
                    )}
                    className="flex items-center justify-between w-full px-4 py-3.5"
                  >
                    <span className="text-sm font-medium text-white/70">Select current location</span>
                    <MapPin size={15} className="text-white/30 flex-shrink-0" />
                  </button>
                </DashedField>
              </div>

              {/* Row 4: Description */}
              <DashedField className="flex-1">
                <div className="flex items-start justify-between px-4 pt-3.5 pb-1">
                  <span className="text-sm text-white/30">Add Description</span>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-xs text-white/50 hover:text-white hover:bg-[#2A2A2A] transition-colors flex-shrink-0"
                  >
                    AI Mode <Mic size={11} />
                  </button>
                </div>
                <textarea
                  placeholder="Describe your event..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-transparent px-4 pb-3 text-sm text-white placeholder:text-white/20 focus:outline-none resize-none"
                  rows={3}
                />
              </DashedField>

              {/* Row 5: Price + Team */}
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

              {/* Submit */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-4 bg-[#1C1C1C] border border-dashed border-white/20 rounded-xl text-sm font-semibold text-white hover:bg-[#252525] hover:border-white/35 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 tracking-wide flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Creating...
                  </>
                ) : (
                  'Create Event'
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
