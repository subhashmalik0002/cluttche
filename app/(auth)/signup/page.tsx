import AuthHeroLayout from '@/components/layout/AuthHeroLayout';
import DashedInput from '@/components/ui/DashedInput';
import DashedButton from '@/components/ui/DashedButton';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <AuthHeroLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-black leading-none tracking-tight text-white">
            Continue
            <br />
            with us
          </h1>
        </div>

        <div className="space-y-3 max-w-sm">
          <DashedInput placeholder="First Name" type="text" autoComplete="given-name" />
          <DashedInput placeholder="Last Name" type="text" autoComplete="family-name" />
        </div>

        <div className="max-w-sm">
          <DashedButton className="w-full justify-between" variant="primary">
            Next →
          </DashedButton>
        </div>

        <p className="text-sm text-white/30">
          Already have an account?{' '}
          <Link href="/login" className="text-white/60 hover:text-white underline transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </AuthHeroLayout>
  );
}
