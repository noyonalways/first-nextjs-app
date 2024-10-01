import Link from "next/link";

export default function ArticlePage() {
  return (
    <div className="container mx-auto flex items-center justify-between py-4">
      <h1 className="text-3xl text-center">Article Page</h1>
      <ul className="flex items-center space-x-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </div>
  );
}
