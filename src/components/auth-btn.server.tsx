import { SessionProvider } from "next-auth/react";
import { BASE_PATH, auth } from "@/auth";
import AuthBtnClient from "./auth-btn.client";

export default async function AuthBtn() {
  const session = await auth();

  if (session && session.user) {
    session.user = {
      email: session.user.email,
    };
  }

  return (
    <SessionProvider basePath={BASE_PATH} session={session}>
      <AuthBtnClient />
    </SessionProvider>
  );
}
