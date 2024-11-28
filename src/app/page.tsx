import { fetchCountry } from "@/services/fetchCountry";

export default async function Home() {
  const data = await fetchCountry("BR");
  console.log(data, "data");

  return (
    <div className="flex justify-center items-center text-neutral-900 dark:text-neutral-50 h-[80vh] w-full font-bold text-3xl">
      Welcome to Movies
    </div>
  );
}
