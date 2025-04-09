import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.set(".projet-animate", { x: 400 });

gsap.to(".projet-animate", {
  scrollTrigger: {
    trigger: ".projet-animate",
    start: "top 99%",
    end: "bottom 25%",
    scrub: 0.1,
    markers: true,
  },
  x: 0,
  duration: 2,
  ease: "power2.out",
});
