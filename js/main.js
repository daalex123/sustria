// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.preloader').classList.add('hidden');
    }, 1500);
});

// AOS Initialization
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

mobileClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Swiper Testimonials
new Swiper('.testimonial-swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});

// Hero Image Slider
new Swiper('.hero-swiper', {
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    on: {
        slideChangeTransitionStart: function () {
            document.querySelectorAll('.hero-slide-bg').forEach(bg => {
                bg.style.transform = 'scale(1.1)';
            });
        },
        slideChangeTransitionEnd: function () {
            const activeSlide = this.slides[this.activeIndex];
            if (activeSlide) {
                const bg = activeSlide.querySelector('.hero-slide-bg');
                if (bg) bg.style.transform = 'scale(1)';
            }
        }
    }
});

// Counter Animation
const counters = document.querySelectorAll('.stat-number');
const observerOptions = { threshold: 0.5 };

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const count = parseInt(target.getAttribute('data-count'));
            let current = 0;
            const increment = count / 60;
            const timer = setInterval(() => {
                current += increment;
                if (current >= count) {
                    target.textContent = count + '+';
                    clearInterval(timer);
                } else {
                    target.textContent = Math.floor(current) + '+';
                }
            }, 30);
            counterObserver.unobserve(target);
        }
    });
}, observerOptions);

counters.forEach(counter => counterObserver.observe(counter));

// Back to Top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .service-card, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.borderColor = '#e8a31e';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Hero Particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
    particlesContainer.appendChild(particle);
}

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: 'power3.out',
    delay: 1.8
});

// Smooth reveal for service cards
gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.set(card, { opacity: 1, y: 0 });

    const row = Math.floor(i / 3);
    const col = i % 3;
    const delay = row * 0.15 + col * 0.1;

    gsap.from(card, {
        scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
        },
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.8,
        delay: delay,
        ease: 'back.out(1.2)'
    });

    // Smooth magnetic hover effect
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.02,
            y: -8,
            duration: 0.4,
            ease: 'power2.out'
        });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
        });
    });

    // Subtle tilt on mousemove
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -3;
        const rotateY = ((x - centerX) / centerX) * 3;

        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.3,
            ease: 'power1.out'
        });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
        });
    });
});

// Parallax effect on about section images
gsap.to('.about-image-main', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
    },
    y: -20,
    ease: 'none'
});

gsap.to('.about-image-secondary', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
    },
    y: 15,
    ease: 'none'
});

