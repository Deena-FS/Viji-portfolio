import type { ReactNode } from "react";
import { Container } from "./Container";

/** Standard section shell: anchor id, vertical rhythm, and an optional header. */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <Container>
        {(eyebrow || title || description) && (
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
            )}
            {description && (
              <p className="mt-4 text-lg text-ink-muted">{description}</p>
            )}
          </div>
        )}
        <div className={title || eyebrow ? "mt-12" : ""}>{children}</div>
      </Container>
    </section>
  );
}
