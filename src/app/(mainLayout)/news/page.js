import Link from "next/link";

export default function NewsHomePage() {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl text-center">News Page</h1>

      <h2 className="text-xl my-2">Latest Blog and Article</h2>
      <ul>
        <li>
          <Link href={`/news/blog`}>Blog</Link>
        </li>
        <li>
          <Link href={`/news/article`}>Article</Link>
        </li>
      </ul>
    </div>
  );
}
