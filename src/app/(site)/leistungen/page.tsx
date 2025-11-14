import Section from "@/components/section";
import ServiceCard from "@/components/service-card";
import {
  Heart,
  MessageCircleHeart,
  Stethoscope,
  ShoppingBasket,
  Footprints,
  HandHeart,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Leistungen – Hausfee Sandra",
};

export default function LeistungenPage() {
  return (
    <Section>
      {/* Intro */}
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand)]">
          Leistungen
        </p>
        <h1 className="h1 mt-2">Unterstützung, die zu Ihrem Alltag passt</h1>
        <p className="mt-4 text-neutral-700">
          Jede Situation ist anders. Ich kombiniere meine Leistungen so, dass
          sie zu Ihnen, Ihrem Tempo und Ihrem Alltag passen – ob regelmäßig oder
          nur für eine bestimmte Zeit.
        </p>
      </div>

      {/* Main grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <ServiceCard
          title="Hilfe im Haushalt & Reinigung"
          icon={<Heart className="h-5 w-5" />}
        >
          Staubwischen, Saugen, Bad und Küche, Betten machen, Wäsche falten,
          leichte Ordnung und kleine Handgriffe – sorgfältig, strukturiert und
          zuverlässig.
        </ServiceCard>

        <ServiceCard
          title="Alltagsbegleitung & Betreuung"
          icon={<MessageCircleHeart className="h-5 w-5" />}
        >
          Gespräche, Vorlesen, Spiele, gemeinsame Mahlzeiten vorbereiten oder
          einfach da sein – für mehr Struktur, Motivation und Wohlbefinden im
          Alltag.
        </ServiceCard>

        <ServiceCard
          title="Unterstützung bei Arzt- & Behördengängen"
          icon={<Stethoscope className="h-5 w-5" />}
        >
          Begleitung zu Arztterminen, Therapien oder Behörden, Hilfe beim
          Sortieren von Unterlagen und Formularen – damit Sie nicht alleine
          gehen müssen.
        </ServiceCard>

        <ServiceCard
          title="Einkäufe & Erledigungen"
          icon={<ShoppingBasket className="h-5 w-5" />}
        >
          Wöchentliche Großeinkäufe oder kleine Besorgungen zwischendurch,
          Apothekengänge, Abholungen – mit transparenten Abrechnungen und
          Kassenbon.
        </ServiceCard>

        <ServiceCard
          title="Spaziergänge & Gesellschaft"
          icon={<Footprints className="h-5 w-5" />}
        >
          Spazierengehen, kleine Wege im Viertel, frische Luft schnappen –
          behutsam, mit Geduld und immer im eigenen Tempo.
        </ServiceCard>

        <ServiceCard
          title="Weitere Hilfe nach Absprache"
          icon={<HandHeart className="h-5 w-5" />}
        >
          Jeder Alltag ist anders. Sprechen Sie mich an – gemeinsam finden wir
          eine passende Form der Unterstützung für Ihre Situation.
        </ServiceCard>
      </div>

      {/* Info strip */}
      <div className="mt-10 grid gap-6 rounded-2xl bg-neutral-50 p-6 text-sm text-neutral-700 md:grid-cols-3">
        <div>
          <div className="font-semibold text-neutral-900">Einsatzgebiet</div>
          <p className="mt-1">Eisenhüttenstadt und Umgebung</p>
        </div>
        <div>
          <div className="font-semibold text-neutral-900">
            Dauer & Häufigkeit
          </div>
          <p className="mt-1">
            Einmalige Unterstützung, regelmäßige Termine oder flexible
            Vereinbarungen – ganz nach Bedarf.
          </p>
        </div>
        <div>
          <div className="font-semibold text-neutral-900">Ablauf</div>
          <p className="mt-1">
            Im persönlichen Gespräch klären wir Ihre Wünsche und planen Umfang,
            Zeiten und Art der Unterstützung.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-2xl bg-white p-6 text-center shadow-soft">
        <h2 className="text-lg font-semibold text-neutral-900">
          Welche Unterstützung wünschen Sie sich?
        </h2>
        <p className="mt-2 text-sm text-neutral-700">
          Rufen Sie mich an oder schreiben Sie mir über WhatsApp – ich freue
          mich auf Ihre Anfrage.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm font-semibold">
          <a href="tel:01639512158" className="btn btn-primary">
            Anrufen
          </a>
          <a
            href="https://wa.me/491639512158"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            WhatsApp Chat
          </a>
          <Link href="/kontakt" className="btn btn-outline">
            Zur Kontaktseite
          </Link>
        </div>
      </div>
    </Section>
  );
}
