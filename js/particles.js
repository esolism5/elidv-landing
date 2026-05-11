(function() {
    // ---- Canvas de partículas ----
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 75;
    const COLORS = ['rgba(139, 92, 246, 0.7)', 'rgba(59, 130, 246, 0.7)', 'rgba(255, 255, 255, 0.5)'];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                speedY: Math.random() * 0.3 + 0.15,
                speedX: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.8 + 0.2,
                fadeDirection: Math.random() > 0.5 ? 1 : -1,
                fadeSpeed: Math.random() * 0.005 + 0.002,
            });
        }
    }

    function updateParticles() {
        particles.forEach(p => {
            p.y -= p.speedY;
            p.x += p.speedX;

            p.opacity += p.fadeDirection * p.fadeSpeed;
            if (p.opacity >= 0.9) {
                p.fadeDirection = -1;
            } else if (p.opacity <= 0.2) {
                p.fadeDirection = 1;
            }

            if (p.y < -10) {
                p.y = canvas.height + 10;
                p.x = Math.random() * canvas.width;
            }
            if (p.x < -10) p.x = canvas.width + 10;
            if (p.x > canvas.width + 10) p.x = -10;
        });
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color.replace(/[\d\.]+\)$/g, `${p.opacity})`);
            ctx.fill();
        });
    }

    function animate() {
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });

    resizeCanvas();
    createParticles();
    animate();
})();