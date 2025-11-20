# Copilot Instructions for Resume CV Project

## Project Overview
A minimalist CV/Resume web application built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **GraphQL**. The project serves both as a static resume display and a headless API. Supports internationalization (English/Indonesian), responsive design, print optimization, and keyboard navigation.

## Architecture Overview

### Data Flow: Single Source of Truth
- **`src/data/resume-data.tsx`** - Central configuration file (`RESUME_DATA` object) containing ALL resume content
  - React components can be embedded in `summary` and `description` fields for rich content
  - Type-safe structure defined in `src/lib/types.ts` (`ResumeData` interface)
  - GraphQL resolvers automatically derive queries from this source
  - Used to generate Open Graph images and structured data

### Component Organization

**Server Components** (default, at `src/app/components/`):
- `Education.tsx`, `Skills.tsx`, `Summary.tsx`, `WorkExperience.tsx` - Data display
- `Header.tsx` - Wraps client component for metadata injection
- Use React `<Suspense>` boundaries; paired with `<SectionErrorBoundary>` and `<SectionSkeleton>` for error handling and loading states

**Client Components** (marked `'use client'`):
- `Header.client.tsx`, `Projects.client.tsx` - Interactive features (command menu, social links)
- Use `useLanguage()` hook from `src/contexts/language-context.tsx` for i18n

**Shared Components** (at `src/components/`):
- `ui/` - Unstyled shadcn/ui primitives (Button, Badge, Card, Dialog, Drawer based on Radix UI)
- `icons/` - Icon components with type-safe mapping (see `Header.tsx` for `ICON_MAP` pattern)
- `command-menu.tsx` - Keyboard navigation (Cmd/Ctrl+K) using cmdk library
- `error-boundary.tsx`, `section-error-boundary.tsx`, `section-skeleton.tsx` - Error handling & loading UI

## Key Patterns & Conventions

### Type Safety
- Use `typeof` operator on imported objects for derived types: `type WorkExperience = (typeof RESUME_DATA)['work'][number]`
- Define component props as interfaces next to components
- Export types from `src/lib/types.ts` (IconType, ResumeData, ResumeIcon)

### Styling & Layout
- **Tailwind utilities** for layout and responsive behavior
- **Print-specific classes**: Use `print:` prefix for print-only styles (e.g., `print:px-1 print:py-0.5`)
- **CSS Grid/Flexbox**: Main layout uses `flex` and `gap-` utilities
- **Accessibility**: All interactive elements use proper ARIA labels and semantic HTML

### Internationalization (i18n)
- **Framework**: `next-intl` library with middleware-based routing (`/en/*`, `/id/*`)
- **Middleware** (`middleware.ts`): Handles locale detection and redirection
- **Translations**: Defined inline in `src/contexts/language-context.tsx` (not JSON files)
- **Usage**: Client components call `const { t } = useLanguage()` and use `t('section.key')`
- **Navigation keys**: `navigation.summary`, `navigation.workExperience`, `navigation.education`, etc.

### GraphQL API

**Architecture Pattern:**
- **Server**: Apollo Server at `src/app/graphql/route.ts` (App Router API route with `dynamic = "force-static"`)
- **Type definitions**: `src/apollo/type-defs.ts` uses `type-graphql` decorators (`@ObjectType`, `@Field`)
- **Resolvers**: `src/apollo/resolvers.ts` contains `MeResolver` class
- **Data conversion**: `src/lib/types.ts` exports `resumeDataToGraphQL()` function to transform React-rich `RESUME_DATA` to GraphQL-compatible format
- **Introspection**: Enabled in development, disabled in production
- **Schema building**: Uses `buildSchema` from type-graphql with decorators

**Type Definition Pattern:**
```typescript
// src/apollo/type-defs.ts
@ObjectType()
export class Work {
  @Field(() => String)
  company: string;

  @Field(() => [String])
  badges: string[];

  @Field(() => String)
  description: string; // Converted from React.ReactNode to string
}
```

**Resolver Pattern:**
```typescript
// src/apollo/resolvers.ts
@Resolver(() => Me)
export class MeResolver {
  @Query(() => Me)
  me(): Me {
    return resumeDataToGraphQL(RESUME_DATA); // Single query returning full resume object
  }
}
```

