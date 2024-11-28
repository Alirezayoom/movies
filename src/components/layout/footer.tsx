import { menu } from "@/constants";
import { FacebookIcon, InstagramIcon, XIcon } from "@/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-950 border-t border-t-neutral-200 dark:border-t-transparent">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-blue-600">
          <Link className="block font-bold text-xl text-blue-600" href="/">
            Logo
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-neutral-500 dark:text-neutral-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {menu.map((item) => (
            <li key={item.id}>
              <Link
                className="text-neutral-700 dark:tene transition dark:text-neutral-200 hover:text-neutral-700/75"
                href={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <Link
              href="#"
              target="_blank"
              className="text-neutral-700 dark:text-neutral-200 transition hover:text-neutral-700/75"
            >
              <FacebookIcon className="w-5 h-5" />
            </Link>
          </li>

          <li>
            <Link
              href="#"
              target="_blank"
              className="text-neutral-700 dark:text-neutral-200 transition hover:text-neutral-700/75"
            >
              <InstagramIcon className="w-5 h-5" />
            </Link>
          </li>

          <li>
            <Link
              href="#"
              target="_blank"
              className="text-neutral-700 dark:text-neutral-200 transition hover:text-neutral-700/75"
            >
              <XIcon className="w-5 h-5" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
