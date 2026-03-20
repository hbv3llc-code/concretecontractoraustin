@AGENTS.md

# Deployment Rules — Learned from Production Failures

## Tailwind v4 + Next.js 15/16 — CRITICAL RULES

This project uses **Tailwind CSS v4** and **Next.js 16**. These rules must be followed on every project using these versions.

### 1. Import syntax
```css
/* ✅ CORRECT — Tailwind v4 */
@import "tailwindcss";

/* ❌ WRONG — Tailwind v3 only, breaks v4 build */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2. Never use shadcn/ui CSS-variable utility classes without shadcn installed
These classes (`border-border`, `bg-background`, `text-foreground`, `bg-primary`, `bg-secondary`, `text-primary`, etc.) are **shadcn/ui-specific**. They rely on CSS variables (`--border`, `--background`, etc.) that shadcn injects. Without shadcn, these classes do not exist and will crash the Vercel build with:
```
Cannot apply unknown utility class `border-border`
```

**Do NOT use these unless shadcn/ui is installed:**
- `border-border`
- `bg-background` / `text-foreground`
- `bg-primary` / `bg-secondary` / `bg-muted` / `bg-accent`
- `text-primary` / `text-secondary` / `text-muted-foreground`
- `bg-card` / `bg-popover`

**Instead use real Tailwind color classes:**
- `bg-white`, `bg-gray-50`, `bg-gray-900`
- `text-gray-900`, `text-gray-600`, `text-white`
- `bg-orange-600`, `border-gray-200`, etc.

### 3. Custom CSS variables in @apply
Do not define CSS variables in `:root` and then use them via `@apply`. In v4, `@apply` only works with real Tailwind utility classes. Use plain CSS properties for custom variable values:
```css
/* ✅ CORRECT */
.section-alt {
  background-color: #f9fafb;  /* or @apply bg-gray-50 */
}

/* ❌ WRONG — --color-bg-alt is not a Tailwind utility */
.section-alt {
  background-color: hsl(var(--color-bg-alt));
}
```

### 4. Google Fonts
Load Google Fonts via a `<link>` tag in `layout.tsx` `<head>`, or via `@import url(...)` at the **top** of globals.css **before** `@import "tailwindcss"`. Do not use Next.js `next/font/google` for non-Google-standard fonts like Oswald if they cause issues.

---

## General Vercel Deployment Checklist
- Run `npm run build` locally before pushing if possible
- Check `package.json` for the actual Tailwind version before writing CSS
- Never copy globals.css patterns from v3 projects into v4 projects

### 5. tailwind.config.ts — v3 vs v4
In **Tailwind v4**, `tailwind.config.ts` is largely obsolete. Do NOT use a v3-style config with:
- `darkMode: ["class"]` — breaks TypeScript in v4
- `theme.extend.colors` with `hsl(var(--xxx))` — these are shadcn/ui patterns, not plain Tailwind
- shadcn/ui accordion keyframes, custom border-radius vars, etc.

**For v4 projects:** replace the config with an empty stub:
```ts
// tailwind.config.ts
export default {};
```
All theme customization goes in `globals.css` using `@theme { }`.

**Quick checklist before pushing any new site to Vercel:**
1. `globals.css` uses `@import "tailwindcss"` (not `@tailwind base/components/utilities`)
2. No `border-border`, `bg-background`, `bg-primary`, `bg-secondary` etc. in CSS or JSX unless shadcn is installed
3. `tailwind.config.ts` is either empty stub or valid v4 config (no `darkMode: ["class"]`)
4. No `hsl(var(--xxx))` color references in `@apply` or custom CSS utilities
