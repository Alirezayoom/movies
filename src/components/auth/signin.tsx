"use client";

import Input from "@/components/common/input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      redirectTo: "/",
    });
  };

  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-[80vh] flex flex-col items-center justify-center">
      <div className="mx-auto max-w-lg text-center mb-4">
        <h2 className="text-2xl font-bold sm:text-4xl dark:text-neutral-100">
          Login
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-0 mt-8 max-w-sm space-y-4 w-full"
      >
        <Input
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            No account?{" "}
            <Link className="underline" href="/signup">
              Sign Up
            </Link>
          </p>

          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
        </div>
      </form>
    </section>
  );
}
