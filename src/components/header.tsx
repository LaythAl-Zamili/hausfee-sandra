"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./container";
import Image from "next/image";

const links = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo + name */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/hfs-logo.jpeg"
              alt="Hausfee Sandra Logo"
              width={40}
              height={40}
              className="h-10 w-10 logo-pulse"
              priority
            />

            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold text-brand">
                Hausfee Sandra
              </span>
              <span className="text-xs text-neutral-500">
                Hilfe im Alltag & Begleitung
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium hover:text-brand ${
                  pathname === l.href ? "text-brand" : "text-neutral-700"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA button */}
          <Link
            href="/kontakt"
            className="btn btn-primary hidden md:inline-flex"
          >
            Anfrage senden
          </Link>
        </div>
      </Container>
    </header>
  );
}
