import Container from "./container";
import { PropsWithChildren } from "react";
export default function Section({ children }: PropsWithChildren) {
  return (
    <section className="section">
      <Container>{children}</Container>
    </section>
  );
}
