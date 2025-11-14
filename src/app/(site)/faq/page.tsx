import Section from "@/components/section";

export const metadata = {
  title: "FAQ – Häufige Fragen | Hausfee Sandra",
};

const faqs = [
  {
    question: "In welchem Gebiet sind Sie unterwegs?",
    answer:
      "Ich arbeite in Eisenhüttenstadt und Umgebung. Je nach Entfernung sind Einsätze in Nachbarorten nach Absprache möglich.",
  },
  {
    question: "Wie läuft der erste Kontakt ab?",
    answer:
      "Sie rufen mich an oder schreiben mir über WhatsApp. In einem kurzen Gespräch klären wir Ihre Situation, Wünsche und den möglichen Umfang der Unterstützung.",
  },
  {
    question:
      "Bieten Sie regelmäßige Unterstützung oder nur einzelne Termine an?",
    answer:
      "Beides ist möglich. Ich komme einmalig, für eine bestimmte Zeit oder regelmäßig – zum Beispiel wöchentlich oder alle zwei Wochen.",
  },
  {
    question: "Muss ich Putzmittel und Geräte selbst bereitstellen?",
    answer:
      "Im Haushalt nutzen wir in der Regel Ihre vorhandenen Reinigungsmittel und Geräte, damit alles zu Ihren Gewohnheiten und Ihrem Zuhause passt. Bei Bedarf können wir gemeinsam besprechen, was sinnvoll ist.",
  },
  {
    question: "Können Sie auch spontan einspringen?",
    answer:
      "Wenn meine Kapazitäten es zulassen, versuche ich gerne auch kurzfristige Anfragen möglich zu machen. Am besten rufen Sie mich an, dann schauen wir gemeinsam nach einem Termin.",
  },
  {
    question: "Wie erfolgt die Bezahlung?",
    answer:
      "Die Abrechnung erfolgt transparent nach vereinbartem Stundensatz. Sie erhalten auf Wunsch eine Quittung bzw. einfache schriftliche Bestätigung.",
  },
  {
    question: "Begleiten Sie auch zu Ärzten und Behörden?",
    answer:
      "Ja, ich begleite Sie zu Arztterminen, Therapien oder Behörden und helfe beim Organisieren und Strukturieren der Unterlagen.",
  },
  {
    question: "Kann ich Termine wieder absagen?",
    answer:
      "Ja, natürlich. Ich bitte nur darum, Terminabsagen möglichst frühzeitig mitzuteilen, damit ich den Zeitraum neu planen kann.",
  },
];

export default function FAQPage() {
  return (
    <Section>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand)]">
          FAQ
        </p>
        <h1 className="h1 mt-2">Häufige Fragen</h1>
        <p className="mt-4 text-neutral-700">
          Hier finden Sie Antworten auf häufige Fragen zu meinen Leistungen.
          Wenn etwas offen bleibt, melden Sie sich gerne direkt bei mir – ich
          helfe Ihnen persönlich weiter.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-neutral-200 bg-white p-4 shadow-soft"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-neutral-900">
              <span>{item.question}</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-xs text-neutral-500 group-open:rotate-180 transition-transform">
                ▼
              </span>
            </summary>
            <div className="mt-3 text-sm text-neutral-700">{item.answer}</div>
          </details>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-neutral-50 p-6 text-center text-sm text-neutral-700">
        Noch Fragen offen?&nbsp;
        <span className="font-semibold text-neutral-900">
          Ich freue mich auf Ihren Anruf oder Ihre WhatsApp-Nachricht.
        </span>
        <div className="mt-3 flex flex-wrap justify-center gap-3">
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
        </div>
      </div>
    </Section>
  );
}
