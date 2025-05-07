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

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

document.addEventListener("mouseover", (e) => {
  const target = e.target;
  if (target.closest("a, button, .clickable")) {
    cursor.classList.add("clickable");
  } else {
    cursor.classList.remove("clickable");
  }
});
