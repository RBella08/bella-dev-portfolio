import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-muted">
      <Container>
        <div className="flex flex-col items-center gap-8 py-16 text-center">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </p>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Web developer building modern, responsive websites and web applications for
              businesses and organizations.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Mail size={16} />
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              <GithubIcon size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}