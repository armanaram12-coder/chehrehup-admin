import { AuthPage } from "@/components/auth-page";
import { authProviderServer } from "@/providers/auth-provider/auth-provider.server";
import { redirect } from "next/navigation";

export default async function Login() {
  let authenticated = false;
  let redirectTo = "/";

  try {
    const data = await authProviderServer.check();
    authenticated = data.authenticated;
    redirectTo = data.redirectTo || "/";
  } catch (error) {
    // اگر ارور داد، فرض کن لاگین نکرده
  }

  if (authenticated) {
    redirect(redirectTo);
  }

  return <AuthPage type="login" />;
}
