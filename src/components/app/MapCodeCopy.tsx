import { Copy } from "lucide-react";
import { Button } from "../ui/button";

export default function MapCodeCopy({ mapCode }: { mapCode: string }) {
  return (
    <div className="flex flex-row justify-between w-full items-center border-2 p-2 rounded-md">
      <p className="truncate">{mapCode}</p>
      <Button
        variant="outline"
        onClick={() => navigator.clipboard.writeText(mapCode)}
        className="flex-shrink-0 ml-2"
      >
        <Copy />
      </Button>
    </div>
  );
}
