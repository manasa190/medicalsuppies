document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileClose = document.querySelector('.mobile-close');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileToggle && mobileClose && mobileNav) {
        mobileToggle.addEventListener('click', () => {
            mobileNav.classList.add('open');
        });

        mobileClose.addEventListener('click', () => {
            mobileNav.classList.remove('open');
        });
    }

    // Hero Title Animation with GSAP & SplitType
    if (typeof gsap !== 'undefined' && typeof SplitType !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        const heroTitle = document.querySelector('.hero-content h1');
        if (heroTitle) {
            // Prepare heading for split text animation
            heroTitle.style.overflow = 'hidden';

            // Split text using SplitType
            const splitText = new SplitType(heroTitle, { types: 'lines, words, chars' });

            // Apply 'overflow: hidden' to lines or words so that 'y' translation reveals them,
            // though the react component just animated them directly from opacity 0 and y 40.

            // Typewriter typing effect
            gsap.set(splitText.chars, { opacity: 0 });
            gsap.to(splitText.chars,
                {
                    opacity: 1,
                    duration: 0.01, // abrupt change
                    stagger: 0.04,  // typing speed
                    ease: "none",
                    scrollTrigger: {
                        trigger: heroTitle,
                        start: 'top 90%',
                        once: true
                    }
                }
            );
        }

        // ScrollReveal Animation for "Strategic Healthcare Supply Partner"
        const scrollRevealEl = document.querySelector('.about-preview .section-title');
        if (scrollRevealEl) {
            scrollRevealEl.classList.add('scroll-reveal');

            // Split into words
            const revealSplitText = new SplitType(scrollRevealEl, { types: 'words' });

            // Animate Parent rotation
            gsap.fromTo(
                scrollRevealEl,
                { transformOrigin: '0% 50%', rotate: 3 },
                {
                    ease: 'none',
                    rotate: 0,
                    scrollTrigger: {
                        trigger: scrollRevealEl,
                        start: 'top bottom',
                        end: 'bottom bottom',
                        scrub: true
                    }
                }
            );

            // Animate child words (opacity and blur) with scrub
            gsap.fromTo(
                revealSplitText.words,
                { opacity: 0.1, filter: 'blur(4px)', willChange: 'opacity' },
                {
                    ease: 'none',
                    opacity: 1,
                    filter: 'blur(0px)',
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: scrollRevealEl,
                        start: 'top bottom-=20%',
                        end: 'bottom bottom',
                        scrub: true
                    }
                }
            );
        }
        // Audience Card Spotlight Effect
        const cards = document.querySelectorAll('.audience-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Modern Text Animation for "Built for B2B and B2C"
        const b2bHeading = document.getElementById('b2b-heading');
        if (b2bHeading) {
            // Split into characters and words
            const b2bSplit = new SplitType(b2bHeading, { types: 'words, chars' });

            // Modern "Pop & Drop" spring animation
            gsap.fromTo(b2bSplit.chars,
                {
                    y: 60,
                    opacity: 0,
                    scale: 0.5,
                    rotationX: -45
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotationX: 0,
                    duration: 1.5,
                    ease: "back.out(1.7)", // Beautiful pop scaling
                    stagger: 0.03,
                    scrollTrigger: {
                        trigger: b2bHeading,
                        start: 'top 90%', // Starts playing much earlier as it enters screen
                        once: true // Play exactly once reliably!
                    }
                }
            );
        }

        // Inventory Card Scroll Reveal
        const inventoryCards = document.querySelectorAll('.inventory-card');
        if (inventoryCards.length > 0) {
            gsap.fromTo(inventoryCards,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.inventory-content',
                        start: 'top 85%',
                        once: true
                    }
                }
            );
        }
        // BlurText Animation for Strategy Heading
        const strategyHeading = document.getElementById('strategy-heading');
        if (strategyHeading) {
            // Split into words
            const strategySplit = new SplitType(strategyHeading, { types: 'words' });

            // Set initial state matching BlurText 'from'
            gsap.set(strategySplit.words, {
                filter: 'blur(10px)',
                opacity: 0,
                y: -50,
                display: 'inline-block',
                willChange: 'transform, filter, opacity'
            });

            // Animate using BlurText 'to' keyframes steps
            gsap.to(strategySplit.words, {
                keyframes: [
                    { filter: 'blur(5px)', opacity: 0.5, y: 5, duration: 0.35, ease: 'none' },
                    { filter: 'blur(0px)', opacity: 1, y: 0, duration: 0.35, ease: 'none' }
                ],
                stagger: 0.2,
                scrollTrigger: {
                    trigger: strategyHeading,
                    start: 'top 90%',
                    once: true
                }
            });
        }
    }
});
