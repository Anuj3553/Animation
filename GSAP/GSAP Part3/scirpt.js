let initialPath = `M 10 100 Q 250 100 490 100`
let finalPath = `M 10 100 Q 500 100 990 100`

var sting = document.querySelector("#string")

sting.addEventListener('mousemove', function (dets) {
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to('svg path', {
        attr: { d: path },
        duration: 0.3,
        ease: 'power3.out'
    })
})

sting.addEventListener('mouseleave', function () {
    gsap.to('svg path', {
        attr: { d: finalPath },
        duration: 1.5,
        ease: 'elastic.out(1, 0.2)'
    })
})

