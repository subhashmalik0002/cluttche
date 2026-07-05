import Link from 'next/link';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'developing a generative dashboard for your apps.',
  },
  {
    src: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'developing a generative dashboard for your apps.',
  },
  {
    src: 'https://images.pexels.com/photos/36478/amazing-beautifull-beauty-bloom-36478.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'developing a generative dashboard for your apps.',
  },
  {
    src: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'developing a generative dashboard for your apps.',
  },
  {
    src: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'developing a generative dashboard for your apps.',
  },
  {
    src: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'developing a generative dashboard for your apps.',
  },
];

interface AuthHeroLayoutProps {
  children: React.ReactNode;
  footerLinks?: { label: string; href: string }[];
}

export default function AuthHeroLayout({ children, footerLinks }: AuthHeroLayoutProps) {
  const links = footerLinks || [
    { label: 'our story', href: '#' },
    { label: 'faqs', href: '#' },
    { label: 'join us', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between px-8 py-5 flex-shrink-0">
        <Link href="/" className="text-xl font-black tracking-tight text-white uppercase">
          CLUTXH
        </Link>
        <Link
          href="/explore"
          className="px-4 py-2 text-sm text-white border border-dashed border-white/30 rounded-lg hover:border-white/60 hover:bg-white/5 transition-all"
        >
          Register as Organisation
        </Link>
      </header>

      {/* Main content */}
      <main className="flex flex-1 overflow-hidden">
        {/* Left: hero content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-2xl">
          {children}
        </div>

        {/* Right: masonry image gallery */}
        <div className="hidden md:block w-[420px] lg:w-[500px] flex-shrink-0 overflow-y-auto h-[calc(100vh-72px)]">
          <div className="grid grid-cols-2 gap-3 p-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-[#141414]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={img.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-3 py-2.5 bg-[#0A0A0A]">
                  <p className="text-xs text-white/60 leading-snug">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between px-8 py-4 border-t border-[#1a1a1a] flex-shrink-0">
        <div className="flex items-center gap-4">
          {links.map((link, i) => (
            <span key={link.href} className="flex items-center gap-4">
              <Link href={link.href} className="text-xs text-white/30 hover:text-white/60 transition-colors">
                {link.label}
              </Link>
              {i < links.length - 1 && <span className="text-white/20 text-xs">·</span>}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            Twitter
          </a>
          <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            Discord
          </a>
        </div>
      </footer>
    </div>
  );
}
