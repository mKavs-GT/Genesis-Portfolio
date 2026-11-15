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

        // Mobile navigation drawer toggle and interaction
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const mobileNavClose = document.getElementById('mobile-nav-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    function openMobileMenu() {
        if (!mobileNavOverlay) return;
        mobileNavOverlay.classList.add('is-active');
        mobileNavOverlay.setAttribute('aria-hidden', 'false');
        if (mobileMenuToggle) {
            mobileMenuToggle.setAttribute('aria-expanded', 'true');
            mobileMenuToggle.setAttribute('aria-label', 'Close navigation menu');
            mobileMenuToggle.classList.add('is-active');
        }
        document.body.classList.add('nav-open');
    }

    function closeMobileMenu() {
        if (!mobileNavOverlay) return;
        mobileNavOverlay.classList.remove('is-active');
        mobileNavOverlay.setAttribute('aria-hidden', 'true');
        if (mobileMenuToggle) {
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileMenuToggle.setAttribute('aria-label', 'Open navigation menu');
            mobileMenuToggle.classList.remove('is-active');
        }
        document.body.classList.remove('nav-open');
    }

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            if (isExpanded) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMobileMenu();
        });
    }

    // Close menu when clicking outside mobile-nav-content
    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', (e) => {
            if (e.target === mobileNavOverlay) {
                closeMobileMenu();
            }
        });
    }

    // Close menu on pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNavOverlay && mobileNavOverlay.classList.contains('is-active')) {
            closeMobileMenu();
        }
    });

    // Close menu and smooth-scroll on link click
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Extend scroll highlight to mobile links
    const allMobileLinks = document.querySelectorAll('.mobile-nav-links a[href^="#"]');
    const origUpdateActiveNav = updateActiveNav;
    function updateAllActiveNav() {
        origUpdateActiveNav();
        const scrollPos = window.scrollY + 200;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < top + height) {
                allMobileLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.style.color = '#ffffff';
                        link.style.opacity = '1';
                    } else {
                        link.style.color = '';
                        link.style.opacity = '0.6';
                    }
                });
            }
        });
    }
    window.removeEventListener('scroll', updateActiveNav);
    window.addEventListener('scroll', updateAllActiveNav, { passive: true });
});
