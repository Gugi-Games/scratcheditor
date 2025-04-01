import { getMaps } from "@/lib/supabase-actions";
import LoadedPage from "./loadedPage";

export default async function Page() {
  const maps = (await getMaps()) || [];

  return <LoadedPage maps={maps} />;
}
