import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

interface TeamPageProps {
  params: {
    teamId: string; // the name of "teamId" must coincide with the name of the folder [teamId]
  };
}

// const teams = [
//   {
//     id: 1,
//     name: "Warriors",
//     city: "Golden State",
//     logoUrl: "/logos/Golden_State_Warriors.svg",
//   },
//   {
//     id: 2,
//     name: "Lakers",
//     city: "Los Angeles",
//     logoUrl: "/logos/lakers.svg",
//   },
//   { id: 3, name: "Celtics", city: "Boston", logoUrl: "/logos/celtics.svg" },
//   { id: 4, name: "Bulls", city: "Chicago", logoUrl: "/logos/bulls.svg" },
// ];

// const players = [
//   { id: 101, name: "Stephen Curry", teamId: 1, position: "G" },
//   { id: 104, name: "LeBron James", teamId: 2, position: "G" },
//   { id: 105, name: "Shanon Brown", teamId: 3, position: "G" },
//   { id: 107, name: "Lonzo Ball", teamId: 4, position: "G" },
// ];

// const getTeamData = (teamId: string) => {
//     const team = teams.find(t => t.id === parseInt(teamId));
//     const teamPlayers = players.filter(p => p.teamId === parseInt(teamId));
//     return { team, players: teamPlayers};
// }

export default async function TeamDetailPage ( {params} : TeamPageProps ) {
    const { teamId } = await params
    const { data: team, error: teamError } = await supabase // fetch the team data
      .from("teams")
      .select("*")
      .eq("team_id", teamId)
      .single()
      ;

    const { data: players, error: playersError } = await supabase // fetch the players of the team
      .from("players")
      .select("*")
      .eq("team_id", teamId)
      ;

    console.log(players)

    if (teamError || playersError) {
        console.error("Error fetching team or players:", teamError || playersError);
    }

    if (!team) {
        return <div className="text-red-500">Team not found</div>;
    }

    return (
        <div>
            <h1 className="text-4xl font-bold">
                {team.name}
            </h1>
            <h2 className="text-2xl mt-8 font-semibold">Roster</h2>
            <ul>
                {players?.map(player => (
                  <Link href={`/players/${player.id}`} key={player.id} className="block">
                    <li key={player.id} className="py-2"> {player.first_name} {player.last_name} - {player.position}</li>
                  </Link>
                ))}
            </ul>
        </div>
    )
}