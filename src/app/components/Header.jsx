import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="bg-black text-white p-2">
        <ul>
          <Link href="/" prefetch={false}>
            Home
          </Link>
          <Link href="/henry" prefetch={false}>
            Henry
          </Link>
        </ul>
      </nav>
    </header>
  );
}
