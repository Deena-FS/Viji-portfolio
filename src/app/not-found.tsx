import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-serif text-6xl font-semibold text-brand-strong">404</p>
      <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
      <p className="mt-3 max-w-md text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-strong"
      >
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link>
    </Container>
  );
}
