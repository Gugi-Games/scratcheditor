"use server";

import { redirect } from "next/navigation";
import { createServerClient } from "../../utils/supabase/server";

export const getMaps = async () => {
  "use server";

  const supabase = await createServerClient();

  const { data, error } = await supabase.from("post").select("*");

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return data;
};

export const getUserById = async (id) => {
  "use server";

  const supabase = await createServerClient();

  const { data, error } = await supabase
    .from("user")
    .select("*")
    .eq("id", `${id}`);

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return data;
};

export const signIn = async (email: string, password: string) => {
  "use server";

  const supabase = await createServerClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log(error);
    return { success: false, error: error.message };
  }

  if (data?.user) {
    return { success: true };
  }

  return { success: false };
};

export const signUp = async (email: string, password: string) => {
  "use server";

  const supabase = await createServerClient();

  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.log(error);
    return { success: false, error: error.message };
  }

  if (data?.user) {
    return { success: true };
  }

  return { success: false };
};
