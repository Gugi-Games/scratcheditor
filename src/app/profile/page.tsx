"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "../../../utils/supabase/client";
import React, { useEffect, useState } from "react";
import { LogIn } from "lucide-react";
import { User } from "@supabase/supabase-js";

export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

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

  async function handleLogin() {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: "someone@email.com",
      password: "12345",
    });
  }

  return (
    <>
      <Button
        onClick={() => {
          console.log("Clicked");
          handleLogin;
        }}
      >
        <LogIn />
        Login
      </Button>
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
