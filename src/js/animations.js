import gsap from "gsap";
import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lenis
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  gsap.from("h1", { opacity: 0, y: -50, duration: 1 });
  // gsap.to("#animate-anything-css", {
  //   duration: 10,
  //   ease: "none",
  //   repeat: -1,
  //   rotation: 360,
  // });
});
