import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  console.log(filter);
  const links = getAvailableNewsYears();
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
  // const news = getNewsForYear(newsYear);

  // return <NewsList news={news} />;
}
