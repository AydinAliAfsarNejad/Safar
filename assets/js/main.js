


const $ = document
const slider = $.getElementById("slider");
const slides = $.querySelectorAll(".slide");
const dots = $.querySelectorAll(".slider-dot");
const prevBtn = $.getElementById("prev");
const nextBtn = $.getElementById("next");
const openMobileMenu = $.getElementById("open-mobile-menu");
const mobileMenu = $.getElementById("mobile-menu");
const closeMobileMenu = $.getElementById("close-btn");

let currentIndex = 0;


// Initialize dots
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
    });
});

// Mobile menu functionality
function openMenu() {
    mobileMenu.classList.remove("-right-64");
    mobileMenu.classList.add("right-0");

    // Add backdrop overlay
    const backdrop = document.createElement('div');
    backdrop.id = 'mobile-menu-backdrop';
    backdrop.className = 'fixed inset-0 bg-black/50 z-10';
    document.body.appendChild(backdrop);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.remove("right-0");
    mobileMenu.classList.add("-right-64");

    // Remove backdrop overlay
    const backdrop = document.getElementById('mobile-menu-backdrop');
    if (backdrop) {
        backdrop.remove();
    }

    // Restore body scroll
    document.body.style.overflow = '';
}

openMobileMenu.addEventListener("click", openMenu);

closeMobileMenu.addEventListener("click", closeMenu);

// Close menu when clicking on backdrop
document.addEventListener('click', (e) => {
    const backdrop = document.getElementById('mobile-menu-backdrop');
    if (e.target === backdrop) {
        closeMenu();
    }
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const backdrop = document.getElementById('mobile-menu-backdrop');
        if (backdrop) {
            closeMenu();
        }
    }
});

// Slider functionality
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let currentSlide = 0;
    const slideCount = slides.length;

    function showSlide(index) {
        // Reset all dots
        dots.forEach(dot => {
            dot.classList.remove('bg-primary', 'dark:bg-primary-dark');
            dot.classList.add('bg-gray-300', 'dark:bg-slate-600');
        });

        // Update current dot
        dots[index].classList.remove('bg-gray-300', 'dark:bg-slate-600');
        dots[index].classList.add('bg-primary', 'dark:bg-primary-dark');

        // Move slider
        slider.style.transform = `translateX(-${index * 100}%)`;
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        showSlide(currentSlide);
    }

    // Initialize dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Button events
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto slide
    setInterval(nextSlide, 5000);

    // Initialize first slide
    showSlide(0);
});