"use server"; // ¡Esto es lo que la convierte en una Server Action!

import { supabase } from "@/lib/supabaseClient";
import { revalidatePath } from "next/cache";

export async function createTeam(formData: FormData) {
  const teamData = {
    name: formData.get("name") as string,
    city: formData.get("city") as string,
    logo_url: formData.get("logoUrl") as string,
  };

  // Aquí va la lógica para insertar en Supabase
  const { data, error } = await supabase
    .from("teams")
    .insert([teamData])
    .select();

  if (error) {
    console.error("Error creating team:", error);
    // Aquí podríamos devolver un mensaje de error
    return;
  }

  console.log("Team created successfully:", data);

  // Nuevo Concepto: Revalidación de Caché
  // Esto le dice a Next.js que los datos de la homepage han cambiado
  // y que necesita volver a pedirlos la próxima vez que alguien la visite.
  revalidatePath("/");
}
