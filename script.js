/* ===================================
   FUTURISTIC GAME DEV PORTFOLIO CSS
   Complete with Spaceship Integration
   =================================== */

:root {
    --primary-color: #00d4ff;
    --secondary-color: #9d4edd;
    --accent-color: #3a0ca3;
    --dark-bg: #0a0e27;
    --card-bg: rgba(15, 20, 45, 0.8);
    --text-primary: #e0e0e0;
    --text-secondary: #a0a0a0;
    --border-color: rgba(0, 212, 255, 0.2);
    --glow-color: rgba(0, 212, 255, 0.5);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    background: #0a0e27;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ===================================
   ANIMATED BACKGROUND
   =================================== */
.animated-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1428 100%);
}

.grid-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(0deg, transparent 24%, rgba(0, 212, 255, 0.05) 25%, rgba(0, 212, 255, 0.05) 26%, transparent 27%),
        linear-gradient(90deg, transparent 24%, rgba(0, 212, 255, 0.05) 25%, rgba(0, 212, 255, 0.05) 26%, transparent 27%);
    background-size: 50px 50px;
    animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
    0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
}

.mouse-follower {
    position: fixed;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(0, 212, 255, 0.2), transparent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
    filter: blur(60px);
    display: none;
}

.mouse-follower.active {
    display: block;
}

.bg-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    opacity: 0.6;
}

.blob-1 {
    width: 400px;
    height: 400px;
    background: linear-gradient(45deg, #00d4ff, #3a0ca3);
    top: -100px;
    right: -100px;
    animation: blob1-move 15s ease-in-out infinite;
}

.blob-2 {
    width: 300px;
    height: 300px;
    background: linear-gradient(45deg, #9d4edd, #00d4ff);
    bottom: -50px;
    left: -50px;
    animation: blob2-move 20s ease-in-out infinite;
}

.blob-3 {
    width: 250px;
    height: 250px;
    background: linear-gradient(45deg, #3a0ca3, #9d4edd);
    top: 50%;
    left: 50%;
    animation: blob3-move 18s ease-in-out infinite;
}

@keyframes blob1-move {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(-50px, 50px) scale(1.1); }
    66% { transform: translate(50px, -50px) scale(0.9); }
}

@keyframes blob2-move {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(100px, -50px) scale(0.9); }
    66% { transform: translate(-50px, 100px) scale(1.1); }
}

@keyframes blob3-move {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.2); }
}

/* ===================================
   SPACESHIPS ANIMATION (ENHANCED)
   =================================== */
.spaceships-container {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none !important;
    z-index: 4;
    overflow: visible;
}

.spaceship {
    position: fixed;
    width: 50px;
    height: 40px;
    pointer-events: none !important;
    z-index: 4;
    will-change: transform, left, top;
}

.spaceship-body {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #00d4ff, #9d4edd);
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
    filter: drop-shadow(0 0 12px rgba(0, 212, 255, 0.95)) 
            drop-shadow(0 0 6px rgba(157, 78, 221, 0.7));
    position: relative;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3);
}

.spaceship-body::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), transparent);
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
}

.spaceship-body::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 20px;
    background: linear-gradient(to bottom, #00d4ff, transparent);
    filter: blur(3px);
    opacity: 0.8;
}

/* ===================================
   LOADING SCREEN
   =================================== */
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    animation: fadeOut 0.8s ease-in 2.5s forwards;
}

.loading-container {
    text-align: center;
}

.loading-spinner {
    width: 80px;
    height: 80px;
    border: 4px solid rgba(0, 212, 255, 0.2);
    border-top: 4px solid var(--primary-color);
    border-radius: 50%;
    animation: spin 1.5s linear infinite;
    margin: 0 auto 30px;
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.4);
}

.loading-text {
    color: var(--primary-color);
    font-size: 1.3rem;
    letter-spacing: 3px;
    margin-bottom: 20px;
    animation: pulse 1.5s ease-in-out infinite;
}

.loading-bar {
    width: 300px;
    height: 4px;
    background: rgba(0, 212, 255, 0.1);
    margin: 0 auto;
    overflow: hidden;
}

