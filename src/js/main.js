import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.set(".projet-animate", { x: 400 });

gsap.to(".projet-animate", {
  scrollTrigger: {
    trigger: ".projet-animate",
    start: "bottom bottom",
    scrub: 1,
    markers: true,
  },
  x: 0,
  duration: 5,
});
