"use client";

import { redirect, useRouter } from "next/navigation";
import { createBrowserClient } from "../../../utils/supabase/client";
import { useEffect, useState } from "react";

const supabase = createBrowserClient();

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      const supabase = createBrowserClient();
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
        router.refresh();
      } else {
        setIsLoading(false);
      }
    }

    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
