import { siteNav } from "@/libs/data";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-end items-end px-1 py-12">
      <div>
        {siteNav.map((nav, i) => {
          return (
            <div key={i} className="w-full">
              <Link
                href={nav.href}
                className="lg:text-8xl text-5xl font-semibold font-helvetica-neue text-right w-full block"
              >
                {nav.name}
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
