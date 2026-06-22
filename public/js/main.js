// Lenis smooth scroll setup
window.cti_lenis = new Lenis({
  lerp: 0.08,         
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.5
});

function cti_raf(time) {
  if (window.cti_lenis) {
    window.cti_lenis.raf(time);
  }
  requestAnimationFrame(cti_raf);
}

requestAnimationFrame(cti_raf);

// Sticky menu scroll event handler (vanilla JS)
if (typeof window !== "undefined") {
  window.addEventListener('scroll', function () {
    const scroll = window.scrollY;
    const header = document.querySelector(".ct_header_main");
    if (header) {
      if (scroll >= 300) {
        header.classList.add("ct_sticky_menu");
      } else {
        header.classList.remove("ct_sticky_menu");
      }
    }
  });
}