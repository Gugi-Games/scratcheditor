import MapDisplay from "@/components/app/MapDisplay";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Input
        className="w-2xs self-center"
        type="search"
        placeholder="Search for a Level or User"
      />
      <MapDisplay />
    </div>
  );
}