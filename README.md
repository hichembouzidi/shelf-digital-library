# Shelf — Digital Library

A portfolio/demo digital library built as a small monorepo.

## What's included

- **Web:** Next.js App Router + TypeScript + Tailwind CSS
- **Mobile:** Expo + React Native
- **Shared package:** demo catalog data and TypeScript types
- **Collections:** Scientific & Educational, Stories & Literature, Comics
- **Languages:** English and Arabic UI toggle (demo-level; RTL-ready)
- **Demo features:** search, collection filtering, book details, reading progress, bookmarks, and a lightweight admin content manager.

> This is a portfolio project, not a production deployment. Data is seeded locally in the web app and browser state is stored in `localStorage`. The mobile app uses shared sample data. Authentication, real uploads, cloud storage, and a production API are intentionally not implemented.

## Requirements

- Node.js 20+
- npm 10+
- For mobile: Expo Go on your phone, or Android Studio / Android SDK for an emulator.

## Run the website

```bash
npm install
npm run dev:web
```

Open http://localhost:3000.

## Run the mobile app

```bash
npm install
npm run dev:mobile
```

Scan the QR code with Expo Go.

## Demo admin

Open `/admin` in the website. You can add and delete demo catalog entries. Changes are saved in your browser's local storage.

## Project structure

```text
apps/
  web/       Next.js website
  mobile/    Expo Android/iOS app
packages/
  shared/    Shared catalog types and seed data
```

## Suggested GitHub description

A bilingual digital library demo for discovering, organizing, and reading books, stories, manga, manhwa, manhua, and comics.

## Next steps if you want to extend it

1. Add a real API and database.
2. Add user accounts and server-side authorization.
3. Replace demo PDF links with licensed/public-domain PDF files.
4. Add secure file storage and real upload processing.
5. Add a production PDF reader and offline downloads in the mobile app.

Only publish books and comics you own or have permission to distribute.
