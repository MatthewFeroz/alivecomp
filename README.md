# Matthew Feroz - Portfolio Website

A clean, accessible portfolio website showcasing sponsors, YouTube channel, and contact information.

## Features

- 🎨 Modern, responsive design with dark mode support
- ♿ WCAG AA accessible with proper contrast ratios and keyboard navigation
- 🔗 Clean URLs (no .html extensions)
- 📱 Mobile-friendly responsive layout
- 🎯 Modular code structure (CSS, JS, and data separated)

## GitHub Pages Setup

### Initial Setup

1. **Create a GitHub repository** (if you haven't already)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

3. **Your site will be live at:**
   - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - Or if the repo is named `YOUR_USERNAME.github.io`, it will be at:
   - `https://YOUR_USERNAME.github.io/`

### Clean URLs

The site uses clean URLs (without .html extensions):
- `/` or `/home` → `index.html`
- `/sponsors` → `sponsors.html`
- `/sponsor-me` → `sponsor-me.html`

This is handled by the `404.html` redirect script and `_config.yml` configuration.

### Updating Your Site

After making changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

GitHub Pages will automatically rebuild your site (usually takes 1-2 minutes).

## Local Development

Simply open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## File Structure

```
.
├── index.html          # Home page (portfolio)
├── sponsors.html       # Sponsors page
├── sponsor-me.html     # Sponsor contact page
├── 404.html           # Clean URL redirect handler
├── _config.yml        # GitHub Pages/Jekyll config
├── css/
│   └── styles.css     # Custom styles
├── js/
│   ├── config.js      # Tailwind configuration
│   ├── theme.js       # Theme toggle functionality
│   └── components.js  # Reusable components
└── data/
    ├── links.js       # Portfolio links data
    └── sponsors.js    # Sponsors data
```

## Customization

- **Add/Edit Links**: Edit `data/links.js`
- **Add/Edit Sponsors**: Edit `data/sponsors.js`
- **Change Colors**: Edit `js/config.js` and `css/styles.css`
- **Modify Footer**: Edit `js/components.js`

## License

This project is open source and available under the MIT License.

