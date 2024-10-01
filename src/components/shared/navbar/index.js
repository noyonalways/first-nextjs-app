import Link from "next/link";

export default function Navbar() {
  return (
    <header className="py-4">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between ">
          <Link href={"/"} className="text-3xl text-center">
            Logo
          </Link>
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
            <li>
              <Link href="/counter">Counter</Link>
            </li>
            <li>
              <Link href="/shoes">Shoes</Link>
            </li>
            <li>
              <Link href="/dashboard/admin">Admin</Link>
            </li>
            <li>
              <Link href="/dashboard/user">User</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
