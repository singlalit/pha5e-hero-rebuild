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
// Toggle Play/Pause for Promo Video
const promoVideo = document.getElementById('promoVideo');
const toggleBtn = document.getElementById('videoToggleBtn');

toggleBtn.addEventListener('click', () => {
  if (promoVideo.paused) {
    promoVideo.play();
    toggleBtn.textContent = '⏸ Pause';
  } else {
    promoVideo.pause();
    toggleBtn.textContent = '▶ Play';
  }
});
// Open YouTube Popup
function openVideo(url) {
  const popup = document.getElementById("videoPopup");
  const frame = document.getElementById("youtubeFrame");
  frame.src = url;
  popup.classList.remove("d-none");
}

// Close YouTube Popup
function closeVideo() {
  const popup = document.getElementById("videoPopup");
  const frame = document.getElementById("youtubeFrame");
  frame.src = "";
  popup.classList.add("d-none");
}
gsap.from(".about-section h2", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: ".about-section"
});

gsap.from(".about-section p", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: ".about-section"
});
gsap.from(".contact-btn", {
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: ".contact-section"
});