.loading-progress {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    animation: loadingFill 2s ease-in-out forwards;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

@keyframes loadingFill {
    0% { width: 0%; }
    100% { width: 100%; }
}

@keyframes fadeOut {
    to { opacity: 0; visibility: hidden; }
}

/* ===================================
   NAVBAR
   =================================== */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(10, 14, 39, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
    padding: 1rem 0;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.1);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-text {
    padding: 0.5rem 1rem;
    border: 2px solid var(--primary-color);
    border-radius: 5px;
    color: var(--primary-color);
    font-size: 1.5rem;
    font-weight: bold;
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.5);
    cursor: pointer;
    transition: 0.3s;
}

.logo-text:hover {
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.8);
    transform: scale(1.05);
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 0.95rem;
    position: relative;
    transition: 0.3s;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: width 0.3s;
}

.nav-link:hover {
    color: var(--primary-color);
}

.nav-link:hover::after {
    width: 100%;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--primary-color);
    margin: 5px 0;
    border-radius: 3px;
    transition: 0.3s;
}

/* ===================================
   HERO SECTION
   =================================== */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-top: 80px;
}

.particles {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--primary-color);
    border-radius: 50%;
    animation: float 20s infinite;
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.8);
}

@keyframes float {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
    100% { transform: translate(100px, -100px) rotate(360deg); opacity: 0; }
}

.stars-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
        radial-gradient(1px 1px at 10% 20%, var(--primary-color), transparent),
        radial-gradient(1px 1px at 50% 50%, var(--secondary-color), transparent),
        radial-gradient(1px 1px at 80% 10%, var(--primary-color), transparent),
        radial-gradient(1px 1px at 90% 90%, var(--secondary-color), transparent);
    opacity: 0.8;
}

.hero-glow {
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(0, 212, 255, 0.15), transparent);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: pulse 4s ease-in-out infinite;
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 900px;
}

.hero-title {
    font-size: 5rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    animation: slideDown 0.8s ease-out;
    letter-spacing: 2px;
}

.hero-subtitle {
    font-size: 1.8rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
    animation: slideUp 0.8s ease-out 0.2s backwards;
}

.hero-description {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    animation: slideUp 0.8s ease-out 0.4s backwards;
}

.hero-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    animation: slideUp 0.8s ease-out 0.6s backwards;
}

@keyframes slideDown {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

@keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

/* ===================================
   BUTTONS
   =================================== */
.btn {
    padding: 1rem 2.5rem;
    border: 2px solid var(--primary-color);
    background: transparent;
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
    display: inline-block;
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transition: left 0.3s;
    z-index: -1;
}

.btn:hover::before {
    left: 0;
}

.btn-primary {
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
}

.btn-primary:hover {
    color: white;
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.8);
    transform: translateY(-5px);
}

.btn-secondary {
    border-color: var(--secondary-color);
    color: var(--secondary-color);
    box-shadow: 0 0 20px rgba(157, 78, 221, 0.4);
}

.btn-secondary:hover {
    color: white;
    box-shadow: 0 0 30px rgba(157, 78, 221, 0.8);
    transform: translateY(-5px);
}

.btn-outline {
    border-color: var(--primary-color);
    padding: 0.7rem 1.8rem;
    font-size: 0.9rem;
}

.btn-outline:hover {
    background: rgba(0, 212, 255, 0.15);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.6);
}

.btn-large {
    padding: 1.2rem 3rem;
    font-size: 1.1rem;
}

.btn-submit {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

/* ===================================
   SECTIONS
   =================================== */
section {
    padding: 80px 0;
    position: relative;
}

.section-title {
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.section-title::after {
    content: '';
    display: block;
    width: 150px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    margin: 1.5rem auto 0;
    border-radius: 2px;
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.5);
}

.section-subtitle {
    text-align: center;
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: 3rem;
}

/* ===================================
   ABOUT SECTION
   =================================== */
.about {
    background: rgba(10, 20, 45, 0.5);
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
}

.about-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

.about-text {
    padding: 2rem;
    background: rgba(0, 212, 255, 0.08);
    border-left: 4px solid var(--primary-color);
    border-radius: 12px;
}

.about-subtitle {
    font-size: 1.8rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.about-text p {
    color: var(--text-secondary);
    margin-bottom: 1.2rem;
    line-height: 1.8;
}

.about-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
}

.stat {
    text-align: center;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--primary-color);
}

.stat-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-top: 0.5rem;
}

.about-image {
    display: grid;
    gap: 1.5rem;
}

