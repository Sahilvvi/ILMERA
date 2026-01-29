const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");
const registerBtn = document.querySelector(".btn-register");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-active");
  registerBtn.classList.toggle("mobile-active");
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.who-we-are, .who-text p').forEach(el => {
    observer.observe(el);
});

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".quote-section, .quote-text, .quote-img").forEach(el => {
    observer2.observe(el);
});
// Simple fade-in animation
document.querySelectorAll(".team-item").forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "scale(0.9)";
    setTimeout(() => {
        item.style.transition = "0.5s";
        item.style.opacity = "1";
        item.style.transform = "scale(1)";
    }, index * 150);
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, i) => {
        card.style.opacity = 0;
        setTimeout(() => {
            card.style.transition = "0.6s ease-in-out";
            card.style.opacity = 1;
        }, i * 200);
    });
});
