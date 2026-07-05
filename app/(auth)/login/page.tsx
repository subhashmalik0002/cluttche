import AuthHeroLayout from '@/components/layout/AuthHeroLayout';
import DashedButton from '@/components/ui/DashedButton';
import PillTag from '@/components/ui/PillTag';
import Link from 'next/link';

const loginFooterLinks = [
  { label: 'Our Story', href: '#' },
  { label: "FAQ's", href: '#' },
  { label: 'Contact Us', href: '#' },
];

export default function LoginPage() {
  return (
    <AuthHeroLayout footerLinks={loginFooterLinks}>
      <div className="space-y-8">
        <div className="flex items-center gap-3 flex-wrap">
          <PillTag variant="outline">S5 Starts June 15</PillTag>
          <PillTag variant="red">last chance to apply</PillTag>
        </div>

        <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.05] tracking-tight text-white">
          It&apos;s time. ready
          <br />
          to build your idea
          <br />
          over six weeks?
        </h1>

        <div className="max-w-sm">
          <DashedButton variant="outline" className="w-full justify-center">
            Apply to clutch
          </DashedButton>
        </div>

        <p className="text-sm text-white/30">
          New to Clutch?{' '}
          <Link href="/signup" className="text-white/60 hover:text-white underline transition-colors">
            Create an account
          </Link>
        </p>
      </div>
    </AuthHeroLayout>
  );
}
