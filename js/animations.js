import { startTerminal } from './terminal.js'; 

// Hides page when animations are loading 
window.onload = () => {
    const frontPage = document.querySelector('.front-page');
    frontPage.style.visibility = 'visible'; 
}

// Contact me scrolls into view when button is clicked 
const contactMeLink = document.querySelector('.nav__contact-me'); 
contactMeLink.addEventListener('click', event => {
    const contactMe = document.querySelector('.contact-me'); 
    contactMe.scrollIntoView(); 
    event.preventDefault(); 
});

// Content scrolls into view when scroller is clicked 
const scroll = document.querySelector('.general-info__scroll'); 
scroll.addEventListener('click', event => {
    const aboutMe = document.querySelector('.about-me'); 
    aboutMe.scrollIntoView(); 
    event.preventDefault(); 
});

// Checks if site is one column 
let oneColumn = window.innerWidth < 1250; 

// Registers the scrolltrigger plugin 
gsap.registerPlugin(ScrollTrigger); 

// Starts a GSAP timeline 
const tFrontPage = gsap.timeline(); 

// Front page text 
tFrontPage.from('.general-info', {
    y: '-30%', 
    opacity: 0, 
    duration: 2, 
    ease: Power4.easeOut
})

// Front page text stagger
tFrontPage.from('.stagger-info', {
    opacity: 0,
    y: -50, 
    stagger: .5, 
    ease: Power4.easeOut, 
    duration: 2
}, "-=1.5")

// Front page sidebar 
if(oneColumn){
    tFrontPage.from('.sidebar', {
        opacity: 0, 
        y: -100, 
        ease: Power4.easeOut, 
        duration: 1
    }, "-=1.5")
} else {
    tFrontPage.from('.sidebar', {
        opacity: 0, 
        x: -100, 
        ease: Power4.easeOut, 
        duration: 1
    }, "-=1.5")
}

// Front page scroller 
tFrontPage.from('.general-info__scroll', {
    opacity: 0, 
    duration: 1
}, "+=2")


// Terminal 
if(oneColumn){
    gsap.from('.about-me__terminal', {
        scrollTrigger: {
            trigger: '.about-me__terminal', 
            start: "top bottom",
            onEnter: startTerminal, 
        }, 
        opacity: 0, 
        y: 100, 
        ease: Power4.easeOut, 
        duration: 1
    })
} else {
    gsap.from('.about-me__terminal', {
        scrollTrigger: {
            trigger: '.about-me__terminal', 
            start: "center bottom",
            onEnter: startTerminal, 
        }, 
        opacity: 0, 
        x: 100, 
        ease: Power4.easeOut, 
        duration: 1
    })
}

// Skill stagger  
gsap.from('.skill', {
    scrollTrigger: {
        trigger: '.skill', 
        start: "top bottom", 
        
    }, 
    opacity: 0, 
    y: 100, 
    stagger: .25, 
    ease: Power4.easeOut, 
    duration: 1
})

// NTNU timeline  
gsap.from('.timeline__container', {
    scrollTrigger: {
        trigger: '.timeline__container', 
        start: "center bottom", 
        
    }, 
    opacity: 0, 
    y: 100, 
    stagger: 0.25, 
    ease: Power4.easeOut, 
    duration: 1
})
