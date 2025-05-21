// GSAP Load Animations
window.addEventListener('DOMContentLoaded', () => {
    gsap.timeline()
      .from("#hero-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      })
      .to(".floating-img", {
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.5");
  });

  // Parallax Mouse Movement on Images
const heroSection = document.querySelector('.hero-section');
const images = document.querySelectorAll('.floating-img');

heroSection.addEventListener('mousemove', (e) => {
  const { width, height } = heroSection.getBoundingClientRect();
  const offsetX = e.clientX - width / 2;
  const offsetY = e.clientY - height / 2;

  images.forEach((img, index) => {
    const movementFactor = (index + 1) * 10; // each image moves differently
    gsap.to(img, {
      x: offsetX / movementFactor,
      y: offsetY / movementFactor,
      duration: 0.4,
      ease: "power2.out"
    });
  });
});
// Fade-in background video
const bgVideo = document.getElementById("bg-video");

window.addEventListener("load", () => {
  setTimeout(() => {
    bgVideo.style.opacity = 1;
  }, 500); // delay to sync with other animations
});
