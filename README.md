# Dr. Tram T.P. Truong — Static Site

This folder contains a simple static website for Dr. Tram T.P. Truong.

You can publish it to GitHub Pages. Below are two easy methods:

## Option A — Using Git + GitHub (manual)

1. Create a repository on GitHub (for example `dr-truong-site`).
2. From this folder on your PC, run:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

3. In the GitHub repo Settings → Pages, choose the `main` branch and `/ (root)` folder, then Save. After a few minutes your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Option B — Using GitHub CLI (automatic)

If you have `gh` installed and are logged in:

```bash
gh repo create <your-username>/<repo-name> --public --source=. --remote=origin --push
# Then enable pages (optional):
gh pages set-up --branch main --path /
```

The site will then be published as above.

## Quick tip for iPhone
After publishing, open the public URL in Safari on your iPhone.

---
Files in this folder:
- `index.html`, `oeffnungszeiten.html`, `style.css`, `script.js`, `images/` (if any)

If you'd like, I can try to create the Git repository locally and prepare a `gh` command for you — but I cannot push to your GitHub account without your credentials. Tell me if you want the automated script run here or just instructions.
