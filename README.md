# Personal Portfolio Website

A lightweight, responsive, Single Page Application (SPA) portfolio built to showcase web development projects. 

Designed with performance and simplicity in mind, this project uses **HTML5**, **Vanilla JavaScript**, and **TailwindCSS** (via CDN). It requires no complex build steps or package managers, making it instantly deployable to GitHub Pages.

## 🚀 Live Demo

**[View Live Portfolio Here](https://muhammadkurniasani-me.github.io/portfolio)**

## ✨ Key Features

* **⚡ Zero-Build Setup**: No `npm install` or `webpack` required. Just standard browser technologies.
* **🎨 Rapid Styling**: Styled using TailwindCSS via CDN for immediate visual feedback.
* **📱 Fully Responsive**: Mobile-first design with a custom toggleable navigation menu.
* **🎞️ Live Project Previews**: distinctive "Zoomed-Out" iframe previews that allow users to see live sites without leaving the portfolio.
* **✨ Smooth Animations**: 
    * Intersection Observer for "fade-in on scroll" effects.
    * Smooth scrolling navigation.
    * Hover effects on project cards.
* **🌑 Dark Mode**: Built with a modern dark theme using Slate/Gray color palettes.

## 🛠️ Tech Stack

* **Structure**: HTML5 (Semantic)
* **Styling**: TailwindCSS (CDN Script)
* **Logic**: Vanilla JavaScript (ES6+)
* **Hosting**: GitHub Pages

## 📂 Project Structure

```text
/
├── index.html      # The main entry point containing structure, styles, and logic
├── README.md       # Project documentation
└── assets/         # (Optional) Folder for local images like profile.jpg
```

---

## 🚀 How to Run Locally

1. **Clone the repository**:
```bash
git clone [https://github.com/muhammadkurniasani-me/portfolio.git](https://github.com/muhammadkurniasani-me/portfolio.git)

```


2. **Open the file**:
Simply double-click `index.html` to open it in your browser.
*OR*
If you use VS Code, use the "Live Server" extension to serve it at `localhost:5500`.

## ⚙️ Customization Guide

### 1. Update Personal Info

Edit the `Home` and `About` sections in `index.html` to reflect your bio and tagline.

### 2. Change Profile Picture

Locate the `img` tag in the About section and replace the `src` attribute:

```html
<img src="./assets/my-photo.jpg" alt="Muhammad Kurnia Sani" ... >

```

### 3. Configure Contact Form

The form is currently a frontend simulation. To make it functional without a backend:

1. Go to [Formspree](https://formspree.io/).
2. Create a free form endpoint.
3. Update the form tag in `index.html`:
```html
<form action="[https://formspree.io/f/YOUR_FORM_ID](https://formspree.io/f/YOUR_FORM_ID)" method="POST">

```



### 4. Managing Iframe Previews

The project cards use a CSS trick to make iframes look like high-quality thumbnails.

* **Width/Height**: Set to `200%`
* **Scale**: Set to `0.5` (50%)
* **Result**: This mimics a "desktop view" thumbnail rather than a squashed mobile view.

## 📦 Deployment (GitHub Pages)

1. Push your code to GitHub.
2. Go to your Repository **Settings**.
3. Navigate to **Pages** (on the left sidebar).
4. Under **Branch**, select `main` (or `master`) and hit **Save**.
5. Your site will be live in ~60 seconds.

## 📄 License

This project is open source and available under the MIT License.

---

Built by **Muhammad Kurnia Sani**