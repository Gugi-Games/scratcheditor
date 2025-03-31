import { LoaderCircle } from "lucide-react";

export default function Loader() {
  return (
    <div className={"size-full justify-center items-center flex"}>
      <LoaderCircle size={32} className={"animate-spin"} />
    </div>
  )
}