"use server";
import { createServerClient as _createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "../../types/supabase"; //npx supabase gen types typescript --project-id your-project-id > types/supabase.ts

export const createServerClient = async () => {
  const cookieStore = await cookies();

  return _createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name) => cookieStore.get(name)?.value,
        set: (name, value, options) => {
          cookieStore.set(name, value, options);
        },
        remove: (name, options) => {
          cookieStore.set(name, "", { ...options, maxAge: 0 });
        },
      },
    }
  );
};
