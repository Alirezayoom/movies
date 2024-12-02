"use client";

import { useSession } from "next-auth/react";

import { signIn, signOut } from "@/auth/helpers";

export default function AuthBtnClient() {
  const session = useSession();

  return session?.data?.user ? (
    <button
      className="font-semibold rounded-md bg-blue-600 px-5 h-9 flex items-center text-sm text-white transition hover:bg-blue-700"
      onClick={async () => {
        await signOut();
        await signIn();
      }}
    >
      Sign Out
    </button>
  ) : (
    <button
      className="font-semibold rounded-md bg-blue-600 px-5 h-9 flex items-center text-sm text-white transition hover:bg-blue-700"
      onClick={async () => await signIn()}
    >
      Sign in
    </button>
  );
}
