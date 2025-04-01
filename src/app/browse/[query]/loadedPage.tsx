"use client";

import MapPreview from "@/components/app/MapPreview";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { likeMap } from "@/lib/supabase-actions";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoadedPage({
  data,
  params,
}: {
  data: any[];
  params: any;
}) {
  const router = useRouter();
  const w = window.innerWidth;
  const h = window.innerHeight;
  const size = Math.floor(Math.min(w, h) / 55);
  const [query, setQuery] = useState("");

  function handleSearch(e: { preventDefault: () => void }) {
    e.preventDefault();
    router.push(`/browse/${query}`);
    router.refresh();
  }

  async function handleLike(id: number) {
    console.log("likeMap client");
    await likeMap(id);
  }

  function handleClick(id: number) {
    router.push(`/map/${id}`);
    router.refresh();
  }

  useEffect(() => {
    setQuery(params.query);
  }, []);

  return (
    <div className="flex flex-col items-center">
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
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {data.map((item: any) => (
          <Card
            onClick={() => handleClick(item.id)}
            key={item.id}
            className="w-[24%] min-w-[450px]"
          >
            <CardHeader className="relative">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <div className="absolute right-10 top-3 flex items-center gap-2">
                <p className="text-lg">{item.likes}</p>
                <Heart
                  onClick={() => handleLike}
                  className="hover:fill-red-500 hover:text-red-500"
                />
              </div>
            </CardHeader>
            <CardContent className="">
              <MapPreview mapCode={item.data} tileSize={size} />
            </CardContent>
            <CardFooter>
              <pre className="text-sm overflow-x-auto">
                {/* {JSON.stringify(getUserById(item.author), null, 2)} */}
              </pre>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
