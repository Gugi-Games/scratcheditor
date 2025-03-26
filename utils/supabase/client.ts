import {createClient as _createBrowserClient} from "@supabase/supabase-js";

export const createBrowserClient = () => _createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const client = createBrowserClient();