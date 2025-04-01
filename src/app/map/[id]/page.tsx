import { getMapById } from "@/lib/supabase-actions";
import LoadedPage from "./loadedPage";

export default async function Page({ params }: { params: any }) {
  const map = await getMapById(Number(params.id));
  
  if (!map) { 
    return (
      <div className="text-red-600 flex justify-center items-center w-screen h-screen">
        Map not found
      </div>
    );
  }

  return <LoadedPage map={map} />;
}