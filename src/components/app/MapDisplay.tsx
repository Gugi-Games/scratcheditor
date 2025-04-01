"use client";

import { getUserById, likeMap } from "@/lib/supabase-actions";
import { Database } from "../../../types/supabase";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import MapPreview from "./MapPreview";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

type MapContent = Database["public"]["Tables"]["post"]["Row"];

export default function MapDisplay({ content }: { content: any[] }) {
  const router = useRouter();
  const w = window.innerWidth;
  const h = window.innerHeight;
  const size = Math.floor(Math.min(w, h) / 35);

  async function handleLike(id: number) {
    console.log("likeMap client");
    await likeMap(id);
  }

  function handleClick(id: number) {
    router.push(`/map/${id}`);
    router.refresh();
  }

  return (
    <Carousel className="w-screen px-10 overflow-x-hidden">
      <CarouselContent>
        {content.map((item: any) => (
          <CarouselItem
            onClick={() => handleClick(item.id)}
            key={item.id}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <Card>
              <CardHeader className="relative">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <Heart
                  onClick={() => handleLike(item.id)}
                  className="absolute right-6 top-2 hover:fill-red-500 hover:text-red-500"
                />
              </CardHeader>
              <CardContent>
                <MapPreview mapCode={item.data} tileSize={size} />
              </CardContent>
              <CardFooter>
                <pre className="text-sm overflow-x-auto">
                  {/* {JSON.stringify(getUserById(item.author), null, 2)} */}
                </pre>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
