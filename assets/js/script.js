// Анимация появления секций и карточек
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

// Следим за всеми секциями и карточками
document.querySelectorAll(".section, .card").forEach(el => {
    observer.observe(el);
});

// Плавный скролл по клику
document.querySelectorAll("[data-scroll]").forEach(link => {
    link.addEventListener("click", evt => {
        evt.preventDefault();
        const target = document.querySelector(link.dataset.scroll);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Логика бургер-меню
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const backdrop = document.getElementById("backdrop");

// Открытие/закрытие меню
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
    backdrop.classList.toggle("show");
});

// Закрыть при клике на фон
backdrop.addEventListener("click", () => {
    burger.classList.remove("active");
    mobileMenu.classList.remove("open");
    backdrop.classList.remove("show");
});

// Закрыть при выборе пункта меню
document.querySelectorAll(".mobile-menu a").forEach(a => {
    a.addEventListener("click", () => {
        burger.classList.remove("active");
        mobileMenu.classList.remove("open");
        backdrop.classList.remove("show");
    });
});
