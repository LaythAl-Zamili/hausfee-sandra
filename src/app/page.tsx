import Section from "@/components/section";
import Container from "@/components/container";
import CTAButton from "@/components/cta-button";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  ShoppingBasket,
  Stethoscope,
  MessageCircleHeart,
  HandHeart,
  Footprints,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[var(--brand)]/10 via-white to-white py-20">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left: Text */}
            <div>
              <span className="inline-block rounded-full bg-[var(--brand)]/10 px-3 py-1 text-sm text-[var(--brand)]">
                Eisenhüttenstadt & Umgebung
              </span>
              <h1 className="h1 mt-4">Ihre helfende Hand im Alltag</h1>
              <p className="p-lg mt-4 max-w-xl">
                Mit Herz, Verlässlichkeit und einem offenen Ohr bin ich für Sie
                da, wenn der Alltag zu viel wird. Ich schenke Ihnen Zeit,
                Entlastung und ein gutes Gefühl im eigenen Zuhause.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="/kontakt" className="btn btn-primary">
                  Kontakt aufnehmen
                </Link>
                <Link href="/leistungen" className="btn btn-outline">
                  Leistungen ansehen
                </Link>
              </div>
              <p className="mt-3 text-sm text-neutral-600">
                📞{" "}
                <a
                  href="tel:01639512158"
                  className="underline underline-offset-2"
                >
                  0163 9512158
                </a>{" "}
                · ✉️{" "}
                <a
                  href="mailto:hausfee-sandra@gmx.de"
                  className="underline underline-offset-2"
                >
                  hausfee-sandra@gmx.de
                </a>
              </p>
            </div>

            {/* Right: “Photo” + services snapshot */}
            <div className="space-y-4">
              {/* Foto-Karte Sandra */}
              <div className="card flex flex-col items-center gap-4 bg-gradient-to-r from-white to-[var(--brand)]/5 p-5 sm:flex-row">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--brand)]/50 bg-white shadow-soft">
                  <Image
                    src="/sandra.jpg" // Datei in /public/sandra.jpg
                    alt="Sandra"
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-semibold text-neutral-800">
                    Ihre Hausfee Sandra
                  </p>
                  <p className="text-xs text-neutral-600">
                    Persönlich, herzlich und zuverlässig – Unterstützung genau
                    dort, wo sie gebraucht wird.
                  </p>
                </div>
              </div>

              {/* Target groups & service highlight */}
              <div className="card p-6">
                <ul className="grid gap-2 text-sm text-neutral-700 mb-4">
                  <li>🧡 Senioren und pflegebedürftige Menschen</li>
                  <li>💚 Familien und Berufstätige</li>
                  <li>💙 Menschen mit Unterstützungsbedarf im Alltag</li>
                </ul>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <ServiceCard
                    title="Haushalt & Reinigung"
                    icon={<Heart className="h-5 w-5" />}
                  >
                    Gründliche Unterstützung im Haushalt – zuverlässig und
                    sorgfältig.
                  </ServiceCard>
                  <ServiceCard
                    title="Alltagsbegleitung"
                    icon={<MessageCircleHeart className="h-5 w-5" />}
                  >
                    Gespräche, Spiele, Vorlesen oder einfach da sein.
                  </ServiceCard>
                  <ServiceCard
                    title="Arzt- & Behördengänge"
                    icon={<Stethoscope className="h-5 w-5" />}
                  >
                    Begleitung zu Terminen und Hilfe bei Erledigungen.
                  </ServiceCard>
                  <ServiceCard
                    title="Einkäufe & Besorgungen"
                    icon={<ShoppingBasket className="h-5 w-5" />}
                  >
                    Einkaufslisten, Apothekenfahrten, Abholungen – zuverlässig
                    erledigt.
                  </ServiceCard>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ABOUT / INTRO */}
      <Section>
        <Container>
          <div className="grid items-start gap-10 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="h2">Zuverlässig, herzlich und individuell</h2>
              <p className="mt-3 text-neutral-700">
                Jede Unterstützung ist auf Sie abgestimmt. Diskret,
                vertrauensvoll und flexibel – damit der Alltag wieder leichter
                wird. Ich arbeite strukturiert, mit Geduld und einem offenen
                Ohr.
              </p>
            </div>
            <div className="card p-5">
              <div className="flex items-center gap-3">
                <HandHeart className="h-6 w-6" />
                <div className="font-semibold">Kostenloses Erstgespräch</div>
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                Rufen Sie an oder schreiben Sie mir. Gemeinsam klären wir
                Bedarf, Zeiten und Möglichkeiten.
              </p>
              <Link
                href="/kontakt"
                className="btn btn-primary mt-4 w-full text-center"
              >
                Termin anfragen
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SERVICES */}
      <Section>
        <Container>
          <h2 className="h2 text-center">Leistungen</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-700">
            Individuell kombinierbar – sprechen Sie mich an.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ServiceCard
              title="Hilfe im Haushalt & Reinigung"
              icon={<Heart className="h-5 w-5" />}
            >
              Staubwischen, Saugen, Bad/Küche, Wäsche, Ordnung – sorgfältig und
              zuverlässig.
            </ServiceCard>
            <ServiceCard
              title="Alltagsbegleitung & Betreuung"
              icon={<MessageCircleHeart className="h-5 w-5" />}
            >
              Gespräche, Vorlesen, Spiele, gemeinsames Kochen, Struktur im
              Alltag.
            </ServiceCard>
            <ServiceCard
              title="Unterstützung bei Arzt- & Behördengängen"
              icon={<Stethoscope className="h-5 w-5" />}
            >
              Begleitung, Organisation, Formulare – ich behalte den Überblick.
            </ServiceCard>
            <ServiceCard
              title="Einkäufe & Erledigungen"
              icon={<ShoppingBasket className="h-5 w-5" />}
            >
              Wöchentlich oder nach Bedarf. Auf Wunsch mit Kassenbon/Abrechnung.
            </ServiceCard>
            <ServiceCard
              title="Spaziergänge & Gesellschaft"
              icon={<Footprints className="h-5 w-5" />}
            >
              Gemeinsam rausgehen, frische Luft, leichte Bewegung – wohltuend
              und motivierend.
            </ServiceCard>
            <ServiceCard title="Weitere Hilfe nach Absprache">
              Individuell, zuverlässig und auf Ihre Situation zugeschnitten.
            </ServiceCard>
          </div>

          <div className="mt-8 text-center">
            <Link href="/leistungen" className="btn btn-outline">
              Alle Leistungen ansehen
            </Link>
          </div>
        </Container>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <Container>
          <h2 className="h2 text-center">Was Kund:innen sagen</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="Sehr freundlich und zuverlässig – absolute Empfehlung!"
              author="Frau M., Eisenhüttenstadt"
            />
            <TestimonialCard
              quote="Endlich Erleichterung im Haushalt und mehr Zeit für mich."
              author="Herr B., Fürstenberg"
            />
            <TestimonialCard
              quote="Mitfühlend, pünktlich und gründlich – einfach top."
              author="Familie R."
            />
          </div>
        </Container>
      </Section>

      {/* CONTACT CTA */}
      <Section>
        <Container>
          <div className="card p-8 text-center">
            <h3 className="h2">Lassen Sie uns sprechen</h3>
            <p className="mt-2 text-neutral-700">
              Ich freue mich auf Ihre Nachricht. Für dringende Anfragen rufen
              Sie gern an.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link href="/kontakt" className="btn btn-primary">
                Nachricht senden
              </Link>
              <a href="tel:01639512158" className="btn btn-outline">
                Anrufen
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mobile sticky call button */}
      <CTAButton />
    </>
  );
}
