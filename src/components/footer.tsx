import Container from "./container";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-3">
          {/* Brand / Slogan */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/hfs-logo.jpeg"
                alt="Hausfee Sandra Logo"
                width={45}
                height={45}
                className="h-11 w-11 logo-pulse"
              />

              <div className="font-display text-lg text-brand font-semibold">
                Hausfee Sandra
              </div>
            </div>

            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Ihre helfende Hand im Alltag in Eisenhüttenstadt – mit Herz, Zeit
              und einem offenen Ohr.
            </p>
          </div>

          {/* Contact info */}
          <div className="text-sm">
            <div className="font-semibold mb-1 text-neutral-800">Kontakt</div>

            <p>📍 Eisenhüttenstadt</p>

            <p className="mt-1">
              📞{" "}
              <a href="tel:01639512158" className="hover:text-brand">
                0163 9512158
              </a>
            </p>

            <p>
              💬{" "}
              <a
                href="https://wa.me/491639512158"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand"
              >
                WhatsApp Chat
              </a>
            </p>

            <p>
              ✉️{" "}
              <a
                href="mailto:hausfee-sandra@gmx.de"
                className="hover:text-brand"
              >
                hausfee-sandra@gmx.de
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="text-sm">
            <div className="font-semibold mb-1 text-neutral-800">Seiten</div>

            <p>
              <Link href="/" className="hover:text-brand">
                Start
              </Link>
            </p>
            <p>
              <Link href="/leistungen" className="hover:text-brand">
                Leistungen
              </Link>
            </p>
            <p>
              <Link href="/ueber-mich" className="hover:text-brand">
                Über mich
              </Link>
            </p>
            <p>
              <Link href="/faq" className="hover:text-brand">
                FAQ
              </Link>
            </p>

            <p className="mt-2">
              <Link href="/impressum" className="hover:text-brand">
                Impressum
              </Link>
            </p>
            <p>
              <Link href="/datenschutz" className="hover:text-brand">
                Datenschutz
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t py-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Hausfee Sandra. Alle Rechte vorbehalten.
        </div>
      </Container>
    </footer>
  );
}
