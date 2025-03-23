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

export default function MapDisplay(...content) {
  return (
    <>
      <Carousel className="w-screen px-10 overflow-x-hidden">
        {content.map((item) => (
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardHeader>
                  <CardTitle>{"No Title"}</CardTitle>
                  <CardDescription>{""}</CardDescription>
                </CardHeader>
                <CardContent>
                  {"DATA"}
                </CardContent>
                <CardFooter>
                  {"AUTHOR"}
                </CardFooter>
              </Card>
            </CarouselItem>
          </CarouselContent>
        ))}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
