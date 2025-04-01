"use client";

import MapCodeCopy from "@/components/app/MapCodeCopy";
import MapPreview from "@/components/app/MapPreview";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { likeMap } from "@/lib/supabase-actions";
import { Heart } from "lucide-react";

export default function LoadedPage({ map }: { map: any }) {
  async function handleLike() {
    await likeMap(map.id);
  }

  return (
    <div className="flex justify-start items-center gap-2 mx-2">
      <Card className="mx-auto w-1/3">
        <CardHeader className="relative">
          <CardTitle className="text-2xl">{map.title}</CardTitle>
          <CardDescription>{map.description}</CardDescription>
          <div className="absolute right-10 top-3 flex items-center gap-2">
            <p className="text-lg">{map.likes}</p>
            <Heart
              onClick={handleLike}
              className="hover:fill-red-500 hover:text-red-500"
            />
          </div>
        </CardHeader>
        <CardContent className="flex items-center">
          <MapCodeCopy mapCode={map.data} />
        </CardContent>
      </Card>

      <div className="border-2 p-1 rounded-md">
        <MapPreview mapCode={map.data} tileSize={40} />
      </div>
    </div>
  );
}
