import { getMapById } from "@/lib/supabase-actions";
import LoadedPage from "./loadedPage";

export default async function Page({ params }: { params: any }) {
  const resolvedParams = await params;
  const map = await getMapById(Number(resolvedParams.id));
  
  if (!map) { 
    return (
      <p className="text-red-600 text-4xl flex justify-center font-bold items-center w-screen h-screen">
        Map not found
      </p>
    );
  }

  return <LoadedPage map={map} />;
}