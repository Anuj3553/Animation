// GSAP Animation --> GreenSock Animation Platform

// gsap.to("#box", {
//     delay: 1,
//     duration: 2,
//     x: 400,
//     backgroundColor: "yellow",
//     scale: 0.5,
//     rotation: 360,
//     ease: "elastic",
//     borderRadius: "50%",
//     repeat: -1, // -1 means infinite
//     yoyo: true,
//     onComplete: function() {
//         alert("Animation complete")
//     }
// })

// gsap.from("h1", {
//     delay: 1,
//     duration: 1,
//     y: 200,
//     opacity: 0,
//     stagger: 1.5,
//     ease: "bounce",
//     repeat: -1,
// })

// let tl = gsap.timeline()

// tl.to("#box1", {
//     x: 400,
//     duration: 1.5,
//     delay: 0.5,
//     ease: "bounce",
// })

// tl.to("#box2", {
//     x: 400,
//     duration: 1.5,
//     ease: "elastic",
// })

// tl.to("#box3", {
//     x: 400,
//     duration: 1.5,
//     ease: "Circ.easeIn",
// })

// .......................................................................


// GSAP ScrollTrigger --> GreenSock Animation Platform

// gsap.registerPlugin(ScrollTrigger)

// gsap.to("#page1 #box", {
//     x: 400,
//     scale: 0,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#scrollPin",
//         scroller: 'body',
//         markers: true,
//         scrub: 2, // Smooth scrolling
//         start: "top 25%", // Adjust the start position to trigger the animation when the box is in view
//         end: "bottom 40%", // Adjust the end position to allow scrolling after the animation
//     }
// })
// gsap.to("#page2 #box", {
//     x: 400,
//     scale: 0,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: 'body',
//         markers: true,
//         scrub: 2, // Smooth scrolling
//         start: "top 25%", // Adjust the start position to trigger the animation when the box is in view
//         end: "bottom 40%", // Adjust the end position to allow scrolling after the animation
//     }
// })
// gsap.to("#page3 #box", {
//     x: 400,
//     scale: 0,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#page3 #box",
//         scroller: 'body',
//         markers: true,
//         scrub: 2, // Smooth scrolling
//         start: "top 50%", // Adjust the start position to trigger the animation when the box is in view
//         end: "bottom 60%", // Adjust the end position to allow scrolling after the animation
//     }
// })


// .......................................................................

// // Lenis

// // Initialize Lenis
// const lenis = new Lenis();

// // Listen for the scroll event and log the event data
// lenis.on('scroll', () => {
//   console.log("Scroll ho rha hai");
// });

// // Use requestAnimationFrame to continuously update the scroll
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);


// .......................................................................

// Swiper 

let swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
        delay: 1000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})
