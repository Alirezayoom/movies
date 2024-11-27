import Link from "next/link";
import React from "react";
import { menu } from "@/constants";

export default function Header() {
  return (
    <header>
      <div className="h-16"></div>
      <div className="fixed bg-neutral-100 border-b border-b-neutral-200 top-0 left-0 w-full">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link className="block font-bold text-xl text-blue-600" href="/">
            Logo
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {menu.map((item) => (
                  <li key={item.id}>
                    <Link
                      className="text-neutral-600 transition font-semibold hover:text-neutral-500/75"
                      href={item.link}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="block font-semibold rounded-md bg-blue-600 px-5 py-2.5 text-sm text-white transition hover:bg-blue-700"
                  href="/login"
                >
                  Login
                </Link>

                <Link
                  className="hidden font-semibold rounded-md bg-neutral-100 px-5 py-2.5 text-sm text-blue-600 transition hover:text-blue-600/75 sm:block"
                  href="/register"
                >
                  Register
                </Link>
              </div>

              <button className="block rounded bg-neutral-100 p-2.5 text-neutral-600 transition hover:text-neutral-600/75 md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
