function loading() {
    let tl = gsap.timeline()

    tl.to("#yellow1", {
        top: '-100%',
        delay: 0.5,
        duration: 0.5,
        ease: 'expo.out'
    })
    tl.from('#yellow2', {
        top: '100%',
        delay: 0.5,
        duration: 0.6,
        ease: 'expo.out'
    }, "anim")
    tl.from('#loader h1', {
        delay: 0.6,
        duration: 0.7,
        color: "white"
    }, "anim")
    tl.to('#loader', {
        display: "none"
    })
    tl.to('#loader', {
        opacity: 0
    })
}

loading()

function loco() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    })

    document.querySelector("#footer h2").addEventListener("click", () => {
        scroll.scrollTo(0)
    })

    let elems = document.querySelectorAll(".elem")
    let page2 = document.querySelector("#page2")

    elems.forEach(function (ele) {
        ele.addEventListener("mouseenter", function () {
            let bgImg = ele.getAttribute("data-img")
            page2.style.backgroundImage = `url(${bgImg})`
        })
        ele.addEventListener("mouseleave", function () {
            page2.style.backgroundImage = ""
        })
    })
}

loco()