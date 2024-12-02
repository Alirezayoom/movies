"use client";

import Input from "@/components/common/input";
import Link from "next/link";
import { SIGNUP_MUTATION } from "@/graphql/mutations/signup";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const [signup] = useMutation<any, any>(SIGNUP_MUTATION);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const res = await signup({ variables: { name, email, password } });
      if (res?.data?.signup) {
        const login = await signIn("credentials", {
          email: email,
          password: password,
          redirect: false,
        });
        // Login user
        if (login?.status === 200) {
          router.push("/");
        } else {
        }
      } else {
        console.log(res?.errors?.[0]?.message || "Something went wrong");
      }
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };

  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-[80vh] flex flex-col items-center justify-center">
      <div className="mx-auto max-w-lg text-center mb-4">
        <h2 className="text-2xl font-bold sm:text-4xl dark:text-neutral-100">
          Register
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-0 mt-8 max-w-sm space-y-4 w-full"
      >
        <Input
          id="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
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
            have account?{" "}
            <Link className="underline" href="/login">
              Login
            </Link>
          </p>

          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
}
