# For Divyansha ❤️

A small, handmade interactive experience — React + Vite + Tailwind + Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static site into `dist/`, which you can drop onto Vercel, Netlify,
GitHub Pages, or any static host.

## Swapping in your own photos

Replace the three files in `src/assets/images/` (`1.jpeg`, `2.jpeg`, `3.jpg`) with
your own photos — keep the same filenames, or update the imports in
`src/sections/Memories.jsx` to match new filenames. Captions live in the same file.

## Structure

```
src/
  components/     reusable pieces (glass card, tilt card, magnetic button,
                   split-text heading, blur-fade reveal, aurora + lamp glows,
                   floating hearts)
  sections/        one file per section of the page, in the order they render
  App.jsx          assembles the sections
  index.css        color tokens, glass/grain utilities, reduced-motion handling
```

## Notes

- Respects `prefers-reduced-motion`.
- All copy lives directly in the section components — easy to tweak wording.
- The "YES" button fires a short confetti burst via `canvas-confetti`.
