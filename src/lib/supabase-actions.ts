"use server";

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

export const getMapById = async (id: number) => {
  "use server";

  const supabase = await createServerClient();

  const { data, error } = await supabase
    .from("post")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return data;
};

export const getMapByTitleOrAuthorName = async (query: string) => {
  "use server";

  const supabase = await createServerClient();

  const { data, error } = await supabase
    .from("post")
    .select("*")
    .ilike("title", `%${query}%`)
    .range(0, 10);

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return data;
};

export const getMostLikedMaps = async () => {
  "use server";

  const supabase = await createServerClient();

  const { data, error } = await supabase
    .from("post")
    .select("*")
    .order("likes", { ascending: false })
    .limit(10);

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return data;
};

export const getNewestMaps = async () => {
  "use server";

  const supabase = await createServerClient();

  const { data, error } = await supabase
    .from("post")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return data;
};

export const getRecentMaps = async () => {
  "use server";

  const supabase = await createServerClient();

  const { data, error } = await supabase
    .from("post")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return data;
};

export const likeMap = async (id: number) => {
  "use server";
  const supabase = await createServerClient();

  const { data, error: fetchingError } = await supabase
    .from("post")
    .select("likes")
    .eq("id", id)
    .single();

  if (fetchingError) {
    console.error("Error fetching likes:", fetchingError);
    return null;
  }

  const currentLikes = data?.likes || 0;

  const { data: updateData, error: updateError } = await supabase
    .from("post")
    .update({ likes: currentLikes + 1 })
    .eq("id", id);

  if (updateError) {
    console.error("Error updating likes:", updateError);
    return updateError;
  }

  return updateData;
};

export const getUserById = async (id: string) => {
  "use server";

  const supabase = await createServerClient();

  const { data, error } = await supabase.from("user").select("*").eq("id", id);
  console.log("getUserById data", data);
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
  const supabase = await createServerClient();
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error(error);
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
