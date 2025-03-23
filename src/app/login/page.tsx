import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/client";

export default function Page() {
  const signIn = async (email, password) => {
    "use server";

    const supabase = createClient();
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return error;
    else if (data) return redirect("game");
  };

  return <></>;
}
