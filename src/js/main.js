// Slider functionality
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

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update dots
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

// Auto slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}, 5000);

// Initialize dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

// Initialize slider
updateSlider();

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