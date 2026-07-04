import { site } from "@/content/site";

/**
 * Placeholder headshot: initials on a brand gradient. Looks intentional and
 * avoids a missing-image error until a real photo is provided.
 *
 * To use a real photo, drop it at public/images/viji.jpg and replace the inner
 * <div> with:
 *   import Image from "next/image";
 *   <Image src="/images/viji.jpg" alt={site.fullName} fill
 *          className="rounded-3xl object-cover" priority sizes="20rem" />
 */
export function Avatar({ className = "" }: { className?: string }) {
  const initials = site.fullName
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div className={`relative mx-auto aspect-square w-full max-w-xs ${className}`}>
      <div
        aria-hidden
        className="absolute -inset-3 rounded-[2rem] bg-brand-soft"
      />
      <div className="relative flex h-full w-full items-center justify-center rounded-3xl bg-linear-to-br from-brand to-brand-strong text-6xl font-semibold text-white shadow-xl ring-1 ring-black/5">
        {initials}
      </div>
    </div>
  );
}
