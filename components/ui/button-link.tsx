import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  target?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  target
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-royal text-white shadow-[0_14px_32px_rgba(0,92,255,0.28)] hover:bg-[#0048ce]",
    secondary:
      "border border-royal/35 bg-white text-navy hover:border-royal hover:bg-mist",
    light: "bg-white !text-navy hover:bg-mist"
  };

  return (
    <Link
      href={href}
      target={target}
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-5 text-sm font-bold transition ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
