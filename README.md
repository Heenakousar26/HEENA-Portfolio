# Kolimi Heena Kousar — Developer Portfolio

A responsive React + Vite portfolio based on the supplied resume. It includes a custom dark editorial design, mobile navigation, project visuals, skills, internship experience, education, certifications, and contact links.

## Run locally
Requirements: Node.js 18+ (20+ recommended) and npm.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Deploy on Render
1. Push this project to a GitHub repository.
2. In Render choose **New + → Static Site** and connect the repository.
3. Build command: `npm install && npm run build`
4. Publish directory: `dist`
5. Deploy.

## Resume
The supplied resume should be saved as `public/HeenaKousar_Resume.pdf`. Replace it with the latest approved PDF using the same filename, or update `profile.resume` in `src/main.jsx`.

## Before publishing
- Add the exact GitHub and LinkedIn profile URLs to `profile.github` and `profile.linkedin` in `src/main.jsx`.
- Verify the Resume Job Matcher demo and repository URLs belong on this portfolio; the resume PDF did not expose the owner's exact profile URLs.
- Add exact Live Demo / GitHub links for Online Booking System and E-Commerce Backend System if available.
- Confirm phone and email are suitable for public display.
- Test the resume download and all links after deployment.

The contact section uses a `mailto:` link and does not pretend to submit a backend contact form.
