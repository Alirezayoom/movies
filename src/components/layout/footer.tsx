import { menu } from "@/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-t-neutral-200">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-blue-600">
          <Link className="block font-bold text-xl text-blue-600" href="/">
            Logo
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-neutral-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {menu.map((item) => (
            <li key={item.id}>
              <Link
                className="text-neutral-700 transition hover:text-neutral-700/75"
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
              className="text-neutral-700 transition hover:text-neutral-700/75"
            >
              facebook
            </Link>
          </li>

          <li>
            <Link
              href="#"
              target="_blank"
              className="text-neutral-700 transition hover:text-neutral-700/75"
            >
              instagram
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
