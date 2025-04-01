"use server";

import { getMapByTitleOrAuthorName } from "@/lib/supabase-actions";
import LoadedPage from "./loadedPage";

export default async function Page({ params }: { params: any }) {
  const resolvedParams = await params;
  const maps = await getMapByTitleOrAuthorName(resolvedParams.query);

  return <LoadedPage data={maps || []} params={resolvedParams}/>;
}
