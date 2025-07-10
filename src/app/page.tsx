import { TeamCard } from "@/app/teams/_components/TeamCard";
import { supabase } from "@/lib/supabaseClient";
export default async function Home() {
  const { data: teams, error } = await supabase.from("teams").select("*");
  console.log("Teams data:", teams);
  if (error) {
    console.error("Error fetching teams:", error);
    return <div>Error loading teams</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Teams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teams.map((team) => (
          <TeamCard
            id={team.team_id}
            key={team.team_id}
            name={team.name}
            city={team.city}
            logoUrl={team.logo_url}
          />
        ))}
      </div>
    </div>
  );
}
