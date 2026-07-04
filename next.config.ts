import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Pin the workspace root — a stray lockfile in the home directory otherwise
  // makes Next infer the wrong root.
  turbopack: { root: projectRoot },

  // Host-agnostic static export: `next build` emits a fully static `out/` folder
  // that deploys to Vercel, Netlify, GitHub Pages, S3, or any static host.
  output: "export",

  // Static export can't use the default (server) image optimizer, so serve
  // images as-is. `next/image` still provides layout/lazy-loading benefits.
  images: { unoptimized: true },

  // Emit `/work/slug/index.html` instead of `/work/slug.html` — friendlier for
  // static hosts (esp. GitHub Pages) that resolve directory-style URLs.
  trailingSlash: true,
};

export default nextConfig;
