import { TeamCard } from "@/app/teams/_components/TeamCard";
export default function Home() {
  const teams = [
    {
      id: 1,
      name: "Warriors",
      city: "Golden State",
      logoUrl: "/logos/Golden_State_Warriors.svg",
    },
    {
      id: 2,
      name: "Lakers",
      city: "Los Angeles",
      logoUrl: "/logos/lakers.svg",
    },
    { id: 3, name: "Celtics", city: "Boston", logoUrl: "/logos/celtics.svg" },
    { id: 4, name: "Bulls", city: "Chicago", logoUrl: "/logos/bulls.svg" },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Teams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teams.map((team) => (
          <TeamCard
            id={team.id}
            key={team.id}
            name={team.name}
            city={team.city}
            logoUrl={team.logoUrl}
          />
        ))}
      </div>
    </div>
  );
}
