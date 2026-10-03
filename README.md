# Distraction-Free Study & Chat Workspace (Project History)

Welcome to the official repository for my focus and productivity toolkit! This repository documents a complete journey of overcoming Instagram Reels procrastination by building custom-tailored tools from scratch.

---NOTE:(For max. distraction avoiding)
1. Download the "instagram-focus-blocker" in my repository and extract the files and save it in your computer.
     2. Go to your chrome browser extensions and turn on "Developer mode" then click "load unpacked" and upload the "insta-focus-extension" folder.
     3. Now check the final results.

##  Project Structure & What Each Folder Does

This repository contains 4 distinct milestones and iterations developed during this project:

1. **`chrome-focus-sidepanel/`**
   * *What it does:* An early exploration into building a custom browser sidepanel to keep study tools accessible while browsing social media.
   * Disadvantage: Instagram didnt allow me to add this in my page since it assumed it as a fraud attempt.

2. **`insta-focus-extension/`**
   * *What it does:* A native Google Chrome Extension (`manifest.json`, `content.js`, `styles.css`) designed to physically block and hide distracting elements like the Reels tab and Explore feeds directly on `instagram.com`.
   * Advantage: It is very good and working 
     Disadvantage: if it's an extension i cannot share it with my friends so i thought to make it into a website.

3. **`study-workspace/`**
   * *What it does:* The intermediate web dashboard iterations where we transitioned from a browser extension to a unified, multi-device web app. It experimented with layout designs, tab structures, and local data persistence.
   * Nice but the same problem as first one and i also wanted to customise it into cartoon theme

4. **`shinchan-1st/` **
   * *What it does:* The final, polished all-in-one web dashboard (`index.html` + `couple.jpg`).
   * an auto-saving notes scratchpad (`localStorage`), a local PDF reader, a YouTube lecture embedder, and smart cross-platform chat launchers for Instagram DMs and WhatsApp.
   * Advantages: Firstly loved this as it has whatsapp, insta and all my notes so i can work and see my messages all at ones.
   * Disadvantages: The shinchan  photos didn't load properly and the shinchan images were not so attraction.
   * Next thought: I wanted to personalise this 
5. **`final` (The Final Production Folder)**
   * *What it does:* The final, polished all-in-one web dashboard (`index.html` + `couple.jpg`). Hosted live via Vercel, it features a personalized couple illustration theme, an auto-saving notes scratchpad (`localStorage`), a local PDF reader, a YouTube lecture embedder, and smart cross-platform chat launchers for Instagram DMs and WhatsApp.
   * Advantages: Everything was like the way i wanted it to be. and this time the customisation yellow colours of website were taken and inspired from the photo and I felt like it's our and was happy that my efforts were worth.
   * Disadvantages: During this process i forgot to check wether the reels tab was not coming or not and when i hosted the website I was able to see the reels tab also in my website although it open the instahram messaging page direty it felt like if the reels tab is still there then what is the point of making all this as my distraction is not completely gone.
   * Solution: I then downloaded the insta-focus-extension in my chrome  but it has the focus panel so i created anothe extension named "instagram-focus-blocker" which made me reach my goal and now i don't get the reels tab as my chrome hides it.
   * What I learnt: I understood that when i host it through any website online I cannot hide it directly and an extension is required .
   * Am I satisfied?: Actually yes because since I have the extension I can easily overcome my distraction and study now with this  but I am dissatisfied with the fact that everyone who is seeing this cannot do that but if you really want to overcome FOLLOW THE STEPS BELOW:
     1. Download the "instagram-focus-blocker" in my repository and extract the files and save it in your computer.
     2. Go to your chrome browser extensions and turn on "Developer mode" then click "load unpacked" and upload the "instagram-focus-blocker" folder.
     3. Now check the final results.

---

##  How the Project Developed (From Start to Finish)

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
