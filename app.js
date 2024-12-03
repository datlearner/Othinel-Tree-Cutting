gsap.registerPlugin(ScrollTrigger);

gsap.to('.text', {
    opacity: 1,
    duration: 1.5,
    delay: 0.5
})

gsap.to('.pic', {
    y: 40,
    duration: 1.5,
    opacity: 1,
    delay: 1.3
})

gsap.to('.div1', {
    x: 10,
    duration: 2,
    opacity: 1,
    delay: 0.4,
    scrollTrigger: {
        trigger: '.div1',
        start: 400
    }
})
gsap.from('.div2', {
    x: 20,
    duration: 2,
    opacity: 0,
    delay: 1.5,
    scrollTrigger: {
        trigger: '.div1',
        start: 400
    }
});

gsap.to('.img', {
    x: 13,
    duration: 2,
    opacity: 1,
    delay: 0.4,
    scrollTrigger: {
        trigger: '.img'
    }
})
gsap.from('.img1', {
    x: 17,
    duration: 2,
    opacity: 0,
    delay: 1.5,
    scrollTrigger: {
        trigger: '.img1'
    }
});


gsap.to('.infor-div1', {
    x: 13,
    duration: 2,
    opacity: 1,
    delay: 0.4,
    scrollTrigger: {
        trigger: '.infor-div1',
        start: 400
    }
})
gsap.from('.infor-div2', {
    x: 17,
    duration: 2,
    opacity: 0,
    delay: 1.5,
    scrollTrigger: {
        trigger: '.infor-div2',
        start: 400
    }
});




gsap.to('.card', {
    x: 7,
    duration: 2,
    opacity: 1,
    delay: 0.5,
    scrollTrigger: {
        trigger: '.div1',
        start: 800
    }
})


gsap.to('.one', {
    x: 7,
    duration: 2,
    opacity: 1,
    delay: 1,
    scrollTrigger: {
        trigger: '.one',
        start: 800
    }
})


gsap.to('.two', {
    x: 7,
    duration: 2,
    opacity: 1,
    delay: 2,
    scrollTrigger: {
        trigger: '.two',
        start: 800
    }
})


gsap.to('.three', {
    x: 7,
    duration: 2,
    opacity: 1,
    delay: 3,
    scrollTrigger: {
        trigger: '.three',
        start: 800
    }
})