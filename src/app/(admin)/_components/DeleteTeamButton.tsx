"use client"
import { Trash2 } from "lucide-react";
import { deleteTeam } from "../teams/actions";

interface DeleteTypeButtonProps {
    teamId: number;
}

export const DeleteTeamButton = ({ teamId }: DeleteTypeButtonProps) => {
  const deleteTeamWithId = deleteTeam.bind(null, teamId);
  return (
    <form action={deleteTeamWithId}>
      <button type="submit" className="text-red-500 hover:text-red-700">
        <Trash2 size={18} />
      </button>
    </form>
  );
};