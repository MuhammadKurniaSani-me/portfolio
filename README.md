# 🚀 Muhammad Kurnia Sani | Portfolio

A high-performance, minimalist portfolio website built with **Astro 4**, **Tailwind CSS v4**, and **TypeScript**. Designed with a focus on web performance, accessibility (100 Lighthouse scores), and professional aesthetics.

[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

## 🛠️ Tech Stack & Features

- **Framework:** [Astro](https://astro.build/) (Static Site Generation for 0kb JS by default).
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Vite-native engine).
- **Icons:** [Astro-Icon](https://github.com/natemoo-re/astro-icon) with [Iconify](https://iconify.design/) (SVG Inlining).
- **Deployment:** Automated via [GitHub Actions](https://github.com/features/actions).
- **Performance:** Optimized images using Astro's `assets` pipeline (WebP conversion & density descriptors).
- **Architecture:** Data-driven design using central JSON files for easy content updates.

## 📈 Performance Benchmarks

This project is engineered to achieve a **Perfect 100** on Google Lighthouse:
- ✅ **Performance:** 93/100 (Optimized assets & no render-blocking JS).
- ✅ **Accessibility:** 100/100 (WCAG 2.1 compliant contrast ratios).
- ✅ **Best Practices:** 100/100 (Responsive images & secure headers).
- ✅ **SEO:** 100/100 (Semantic HTML & meta tags).

## 📂 Project Structure

```text
/
├── src/
│   ├── assets/       # High-res profile pictures and local assets
│   ├── data/         # JSON files (profile, projects, skills, languages)
│   ├── layouts/      # BaseLayout with Navbar and optimized Footer
│   └── pages/        # Astro routes (index, projects, 404)
├── public/           # Static files (Resume PDF, favicon)
└── astro.config.mjs  # Hybrid config: Tailwind v4 (Vite) + Astro Icon

```sh
npm create astro@latest -- --template basics
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

📄 License
Distributed under the MIT License. See LICENSE for more information.

Created by Muhammad Kurnia Sani
