# Codex × GitHub Pages starter

A static site with an interactive walkthrough of prompting Codex, reviewing a pull request, and publishing on GitHub Pages. The walkthrough displays sample content and runs entirely in the browser.

## Preview locally

From the repository root, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. No package installation or build is required.

## Publish on GitHub Pages

1. Push the site files to your GitHub repository's default branch.
2. On GitHub, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**.
3. Select your default branch and **/ (root)**, then save. Once deployment completes, open the URL shown in Pages settings.

## Reuse the template

Fork or copy this repository. Update the repository and README links in `index.html`, then customize the copy in `index.html`, the colors in `style.css`, or the walkthrough in `demo.js`. Relative asset paths work under a GitHub Pages project URL.

For a first Codex task, try asking it to add dark mode, preserve the visitor’s preference, and test keyboard interaction. Review the resulting changes on GitHub before merging.
