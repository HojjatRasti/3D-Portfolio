🌟 3D Portfolio | Three.js Edition
==================================

**Description:**\
This project is a modern interactive **3D portfolio** built entirely with **Three.js**, designed to showcase skills, projects, and personality through immersive real-time graphics.\
No external animation libraries are used --- animations, transitions, and interactions are powered purely by Three.js and custom JavaScript logic.\
This portfolio delivers a unique, visually rich experience that stands out from traditional 2D websites.

* * * * *

✨ Key Features
--------------

### 🧩 Pure Three.js Animations

-   Custom animations for models, camera, and environment

-   Smooth transitions handled through native Three.js functions

-   Shader-based effects (optional)

### 🌍 Immersive 3D Environment

-   Real-time 3D scene optimized for performance

-   Dynamic lighting + environment maps

-   Interactive 3D elements reacting to cursor or touch input

-   Interactive camera (Orbit or custom controls)

### 🎨 Modern UI + Minimal Design

-   Clean layout combining 3D content and 2D overlays

-   Responsive design for all devices

-   Smooth section flow between About, Projects, Skills, and Contact

### 🎮 Interactive Experience

-   Hover/click interactions via Raycaster

-   Camera focus animations on 3D objects

-   Animated transitions between portfolio sections

* * * * *

🛠️ Tech Stack
--------------

Frontend Rendering: Three.js\
3D Models: GLB / GLTF\
Controls: OrbitControls / Custom camera rig\
Textures: HDRI, PNG, JPG\
Build Tool: Vite / Parcel / Webpack (depends on your setup)\
Interaction System: Raycaster + native animation loops

* * * * *

▶️ How to Run
-------------

1.  Install dependencies

2.  Start the local development server 
```
npm run dev
```

3.  Open your browser and enjoy the 3D interactive experience

* * * * *

📝 Development Notes
--------------------

-   Use compressed `.glb` models for best performance

-   Keep polygon count mobile-friendly

-   Always enable `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))`

-   OrbitControls or custom camera rigs can be used

-   Use `requestAnimationFrame` for all animations

-   Optimize lighting --- avoid too many shadow-casting lights

* * * * *

👨‍💻 Author
------------

**Hojjat Rasti**\
Front-End Developer | Creative Web Experiences | Three.js Enthusiast

* * * * *
🎬 Preview
---------


https://github.com/user-attachments/assets/904380d5-8acd-44a2-b29a-e1e6148374ab


* * * * *
⭐ Support
---------

If you enjoy this 3D portfolio, consider giving the repository a **⭐ Star** --- it motivates future creative work!

* * * * *
