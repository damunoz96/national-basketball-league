import { supabase } from "@/lib/supabaseClient";
import { DeleteTeamButton } from "../_components/DeleteTeamButton";

export default async function AdminTeamsPage() {
  const { data: teams, error } = await supabase.from("teams").select("*");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Teams</h1>
      {/* Aquí iría una tabla más bonita, pero por ahora una lista funciona */}
      <ul>
        {teams?.map((team) => (
          <li
            key={team.team_id}
            className="flex items-center justify-between p-2 border-b"
          >
            <span>{team.name}</span>
            <DeleteTeamButton teamId={team.team_id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
