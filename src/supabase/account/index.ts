import { supabase } from ".."

import { FilledProfileInfoPayload } from "./index.types"

export const fillProfileInfo = async (payload: FilledProfileInfoPayload) => {
    const { data, error } = await supabase
      .from("profiles")
      .upsert(payload);  
  
    if (error) throw new Error(error.message);
  
    return data;  
  };

export const getProfileInfo = async (id: string | null) => {
  if (!id) {
    throw new Error("ID must be a valid string");
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
 