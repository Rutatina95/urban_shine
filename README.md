# 🧼 Urban Shine | Professional Cleaning Services

![React](https://img.shields.io/badge/React-18.2.0-149ECA?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite)
![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwindcss)
![Base44](https://img.shields.io/badge/Backend-Base44-111111?style=for-the-badge)

Urban Shine is a responsive cleaning-services website built with React. Visitors can explore cleaning options, read reviews and FAQs, and submit a quote request. The app uses Base44 for authentication and quote-request data.

## ✨ Features

- **Service discovery:** Residential, commercial, deep, move-in/move-out, and short-term-rental cleaning information.
- **Quote requests:** A form for contact details, requested service, preferred date, address, and additional notes; submissions are sent to the Base44 `QuoteRequest` entity.
- **Authentication:** Login, registration, password recovery, and protected routes through Base44.
- **Informational sections:** Reviews, service comparisons, FAQs, and contact details.
- **Responsive interface:** React components styled with Tailwind CSS and Radix UI primitives.

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite, JavaScript
- **Styling and UI:** Tailwind CSS, Radix UI, Lucide icons
- **Routing:** React Router DOM
- **Server state:** TanStack React Query
- **Backend platform:** Base44 (app identity, authentication, and quote-request data)

> **Note:** This repository currently implements quote requests, not appointment checkout or payment processing. Stripe and mapping packages may be present in the dependency list, but this README does not describe them as working app features.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or newer and npm
- A Base44 account and access to the associated app
- Deno, for the local Base44 backend

### Installation

```bash
git clone https://github.com/Rutatina95/urban_shine.git
cd urban_shine/urban
npm install
npm install -g base44@latest
```

### Run locally

From the `urban` directory, authenticate and link this checkout to your Base44 app once, then start the local app:

```bash
base44 login
base44 link
base44 dev
```

Open the local URL printed by the CLI (usually `http://localhost:5173`). Use `base44 dev` rather than `npm run dev` when working with the backend; the Vite-only command serves the frontend without the Base44 API proxy.

For frontend-only development against the hosted backend, use `base44 dev --remote`. In remote mode, write operations use your app's production data.

### Environment configuration

Copy `urban/.env.example` to `urban/.env.local` and fill in the Base44 app ID and published app URL if needed for frontend builds or deployment. The example file contains placeholders. Keep real credentials and private tokens out of Git, and do not put secrets in `VITE_` variables because Vite exposes those values in client-side code.

## 📦 Available scripts

Run these from the `urban` directory:

| Command | Description |
| --- | --- |
| `npm run build` | Build the frontend for production |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the configured TypeScript checks |
| `npm run preview` | Preview a production build locally |

## 🚢 Deployment

This app relies on Base44 for identity and backend APIs. Set the required Base44 environment variables in your hosting provider before building the frontend. For Base44-connected deployments, push Git changes and publish the app from the Base44 dashboard so the deployed app stays in sync with this repository.

## 📄 License

No license has been specified yet. Unless a license is added, the source is publicly viewable on GitHub but is not granted an open-source reuse license.