// ===================================
// FUTURISTIC GAME DEV PORTFOLIO
// Simplified JavaScript without Live Game
// ===================================

// =======================
// GLOBAL VARIABLES
// =======================
const primaryColor = '#00d4ff';
const secondaryColor = '#9d4edd';

// =======================
// INITIALIZATION
// =======================
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

// =======================
// PORTFOLIO INITIALIZATION
// =======================
function initializePortfolio() {
    // Loading Screen
    fadeOutLoadingScreen();
    
    // Navbar Functions
    setupNavbar();
    
    // Spaceship Animation
    createSpaceships();
    
    // Mouse Follower
    setupMouseFollower();
    
    // Particles Animation
    createParticles();
    
    // Video Modal
    setupVideoModal();
    
    // Contact Form
    setupContactForm();
    
    // Smooth Scrolling
    setupSmoothScrolling();
    
    // Intersection Observer
    setupIntersectionObserver();
}

// =======================
// LOADING SCREEN
// =======================
function fadeOutLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.animation = 'fadeOut 0.8s ease-in forwards';
        }, 2500);
    }
}

// =======================
// NAVBAR SETUP
// =======================
function setupNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Hamburger Menu Toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            hamburger.style.transform = navMenu.style.display === 'flex' ? 'rotate(90deg)' : 'rotate(0)';
        });
    }
    
    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.style.display = 'none';
            if (hamburger) hamburger.style.transform = 'rotate(0)';
        });
    });
    
    // Active Link Highlight
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// =======================
// SPACESHIP ANIMATION
// =======================
function createSpaceships() {
    const container = document.getElementById('spaceshipsContainer');
    if (!container) return;
    
    const spaceshipCount = 5;
    
    for (let i = 0; i < spaceshipCount; i++) {
        const spaceship = document.createElement('div');
        spaceship.className = 'spaceship';
        spaceship.innerHTML = '<div class="spaceship-body"></div>';
        
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        const randomDuration = 15 + Math.random() * 20;
        const randomDelay = Math.random() * 5;
        
        spaceship.style.left = randomX + 'px';
        spaceship.style.top = randomY + 'px';
        spaceship.style.animation = `floatSpaceship ${randomDuration}s linear ${randomDelay}s infinite`;
        
        container.appendChild(spaceship);
    }
}

// =======================
// MOUSE FOLLOWER
// =======================
function setupMouseFollower() {
    const mouseFollower = document.getElementById('mouseFollower');
    if (!mouseFollower) return;
    
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            mouseFollower.classList.add('active');
            mouseFollower.style.left = (e.clientX - 150) + 'px';
            mouseFollower.style.top = (e.clientY - 150) + 'px';
        }
    });
    
    document.addEventListener('mouseleave', () => {
        mouseFollower.classList.remove('active');
    });
}

// =======================
// PARTICLES ANIMATION
// =======================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDelay = Math.random() * 2;
        const randomDuration = 15 + Math.random() * 10;
        
        particle.style.left = randomX + '%';
        particle.style.top = randomY + '%';
        particle.style.animationDelay = randomDelay + 's';
        particle.style.animationDuration = randomDuration + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// =======================
// VIDEO MODAL
// =======================
function setupVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const closeModal = document.getElementById('closeModal');
    const playButtons = document.querySelectorAll('[data-video]');
    const videoFrame = document.getElementById('videoFrame');
    
    if (!playButtons.length) return;
    
    playButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const videoUrl = button.getAttribute('data-video');
            videoFrame.src = videoUrl;
            videoModal.classList.add('show');
        });
    });
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            videoModal.classList.remove('show');
            videoFrame.src = '';
        });
    }
    
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.classList.remove('show');
            videoFrame.src = '';
        }
    });
}

// =======================
// SMOOTH SCROLLING
// =======================
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// =======================
// CONTACT FORM
// =======================
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        console.log('Form submitted:', { name, email, subject, message });
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// =======================
// INTERSECTION OBSERVER
// =======================
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.game-card, .skill-card, .about-card').forEach(el => {
        observer.observe(el);
    });
}

// =======================
// UTILITY FUNCTIONS
// =======================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Skill progress bar animation
function animateSkillBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Initialize on scroll to section
window.addEventListener('scroll', debounce(() => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection && isElementInViewport(skillsSection)) {
        animateSkillBars();
    }
}, 200));

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// =======================
// ERROR HANDLING
// =======================
window.addEventListener('error', (e) => {
    console.error('Portfolio Error:', e.message);
});

// =======================
// END OF SCRIPT
// =======================
