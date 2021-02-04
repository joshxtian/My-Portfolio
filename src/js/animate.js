gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const jumbo = gsap.timeline();
const about = gsap.timeline({
    scrollTrigger:{
        snapTo:".about2",
        trigger:".nav",
        start:"-30% top",
    }
});
const contents = gsap.timeline({
    scrollTrigger: {
        
        toggleActions:"play none none none",
        trigger:".nav",
        start:"-30% top",
    }
});
const skills = gsap.timeline({
    scrollTrigger:{
    trigger:".skills",
    start:"-30% top",
    end:"bottom"
}
});

const portfolio = gsap.timeline({
    scrollTrigger:{
        trigger:".portfolio",
        start:"-50% top",
        end:"bottom bottom"
    }
});



// let sections = gsap.utils.toArray(".panel");

// function goToSection(i) {
//   gsap.to(window, {
//     scrollTo: { y: i * innerHeight, autoKill: false, ease: "Power3.easeInOut" },
//     duration: 0.1
//   });
// }

// ScrollTrigger.defaults({
// //   markers: true
// });

// sections.forEach((eachPanel, i) => {
//   // const mainAnim = gsap.timeline({ paused: true });

//   ScrollTrigger.create({
//     trigger: eachPanel,
//     onEnter: () => goToSection(i)
//   });
// });




jumbo.to(".jumbo__line1",{
    opacity:1,
    duration:1,
}).to(".jumbo__line2",{
    opacity:1,
    duration:0.3,
});



about.to('.about2__avatar',{
    scale:1,
    duration:0.5,
})

contents.from('.about2__paragraphHead',{
    x:-100,
    opacity:0,
    duration:0.1,   

}).from('.about2__paragraph',{
    x:-100,
    opacity:0,
    duration:0.1,
    delay:0.1,   

}).from("#facebook",{
    opacity:0,
    y:100,
    duration:0.1,
    delay:0.1,


}).from("#git",{
    opacity:0,
    y:100,
    duration:0.1,


}).from("#twitter",{
    opacity:0,
    y:100,
    duration:0.1,


}).from("#instagram",{
    opacity:0,
    y:100,
    duration:0.1,


}).from('.first',{
    y:-100,
    x:-100,
    opacity:0,
    duration:0.1,
    delay:0.1,   

}).from('.second',{
    y:-100,
    x:100,
    opacity:0,
    duration:0.1,
    delay:0.1,   

}).from('.third',{
    y:100,
    x:-100,
    opacity:0,
    duration:0.1,
    delay:0.1,   

}).from('.fourth',{
    y:100,
    x:100,
    opacity:0,
    duration:0.1,
    delay:0.1,   

})


skills.from(".skills__header-text",{
    opacity:0,
    y:-500,
    duration:0.2,
}).from("#html-card",{
    opacity:0,
    x:500,
    duration:0.2,
}).from("#css-card",{
    opacity:0,
    x:500,
    duration:0.2,
}).from("#js-card",{
    opacity:0,
    x:500,
    duration:0.2,
}).from("#jquery-card",{
    opacity:0,
    x:500,
    duration:0.2,
}).from("#boot-card",{
    opacity:0,
    x:-500,
    duration:0.2,
}).from("#node-card",{
    opacity:0,
    x:-500,
    duration:0.2,
}).from("#react-card",{
    opacity:0,
    x:-500,
    duration:0.2,
})

portfolio.to(".portfolio",{
    background:"white",
    duration:0.2,
}).from(".portfolio__header-text",{
    opacity:0,
})


const project1 = gsap.timeline({
    scrollTrigger:{
        trigger:".portfolio",
        start:"-10% top",
    }
});
const project2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#portfolio-second",
        start:"-10% center",
    }
});

const project3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#portfolio-third",
        start:"-10% center",
    }
});

const project4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#portfolio-fourth",
        start:"-10% center",
    }
});

const project5 = gsap.timeline({
    scrollTrigger:{
        trigger:"#portfolio-fifth",
        start:"-10% center",
    }
});




project1.from("#image-first",{
    opacity:0,
    duration:0.2,
    x:-200,
}).from("#description-first",{
    opacity:0,
    duration:0.2,
    x:100,

})

project2.from("#image-second",{
    opacity:0,
    duration:0.2,
    x:200,
}).from("#description-second",{
    opacity:0,
    duration:0.2,
    x:-100,

})

project3.from("#image-third",{
    opacity:0,
    duration:0.2,
    x:200,
}).from("#description-third",{
    opacity:0,
    duration:0.2,
    x:-100,

})

project4.from("#image-fourth",{
    opacity:0,
    duration:0.2,
    x:200,
}).from("#description-fourth",{
    opacity:0,
    duration:0.2,
    x:-100,

})

project5.from("#image-fifth",{
    opacity:0,
    duration:0.2,
    x:200,
}).from("#description-fifth",{
    opacity:0,
    duration:0.2,
    x:-100,

})

const contact = gsap.timeline({
    scrollTrigger:{
        trigger:".contact",
        start:"-20% top",
    }
});


contact.from(".contact",{
    background:"white",
    duration:0.1,
}).from(".contact__submit",{
    opacity:0,
    y:-500,
    duration:0.2,
}).from(".contact__message",{
    opacity:0,
    y:-500,
    duration:0.2,
}).from(".contact__email",{
    opacity:0,
    y:-500,
    duration:0.2,
}).from(".contact__fName",{
    opacity:0,
    y:-500,
    duration:0.2,
}).from(".contact__header-bottom",{
    opacity:0,
    y:-500,
    duration:0.2,
}).from(".contact__header-text",{
    opacity:0,
    y:-500,
    duration:0.2,
})