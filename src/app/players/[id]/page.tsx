interface PlayerDetailPageProps {
    params: {
        id: string; // the name of "id" must coincide with the name of the folder [id]
    }
}

const players = [
  { id: 101, name: "Stephen Curry", teamId: 1, position: "G" },
  { id: 102, name: "Klay Thompson", teamId: 1, position: "G" },
  { id: 103, name: "Kobe Bryant", teamId: 2, position: "G" },
  { id: 104, name: "LeBron James", teamId: 2, position: "G" },
  { id: 105, name: "Shanon Brown", teamId: 3, position: "G" },
  { id: 106, name: "Jayson Tatum", teamId: 3, position: "G" },
  { id: 107, name: "Lonzo Ball", teamId: 4, position: "G" },
  { id: 108, name: "Zach Lavine", teamId: 4, position: "G" },
];

const getPlayerData = (playerId: string) => {
    const player = players.find(p => p.id === parseInt(playerId));
    return player;
}

export default function PlayerDetailPage( { params } : PlayerDetailPageProps ) {
    const player = getPlayerData(params.id);
    if (!player) {
        return <div className="text-red-500">Player not found</div>;
    }   
    return (
        <div>
            <h1>Players id: {params.id}</h1>
            <h1>Players name: {player.name}</h1>
            <h1>Players position: {player.position}</h1>
            <h1>Players teamId: {player.teamId}</h1>
        </div>
    )
}