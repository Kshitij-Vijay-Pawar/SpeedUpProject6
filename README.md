# SpeedUpProject6 — Portfolio Website

Live Demo: https://kshitijs-portfolio.onrender.com

---

## Overview

This is the personal portfolio website for Kshitij Pawar. It's built using React + Vite and styled using Bootstrap. The site showcases Home, About, Skills, Projects and Contact sections. The Contact form uses a mailto link to open the user's email client.

## Tech Stack

- React 19
- Vite
- Bootstrap 5
- React Router (client routing & navigation)

## Key Features

- Home (Hero) with image
- About and Skills
- Projects showcase
- Contact form (mailto)
- Fully responsive using Bootstrap

---

## Local Development

1. Clone the repository

```bash
git clone https://github.com/Kshitij-Vijay-Pawar/SpeedUpProject6.git
cd SpeedUpProject6
```

2. Install dependencies

```bash
npm install
```

3. Run dev server

```bash
npm run dev
```

- This runs the Vite dev server (default: http://localhost:5173/). If you get a blank page or a 404, verify that:
  - `src/main.jsx` wraps your app in BrowserRouter from `react-router-dom`.
  - Your `index.html` includes the script to `src/main.jsx`.

4. Build for production

```bash
npm run build
```

- The default output directory is `dist/`.

5. Preview the production build locally

```bash
npm run preview
```

---

## Deploy to Render (Static Site)

Render is a great choice for static sites built with Vite.

Follow these steps when creating a new Static Site on Render:

1. Create a New Static Site -> Connect your GitHub repository `Kshitij-Vijay-Pawar/SpeedUpProject6`.
2. Fill out the form using these values:
   - Name: `SpeedUpProject6` (or your own unique name)
   - Branch: `main`
   - Root Directory: leave blank (unless this repo is a monorepo; set `src` if appropriate)
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
   - Auto-Deploy: On (recommended)
3. If you use secrets (none required by default), add them under **Environment Variables**.
4. Create site and watch the build logs. If a build fails, see Troubleshooting below.
---

## Contact Form and Email

- The Contact page uses `mailto` to open the user's email client. To change the recipient, update the `mailto` address in `src/pages/Contact.jsx`:

```js
const mailtoLink = `mailto:your.email@domain.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
```

- If you want a real form backend, you’ll need a server or 3rd-party service (e.g., Formspree) to handle submissions.

---

## Project Structure (summary)

```
src/
  assets/ (images)
  components/ (Navbar, Hero, etc.)
  Layout/ (layouts and outlet)
  pages/ (Home, About, Contact, Projects)
  main.jsx
  App.jsx
index.html
vite.config.js
package.json
```

---

## Tips & Good To Knows

- Vite builds into `dist/` by default. That should be set as the Publish Directory on Render.
- If your site requires environment variables, use Vite’s `VITE_` prefix and set them in Render.

---

## Author

Kshitij Pawar — https://kshitijs-portfolio.onrender.com

---
