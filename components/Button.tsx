import Link from "next/link";
import { cn } from "./cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-neutral-900/20";
  const styles =
    variant === "primary"
      ? "bg-neutral-900 text-white hover:bg-neutral-800"
      : "bg-white/90 text-neutral-900 hover:bg-white border border-white/40";
  return (
    <Link href={href} className={cn(base, styles)}>
      {children}
    </Link>
  );
}
