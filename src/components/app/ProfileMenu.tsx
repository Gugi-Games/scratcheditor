"use client";

import { getUserById } from "@/lib/supabase-actions";
import { createBrowserClient } from "@/supabase/client";
import { User } from "@supabase/supabase-js";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback as Fallback } from "../ui/avatar";
import {
  DropdownMenuContent as Content,
  DropdownMenuItem as Item,
  DropdownMenuLabel as Label,
  DropdownMenu as Menu,
  DropdownMenuSeparator as Separator,
  DropdownMenuTrigger as Trigger,
} from "../ui/dropdown-menu";

export default function ProfileMenu({ ...props }) {
  const supabase = createBrowserClient();
  const [user, setUser] = useState<User | null>(null);
  const [userdata, setUserdata] = useState<any | null>(null);
  const router = useRouter();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const { data, error } = await supabase.auth.getUser();
  //     if (error) {
  //       console.error("Error fetching user:", error);
  //       return;
  //     }

  //     if (data?.user) {
  //       setUser(data.user);
  //     }

  //     setUserdata(getUserById(data.user.id));
  //   };

  //   fetchUser();
  // }, []);

  function handleLogout() {
    supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <div {...props}>
      <Menu>
        <Trigger>
          <Avatar className="size-10">
            <Fallback>HI</Fallback>
          </Avatar>
        </Trigger>
        <Content>
          <Label>
            {/* {userdata.username} */}
            My Profile
            </Label>

          <Separator />

          <Link href={"/profile"}>
            <Item>Profile</Item>
          </Link>

          <Separator />

          <Item className="text-red-700">
            <button onClick={handleLogout} className="flex items-center gap-1">
              <LogOut color="oklch(0.505 0.213 27.518)" />
              Log Out
            </button>
          </Item>
        </Content>
      </Menu>
    </div>
  );
}