.about-card {
    background: rgba(0, 212, 255, 0.12);
    border: 2px solid var(--border-color);
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    transition: 0.3s;
}

.about-card:hover {
    border-color: var(--primary-color);
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
    transform: translateY(-10px);
}

.about-card i {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.about-card h4 {
    color: var(--primary-color);
    margin-bottom: 0.8rem;
}

.about-card p {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.skills-showcase {
    padding: 2rem;
    background: rgba(0, 212, 255, 0.08);
    border-radius: 12px;
    border: 2px solid var(--border-color);
}

.skills-grid-about {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.skill-item {
    background: rgba(0, 0, 0, 0.3);
    padding: 1.2rem;
    border-radius: 8px;
    text-align: center;
}

.skill-icon-small {
    font-size: 2rem;
    color: var(--primary-color);
    display: block;
    margin-bottom: 0.5rem;
}

.skill-item span {
    color: var(--text-secondary);
    display: block;
    margin-bottom: 0.8rem;
}

.skill-level {
    width: 100%;
    height: 4px;
    background: rgba(0, 212, 255, 0.1);
    border-radius: 2px;
    overflow: hidden;
}

.level-bar {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    animation: fillBar 1.5s ease-out;
}

@keyframes fillBar {
    from { width: 0 !important; }
}

/* ===================================
   FEATURED GAME SECTION
   =================================== */
.featured-game {
    background: rgba(10, 20, 45, 0.7);
    border-top: 2px solid var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
}

.featured-subtitle {
    font-size: 1.3rem;
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 3rem;
}

.featured-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
}

.featured-image-section {
    text-align: center;
}

.game-image-showcase {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    border: 3px solid var(--primary-color);
    box-shadow: 0 0 40px rgba(0, 212, 255, 0.4);
    margin-bottom: 2rem;
    aspect-ratio: 9/16;
}

.showcase-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
}

.game-image-showcase:hover .showcase-img {
    transform: scale(1.05);
}

.image-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(0, 212, 255, 0.1), transparent);
}

.play-video-btn {
    padding: 1rem 2rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border: none;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: 0.3s;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
    width: 100%;
    max-width: 300px;
}

.play-video-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(0, 212, 255, 0.8);
}

.featured-info-section {
    padding: 1rem;
}

.game-main-title {
    font-size: 3.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
    letter-spacing: 3px;
}

.game-tagline {
    font-size: 1.3rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
}

.game-description {
    background: rgba(0, 212, 255, 0.08);
    border-left: 4px solid var(--primary-color);
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    color: var(--text-secondary);
}

.features-box,
.mechanics-box,
.architecture-box {
    margin-bottom: 2rem;
    background: rgba(0, 212, 255, 0.08);
    border: 1px solid var(--border-color);
    padding: 1.8rem;
    border-radius: 12px;
}

.box-title {
    font-size: 1.3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.features-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
}

.feature-badge {
    background: rgba(0, 212, 255, 0.15);
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    transition: 0.3s;
}

.feature-badge:hover {
    background: rgba(0, 212, 255, 0.25);
    transform: translateY(-3px);
}

.mechanics-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
}

.mechanic-item {
    background: rgba(0, 0, 0, 0.3);
    padding: 1.2rem;
    border-radius: 8px;
    text-align: center;
    transition: 0.3s;
}

.mechanic-item:hover {
    transform: translateY(-5px);
}

.mechanic-icon {
    font-size: 2rem;
    margin-bottom: 0.8rem;
}

.mechanic-item h4 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.mechanic-item p {
    color: var(--text-secondary);
    font-size: 0.85rem;
}

.arch-intro {
    color: var(--text-secondary);
    margin-bottom: 1rem;
}

.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
}

.tech-tag {
    background: rgba(0, 212, 255, 0.15);
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    padding: 0.6rem 1.2rem;
    border-radius: 20px;
    font-size: 0.85rem;
    transition: 0.3s;
}

.tech-tag:hover {
    background: rgba(0, 212, 255, 0.25);
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
}

.featured-buttons {
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;
}

.featured-buttons .btn {
    flex: 1;
}

/* ===================================
   VIDEO MODAL
   =================================== */
.video-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    z-index: 2000;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
}

.video-modal.active {
    display: flex;
}

.modal-content {
    position: relative;
    width: 90%;
    max-width: 900px;
}

