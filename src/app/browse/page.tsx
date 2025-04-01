"use server";

import { getMaps, getMostLikedMaps, getNewestMaps } from "@/lib/supabase-actions";
import LoadedPage from "./loadedPage";

export default async function Page() {
  const maps = (await getMaps()) || [];
  const popular = (await getMostLikedMaps()) || [];
  const newest = (await getNewestMaps()) || [];

  return <LoadedPage maps={maps} popular={popular} newest={newest} />;
}