// Text image CAPTCHA
let captchaCode = '';
function generateCaptcha () {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    captchaCode = '';
    for (let i = 0; i < 5; i++) captchaCode += chars[Math.floor(Math.random() * chars.length)];
    const canvas = document.getElementById('captchaCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Noise dots
    for (let i = 0; i < 40; i++) {
        ctx.fillStyle = `rgba(${Math.random() * 255 | 0},${Math.random() * 255 | 0},${Math.random() * 255 | 0},0.3)`;
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1.2, 0, Math.PI * 2);
        ctx.fill();
    }
    // Noise lines
    for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = `rgba(${Math.random() * 255 | 0},${Math.random() * 255 | 0},${Math.random() * 255 | 0},0.25)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.stroke();
    }
    // Draw each character with random color, size, rotation
    const colors = ['#e0c97b', '#4fc3f7', '#ff7043', '#aed581', '#ce93d8', '#fff176'];
    const fonts = ['bold 24px Raleway', 'italic 22px Playfair Display', 'bold 26px Raleway', '24px Raleway', 'bold 20px Raleway'];
    for (let i = 0; i < captchaCode.length; i++) {
        ctx.save();
        const x = 14 + i * 24;
        const y = canvas.height / 2 + (Math.random() * 8 - 4);
        ctx.translate(x, y);
        ctx.rotate((Math.random() - 0.5) * 0.5);
        ctx.font = fonts[Math.floor(Math.random() * fonts.length)];
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.textBaseline = 'middle';
        ctx.fillText(captchaCode[i], 0, 0);
        ctx.restore();
    }
}
generateCaptcha();
document.getElementById('refreshCaptcha').addEventListener('click', generateCaptcha);

// Form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const btn = e.target.querySelector('.btn-primary');
    const status = form.querySelector('.form-status');
    const captchaInput = document.getElementById('captchaInput');
    const originalBtn = 'Send Message <i class="fas fa-paper-plane" style="margin-left:8px;"></i>';

    // Validate CAPTCHA
    if (captchaInput.value.trim().toLowerCase() !== captchaCode.toLowerCase()) {
        status.textContent = 'Incorrect code. Please try again.';
        status.style.color = '#e74c3c';
        generateCaptcha();
        captchaInput.value = '';
        return;
    }

    const formData = new FormData(form);
    formData.delete('captchaInput');

    btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin" style="margin-left:8px;"></i>';
    btn.disabled = true;
    status.textContent = '';

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            Accept: 'application/json'
        }
    })
        .then(async (response) => {
            if (response.ok) {
                status.textContent = 'Thank you! Your message has been sent successfully.';
                status.style.color = '#27ae60';
                form.reset();
                generateCaptcha();
                return;
            }

            const data = await response.json().catch(() => ({}));
            throw new Error(data.message || 'Something went wrong. Please try again.');
        })
        .catch((error) => {
            status.textContent = error.message;
            status.style.color = '#e74c3c';
        })
        .finally(() => {
            btn.innerHTML = originalBtn;
            btn.disabled = false;
        });
});

// Newsletter form
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const btn = e.target.querySelector('button');
    btn.innerHTML = '<i class="fas fa-check"></i>';
    input.value = '';
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-arrow-right"></i>';
    }, 2000);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Typing effect for hero badge (subtle)
const heroBadge = document.querySelector('.hero-badge');
if (heroBadge) {
    heroBadge.style.opacity = '0';
    setTimeout(() => {
        heroBadge.style.transition = 'opacity 1s ease';
        heroBadge.style.opacity = '1';
    }, 2000);
}

// ========== Full Page Projects Viewer ==========
const projectsViewer = document.getElementById('projectsViewer');
const showAllBtn = document.getElementById('showAllProjects');
const closeViewerBtn = document.getElementById('closeProjectsViewer');

// Open viewer
showAllBtn.addEventListener('click', () => {
    projectsViewer.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close viewer
closeViewerBtn.addEventListener('click', () => {
    projectsViewer.classList.remove('active');
    document.body.style.overflow = '';
});

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
        } else if (projectsViewer.classList.contains('active')) {
            projectsViewer.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// ========== Project Lightbox ==========
const lightbox = document.getElementById('projectLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeLightboxBtn = document.getElementById('closeLightbox');
const prevBtn = document.getElementById('lightboxPrev');
const nextBtn = document.getElementById('lightboxNext');

let currentImageIndex = 0;
let galleryImages = [];

// Collect all pv-cards
const pvCards = document.querySelectorAll('.pv-card');
pvCards.forEach((card, index) => {
    const imgSrc = card.getAttribute('data-img');
    const title = card.querySelector('h4').textContent;
    galleryImages.push({ src: imgSrc, title: title });

    card.addEventListener('click', () => {
        currentImageIndex = index;
        openLightbox(index);
    });
});

function openLightbox (index) {
    lightboxImg.src = galleryImages[index].src;
    lightboxCaption.textContent = galleryImages[index].title;
    lightbox.classList.add('active');
}

closeLightboxBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentImageIndex].src;
    lightboxCaption.textContent = galleryImages[currentImageIndex].title;
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentImageIndex].src;
    lightboxCaption.textContent = galleryImages[currentImageIndex].title;
});

// Keyboard navigation in lightbox
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
});

// Also open lightbox from main project cards
document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', () => {
        const bg = card.querySelector('.project-bg');
        const style = bg.getAttribute('style');
        const urlMatch = style.match(/url\(['"]?(.+?)['"]?\)/);
        if (urlMatch) {
            const src = urlMatch[1];
            const title = card.querySelector('.project-title').textContent;
            const idx = galleryImages.findIndex(img => img.src === src);
            if (idx !== -1) {
                currentImageIndex = idx;
            } else {
                galleryImages.push({ src, title });
                currentImageIndex = galleryImages.length - 1;
            }
            openLightbox(currentImageIndex);
        }
    });
});
