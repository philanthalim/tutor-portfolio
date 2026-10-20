import type { ReactNode } from "react";
import Eyebrow from "../atoms/Eyebrow";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  children,
}: SectionHeadingProps) {
  return (
    <div className="section-head">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
