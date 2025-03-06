"use client";

import { Button } from "@/components/ui/button";
import { SidebarContent, SidebarGroup, SidebarHeader } from "@/components/ui/sidebar";
import { Sidebar } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [dataCode, setDataCode] = useState("");

  return (
    <>
      <title>Game</title>
      <div className="w-screen h-screen">
        <Sidebar>
          <SidebarHeader />
          <SidebarContent>
            <SidebarGroup>
              Hekk
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <div className="w-screen h-screen flex flex-col items-center">
          <Button className="w-fit m-3" onClick={() => console.log("clicked")}>
            Scan
          </Button>
          <iframe
            src="https://scratch.mit.edu/projects/1142499853/embed"
            width="485"
            height="402"
            className="h-[90%] w-[54%] border-2 border-black bg-[rgb(255,0,0)]"
          ></iframe>
        </div>
      </div>
    </>
  );
}
