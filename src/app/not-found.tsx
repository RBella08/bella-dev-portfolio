import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main id="main-content">
      <Container>
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <p className="font-mono text-sm uppercase tracking-widest text-accent">404</p>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Page not found.
          </h1>
          <p className="mt-3 max-w-sm text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or may have moved.
          </p>
          <Button href="/" variant="primary" className="mt-8">
            Back to Home
          </Button>
        </div>
      </Container>
    </main>
  );
}