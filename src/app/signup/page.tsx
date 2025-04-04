import SignupForm from "@/components/app/SignupForm";
import { signUp } from "@/lib/supabase-actions";

export default function Page() {
  return (
    <>
      <title>Signup</title>
      <div className="flex w-screen h-screen justify-center items-center">
        <SignupForm />
      </div>
    </>
  );
}
