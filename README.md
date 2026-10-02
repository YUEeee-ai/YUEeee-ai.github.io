# DongYue Fang · Personal Website

Personal academic website of DongYue Fang (方董樾) — a bilingual (EN/ZH) static site.

**Live:** https://yueeee-ai.github.io/

## Structure

```
index.html          # single-page site (all sections)
css/style.css       # styles
js/i18n.js          # ALL text for both languages — edit copy here
js/main.js          # language switch, scroll behaviours
images/             # avatar, illustrations, figures, svg assets
assets/             # CV pdf and other downloads
```

## Editing content

- **Text**: edit `js/i18n.js` (single source of truth for both languages).
  The English strings are also present inline in `index.html` as a no-JS fallback — keep them in sync when editing.
- **Avatar**: replace `images/avatar.webp` (square, e.g. 400×400) and `images/avatar.png` (used for social previews).
- **CV**: replace `assets/DongYue_Fang_CV.pdf`.
- **Language**: switch EN/ZH via the header button, `?lang=zh` / `?lang=en` URL parameter, or browser language.

## Local preview

Just open `index.html` in a browser, or serve locally:

```
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)

This folder is deployed to the `yueeee-ai.github.io` repository (branch `main`, root).
Pushing to `main` updates the live site automatically.
