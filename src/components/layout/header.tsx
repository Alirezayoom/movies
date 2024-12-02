import Link from "next/link";
import React from "react";
import DarkModeToggle from "../common/dark-mode-toggle";
import { menu } from "@/constants";
import { MenuIcon } from "@/icons";
import { auth } from "@/auth";
import AuthBtn from "../auth-btn.server";

export default async function Header() {
  const session = await auth();

  return (
    <header className="relative z-30">
      <div className="h-16"></div>
      <div className="fixed bg-neutral-100/80 dark:bg-neutral-950/80 backdrop-blur-lg border-b border-b-neutral-200 dark:border-b-transparent top-0 left-0 w-full">
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
                      className="text-neutral-600 dark:text-neutral-200 transition font-semibold hover:text-neutral-500/75"
                      href={item.link}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="flex gap-4 items-center">
                <DarkModeToggle />
                {session?.user ? (
                  <AuthBtn />
                ) : (
                  <div className="flex gap-4">
                    <Link
                      className="font-semibold rounded-md bg-blue-600 px-5 h-9 flex items-center text-sm text-white transition hover:bg-blue-700"
                      href="/signin"
                    >
                      Sign in
                    </Link>

                    <Link
                      className="hidden font-semibold rounded-md dark:bg-neutral-700 px-5 h-9  text-sm text-blue-600 dark:text-white transition hover:text-blue-600/75 sm:flex items-center bg-neutral-200"
                      href="/signup"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>

              <button className="block md:hidden">
                <MenuIcon className="w-6 h-6 text-neutral-900 dark:text-neutral-100" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
