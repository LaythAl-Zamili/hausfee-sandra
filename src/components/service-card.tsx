import { PropsWithChildren, ReactNode } from "react";

export default function ServiceCard({
  title,
  icon,
  children,
}: PropsWithChildren<{ title: string; icon?: ReactNode }>) {
  return (
    <div className="card p-6">
      <div className="mb-2 flex items-center gap-2">
        {icon}
        <h3 className="font-display text-lg font-semibold">{title}</h3>
      </div>
      <div className="text-sm text-neutral-700">{children}</div>
    </div>
  );
}
