# PL-300 Trainer

An interactive practice site for the **Prepare the data** section of Microsoft PL-300. Each attempt draws 15 random questions from a 45-question library, scores the result after submission, and explains every answer. Case-study questions show their scenario before the question.

## Deploy on Vercel

This repository is a plain static website. The ready-to-serve files are in `dist/`:

- `index.html` — page structure and styling
- `app.js` — quiz logic
- `questions.js` — 45-question practice library

The included `vercel.json` sets `dist` as Vercel's output directory. When importing the GitHub repository in Vercel, use these settings:

| Vercel setting | Value |
| --- | --- |
| Framework Preset | Other |
| Root Directory | `.` (the repository root) |
| Build Command | Leave empty |
| Install Command | Leave empty |
| Output Directory | `dist` |

Then select **Deploy**. Future pushes to `main` automatically create a new production deployment when Git integration is enabled.

No environment variables or database connections are required.

## If Vercel still shows a 404 page

Confirm that the deployment's source contains `dist/index.html` and that the project Root Directory is the repository root. Do not set Root Directory to `dist`; Vercel needs the root-level `vercel.json` to apply the output-directory setting.
