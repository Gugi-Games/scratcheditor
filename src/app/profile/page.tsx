"use client";

import { createBrowserClient } from "@/supabase/client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function Page() {
  const supabase = createBrowserClient();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
        return;
      }

      if (data?.user) {
        setUser(data.user);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      {!user ? (
        <></>
      ) : (
        <pre className="text-sm overflow-x-auto">
          {JSON.stringify(user, null, 2)}
        </pre>
      )}
    </>
  );
}
