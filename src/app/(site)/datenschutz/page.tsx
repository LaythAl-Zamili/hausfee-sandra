import Section from "@/components/section";

export const metadata = { title: "Datenschutzerklärung – Hausfee Sandra" };

export default function DatenschutzPage() {
  return (
    <Section>
      <h1 className="h1">Datenschutzerklärung</h1>
      <div className="prose mt-4">
        <h3>Kontaktformular</h3>
        <p>
          Ihre Daten werden zur Bearbeitung Ihrer Anfrage verarbeitet und nicht
          an Dritte weitergegeben.
        </p>
        <h3>Reichweitenmessung</h3>
        <p>
          Wir verwenden Plausible Analytics (EU-gehostet), das ohne Cookies
          arbeitet.
        </p>
      </div>
    </Section>
  );
}
