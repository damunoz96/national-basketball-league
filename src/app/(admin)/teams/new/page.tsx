// src/app/(admin)/teams/new/page.tsx
import { NewTeamForm } from "./_components/NewTeamForm";

export default function NewTeamPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Team</h1>
      <NewTeamForm />
    </div>
  );
}
