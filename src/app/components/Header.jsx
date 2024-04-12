import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="bg-black text-white p-2">
        <ul>
          <Link className="mr-1" href="/" prefetch={false}>
            Home
          </Link>
          <Link className="mr-1" href="/henry" prefetch={false}>
            Henry
          </Link>
          <Link className="mr-1" href="/pete" prefetch={false}>
            Pete
          </Link>
          <Link className="mr-1" href="/tommi" prefetch={false}>
            Tommi
          </Link>
        </ul>
      </nav>
    </header>
  );
}