.close-modal {
    position: absolute;
    top: -50px;
    right: 0;
    background: var(--primary-color);
    color: var(--dark-bg);
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 2rem;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
}

.close-modal:hover {
    background: var(--secondary-color);
    transform: scale(1.15);
}

/* ===================================
   GAMES SECTION
   =================================== */
.games {
    background: rgba(10, 20, 45, 0.7);
}

.games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.game-card {
    background: var(--card-bg);
    border: 2px solid var(--border-color);
    border-radius: 12px;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    height: 100%;
}

.game-card:hover {
    border-color: var(--primary-color);
    box-shadow: 0 0 40px rgba(0, 212, 255, 0.4);
    transform: translateY(-15px);
}

.game-image {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.game-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
}

.game-card:hover .game-image img {
    transform: scale(1.15);
}

.game-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.4s;
}

.game-card:hover .game-overlay {
    opacity: 1;
}

.play-btn {
    background: var(--primary-color);
    color: var(--dark-bg);
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
    font-size: 1rem;
    transition: 0.3s;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.6);
}

.play-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 0 40px rgba(0, 212, 255, 0.8);
}

.game-info {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.game-info h3 {
    color: var(--primary-color);
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
}

.game-info p {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    flex-grow: 1;
}

.game-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
}

.game-tags span {
    background: rgba(0, 212, 255, 0.15);
    color: var(--primary-color);
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.75rem;
}

.game-info .btn {
    margin-top: auto;
}

/* ===================================
   SKILLS SECTION
   =================================== */
.skills {
    background: rgba(10, 20, 45, 0.7);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.skill-card {
    background: var(--card-bg);
    border: 2px solid var(--border-color);
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: 0.5s;
}

.skill-card:hover {
    border-color: var(--primary-color);
    box-shadow: 0 0 40px rgba(0, 212, 255, 0.4);
    transform: translateY(-15px);
}

.skill-icon {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1.2rem;
    display: block;
}

.skill-card h3 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
}

.progress-bar {
    width: 100%;
    height: 8px;
    background: rgba(0, 212, 255, 0.15);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 1rem;
}

.progress {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    animation: fillBar 1.8s ease-out;
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}

.progress-text {
    color: var(--primary-color);
    font-weight: 700;
}

/* ===================================
   CONTACT SECTION
   =================================== */
.contact {
    background: rgba(10, 20, 45, 0.5);
    border-top: 2px solid var(--border-color);
    border-bottom: 2px solid var(--border-color);
}

.contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.contact-cards {
    display: grid;
    gap: 1.5rem;
}

.contact-card {
    background: rgba(0, 212, 255, 0.12);
    border: 2px solid var(--border-color);
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    transition: 0.3s;
}

.contact-card:hover {
    border-color: var(--primary-color);
    background: rgba(0, 212, 255, 0.2);
    transform: translateY(-10px);
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
}

