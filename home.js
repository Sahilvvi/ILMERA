/*
   ADVANCED HOME INTERACTIONS
   - Preloader
   - Scroll-to-Top
   - Hero Parallax
   - 3D Tilt for Cards
   - Typing Effect
*/

document.addEventListener("DOMContentLoaded", () => {
    // 1. PRELOADER
    const preloader = document.getElementById("preloader");
    if (preloader) {
        window.addEventListener("load", () => {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
        });
    }

    // 2. SCROLL TO TOP
    const scrollBtn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollBtn?.classList.add("show");
        } else {
            scrollBtn?.classList.remove("show");
        }
    });

    scrollBtn?.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 3. HERO PARALLAX
    const heroSection = document.querySelector(".hero");
    const icons = document.querySelectorAll(".icon"); // sun, book, sticker

    if (heroSection) {
        heroSection.addEventListener("mousemove", (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 90;
            const y = (window.innerHeight - e.pageY * 2) / 90;

            icons.forEach((icon, index) => {
                const speed = (index + 1) * 0.5; // varied speeds
                icon.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
            });
        });
    }

    // 4. TYPING EFFECT
    const typeText = document.getElementById("typewriter");
    const phrases = ["Experts", "Mentors", "Leads"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        if (!typeText) return;
        
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typeText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typeText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    
    // Start typing
    if (typeText) type();


    // 5. 3D TILT EFFECT FOR CARDS (Vanilla JS implementation)
    const cards = document.querySelectorAll(".feature-box, .course-card");
    
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -5; // Max 5 deg rotation
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
        });
    });
});
