import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

const links = [
  { href: "/or-bust", label: "...or Bust!" }, // NEW
  { href: "/about", label: "About" },
  { href: "/schedule", label: "Schedule" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <Image src="/images/logo.jpg" alt="" width={98} height={35} className="h-6 w-auto" />
          <span className="hidden sm:inline">Pikes Peak Line Dancers</span>
        </Link>
        <nav className="hidden gap-6 sm:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-neutral-700 hover:text-neutral-950">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/schedule"
          className="rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800"
        >
          Join a class
        </Link>
      </Container>
    </header>
  );
}
