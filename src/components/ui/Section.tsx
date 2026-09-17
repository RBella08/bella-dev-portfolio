import { cn } from "@/lib/utils";

const paddingMap = {
  tight: "pt-10 pb-24 md:pt-14 md:pb-32",
  normal: "py-24 md:py-32",
};

export function Section({
  id,
  tint = false,
  spacing = "normal",
  className,
  children,
}: {
  id?: string;
  tint?: boolean;
  spacing?: "tight" | "normal";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-16 md:scroll-mt-20", paddingMap[spacing], tint && "bg-surface-muted", className)}
    >
      {children}
    </section>
  );
}