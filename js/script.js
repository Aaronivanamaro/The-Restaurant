//Some awesome animations with GSAP

const timeline = gsap.timeline ({ defaults : { duration: 1, repeat: -1, repeatDelay: 2}})
const timelineTwo = gsap.timeline ({ defaults : { duration: 4, repeat: -1, repeatDelay: 10}})

timeline
  .fromTo('.welcome', {opacity: 1}, 
                      {opacity: 0.65})
  .fromTo('.welcome', {opacity: 0.65}, 
                      {opacity: 1})

timelineTwo
  .from('.img-container', {y: '-100%', ease: 'elastic', stagger: 0.8})              
