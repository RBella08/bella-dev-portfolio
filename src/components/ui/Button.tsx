import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ease-out active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_10px_30px_-8px_color-mix(in_srgb,var(--accent)_55%,transparent)]",
  secondary:
    "border border-border bg-transparent text-foreground hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-surface-muted",
  ghost: "bg-transparent text-foreground hover:bg-surface-muted",
};

function Shine({ variant }: { variant: ButtonVariant }) {
  if (variant !== "primary") return null;
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
    />
  );
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const styles = cn(baseStyles, variantStyles[variant], className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={styles} {...rest}>
        <Shine variant={variant} />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button className={styles} {...(props as ButtonAsButton)}>
      <Shine variant={variant} />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}