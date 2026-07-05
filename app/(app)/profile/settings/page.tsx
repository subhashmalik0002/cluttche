import AccountSettingsPanel from '@/components/profile/AccountSettingsPanel';

export default function ProfileSettingsPage() {
  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-white mb-6">Account Settings</h1>
      <div className="rounded-2xl border border-[#2A2A2A] overflow-hidden">
        <AccountSettingsPanel />
      </div>
    </div>
  );
}
