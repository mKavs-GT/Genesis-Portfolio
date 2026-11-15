# GENESIS&reg; | Creative Video Production Studio Portfolio

A high-performance, dark-mode cinematic portfolio website for **GENESIS&reg; Video Production Studio**. Featuring commercial showreels, high-definition background video streaming, viewport-aware video lazy-loading, smooth section navigation, and responsive typography.

---

## 🚀 Key Architectural & Performance Highlights

- **Full-Bleed Cinematic Hero Experience**: Dual-format streaming video background (`.webm` & `.mp4`) with compressed `.webp` poster fallback for instant initial paint.
- **Viewport-Aware IntersectionObserver Lazy Loading**: Videos only fetch and stream when scrolled within 300px of the user viewport, automatically pausing when scrolled out of view to preserve network bandwidth and GPU/CPU memory.
- **Multi-Format Web Video Delivery**: Every video element provides both VP9/WebM and H.264/MP4 optimized encodes alongside WebP posters.
- **Flawless Asset Resolution**: Clean relative paths (`./`) ensure the site runs properly whether served from a root domain (`https://studio.com/`) or a subdirectory (`https://username.github.io/Genesis-Portfolio/`).
- **Interactive Micro-Interactions**: Active navigation scrollspy, interactive feature playback triggers, and client-side newsletter validation with live feedback.
- **Multi-Cloud Deployment Ready**: Preconfigured for instant 1-click deployments on **GitHub Pages**, **Vercel**, and **Netlify**.

---

## 📁 Repository Structure

```text
Genesis-Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions CI/CD for automated GitHub Pages deployment
├── .gitignore                     # Git ignore rules for OS files, IDE configs, backups, and raw videos
├── .netlifyignore                 # Netlify deployment ignore configuration
├── .vercelignore                  # Vercel deployment ignore configuration
├── adv1_optimized.mp4             # High-efficiency H.264 commercial video cut
├── adv1_optimized.webm            # High-efficiency VP9 WebM cut
├── adv1_poster.webp               # Lightweight WebP poster frame
├── adv2_optimized.mp4
├── adv2_optimized.webm
├── adv2_poster.webp
├── adv3_optimized.mp4
├── adv3_optimized.webm
├── adv3_poster.webp
├── featured1.jpg                  # Project Alpha showcase thumbnail
├── featured2.jpg                  # Neon Nights showcase thumbnail
├── featured3.jpg                  # The Horizon showcase thumbnail
├── herovideo_optimized.mp4        # Hero background H.264 stream
├── herovideo_optimized.webm       # Hero background WebM stream
├── herovideo_poster.webp          # Hero initial poster frame
├── index.html                     # Semantic HTML5 entry point with OpenGraph & meta SEO tags
├── netlify.toml                   # Netlify build, redirect, and caching rules
├── productionstudio_optimized.mp4 # Studio production video H.264
├── productionstudio_optimized.webm# Studio production video WebM
├── productionstudio_poster.webp   # Studio production video poster
├── README.md                      # Project documentation and deployment guides
├── robots.txt                     # Search engine crawler configuration
├── script.js                      # Viewport scrollspy, arrow interaction & newsletter handling
├── sitemap.xml                    # SEO sitemap specification
├── style.css                      # Modern dark-mode cinematic styling with smooth scroll
├── turnheads1_optimized.mp4       # Showcase cut 1 H.264
├── turnheads1_optimized.webm      # Showcase cut 1 WebM
├── turnheads1_poster.webp         # Showcase cut 1 poster
├── turnheads2_optimized.mp4       # Showcase cut 2 H.264
├── turnheads2_optimized.webm      # Showcase cut 2 WebM
├── turnheads2_poster.webp         # Showcase cut 2 poster
├── unveiling_optimized.mp4        # Story section video H.264
├── unveiling_optimized.webm       # Story section video WebM
├── unveiling_poster.webp          # Story section video poster
└── vercel.json                    # Vercel caching headers, clean URLs, and redirect rules
```

---

## 🌐 Instant Deployment Guides

### 1. Deploy to GitHub Pages (Automated GitHub Actions)
A GitHub Actions workflow is preconfigured in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Configure production deployment"
   git push -u origin main
   ```
2. In your GitHub repository:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Every push to the `main` branch will automatically deploy your portfolio to `https://<username>.github.io/Genesis-Portfolio/`.

---

### 2. Deploy to Vercel (1-Click)
The repository includes an optimized [`vercel.json`](vercel.json) with caching headers, clean URLs, and legacy path redirects.

#### Option A: Vercel Web Dashboard
1. Go to [vercel.com/new](https://vercel.com/new).
2. Connect your GitHub account and import the `Genesis-Portfolio` repository.
3. Keep default settings (Framework Preset: **Other**, Root Directory: `./`).
4. Click **Deploy**.

#### Option B: Vercel CLI
```bash
npm install -g vercel
vercel
```

---

### 3. Deploy to Netlify
The repository includes [`netlify.toml`](netlify.toml) configured with immutable asset caching for videos/images and redirects.

#### Option A: Netlify Web Dashboard
1. Go to [app.netlify.com](https://app.netlify.com).
2. Click **Add new site** > **Import an existing project**.
3. Select **GitHub** and authorize `Genesis-Portfolio`.
4. Publish directory will automatically read as `.` from `netlify.toml`.
5. Click **Deploy Site**.

#### Option B: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

### 4. Deploy to Cloudflare Pages
1. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages**.
2. Connect your GitHub account and select `Genesis-Portfolio`.
3. Set **Build command** to empty and **Build output directory** to `.`.
4. Click **Save and Deploy**.

---

## 🛠️ Local Development & Testing

To preview and test the site locally:

### Using Python:
```bash
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

### Using Node.js (npx serve):
```bash
npx serve .
```

### Using VS Code:
Right-click `index.html` and click **Open with Live Server**.

---

## 📄 License
&copy; 2026 GENESIS STUDIO. All rights reserved.
