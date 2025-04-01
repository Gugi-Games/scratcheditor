"use client";

import MapDisplay from "@/components/app/MapDisplay";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoadedPage({ maps }: { maps: any[] }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: { preventDefault: () => void }) {
    e.preventDefault();
    router.push(`/browse/${query}`);
    router.refresh();
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <form
        onSubmit={handleSearch}
        className="flex flex-row items-center gap-2 mt-4"
      >
        <Input
          className="w-2xs self-center"
          id="search"
          type="search"
          value={query}
          placeholder="Search for a Level or User"
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <Button type="submit">Search</Button>
      </form>
      <MapDisplay content={maps} />
    </div>
  );
}
