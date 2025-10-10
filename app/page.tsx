import { siteNav } from "@/libs/data";
import Link from "next/link";

export default function Page() {
  return (
    <main className="text-red text-4xl ">
      <div>
        {siteNav.map((nav, i) => {
          return (
            <div key={i}>
              <Link href={nav.href} className="home-link">
                {nav.name}
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
