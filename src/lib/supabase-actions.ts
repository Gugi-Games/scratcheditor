"use server";

import { createServerClient } from "../../utils/supabase/server";

const supabase = await createServerClient();

export const getMaps = async () => {
  const { data, error } = await supabase.from("post").select("*");

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return data;
};

  export const getUserById = async (id) => {
    const { data, error } = await supabase.from("user").select("*").eq('id', `${id}`);

    if (error) {
      console.error("Error fetching data:", error);
      return null;
    }

    return data;
  };
