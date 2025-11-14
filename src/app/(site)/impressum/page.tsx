import Section from "@/components/section";

export const metadata = { title: "Impressum – Hausfee Sandra" };

export default function ImpressumPage() {
  return (
    <Section>
      <h1 className="h1">Impressum</h1>
      <div className="prose mt-4">
        <p>
          <strong>Hausfee Sandra</strong>
          <br />
          Sandra Musterfrau
          <br />
          Musterstraße 1<br />
          15890 Eisenhüttenstadt
        </p>
        <p>
          Telefon: 0163 9512158
          <br />
          E-Mail: Hausfee-Sandra@gmx.de
        </p>
        <p>USt-IdNr.: (falls vorhanden)</p>
        <p>
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Sandra Musterfrau
        </p>
      </div>
    </Section>
  );
}
