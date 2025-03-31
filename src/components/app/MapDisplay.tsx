import { getUserById } from "@/lib/supabase-actions";
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

type MapContent = Database["public"]["Tables"]["post"]["Row"];

export default async function MapDisplay({ content }: { content: any }) {
  return (
    <>
      <Carousel className="w-screen px-10 overflow-x-hidden">
        <CarouselContent>
          {content.map((item: any) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <MapPreview mapCode={item.data} tileSize={10} />
                </CardContent>
                <CardFooter>
                  {getUserById(item.author)}
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
