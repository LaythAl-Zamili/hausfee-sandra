import Section from "@/components/section";
import { Phone, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Kontakt – Hausfee Sandra",
};

export default function KontaktPage() {
  return (
    <Section>
      <h1 className="h1">Kontakt</h1>
      <p className="mt-3 text-neutral-700 max-w-2xl">
        Ich freue mich auf Ihre Nachricht. Für Terminvereinbarungen oder Fragen
        rufen Sie gern an oder schreiben Sie mir über WhatsApp.
      </p>

      <div className="mt-10 space-y-6 max-w-md">
        {/* PHONE */}
        <a
          href="tel:01639512158"
          className="flex items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-soft hover:bg-neutral-50 transition"
        >
          <Phone className="h-5 w-5 text-[var(--brand)]" />
          <span className="font-medium text-lg">01639512158</span>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/491639512158"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border bg-[#25D366]/10 px-4 py-3 shadow-soft hover:bg-[#25D366]/20 transition"
        >
          <MessageCircle className="h-5 w-5 text-[#25D366]" />
          <span className="font-medium text-lg text-[#25D366]">
            WhatsApp Chat starten
          </span>
        </a>
      </div>
    </Section>
  );
}
