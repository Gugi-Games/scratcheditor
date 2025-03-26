import { createClient as _createBrowserClient } from "@supabase/supabase-js";

export const createBrowserClient = () =>
  _createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: true,
        storageKey: "supabase-auth",
        storage: typeof window !== "undefined" ? localStorage : undefined,
        autoRefreshToken: true,
      },
    }
  );

export const client = createBrowserClient();
