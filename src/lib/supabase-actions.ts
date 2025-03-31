"use server";

import { createBrowserClient } from "@/supabase/client";
import { createServerClient } from "@/supabase/server";

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

export const getUserById = async (id: any) => {
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

export const signUp = async (
  email: string,
  password: string,
  username: string
) => {
  "use server";
  console.log(email, password, username);
  const supabase = await createBrowserClient();
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  console.log(data);
  if (error) {
    console.log(error);
    return { success: false, error: error.message };
  }

  if (data?.user) {
    await supabase.from("user").insert({
      id: data.user.id,
      username: username,
    });

    return { success: true };
  }

  return { success: false };
};
