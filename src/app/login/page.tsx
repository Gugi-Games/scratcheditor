import LoginForm from "@/components/app/LoginForm";
import { signIn } from "@/lib/supabase-actions";

export default function Page() {
  return (
    <>
      <title>Login</title>
      <div className="flex w-screen h-screen justify-center items-center">
        <LoginForm />
      </div>
    </>
  );
}
