// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
        mobileMenu.classList.remove('open');
        bar1.style.transform = 'rotate(0) translateY(0)';
        bar2.style.opacity = '1';
        bar3.style.transform = 'rotate(0) translateY(0)';
        bar3.style.width = '16px';
    } else {
        mobileMenu.classList.add('open');
        bar1.style.transform = 'rotate(45deg) translateY(6px)';
        bar2.style.opacity = '0';
        bar3.style.transform = 'rotate(-45deg) translateY(-6px)';
        bar3.style.width = '24px';
    }
});

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        bar1.style.transform = 'rotate(0) translateY(0)';
        bar2.style.opacity = '1';
        bar3.style.transform = 'rotate(0) translateY(0)';
        bar3.style.width = '16px';
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Scroll Reveal with Intersection Observer
const revealElements = document.querySelectorAll('.reveal');
const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12,
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

revealElements.forEach(el => revealObserver.observe(el));

// Parallax light effect on mouse move (subtle)
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const orbViolet = document.querySelector('.orb-violet');
    const orbBlue = document.querySelector('.orb-blue');
    const orbAccent = document.querySelector('.orb-accent');

    if (orbViolet && orbBlue && orbAccent) {
        orbViolet.style.transform = `translate(${(x - 0.5) * 30}px, ${(y - 0.5) * 30}px) scale(1)`;
        orbBlue.style.transform = `translate(${(0.5 - x) * 25}px, ${(0.5 - y) * 25}px) scale(1)`;
        orbAccent.style.transform = `translate(calc(-50% + ${(x - 0.5) * 20}px), calc(-50% + ${(y - 0.5) * 20}px)) scale(1)`;
    }
});

// Smooth active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.classList.remove('text-white');
        link.classList.add('text-zinc-300');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.remove('text-zinc-300');
            link.classList.add('text-white');
        }
    });
});

console.log('🚀 elidv — Landing page premium cargada correctamente.');

tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'inter': ['Inter', 'system-ui', 'sans-serif'],
                        'space': ['Space Grotesk', 'system-ui', 'sans-serif'],
                    },
                    colors: {
                        'deep': '#050505',
                        'dark-card': '#0F0F0F',
                        'dark-card-hover': '#141414',
                        'violet-neon': '#8B5CF6',
                        'blue-electric': '#3B82F6',
                        'violet-glow': '#A78BFA',
                        'border-subtle': 'rgba(255,255,255,0.06)',
                        'border-glow': 'rgba(139,92,246,0.3)',
                    }
                }
                
            }
            
        }