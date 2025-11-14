import { PropsWithChildren } from "react";
export default function Container({ children }: PropsWithChildren) {
  return <div className="container px-4 md:px-6">{children}</div>;
}
