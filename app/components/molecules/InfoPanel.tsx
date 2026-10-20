import type { ReactNode } from "react";

type InfoPanelProps = {
  title: string;
  children: ReactNode;
};

export default function InfoPanel({ title, children }: InfoPanelProps) {
  return (
    <article className="panel">
      <h3>{title}</h3>
      {children}
    </article>
  );
}
