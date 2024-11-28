import Input from "@/components/common/input";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-[80vh] flex flex-col items-center justify-center">
      <div className="mx-auto max-w-lg text-center mb-4">
        <h2 className="text-2xl font-bold sm:text-4xl dark:text-neutral-100">
          Register
        </h2>
      </div>

      <form action="#" className="mx-auto mb-0 mt-8 max-w-sm space-y-4 w-full">
        <Input id="name" placeholder="Name" />
        <Input id="lastname" placeholder="Last name" />
        <Input id="email" placeholder="Email" />
        <Input id="password" type="password" placeholder="Password" />

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
