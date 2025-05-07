import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.set(".project-animate", { x: 400 });

gsap.to(".project-animate", {
  scrollTrigger: {
    trigger: ".project-animate",
    start: "top 85%",
    end: "bottom 60%",
    scrub: 0.1,
    markers: true,
  },
  x: 0,
  duration: 2,
  ease: "power2.out",
});

const cursor = document.querySelector(".cursor");

// Initial positions
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate cursor with delay
function animateCursor() {
  // Lerp (linear interpolation)
  cursorX += (mouseX - cursorX) * 0.08;
  cursorY += (mouseY - cursorY) * 0.08;

  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;

  requestAnimationFrame(animateCursor);
}

animateCursor(); // Start animation

document.addEventListener("mouseover", (e) => {
  const target = e.target;
  if (target.closest("a, button, .clickable")) {
    cursor.classList.add("clickable");
  } else {
    cursor.classList.remove("clickable");
  }
});
