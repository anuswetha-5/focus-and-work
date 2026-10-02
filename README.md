# ⚡ Distraction-Free Study & Chat Workspace (Project History)

Welcome to the official repository for my focus and productivity toolkit! This repository documents a complete journey of overcoming Instagram Reels procrastination by building custom-tailored tools from scratch.

---

## 📂 Project Structure & What Each Folder Does

This repository contains 4 distinct milestones and iterations developed during this project:

1. **`chrome-focus-sidepanel/`**
   * *What it does:* An early exploration into building a custom browser sidepanel to keep study tools accessible while browsing social media.

2. **`insta-focus-extension/`**
   * *What it does:* A native Google Chrome Extension (`manifest.json`, `content.js`, `styles.css`) designed to physically block and hide distracting elements like the Reels tab and Explore feeds directly on `instagram.com`.

3. **`study-workspace/`**
   * *What it does:* The intermediate web dashboard iterations where we transitioned from a browser extension to a unified, multi-device web app. It experimented with layout designs, tab structures, and local data persistence.

4. **`shinchan-1st/` (The Final Production Folder)**
   * *What it does:* The final, polished all-in-one web dashboard (`index.html` + `couple.jpg`). Hosted live via Vercel, it features a personalized couple illustration theme, an auto-saving notes scratchpad (`localStorage`), a local PDF reader, a YouTube lecture embedder, and smart cross-platform chat launchers for Instagram DMs and WhatsApp.

---

## 🚀 How the Project Developed (From Start to Finish)

### Phase 1: The Distraction Problem & Extension Approach
* **The Problem:** Endless scrolling on Instagram Reels was causing severe procrastination and breaking focus during study sessions.
* **The First Solution:** We built a lightweight **Chrome Extension** to inject CSS/JS that forcefully hid the Reels and Explore sections, keeping the browser clean.

### Phase 2: Shifting to a Custom Web Dashboard
* **The Limitation:** Browser extensions only work on desktop Chrome and cannot easily manage multi-device use (like phones or tablets).
* **The Breakthrough:** We built a dedicated web dashboard (`index.html`) implementing a clean split-screen workspace: study tools on the left, chat launchers on the right. 

### Phase 3: Optimizing for Cross-Platform Use & Security
* **The Challenge:** Meta’s security policies (`X-Frame-Options`) block direct iframe embedding of Instagram and WhatsApp.
* **The Solution:** We implemented **smart device detection logic** in JavaScript:
  * On *Laptops*, buttons open sleek side-by-side popup windows.
  * On *Mobile Phones*, buttons safely open new tabs/apps seamlessly without breaking layout responsiveness.

### Phase 4: Personalization & Deployment
* **The Polish:** We integrated local persistent notes (via `localStorage`), a local PDF file reader, a YouTube URL video parser, and a custom couple illustration aesthetic.
* **The Deployment:** Fully prepared for version control and hosted live via **Vercel** for instant, anywhere access across laptops and mobile devices.
