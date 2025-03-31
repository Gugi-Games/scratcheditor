"use client";

import { redirect } from "next/navigation";
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
import { signUp } from "@/lib/supabase-actions";
import Link from "next/link";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [passwordCheck, setPasswordCheck] = useState("");

  async function handleSignUp(e: { preventDefault: () => void }) {
    e.preventDefault();
    try {
      // if(password !== passwordCheck)
      const result = await signUp(email, password, username);
      if (result?.success) redirect("/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Signup</CardTitle>
        <CardDescription>
          Enter your credentials to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSignUp}>
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
              <Label>Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label>Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* <div className="grid gap-2">
              <Label>Repeat Password</Label>
              <Input
                id="passwordCheck"
                type="passwordConfirm"
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}
                required
              />
            </div> */}
            <Button type="submit" className="w-full">
              SignUp
            </Button>
          </div>
        </form>
        <Link href={"login"} className="underline text-sm">
          Already have an account?
        </Link>
      </CardContent>
    </Card>
  );
}
