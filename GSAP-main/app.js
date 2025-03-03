gsap.registerPlugin(ScrollTrigger);


// gsap.to(".square", {
//   x: 500,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".square",
//     start: "top 50%", //pixels
//     markers: true,
//     // toggleClass: "red",
//   },
// });
// gsap.to(".square", {
//   duration: 2,
//   x: 300,
//   scale: 1.5,
//   rotation: 180,
//   backgroundColor: "#3498db",
//   ease: "elastic",
//   delay: 1,
//   repeat: -1,
//   yoyo: true,
//   onComplete: () => console.log("Animation complete!"),
//   onUpdate: () => console.log("Updating..."),
//   onStart: () => console.log("Animation started!"),
// });

gsap.to(".hawk-tuah", {
  opacity: 1,
  duration: 15,
  repeat: -1,
  y: -100,
  x: Math.random() * 100 - 50,
  ease: "bounce",
  stagger: 1,
})

gsap.from(".demo", {
  opacity: 0,
  duration: 1.5,
  y: -100,
  stagger: 0.5,
  scale: 1.2,
  ease: "circ",
  skewX: 20,
  skewY: 20,
  rotateX: 90,
});

gsap.to(".demo1", {
  scrollTrigger: {
    trigger: ".demo1",
    start: "top 70%",
    // markers: true,
  },
  opacity: 1,
  duration: 1.5,
  // y: 100,
  stagger: 0.5,
  scale: 1.2,
  ease: "circ",
});

gsap.to(".footer1", {
  scrollTrigger: {
    trigger: ".footer1",
    start: "top 80%",
    // markers: true,
  },
  opacity: 1,
  duration: 1.5,
  // y: 100,
  stagger: 0.5,
  scale: 1.2,
  ease: "circ",
});

