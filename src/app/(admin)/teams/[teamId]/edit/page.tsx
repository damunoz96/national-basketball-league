import { supabase } from "@/lib/supabaseClient"

interface EditTeamPageProps  {
    params: {
        teamId: string
    }
}

export default async function EditTeamPage({ params }: EditTeamPageProps) {
    const { data: team } = await supabase
        .from("teams")
        .select("*")
        .eq("team_id", params.teamId)
        .single()
}