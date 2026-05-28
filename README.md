# <p align="center"><img src="https://readme-typing-svg.demolab.com?font=Outfit&size=38&duration=3000&pause=1000&color=FF6B35&center=true&vCenter=true&width=700&height=70&lines=Padmanaban.+Portfolio;Developer+%26+Innovator;AI+Educator+%26+Creator" alt="Padmanaban. Portfolio" /></p>

<p align="center">
  <a href="https://github.com/Padmanaban29072004" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="http://localhost:3000" target="_blank">
    <img src="https://img.shields.io/badge/Live_Demo-Access-FF6B35?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
</p>

---

## ⚡ Overview

Welcome to the source repository for my professional portfolio. This website is built to stand out with immersive visual storytelling, featuring a high-performance **Cinematic Scrolling Canvas Engine** (rendering fluid image sequences at high resolution) and an interactive **3D Page-Flip Book Gallery**.

---

## 🎨 Design & Key Features

* **Cinematic Hero Scroll**: A hardware-accelerated, high-fidelity scroll-driven canvas rendering an image sequence.
* **Retina / High-DPI Support**: Automatically scales the canvas's rendering buffer to match screen `devicePixelRatio` for razor-sharp visuals on all screens.
* **Performance Optimized**: Features WebP-optimized animation frames running with high-quality Lanczos scaling—cutting assets down from **43MB** to just **5.8MB** while quadrupling pixel clarity.
* **Interactive 3D Book Gallery**: A custom page-flip animation allowing users to swipe or click through milestones like folders in a 3D environment.
* **Modern dark theme aesthetics**: Clean spacing, glassmorphic navigations, Outfit-inspired typography, and orange glow styling.

---

## 🛠️ Tech Stack

<div align="center">

| Area | Technologies |
| :--- | :--- |
| **Frontend Core** | ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) |
| **Animation & Style** | ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) |
| **Asset Optimization** | ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![Pillow](https://img.shields.io/badge/Pillow-PIL-555555?style=flat-square) |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) |

</div>

---

## 📈 System Architecture

### 🎥 Cinematic Scroll Engine

```mermaid
graph TD
  Scroll[User Scroll Events] -->|Transform Progress| Progress[scrollYProgress 0 to 1]
  Progress -->|Frame Selector| Index[frameIndex 0 to 239]
  Index -->|Canvas Redraw| Render[Render Frame to Canvas]
  Render -->|DPI Adjuster| Sharpness[Scale by devicePixelRatio]
```

### 📖 Interactive 3D Book Gallery

```mermaid
graph LR
  Swipe[Swipe Left / Click Right] -->|State Trigger| Flip[activePage Increment]
  Flip -->|Rotate 180°| Animation[framer-motion Y-Rotation]
  Animation -->|Depth Layout| ZIndex[Dynamic Z-indexing Stack]
```

---

## 🚀 Getting Started

To run the development server locally, follow these steps:

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Padmanaban29072004/padmanaban-website-main.git
   cd padmanaban-website-main
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```

4. **Build Production Bundle:**
   ```bash
   npm run build
   ```

---

## 🖼️ Image Optimization Pipeline

We utilize a custom Python automation script to handle sequence frame upscaling and conversion:

- **Script location**: `C:\Users\hp\.gemini\antigravity\brain\81fd9f2e-e3bb-4e5f-95a3-c3dfdeb6c617\scratch\upscale_sequence.py`
- **Output details**: Performs Lanczos resampling on the original frames to output high-resolution `1600x900` `.webp` files, significantly reducing load size while improving image quality.

---

<p align="center">Made with ❤️ by <a href="https://github.com/Padmanaban29072004">Padmanaban</a></p>
