function loading() {
    var tl = gsap.timeline()

    tl.to(".yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.6,
        ease: "expo.out"
    })
    tl.to(".loader video", {
        top: "-100%",
        delay: 0.5,
        duration: 0.6,
        ease: "expo.out"
    }, "anim")
    tl.to(".loader h1", {
        color: "black"
    }, "anim")
    tl.to(".loader", {
        display: "none"
    }, "anim")

}
loading()

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});