**Data Transformation:**
- React components in `summary` and `description` are converted to strings via `reactToString()` helper
- `StaticImageData` (for avatars) is converted to URL string
- `null` end dates in work experience are converted to `"Present"`
- Maintains 1:1 mapping between `ResumeData` (React-rich) and GraphQL types (string-based)

**Adding a New GraphQL Field:**
1. Add `@Field()` decorated property to type class in `src/apollo/type-defs.ts`
2. Add corresponding property to `resumeDataToGraphQL()` transform in `src/lib/types.ts`
3. Schema rebuilds automatically on GraphQL request
4. Query available at `POST /graphql` with introspection enabled in dev mode

### Error Handling
- Wrap sections with `<SectionErrorBoundary>` to catch rendering errors
- Use `<SectionSkeleton>` as fallback during Suspense
- GraphQL errors are sanitized in production, detailed in development

### Metadata & SEO
- **Layout metadata** (`src/app/layout.tsx`): Base metadata, robots, Open Graph
- **Page metadata** (`src/app/page.tsx`): Derived from `RESUME_DATA`
- **Structured data** (`src/lib/structured-data.ts`): Schema.org Person/WebPage/etc. for rich snippets
- **Sitemap** generated dynamically in `src/app/sitemap.ts`
- **Open Graph image** at `src/app/opengraph-image.tsx`

## Development Workflows

### Build & Run
```bash
pnpm dev         # Start dev server (http://localhost:3000)
pnpm build       # Production build
pnpm start       # Serve production build
```

### Code Quality
- **Linting**: Biome (`pnpm lint`) - check syntax, imports, complexity
- **Formatting**: Biome (`pnpm format`) - auto-format code
- **Type checking**: Built into TypeScript compilation; strict mode enabled (`tsconfig.json`)
- **All-in-one check**: `pnpm check` - lint + format check

### Deployment
- **Target**: Vercel (optimized with `next/image` domains, security headers)
- **Docker support**: `Dockerfile` and `docker-compose.yaml` for containerized deployments
- **Scripts**: `deploy.sh` and `deploy.bat` for manual deployment

## Common Extension Points

### Adding a New Section
1. Create component in `src/app/components/`
2. Add data type to `ResumeData` in `src/lib/types.ts`
3. Add sample data to `src/data/resume-data.tsx`
4. Add GraphQL type to `src/apollo/type-defs.ts`
5. Add resolver logic to `src/apollo/resolvers.ts`
6. Add i18n keys to both locales in `src/contexts/language-context.tsx`
7. Import and render with `<Suspense>` in `src/app/page.tsx`

### Adding Internationalization
- New component using client-side i18n? Add `'use client'` directive
- Call `const { t } = useLanguage()` and `t('key.path')`
- Add translation key-value pairs in `src/contexts/language-context.tsx`

### Customizing Styling
- Tailwind config at `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Component-scoped CSS via Tailwind classes
- Print styles use `@media print { ... }` in globals.css

## Critical Files & Their Roles

| File | Purpose |
|------|---------|
| `src/data/resume-data.tsx` | Central data source—edit here to update content |
| `src/lib/types.ts` | Type definitions for data structures |
| `src/contexts/language-context.tsx` | i18n translations and context provider |
| `src/app/page.tsx` | Main resume page—orchestrates sections |
| `src/apollo/type-defs.ts` | GraphQL type definitions |
| `tsconfig.json` | Path aliases (`@/*` → `src/*`), decorators for TypeGraphQL |
| `biome.json` | Linting and formatting rules (Biome is stricter than ESLint) |
| `next.config.js` | Image optimization, headers, i18n routing, security |

## Conventions Specific to This Project

- **No CSS modules**: All styling via Tailwind + global CSS
- **No component libraries beyond shadcn/ui**: Keep dependencies minimal
- **Decorators enabled**: `experimentalDecorators` and `emitDecoratorMetadata` in TypeScript for type-graphql
- **Path aliases required**: Always use `@/` prefix (e.g., `@/data/resume-data`, `@/components/ui/button`)
- **Client directives**: Explicitly mark interactive components with `'use client'`; server components are default
- **No dynamic imports for critical UI**: Keep main resume sections server-rendered for performance
