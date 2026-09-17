const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function closeMenu() {
  navLinks.classList.remove("open");
  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    closeMenu();
  }
});

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "inline";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// Select the form and button elements
const contactForm = document.querySelector('.contact-form');
const ctaButton = document.querySelector('.btn-cta');

// Listen for the form submission
contactForm.addEventListener('submit', async function (event) {
  // 1. THIS PREVENTS THE PAGE FROM RELOADING AND JUMPING TO HERO
  event.preventDefault();

  // Change button state
  const originalText = ctaButton.innerText;
  ctaButton.innerText = 'Sending...';
  ctaButton.disabled = true;

  // Gather user input values
  const formData = {
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
  };

  try {
    console.log('CTA Clicked! Form Data:', formData);

    // Simulate sending data (1.5s delay)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Visual feedback
    ctaButton.innerText = 'Message Sent! ✓';
    ctaButton.style.backgroundColor = '#28a745';

    // Reset form fields
    contactForm.reset();

    // Revert button back after 3 seconds
    setTimeout(() => {
      ctaButton.innerText = originalText;
      ctaButton.style.backgroundColor = '';
      ctaButton.disabled = false;
    }, 3000);

  } catch (error) {
    ctaButton.innerText = 'Error! Try Again';
    ctaButton.style.backgroundColor = '#dc3545';
    ctaButton.disabled = false;
  }
});