document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for hero image
    const heroImage = document.querySelector('.hero-image');
    const heroTextLarge = document.querySelector('.hero-text-large');
    const heroTextSmall = document.querySelector('.hero-text-small');

    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        
        if (heroImage) {
            heroImage.style.transform = `translate(-50%, ${scroll * 0.2}px)`;
        }
        if (heroTextLarge) {
            heroTextLarge.style.transform = `translateY(${scroll * 0.4}px)`;
            heroTextLarge.style.opacity = 1 - scroll / 500;
        }
        if (heroTextSmall) {
            heroTextSmall.style.transform = `translateY(${scroll * 0.3}px)`;
            heroTextSmall.style.opacity = 1 - scroll / 400;
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                // Optional: Stop observing after animation triggers once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const faders = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    faders.forEach(fader => {
        observer.observe(fader);
    });

    // Sticky nav styling
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});
