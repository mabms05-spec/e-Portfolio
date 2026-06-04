// --- NAVIGATION & INTERACTION SCRIPTS ---

document.addEventListener('DOMContentLoaded', () => {
    // 0. Theme Toggle (Light / Dark Mode)
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeToggleMobileBtn = document.getElementById('themeToggleMobile');
    const root = document.documentElement;

    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        root.classList.add('dark-theme');
    } else {
        root.classList.remove('dark-theme');
    }

    function toggleTheme() {
        const isDark = root.classList.toggle('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', toggleTheme);

    // 1. Sticky Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Hamburger Menu Toggle & Accessibility Focus Trap
    const hamburger = document.getElementById('hamburger');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileOverlay = document.getElementById('mobileOverlay');
    
    // Focus trap elements
    const focusableElementsSelector = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    let firstFocusableEl, lastFocusableEl;

    function toggleMenu() {
        const isOpen = mobileDrawer.classList.toggle('open');
        hamburger.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        
        // Update ARIA expanded state
        hamburger.setAttribute('aria-expanded', isOpen);
        
        if (isOpen) {
            // Get all focusable elements inside drawer
            const focusableContent = mobileDrawer.querySelectorAll(focusableElementsSelector);
            if (focusableContent.length > 0) {
                firstFocusableEl = focusableContent[0];
                lastFocusableEl = focusableContent[focusableContent.length - 1];
                // Focus first element
                firstFocusableEl.focus();
                // Add keydown event listener for focus trap
                document.addEventListener('keydown', trapFocus);
            }
        } else {
            document.removeEventListener('keydown', trapFocus);
            hamburger.focus();
        }
    }

    function trapFocus(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) { // Shift + Tab
                if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    e.preventDefault();
                }
            } else { // Tab
                if (document.activeElement === lastFocusableEl) {
                    firstFocusableEl.focus();
                    e.preventDefault();
                }
            }
        } else if (e.key === 'Escape') {
            toggleMenu();
        }
    }

    hamburger.addEventListener('click', toggleMenu);
    mobileOverlay.addEventListener('click', toggleMenu);

    // Close mobile drawer on nav link clicks
    const drawerLinks = mobileDrawer.querySelectorAll('a');
    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileDrawer.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    // 3. Dynamic Copyright Year
    const copyrightYear = document.getElementById('copyrightYear');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    // 4. Contact Form Submission Logic (Netlify Form Callback)
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // For standard HTML form submissions, if data-netlify is true, Netlify handles it on POST.
            // However, to prevent a page redirect and show a smooth UI message, we can submit via fetch.
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            
            fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                successMessage.style.display = 'flex';
                successMessage.setAttribute('aria-hidden', 'false');
                contactForm.reset();
                
                // Scroll success message into view
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                setTimeout(() => {
                    successMessage.style.display = 'none';
                    successMessage.setAttribute('aria-hidden', 'true');
                }, 6000);
            })
            .catch(error => {
                console.error('Form submission error:', error);
                // Fallback to basic visual alert if submission fails
                alert('There was an issue sending your message. Please email directly.');
            });
        });
    }

    // 5. IntersectionObserver for Performant Navigation Highlighting
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -40% 0px', // Triggers when section occupies central viewport
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                if (!sectionId) return;

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if (section.getAttribute('id')) {
            observer.observe(section);
        }
    });
});
