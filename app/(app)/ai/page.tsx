import PersonCard from '@/components/cards/PersonCard';
import PromptChip from '@/components/ai/PromptChip';
import ClutchAIBar from '@/components/ai/ClutchAIBar';
import { mockPeople, aiQueryChips } from '@/lib/mockData';

export default function AIPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-56px)]">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-6 pt-12 pb-6">
        {/* Hero */}
        <div className="mb-10 text-center">
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-none tracking-tight text-white">
            find and be found.
          </h1>
        </div>

        {/* People cards */}
        <div className="mb-8">
          <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-none -mx-6 px-6">
            {mockPeople.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        </div>

        {/* Query chips */}
        <div className="mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-none">
            {aiQueryChips.map((chip) => (
              <PromptChip key={chip} label={chip} />
            ))}
          </div>
        </div>
      </div>

      {/* Fixed bottom bar */}
      <ClutchAIBar />
    </div>
  );
}
