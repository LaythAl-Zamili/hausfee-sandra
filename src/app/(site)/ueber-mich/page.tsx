import Section from "@/components/section";
import Image from "next/image";
import { Heart, MessageCircleHeart, HandHeart } from "lucide-react";

export const metadata = {
  title: "Über mich – Hausfee Sandra",
};

export default function UeberMichPage() {
  return (
    <Section>
      <div className="grid gap-10 items-start md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
        {/* Text block */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand)]">
            Über mich
          </p>
          <h1 className="h1 mt-2">Ich bin Sandra – Ihre Hausfee im Alltag</h1>

          <p className="mt-4 text-neutral-700">
            Mir ist wichtig, dass Sie sich zu Hause sicher, gesehen und gut
            begleitet fühlen. Mit viel Geduld, Herz und Verlässlichkeit
            unterstütze ich Menschen in ihrem Alltag – ob bei Haushalt,
            Terminen, Spaziergängen oder einfach bei einem offenen Gespräch.
          </p>

          <p className="mt-3 text-neutral-700">
            Jede Situation ist anders. Deshalb nehme ich mir Zeit, gut zuzuhören
            und gemeinsam mit Ihnen zu schauen, welche Unterstützung wirklich
            hilft. Ich arbeite strukturiert, diskret und mit einem ehrlichen
            Interesse an den Menschen, die ich begleite.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-white p-4 shadow-soft">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-[var(--brand)]" />
                <span className="text-sm font-semibold">Mit Herz</span>
              </div>
              <p className="mt-2 text-xs text-neutral-600">
                Wertschätzung, Respekt und ein freundlicher Umgang sind für mich
                selbstverständlich.
              </p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-soft">
              <div className="flex items-center gap-2">
                <MessageCircleHeart className="h-5 w-5 text-[var(--brand)]" />
                <span className="text-sm font-semibold">Mit Zeit</span>
              </div>
              <p className="mt-2 text-xs text-neutral-600">
                Ich höre zu, nehme mir Zeit für Gespräche und gehe auf Ihre
                Wünsche ein.
              </p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-soft">
              <div className="flex items-center gap-2">
                <HandHeart className="h-5 w-5 text-[var(--brand)]" />
                <span className="text-sm font-semibold">
                  Mit Verlässlichkeit
                </span>
              </div>
              <p className="mt-2 text-xs text-neutral-600">
                Pünktlich, zuverlässig und verbindlich – auf Absprachen können
                Sie sich verlassen.
              </p>
            </div>
          </div>
        </div>

        {/* Photo + info card */}
        <aside className="card max-w-sm md:ml-auto p-5">
          <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-2 border-[var(--brand)]/40 shadow-soft">
            <Image
              src="/sandra.jpg"
              alt="Sandra – Hausfee Sandra"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm font-semibold text-neutral-900">
              Ihre Hausfee Sandra
            </p>
            <p className="mt-1 text-xs text-neutral-600">
              Persönlich, herzlich und zuverlässig – Unterstützung genau dort,
              wo sie gebraucht wird.
            </p>
          </div>

          <div className="mt-4 rounded-xl bg-neutral-50 p-4 text-xs text-neutral-700">
            <p className="font-semibold mb-1">Einsatzgebiet</p>
            <p>Eisenhüttenstadt und Umgebung</p>
            <p className="mt-3 font-semibold">Direkter Kontakt</p>
            <p>
              Telefon:{" "}
              <a
                href="tel:01639512158"
                className="text-[var(--brand)] underline underline-offset-2"
              >
                0163 9512158
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/491639512158"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand)] underline underline-offset-2"
              >
                Chat starten
              </a>
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
