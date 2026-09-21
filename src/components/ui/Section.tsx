import { cn } from "@/lib/utils";

const paddingMap = {
  tight: "pt-10 pb-20 md:pt-14 md:pb-28",
  normal: "py-20 md:py-28",
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