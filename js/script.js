// MENU MOBILE
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// TUTUP MENU SETELAH LINK DIKLIK
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// ANIMASI SCROLL
const cards = document.querySelectorAll(
    ".project-card, .about-container, .contact-card"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.15
    }
);

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s ease";

    observer.observe(card);
});

// EFEK KLIK TOMBOL
document.querySelectorAll(".btn, .project-btn").forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";

        setTimeout(() => {
            button.style.transform = "";
        }, 150);
    });
});