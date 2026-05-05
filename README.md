# TMDB Movie Search

TMDB Movie Search is a React application for searching movies with The Movie Database (TMDB) API. The project provides a movie-search interface with autocomplete, advanced search filters, loading states, empty states, and a responsive results layout.

## Functional Description

The application currently contains the main movie search page and the API layer needed to request movie data from TMDB.

Main user-facing features:

- Search field for movie titles.
- Autocomplete dropdown area for live search suggestions.
- Advanced filters for language, release year, year, region, page, and adult-content inclusion.
- Results section with movie cards, rating, release year, overview, and genre tags.
- Loading, skeleton, progress, and empty states prepared for API-driven rendering.

Data features:

- Axios HTTP client configured with a TMDB base URL and bearer token from environment variables.
- React Query provider and query hook for movie search requests.
- Typed TMDB response models for movie search data.

## How to Open and Launch

### Requirements

- Node.js 20 or newer is recommended.
- npm.
- TMDB API access token.

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root and add:

```env
VITE_API_BASE_URL=https://api.themoviedb.org/3
VITE_API_TOKEN=your_tmdb_bearer_token
```

### Run Development Server

```bash
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

To automatically fix supported lint and formatting issues:

```bash
npm run lint:fix
```

## Technologies and Libraries

- React 19 for UI rendering.
- TypeScript for static typing.
- Vite for development server, bundling, and preview.
- Axios for HTTP requests.
- TanStack React Query for server-state caching and request lifecycle management.
- ESLint, TypeScript ESLint, Prettier, Husky, and lint-staged for code quality automation.

## Architecture Decisions

The source code is organized by responsibility:

- `src/app` contains the application entry point, root component, and global styles.
- `src/pages` contains page-level UI. `MoviePage` is the current main screen.
- `src/features/movies` contains movie-specific API handlers, query hooks, constants, components, and types.
- `src/api` contains shared API infrastructure, including the Axios client, CRUD helpers, query client, and query keys.
- `src/providers` contains application-level providers, including the React Query provider.
- `src/shared` is reserved for reusable shared components and exports.

Key decisions:

- API configuration is environment-driven so secrets and deployment URLs are not hardcoded.
- React Query is used as the central async data layer to keep fetching, caching, and loading/error state predictable.
- Movie domain logic is isolated inside `features/movies`, which keeps feature-specific API paths, handlers, hooks, and types close together.
- Shared infrastructure such as HTTP setup and query keys lives outside features so it can be reused by future domains.
- Path aliases are used for cleaner imports and to reduce fragile relative import chains.
