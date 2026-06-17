# Plan — Replace `app/clinics/page.tsx:69` Image Placeholder

## Context

The clinic listing at `app/clinics/page.tsx` currently renders a hard-coded emoji tile (`🏥` on a `bg-secondary/50` block) for every clinic card, gated by `{/* Image placeholder */}`. There is no `public/` directory, no image assets, and no `next/image` usage anywhere in the codebase. The `Clinic` type in `lib/data.ts:345` already declares an `image: string` field — currently `""` for every clinic and never read.

We are fixing only the listing card, not the `[id]` dashboard page. Source of truth: each clinic will get a generated SVG illustration as its card hero. Clinics with `image === ""` will render a solid-color block with the clinic's name in its place, so every card looks intentional even without a real photo.

**Decisions locked from clarification round:**
- Image source: **Generated SVG illustrations** (no external dependencies, no binary assets to manage)
- Card size: **16:9, viewBox 800×450, rendered at `aspect-video`** — matches the existing 2-col grid, fits a 160px-tall slot on mobile, scales cleanly.
- Fallback: **Solid color block** with the clinic name + a subtle pattern when `clinic.image` is empty.

## Approach

1. Create a new component `components/brand/clinic-art.tsx` that exports:
   - A small registry of hand-tuned SVG illustrations keyed by clinic id (Dhanvantari, Sushruta, Charaka, Arnava). Each is a full-bleed botanical/ayurvedic motif that fits the project's existing visual language (compare `components/brand/decor.tsx` — leaves, lotus, chakra rings, gradients).
   - A `getClinicArt(id: string)` lookup that returns an SVG node, or `null` when unknown.
   - A `ClinicCardArt` wrapper that takes `clinicId` and `clinicName` and renders either the SVG art or the solid-color fallback.
2. Update `app/clinics/page.tsx` line 67–70: replace the `<div>🏥</div>` placeholder with `<ClinicCardArt clinicId={clinic.id} clinicName={clinic.name} />`. Wrap it in `next/image` is **not** needed for inline SVG — render the `<svg>` directly so it scales without asset weight.
3. Bump the card's image area to `aspect-video` (16:9) instead of the fixed `h-40` so it stays proportional at every breakpoint. Adjust surrounding spacing if needed.
4. No `next.config.mjs` changes (no remote images, no new image domains).
5. No `lib/data.ts` changes — the `image: ""` field is unused and will stay that way; we key off `clinic.id` instead.

## Files to modify

- **`app/clinics/page.tsx`** — swap placeholder div for `<ClinicCardArt />`, change container from `h-40` to `aspect-video`.
- **`components/brand/clinic-art.tsx`** *(new)* — registry of clinic SVG illustrations + `ClinicCardArt` wrapper with solid-color fallback.

That's it. Two files. No `package.json` changes, no config changes, no schema changes.

## Reuse

- **`components/brand/decor.tsx`** — for the visual language (botanical line art, lotus motif, soft gradient blobs). The new clinic SVGs should match the same stroke weights, currentColor usage, and `text-primary/30` opacity patterns already established there. Copy the stroke styles (`strokeWidth="1.2"`, `strokeLinecap="round"`) so the new art feels native to the brand.
- **`lib/utils.ts → cn`** — for className merging inside `ClinicCardArt`.
- **`Clinic.id` values from `lib/data.ts:359–395`** — `"dhanvantari" | "sushruta" | "charaka" | "arnava"` are the keys for the SVG registry. No need to extend the type.

## Steps

- [ ] Create `components/brand/clinic-art.tsx`:
  - [ ] Export `ClinicCardArt` component with props `{ clinicId: string; clinicName: string }`.
  - [ ] Build a `CLINIC_ART: Record<string, ReactNode>` map with one entry per known clinic id, each a thematic inline SVG (`viewBox="0 0 800 450"`, `preserveAspectRatio="xMidYMid slice"`, full-bleed, currentColor-based for theme flexibility).
  - [ ] Inside the component: if `CLINIC_ART[clinicId]` exists, render a `<div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-secondary/40">` containing the SVG (with `className="h-full w-full text-primary"`). Otherwise render the fallback.
  - [ ] Fallback: same wrapper, but with a solid `bg-primary/15` background and a centered `<span>` showing `clinicName` in `font-display text-lg text-ink/70`. No emoji.
- [ ] Edit `app/clinics/page.tsx`:
  - [ ] Add import: `import { ClinicCardArt } from "@/components/brand/clinic-art";`
  - [ ] Replace the entire `<div className="mb-4 flex h-40 items-center justify-center rounded-2xl bg-secondary/50 text-sm text-muted-foreground">🏥</div>` block with `<ClinicCardArt clinicId={clinic.id} clinicName={clinic.name} />`.
  - [ ] Keep the outer `mb-4` margin on the new component (or move it inside `ClinicCardArt`).
- [ ] Run `pnpm lint` and `pnpm build` to confirm no type/lint regressions.
- [ ] Manual visual check on `/clinics` page (dev server, both light and dark theme).

## Verification

1. `pnpm dev`, open `http://localhost:3000/clinics`:
   - All four cards (Dhanvantari, Sushruta, Charaka, Arnava) render distinct, themed SVG illustrations inside a 16:9 frame.
   - No `🏥` emoji visible anywhere.
   - Cards look balanced at the 2-col desktop layout and 1-col mobile layout.
2. **Fallback test** — temporarily change a `clinic.id` in the `CLINIC_ART` map to an unknown value (or add a 5th clinic to `lib/data.ts` without an art entry). Confirm that card renders the solid-color block with the clinic name, not a broken image or emoji.
3. `pnpm build` — passes, no warnings about missing images or unused imports.
4. Theme toggle — SVG strokes (which use `currentColor`) shift correctly between light and dark themes.

## Out of scope (intentionally)

- `app/clinics/[id]/page.tsx` — the per-clinic dashboard already shows staff, KPIs, schedule, etc. It does not currently render a clinic image, and we are not changing it.
- Real photographic images, external URLs, `public/` setup, `next/image`, `next.config.mjs` `remotePatterns` — none of this is needed for the chosen "generated SVG" approach.
- Adding new fields to the `Clinic` type or wiring `clinic.image` to anything. The field stays empty/unused.
