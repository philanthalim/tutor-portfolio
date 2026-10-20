import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  variant: "primary" | "secondary" | "whatsapp" | "email";
  children: ReactNode;
  ariaLabel?: string;
  external?: boolean;
};

export default function ButtonLink({
  href,
  variant,
  children,
  ariaLabel,
  external = false,
}: ButtonLinkProps) {
  return (
    <a
      aria-label={ariaLabel}
      className={`btn ${variant}`}
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}