.card-icon {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.contact-card h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.contact-card p {
    color: var(--text-secondary);
    margin-bottom: 1rem;
}

.card-link {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
    border: 1px solid var(--primary-color);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    display: inline-block;
    transition: 0.3s;
}

.card-link:hover {
    background: rgba(0, 212, 255, 0.2);
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
}

.contact-form-wrapper {
    background: rgba(0, 212, 255, 0.08);
    border: 2px solid var(--border-color);
    padding: 2.5rem;
    border-radius: 12px;
}

.form-title {
    font-size: 1.6rem;
    color: var(--primary-color);
    margin-bottom: 2rem;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
}

.form-group {
    position: relative;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1rem 0;
    background: transparent;
    border: none;
    border-bottom: 2px solid var(--border-color);
    color: var(--text-primary);
    font-family: inherit;
    font-size: 1rem;
    transition: 0.3s;
    outline: none;
    resize: vertical;
}

.form-group label {
    position: absolute;
    top: 1rem;
    left: 0;
    color: var(--text-secondary);
    font-size: 0.85rem;
    pointer-events: none;
    transition: 0.3s;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: transparent;
}

.form-line {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transition: width 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
    border-bottom-color: var(--primary-color);
    box-shadow: 0 2px 10px rgba(0, 212, 255, 0.2);
}

.form-group input:focus ~ label,
.form-group textarea:focus ~ label,
.form-group input:not(:placeholder-shown) ~ label,
.form-group textarea:not(:placeholder-shown) ~ label {
    top: -1.5rem;
    color: var(--primary-color);
    font-size: 0.75rem;
}

.form-group input:focus ~ .form-line,
.form-group textarea:focus ~ .form-line {
    width: 100%;
}

/* ===================================
   FOOTER
   =================================== */
.footer {
    background: rgba(10, 14, 39, 0.95);
    border-top: 2px solid var(--border-color);
    padding: 3rem 0 1rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.footer-section p {
    font-size: 0.9rem;
    color: var(--text-secondary);
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: 0.3s;
}

.footer-section a:hover {
    color: var(--primary-color);
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    transition: 0.3s;
    color: var(--primary-color);
}

.social-links a:hover {
    background: rgba(0, 212, 255, 0.2);
    transform: translateY(-5px);
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
    font-size: 0.85rem;
    color: var(--text-secondary);
}

/* ===================================
   RESPONSIVE DESIGN
   =================================== */
@media (max-width: 1024px) {
    .about-wrapper,
    .featured-wrapper,
    .contact-wrapper {
        grid-template-columns: 1fr;
    }

    .mechanics-grid {
        grid-template-columns: 1fr;
    }

    .skills-grid-about {
        grid-template-columns: 1fr;
    }

    .about-stats {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 3rem;
    }

    .section-title {
        font-size: 2.5rem;
    }

    .game-main-title {
        font-size: 2.5rem;
    }

    .nav-menu {
        display: none;
    }

    .hamburger {
        display: flex;
    }

    .games-grid {
        grid-template-columns: 1fr;
    }

    .featured-buttons,
    .hero-buttons {
        flex-direction: column;
    }

    .about-stats {
        grid-template-columns: 1fr;
    }

    .spaceship {
        width: 40px;
        height: 32px;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1.2rem;
    }

    .section-title {
        font-size: 1.8rem;
    }

    .game-main-title {
        font-size: 2rem;
    }

    .featured-buttons,
    .hero-buttons {
        flex-direction: column;
        width: 100%;
    }

    .featured-buttons .btn,
    .hero-buttons .btn {
        width: 100%;
    }

    .contact-wrapper {
        grid-template-columns: 1fr;
    }

    .spaceship {
        width: 35px;
        height: 28px;
    }
}

/* ===================================
   ANIMATIONS
   =================================== */
.fade-in {
    opacity: 0 !important;
    transform: translateY(30px) !important;
    animation: fadeInUp 0.6s ease-out forwards !important;
}

@keyframes fadeInUp {
    to {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

/* --- NEW ENHANCED ANIMATIONS & VR BACKGROUND STYLING --- */

/* VR Boy Background Setup */
.vr-boy-bg {
    position: fixed;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    width: 450px;
    height: 450px;
    z-index: -1;
    opacity: 0.15; /* Keeps it subtle in the background */
    pointer-events: none;
    animation: floatVRBoy 6s ease-in-out infinite, glowPulse 4s ease-in-out infinite;
}

.vr-boy-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.5));
}

@keyframes floatVRBoy {
    0% { transform: translateY(-50%) translateX(0px); }
    50% { transform: translateY(-55%) translateX(-20px); }
    100% { transform: translateY(-50%) translateX(0px); }
}

@keyframes glowPulse {
    0% { filter: drop-shadow(0 0 15px rgba(0, 255, 255, 0.3)); }
    50% { filter: drop-shadow(0 0 35px rgba(138, 43, 226, 0.6)); }
    100% { filter: drop-shadow(0 0 15px rgba(0, 255, 255, 0.3)); }
}

/* Medium Size VR Project Card Adjustments */
.medium-size-project {
    grid-column: span 2; /* Makes the card span across 2 columns */
    display: flex;
    flex-direction: row; /* Aligns image and text side-by-side */
    align-items: center;
}

.medium-size-project .game-image {
    flex: 1;
    min-height: 300px;
    width: 50%;
}

.medium-size-project .game-info {
    flex: 1;
    padding: 2.5rem;
    width: 50%;
}

/* Responsive fix for medium size card on mobile */
@media (max-width: 1024px) {
    .medium-size-project {
        grid-column: span 1;
        flex-direction: column;
    }
    
    .medium-size-project .game-image,
    .medium-size-project .game-info {
        width: 100%;
    }
}
