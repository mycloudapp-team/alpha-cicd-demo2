// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static Single Page Application build — no Cloudflare SSR.
//
// `nitro: false` skips the Cloudflare Worker bundle, so `npm run build` writes only static
// files into `dist/`: a prerendered `dist/index.html`, its hashed assets, and the public files.
// Host that folder on any static server (Netlify, S3, nginx, GitHub Pages).
//
// The app is still a client-side SPA after the first paint: the router takes over in the
// browser and handles navigation. Tell your host to serve `index.html` for unknown paths so
// deep links keep working, e.g. `/*  /index.html  200` in a `_redirects` file on Netlify.
//
// The SSR bundle is still built into `.output/server/` because that is what renders the
// document during the build; it is a build-time artifact, not something you deploy.
export default defineConfig({
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    prerender: {
      // Render every static route to HTML at build time, so the build output is pure static.
      enabled: true,
      // Pick up routes from the route tree; "/" becomes dist/index.html.
      autoStaticPathsDiscovery: true,
      crawlLinks: false,
      failOnError: true,
    },
  },
  vite: {
    build: { outDir: "dist" },
    environments: {
      // Static site: dist/index.html + hashed assets.
      client: { build: { outDir: "dist" } },
      // Build-time SSR bundle, kept out of the deployable folder.
      ssr: { build: { outDir: ".output/server" } },
    },
  },
});
