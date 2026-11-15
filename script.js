// Genesis Video Studio - Interactive Client Logic

document.addEventListener('DOMContentLoaded', () => {
    console.log("%cGENESIS%c Video Production Studio", "background:#050505; color:#fff; font-weight:bold; padding:4px 8px; border-radius:3px;", "color:#888; padding:4px;");

    // Featured controls interaction
    const arrows = document.querySelectorAll('.arrow');
    const featuredVideo = document.querySelector('.featured-video-placeholder video');
    
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            arrow.style.transform = 'scale(0.85)';
            setTimeout(() => {
                arrow.style.transform = 'scale(1)';
            }, 150);

            // Toggle play/pause or loop animation effect on the featured preview
            if (featuredVideo) {
                if (featuredVideo.paused) {
                    featuredVideo.play().catch(() => {});
                } else {
                    featuredVideo.currentTime = 0;
                    featuredVideo.play().catch(() => {});
                }
            }
        });
    });

    // Newsletter subscription interaction
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterStatus = document.getElementById('newsletter-status');
    const newsletterInput = document.getElementById('newsletter-email');

    if (newsletterForm && newsletterStatus && newsletterInput) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterInput.value.trim();

            if (!email || !email.includes('@')) {
                newsletterStatus.className = 'newsletter-status error';
                newsletterStatus.textContent = 'Please enter a valid email address.';
                return;
            }

            // Simulated successful subscription
            newsletterStatus.className = 'newsletter-status success';
            newsletterStatus.textContent = 'Thank you for subscribing to GENESIS Studio.';
            newsletterInput.value = '';

            setTimeout(() => {
                newsletterStatus.textContent = '';
                newsletterStatus.className = 'newsletter-status';
            }, 5000);
        });
    }

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('header[id], section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    function updateActiveNav() {
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.style.opacity = '1';
                        link.style.borderBottom = '1px solid #fff';
                    } else {
                        link.style.opacity = '';
                        link.style.borderBottom = '';
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
});
