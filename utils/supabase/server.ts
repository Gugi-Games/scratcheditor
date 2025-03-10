import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { Database } from '../../types/supabase';  //npx supabase gen types typescript --project-id your-project-id > types/supabase.ts


export const createClient = async () => {
  const cookieStore = cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        async get(name) {
          return (await cookieStore).get(name)?.value;
        },
      },
    }
  );
};