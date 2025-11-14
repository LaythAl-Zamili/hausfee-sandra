import Section from "@/components/section";
import Container from "@/components/container";
import CTAButton from "@/components/cta-button";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import Link from "next/link";
import {
  Heart,
  ShoppingBasket,
  Stethoscope,
  MessageCircleHeart,
  Walking,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="h1">Ihre helfende Hand im Alltag</h1>
              <p className="p-lg mt-4 max-w-xl">
                Mit Herz, Verlässlichkeit und einem offenen Ohr bin ich für Sie
                da, wenn der Alltag zu viel wird. Ich schenke Ihnen Zeit,
                Entlastung und ein gutes Gefühl im eigenen Zuhause – in
                Eisenhüttenstadt und Umgebung.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Link href="/kontakt" className="btn btn-primary">
                  Kontakt aufnehmen
                </Link>
                <Link href="/leistungen" className="btn btn-outline">
                  Leistungen ansehen
                </Link>
              </div>
            </div>
            <div className="card p-6">
              <ul className="grid gap-3 text-sm text-neutral-700">
                <li>🧡 Senioren und pflegebedürftige Menschen</li>
                <li>💚 Familien und Berufstätige</li>
                <li>💙 Menschen mit Unterstützungsbedarf im Alltag</li>
              </ul>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <ServiceCard
                  title="Haushalt & Reinigung"
                  icon={<Heart className="h-5 w-5 text-brand" />}
                >
                  Gründliche Unterstützung im Haushalt – zuverlässig und
                  sorgfältig.
                </ServiceCard>
                <ServiceCard
                  title="Alltagsbegleitung & Betreuung"
                  icon={<MessageCircleHeart className="h-5 w-5 text-brand" />}
                >
                  Gespräche, gemeinsame Aktivitäten oder einfach da sein.
                </ServiceCard>
                <ServiceCard
                  title="Arzt- & Behördengänge"
                  icon={<Stethoscope className="h-5 w-5 text-brand" />}
                >
                  Begleitung zu Terminen und Unterstützung bei Erledigungen.
                </ServiceCard>
                <ServiceCard
                  title="Einkäufe & Besorgungen"
                  icon={<ShoppingBasket className="h-5 w-5 text-brand" />}
                >
                  Einkaufslisten, Apothekenfahrten, Abholungen – zuverlässig
                  erledigt.
                </ServiceCard>
                <ServiceCard
                  title="Spaziergänge & Gesellschaft"
                  icon={<Walking className="h-5 w-5 text-brand" />}
                >
                  Frische Luft und Bewegung – gemeinsam unterwegs.
                </ServiceCard>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="text-center">
          <h2 className="h2">Zuverlässig, herzlich und individuell</h2>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-700">
            Jede Unterstützung ist auf Sie abgestimmt. Diskret, vertrauensvoll
            und flexibel – damit der Alltag wieder leichter wird.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
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
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="h2">Kontakt</h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-700">
            📞 <a href="tel:01639512158">0163 9512158</a> • ✉️{" "}
            <a href="mailto:Hausfee-Sandra@gmx.de">Hausfee-Sandra@gmx.de</a>
          </p>
          <div className="mt-5">
            <Link className="btn btn-primary" href="/kontakt">
              Nachricht senden
            </Link>
          </div>
        </div>
      </Section>

      <CTAButton />
    </>
  );
}
