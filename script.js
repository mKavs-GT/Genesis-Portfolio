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

    // --- GENESIS DIALOG MODAL & TOAST SYSTEM ---
    const genesisOverlay = document.getElementById('genesis-modal-overlay');
    const genesisClose = document.getElementById('genesis-modal-close');
    const genesisBtn = document.getElementById('genesis-modal-btn');
    const genesisTitle = document.getElementById('genesis-modal-title');
    const genesisDesc = document.getElementById('genesis-modal-desc');
    const genesisBadge = document.getElementById('genesis-modal-badge');
    const genesisDetails = document.getElementById('genesis-modal-details');
    const genesisToast = document.getElementById('genesis-toast');
    const genesisToastMsg = document.getElementById('genesis-toast-msg');

    function showGenesisModal(opts) {
        if (!genesisOverlay) return;
        if (genesisBadge) genesisBadge.textContent = opts.badge || 'STUDIO DISPATCH';
        if (genesisTitle) genesisTitle.textContent = opts.title || 'Notification';
        if (genesisDesc) genesisDesc.textContent = opts.message || '';
        
        if (genesisDetails && opts.details) {
            genesisDetails.innerHTML = opts.details.map(d => `
                <div class="genesis-detail-row">
                    <span class="genesis-detail-label">${d.label}</span>
                    <span class="genesis-detail-val">${d.value}</span>
                </div>
            `).join('');
            genesisDetails.style.display = 'flex';
        } else if (genesisDetails) {
            genesisDetails.style.display = 'none';
        }

        genesisOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeGenesisModal() {
        if (genesisOverlay) {
            genesisOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (genesisClose) genesisClose.addEventListener('click', closeGenesisModal);
    if (genesisBtn) genesisBtn.addEventListener('click', closeGenesisModal);
    if (genesisOverlay) {
        genesisOverlay.addEventListener('click', (e) => {
            if (e.target === genesisOverlay) closeGenesisModal();
        });
    }

    let toastTimeout;
    function showGenesisToast(msg) {
        if (!genesisToast) return;
        if (genesisToastMsg) genesisToastMsg.textContent = msg;
        genesisToast.classList.add('active');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            genesisToast.classList.remove('active');
        }, 3200);
    }

    // Override newsletter subscription with executive studio modal
    const originalNewsletterForm = document.getElementById('newsletter-form');
    if (originalNewsletterForm) {
        originalNewsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('newsletter-email');
            const email = input ? input.value.trim() : '';
            if (!email || !email.includes('@')) return;

            const dispatchId = 'GEN-VIP-' + Math.floor(100000 + Math.random() * 900000);
            showGenesisModal({
                badge: 'VIP DISPATCH ACCEPTED',
                title: 'Subscription Confirmed',
                message: 'You have been enrolled in the GENESIS Studio Private VIP Dispatch. You will receive private previews of our upcoming theatrical productions and color grading LUTs.',
                details: [
                    { label: 'Dispatch ID', value: dispatchId },
                    { label: 'Subscriber', value: email },
                    { label: 'Access Tier', value: 'VIP Producer Circle' },
                    { label: 'Frequency', value: 'Monthly Curated Reels' },
                    { label: 'Status', value: 'Active & Accepted' }
                ]
            });
            if (input) input.value = '';
        });
    }

    // Privacy & Terms modal handlers
    const privacyLink = document.getElementById('genesis-privacy-link');
    if (privacyLink) {
        privacyLink.addEventListener('click', (e) => {
            e.preventDefault();
            showGenesisModal({
                badge: 'LEGAL & COMPLIANCE',
                title: 'Privacy Policy',
                message: 'GENESIS Studio operates under strict non-disclosure and high-tier data protection. Client footage, creative scripts, and subscriber communications are encrypted with military-grade standards. We never sell or distribute your private contact details.',
                details: [
                    { label: 'Data Encryption', value: 'AES-256 Cloud Vault' },
                    { label: 'NDAs Covered', value: 'Commercial & Feature Productions' },
                    { label: 'Jurisdiction', value: 'New York, NY / Global WIPO' }
                ]
            });
        });
    }

    const termsLink = document.getElementById('genesis-terms-link');
    if (termsLink) {
        termsLink.addEventListener('click', (e) => {
            e.preventDefault();
            showGenesisModal({
                badge: 'TERMS OF SERVICE',
                title: 'Studio Terms & Conditions',
                message: 'All motion picture materials, sound recordings, and proprietary grade recipes produced by GENESIS Studio remain protected under international copyright. Client licensing agreements govern theatrical and commercial broadcast rights.',
                details: [
                    { label: 'Licensing', value: 'Commercial Theatrical & Broadcast' },
                    { label: 'Master Delivery', value: 'ProRes 4444 XQ / ARRIRAW' },
                    { label: 'Production Terms', value: 'Standard Studio SLA' }
                ]
            });
        });
    }

    // Services consultation click handlers
    document.querySelectorAll('.services-list ul li').forEach(li => {
        li.addEventListener('click', () => {
            const serviceName = li.querySelector('strong')?.textContent || 'Studio Service';
            const desc = li.querySelector('p')?.textContent || '';
            const reqId = 'SRV-' + Math.floor(10000 + Math.random() * 90000);

            showGenesisModal({
                badge: 'SERVICE CONSULTATION ACCEPTED',
                title: serviceName,
                message: `Inquiry for ${serviceName} (${desc}) has been accepted. Our post-production supervisor will contact you to coordinate workflow requirements and schedule suite time.`,
                details: [
                    { label: 'Inquiry Ref', value: reqId },
                    { label: 'Service Division', value: serviceName },
                    { label: 'Turnaround', value: '48-Hour Rapid Screening' },
                    { label: 'Status', value: 'Accepted & Assigned' }
                ]
            });
        });
    });

    // Project cards preview click handlers
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('.project-title')?.textContent || 'Featured Production';
            const type = card.querySelector('.project-type')?.textContent || 'Commercial';

            showGenesisModal({
                badge: 'PROJECT CASE STUDY',
                title: title,
                message: `Production breakdown for ${title}. Executed in 8K resolution with custom anamorphic lensing, full DaVinci Resolve color timing, and Dolby Atmos mastering.`,
                details: [
                    { label: 'Format', value: type },
                    { label: 'Camera System', value: 'ARRI Alexa 35 / Master Anamorphic' },
                    { label: 'Color Suite', value: 'Film Emulation P3-D65' },
                    { label: 'Audio', value: 'Dolby Atmos 7.1.4 Theatrical Mix' }
                ]
            });
        });
    });

    // Social Links
    document.querySelectorAll('.footer-links a[target="_blank"]').forEach(link => {
        link.addEventListener('click', (e) => {
            showGenesisToast('Opening official GENESIS ' + link.textContent.trim() + ' channel...');
        });
    });

});
