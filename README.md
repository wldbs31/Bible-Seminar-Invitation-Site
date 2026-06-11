# Bible-Seminar-Invitation-Site

A React + Vite single-page site for a Bible seminar invitation, with an EmailJS-powered contact form.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root and add your [EmailJS](https://www.emailjs.com/) credentials:

   ```bash
   VITE_EMAILJS_SERVICE=your_service_id
   VITE_EMAILJS_TEMPLATE=your_template_id
   VITE_EMAILJS_KEY=your_public_key
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The app runs at the local URL printed in the terminal (default http://localhost:5173).

## Available Scripts

- `npm run dev` — start the Vite dev server with hot reload
- `npm run build` — build the production bundle to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
