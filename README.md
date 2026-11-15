# Kevin Lourdu — Portfolio Architecture & Motion Engineering

A personal portfolio website engineered for **Kevin Lourdu**, 2nd-year B.Tech Computer Science and Engineering (Artificial Intelligence and Machine Learning) student at Jain University, Bengaluru.

---

## 1. Directory Structure

```
S:\Works\Projects\kevin-lourdu-portfolio\
├── index.html       # Master Single-Page Application (SPA) with tab & hash deep-linking
├── projects.html    # Standalone Projects Archive (Genetic Algorithm Visualizer, Internship Portal, Portfolio)
├── skills.html      # Standalone Technical Skills & Stack (Python, C, AI, Machine Learning, Data Science)
├── education.html   # Standalone Education & Qualifications (Jain University & Cambridge Matric Hr Sec)
├── about.html       # Standalone Biography & Philosophy
├── contact.html     # Standalone Connect Hub & Message Form
├── styles.css       # Complete design token stylesheet & responsive media queries
├── script.js        # 3D spatial perspective tilt, cursor spotlight, Web Audio click synthesis
├── preview.bat      # Windows batch launcher to open in default browser
└── README.md        # Architecture, tokens, and technical documentation
```

---

## 2. Motion Physics & Interactive Capabilities

1. **3D Spatial Perspective Mouse Tilt:**
   - Interactive cards calculate real-time mouse offsets from center: `rotateX = ((y - centerY) / centerY) * -7deg`, `rotateY = ((x - centerX) / centerX) * 7deg`.
   - Utilizes `transform: perspective(1000px) rotateX(...) rotateY(...) translateY(-2px)` without layout thrashing.
2. **Cursor-Following Specular Spotlight Glare:**
   - Injects dynamic CSS custom properties `--mouse-x` and `--mouse-y` dynamically tracking pointer coordinates to project an ethereal radial spotlight across card surfaces.
3. **Web Audio API Tactile Sound Synthesis:**
   - Synthesizes a clean 1200Hz sine-wave transient descending to 400Hz over 12ms on all interactive button clicks without external audio files.
4. **Spring Restitution:**
   - Buttons and interactive items employ active press states `scale(0.97)` with `cubic-bezier(0.16, 1, 0.3, 1)` easing.
5. **Breathing Beacon Indicator:**
   - The status badge ("Available for Internships") utilizes CSS `@keyframes pulse-ring` breathing at 2-second cycles in accent lime `#c5ff41`.

---

## 3. Personal & Academic Profile

- **Full Name:** Kevin Lourdu
- **Degree:** Bachelor of Technology (B.Tech)
- **Branch:** Computer Science & Engineering (Artificial Intelligence & Machine Learning)
- **Current Year:** 2nd Year
- **University:** Jain University, Bengaluru, Karnataka, India
- **Hometown / School:** Krishnagiri, Tamil Nadu (Cambridge Matric Higher Secondary School)
- **Personal Email:** `kevinpansi2008@gmail.com`
- **University Email:** `juug25btech23464@jainuniversity.ac.in`
- **LinkedIn:** [https://www.linkedin.com/in/kevin-lourdu-a-3013b038b](https://www.linkedin.com/in/kevin-lourdu-a-3013b038b)
- **Instagram:** [@_kev.shadowluxe_](https://www.instagram.com/_kev.shadowluxe_/?utm_source=ig_web_button_share_sheet)

---

## 4. Technical Skills & Projects Featured

### Core Skills:
- **Python:** Scientific computing, data wrangling, automation, AI simulation.
- **C Programming:** Pointers, memory allocation, data structures, algorithm efficiency.
- **Artificial Intelligence:** Search heuristics, genetic algorithms, state space optimization.
- **Machine Learning:** Supervised/unsupervised models, regression, classification, Scikit-learn.
- **Data Science:** Exploratory data analysis, statistical distributions, NumPy, Pandas, Matplotlib.
- **Developer Tools:** Visual Studio Code, Git, GitHub, Linux bash terminal, Markdown.

### Projects Showcase:
1. **Genetic Algorithm Visualizer:**
   Computational simulation illustrating natural selection, roulette-wheel fitness selection, multi-point crossover, and mutation rates across evolving generations.
2. **University Internship Portal:**
   Academic portal enabling Jain University students to browse verified internship roles, submit credentials, track recruiter milestones, and communicate with mentors.
3. **Personal Portfolio Website:**
   High-contrast, motion-rich developer identity built with 3D spatial perspective tilt, cursor spotlight glare, Emil Kowalski tactile spring clicks via Web Audio synthesis, and client-side SPA routing.

---

## 5. How to Run & Customize

- Double-click `preview.bat` inside `S:\Works\Projects\kevin-lourdu-portfolio\`.
- Or open `index.html` directly in any modern web browser.
- **To add your own profile photo:** Save any photo as `kevin-photo.jpg` in `S:\Works\Projects\kevin-lourdu-portfolio\` and update the `src` attribute of the avatar image in `index.html` (instructions are marked with an HTML comment).
