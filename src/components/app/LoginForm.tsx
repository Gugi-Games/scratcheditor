"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { createBrowserClient } from "@/supabase/client";

const supabase = createBrowserClient();

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSignIn(e: { preventDefault: () => void }) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password,
      });

      if (error) {
        setError(error.message || "Login failed");
        return;
      }

      if (data?.user) {
        const user = await supabase.auth.getUser();
        console.log(user.data.user);
        const session = await supabase.auth.getSession();
        console.log(session.data.session);

        router.push("game");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      setError("An unexpected error occurred");
    }
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your credentials to log into your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSignIn}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label>Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label>Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Log In
            </Button>
          </div>
        </form>
        <Link
          href={"signup"}
          className="underline text-sm hover:text-muted-foreground"
        >
          Don't have an account yet?
        </Link>
      </CardContent>
    </Card>
  );
}
