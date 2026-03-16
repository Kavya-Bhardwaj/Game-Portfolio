// ===================================
// FUTURISTIC GAME DEV PORTFOLIO JS
// Interactive Features & Animations
// ===================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const loadingScreen = document.getElementById('loadingScreen');
const particlesContainer = document.getElementById('particles');
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const videoFrame = document.getElementById('videoFrame');
const contactForm = document.getElementById('contactForm');
const mouseFollower = document.getElementById('mouseFollower');
const spaceshipsContainer = document.getElementById('spaceshipsContainer');

// ===== CREATE SPACESHIPS IMMEDIATELY =====
function initSpaceships() {
    const shipCount = 5;
    
    for (let i = 0; i < shipCount; i++) {
        const ship = document.createElement('div');
        ship.className = 'spaceship';
        
        const shipBody = document.createElement('div');
        shipBody.className = 'spaceship-body';
        ship.appendChild(shipBody);
        
        spaceshipsContainer.appendChild(ship);
        
        // Start animation with delay
        setTimeout(() => {
            animateSpaceship(ship, i);
        }, i * 1500);
    }
}

function getRandomPosition() {
    return {
        x: Math.random() * (window.innerWidth - 50),
        y: Math.random() * (window.innerHeight - 50)
    };
}

function animateSpaceship(ship, index) {
    const start = getRandomPosition();
    const end = getRandomPosition();
    const duration = 8 + Math.random() * 7; // 8-15 seconds
    
    ship.style.left = start.x + 'px';
    ship.style.top = start.y + 'px';
    
    const startTime = Date.now();
    
    function animate() {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease function for smooth motion
        const easeProgress = progress < 0.5 
            ? 2 * progress * progress 
            : -1 + (4 - 2 * progress) * progress;
        
        const currentX = start.x + (end.x - start.x) * easeProgress;
        const currentY = start.y + (end.y - start.y) * easeProgress;
        
        // Calculate rotation angle
        const angle = Math.atan2(end.y - start.y, end.x - start.x) * (180 / Math.PI);
        
        ship.style.left = currentX + 'px';
        ship.style.top = currentY + 'px';
        ship.style.transform = `rotate(${angle}deg)`;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            // Restart animation
            setTimeout(() => animateSpaceship(ship, index), 1000);
        }
    }
    
    animate();
}

// Initialize spaceships as soon as DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initSpaceships();
});

// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 2500);
});

// ===== CREATE PARTICLES =====
function createParticles() {
    if (!particlesContainer) return;
    
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 20) + 's';
        particlesContainer.appendChild(particle);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
});

// ===== MOUSE FOLLOWER EFFECT =====
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (mouseFollower) {
        mouseFollower.classList.add('active');
        mouseFollower.style.left = (mouseX - 150) + 'px';
        mouseFollower.style.top = (mouseY - 150) + 'px';
    }
});

document.addEventListener('mouseleave', () => {
    if (mouseFollower) {
        mouseFollower.classList.remove('active');
    }
});

// ===== HAMBURGER MENU =====
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.2)';
        } else {
            navbar.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.1)';
        }
    }
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== VIDEO MODAL =====
document.querySelectorAll('.play-btn, .play-video-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const videoUrl = btn.getAttribute('data-video');
        if (videoFrame) {
            videoFrame.src = videoUrl;
            videoModal.classList.add('active');
        }
    });
});

if (closeModal) {
    closeModal.addEventListener('click', () => {
        videoModal.classList.remove('active');
        if (videoFrame) videoFrame.src = '';
    });
}

videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        if (videoFrame) videoFrame.src = '';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        videoModal.classList.remove('active');
        if (videoFrame) videoFrame.src = '';
    }
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    document.querySelectorAll('.skill-card').forEach(card => {
        observer.observe(card);
    });

    document.querySelectorAll('.game-card').forEach(card => {
        observer.observe(card);
    });

    document.querySelectorAll('.contact-card').forEach(card => {
        observer.observe(card);
    });
});

// ===== PROGRESS BAR ANIMATION =====
const progressBars = document.querySelectorAll('.progress');
const skillsSection = document.getElementById('skills');
let progressAnimated = false;

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !progressAnimated) {
            progressAnimated = true;
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.transition = 'width 1.8s ease-out';
                    bar.style.width = width;
                }, 100);
            });
        }
    });
}, { threshold: 0.5 });

if (skillsSection) {
    progressObserver.observe(skillsSection);
}

// ===== CONTACT FORM HANDLING =====
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (name && email && subject && message) {
            alert('Thank you for your message! I\'ll get back to you soon. 🚀');
            contactForm.reset();
        }
    });
}

// ===== FADE-IN ANIMATION STYLES =====
const style = document.createElement('style');
style.innerHTML = `
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
`;
document.head.appendChild(style);

// ===== CURSOR EFFECTS ON BUTTONS =====
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

console.log('✅ Spaceships initialized - check the page!');