# TMDB Movie Search

TMDB Movie Search is a React application for searching movies with The Movie Database (TMDB) API. The project provides a movie-search interface with debounced URL-synced search, infinite autocomplete, advanced filters, a responsive results grid, genre-aware movie cards, and a modal details view.

## Functional Description

The application currently contains the main movie search page, a feature-level search context, reusable UI components, and the API layer needed to request movie data and metadata from TMDB.

Main user-facing features:

- Search field for movie titles with debounced requests.
- URL-synced search parameters, so query, filters, and page state can be restored after reload.
- Autocomplete dropdown with infinite scroll, short movie cards, genre labels, empty state, loading state, and outside-click closing.
- Advanced filters for language, release year, year, region, page, and adult-content inclusion.
- Dynamic language, country/region, and genre metadata loaded from TMDB configuration endpoints.
- Page filter support for jumping directly to a specific result page, with previous results cleared before the new page is rendered.
- Results section with total results count, responsive movie grid, detailed movie cards, poster fallback handling, ratings, release dates, overviews, and genre tags.
- Movie details modal rendered through a React portal when a movie is selected.
- Loading, skeleton, progress, empty, and error states for both search results and supporting metadata requests.

Data features:

- Axios HTTP client configured with a TMDB base URL and bearer token from environment variables.
- TanStack React Query hooks for movie search, languages, primary translations, genres, and countries.
- Infinite-query search flow using TMDB page data and `fetchNextPage`.
- Feature-level search context that centralizes search params, selected movie state, movie results, pagination metadata, genres, request state, and URL updates.
- Typed TMDB response models for movie search data and metadata.

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
VITE_API_BASE_IMAGE_URL=https://image.tmdb.org/t/p/w500
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
- Day.js for date formatting utilities.
- ESLint, TypeScript ESLint, Prettier, Husky, and lint-staged for code quality automation.

## Architecture Decisions

The source code is organized by responsibility:

- `src/app` contains the application entry point, root component, and global styles.
- `src/pages` contains page-level UI. `MoviePage` is the current main screen.
- `src/features/movies/search` contains the movie-search feature, including API handlers, query hooks, feature context, URL-param utilities, components, and types.
- `src/features/movies/search/searchContext` owns search state, URL synchronization, selected movie state, pagination metadata, and shared movie-search actions.
- `src/features/movies/search/searchComponents` contains the search input, autocomplete, filters, result grid, details modal, skeletons, empty states, and movie cards.
- `src/api` contains shared API infrastructure, including the Axios client, CRUD helpers, query client, and query keys.
- `src/hooks` contains reusable interaction hooks such as debounced values, infinite scroll, and outside-click handling.
- `src/providers` contains application-level providers, including the React Query provider.
- `src/shared` contains reusable components and utilities, including loaders, error messages, image fallback handling, URL-param helpers, poster URL building, date/year helpers, and genre-name mapping.

Key decisions:

- API configuration is environment-driven so secrets and deployment URLs are not hardcoded.
- React Query is used as the central async data layer to keep fetching, caching, and loading/error state predictable.
- Search parameters are synchronized with the browser URL so users can reload or share a search state.
- Search input changes are debounced to reduce unnecessary API traffic while keeping the interface responsive.
- Infinite scrolling uses a reusable Intersection Observer hook instead of scroll-position calculations.
- Movie metadata such as genres, languages, and countries is loaded separately from search results and reused across the feature.
- Movie domain logic is isolated inside `features/movies`, which keeps feature-specific API paths, handlers, hooks, and types close together.
- Shared infrastructure such as HTTP setup and query keys lives outside features so it can be reused by future domains.
- Path aliases are used for cleaner imports and to reduce fragile relative import chains.
