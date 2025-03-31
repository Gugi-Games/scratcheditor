import MapDisplay from "@/components/app/MapDisplay";
import { Input } from "@/components/ui/input";
import { getMaps } from "@/lib/supabase-actions";

export default async function Page() {
  let maps = await getMaps();
  console.log(maps);
  
  return (
    <>
      <title>Browse</title>
      <div className="flex flex-col items-center gap-5">
        <Input
          className="w-2xs self-center"
          type="search"
          placeholder="Search for a Level or User"
        />
        <MapDisplay content={maps} />
      </div>
    </>
  );
}
