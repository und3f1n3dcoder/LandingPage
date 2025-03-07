gsap.registerPlugin(ScrollTrigger);

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpenIcon = document.getElementById('menu-open');
const menuCloseIcon = document.getElementById('menu-close');

mobileMenuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('hidden');
    if (isOpen) {
        mobileMenu.classList.remove('hidden');
        menuOpenIcon.classList.add('hidden');
        menuCloseIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuOpenIcon.classList.remove('hidden');
        menuCloseIcon.classList.add('hidden');
    }
});

// Animations
gsap.to(".hawk-tuah", {
    opacity: 0.6,
    duration: 5,
    yoyo:true,
    y: -100,
    x: Math.random() * 100 - 50,
    ease: "bounce",
    stagger: 1,
});

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

gsap.from(".demo1", {
    scrollTrigger: {
        trigger: ".demo1",
        start: "top 70%",
    },
    opacity: 0,
    duration: 1.5,
    stagger: 0.5,
    scale: 1,
    ease: "circ",
});

gsap.to(".footer1", {
    scrollTrigger: {
        trigger: ".footer1",
        start: "top 80%",
    },
    opacity: 1,
    duration: 1.5,
    stagger: 0.5,
    scale: 1,
    ease: "circ",
});
