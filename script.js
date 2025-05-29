// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(47, 27, 20, 0.98)';
        } else {
            navbar.style.background = 'rgba(47, 27, 20, 0.95)';
        }
    }
});

// Fade in animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Initial check for elements in viewport
animateOnScroll();

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        if (!name || !email || !message) {
            alert('Mohon lengkapi semua field yang wajib diisi!');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Mohon masukkan email yang valid!');
            return;
        }
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn ? submitBtn.textContent : '';
        if (submitBtn) {
            submitBtn.textContent = 'Mengirim...';
            submitBtn.disabled = true;
        }
        setTimeout(() => {
            alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera merespons.');
            this.reset();
            if (submitBtn) {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        }, 2000);
    });
}

// Gallery item click effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Menu item hover effect enhancement
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize some enhancements when page loads
window.addEventListener('load', function() {
    // Add entrance animations to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease-out';
    }
    // Stagger menu items animation
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add coffee bean floating animation
function createFloatingBeans() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const beanCount = 5;
    for (let i = 0; i < beanCount; i++) {
        const bean = document.createElement('div');
        bean.innerHTML = '☕';
        bean.style.position = 'absolute';
        bean.style.fontSize = '20px';
        bean.style.opacity = '0.1';
        bean.style.pointerEvents = 'none';
        bean.style.left = Math.random() * 100 + '%';
        bean.style.top = Math.random() * 100 + '%';
        bean.style.animation = `float ${3 + Math.random() * 2}s ease-in-out infinite`;
        hero.appendChild(bean);
    }
}

// Add floating animation keyframes via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
    }
`;
document.head.appendChild(style);

// Initialize floating beans
createFloatingBeans();