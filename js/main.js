// Responsive Menu ----- Changes when resizing

const responsiveMenu = document.getElementById('responsive-menu');
const responsiveNav = document.getElementById('responsive-nav');
const responsiveList = document.getElementById('nav');
const responsiveLinkOne = document.getElementById('a-1');
const responsiveLinkTwo = document.getElementById('a-2');
const responsiveLinkThree = document.getElementById('a-3');
const responsiveLinkFour = document.getElementById('a-4');
const responsiveIcon = document.getElementById('icon-menu');

responsiveMenu.addEventListener('click', () => {
    if (window.scrollY <= 0) {    
        responsiveNav.classList.toggle('nav-seen');
    } else if (window.scrollY > 0) {
        responsiveNav.classList.toggle('new-style-nav');
        responsiveList.classList.toggle('new-style-list');
        responsiveLinkOne.classList.toggle('new-style-link-1');
        responsiveLinkTwo.classList.toggle('new-style-link-2');
        responsiveLinkThree.classList.toggle('new-style-link-3');
        responsiveLinkFour.classList.toggle('new-style-link-4');
    }
})

// Fixed Menu ------ Changes when scrolling

const nav = document.getElementById('main');
const welcome = document.getElementById('welcome');
const logo = document.getElementById('logo-c');
const newLinkOne = document.getElementById('new-link-1');
const newLinkTwo = document.getElementById('new-link-2');
const newLinkThree = document.getElementById('new-link-3');
const newLinkFour = document.getElementById('new-link-4');
const newListOfLinks = document.getElementById('new-list-links');

function fixNav () {
    if (window.scrollY > 0) {
        nav.classList.add('fixed-menu');
        welcome.classList.add('new-margin');
        logo.classList.add('logo-hidden');
        newLinkOne.classList.add('link-style');
        newLinkTwo.classList.add('link-style');
        newLinkThree.classList.add('link-style');
        newLinkFour.classList.add('link-style');
        newListOfLinks.classList.add('list-style');
        responsiveIcon.classList.add('new-style-icon');
        responsiveMenu.classList.add('new-responsiveness');
        responsiveNav.classList.remove('nav-seen');
    } else {
        nav.classList.remove('fixed-menu');
        welcome.classList.remove('new-margin');
        logo.classList.remove('logo-hidden');
        newLinkOne.classList.remove('link-style');
        newLinkTwo.classList.remove('link-style');
        newLinkThree.classList.remove('link-style');
        newLinkFour.classList.remove('link-style');
        newListOfLinks.classList.remove('list-style');
        responsiveIcon.classList.remove('new-style-icon');
        responsiveMenu.classList.remove('new-responsiveness');
        responsiveNav.classList.remove('new-style-nav');
        responsiveList.classList.remove('new-style-list');
        responsiveLinkOne.classList.remove('new-style-link-1');
        responsiveLinkTwo.classList.remove('new-style-link-2');
        responsiveLinkThree.classList.remove('new-style-link-3');
        responsiveLinkFour.classList.remove('new-style-link-4');
    } 
}

window.addEventListener('scroll', fixNav);

// Display images and boxes while scrolling

const sliderImages = document.querySelectorAll('.slide-effect');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "100px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
//      return;
      entry.target.classList.remove("appear");
    } else {
      entry.target.classList.add("appear");
//      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions); 

sliderImages.forEach(sliderImage => {
  appearOnScroll.observe(sliderImage);
});


// Change slide-movement when resizing - it works with the event 'RESIZE' in order to test
// the responsiveness of the website in a computer screen. However, to work properly in a
// width screen inferior to 871px, it should be a 'LOAD' event (though it would not be
// observable in a wider screen)

const removeRights = document.querySelectorAll('.slide-remove-right');
const removeLefts = document.querySelectorAll('.slide-remove-left');

window.addEventListener('load', () => {
  removeRights.forEach(removeRight => {
    if (window.innerWidth < 871) {
      removeRight.classList.remove('right-side');
      removeRight.classList.add('top-side');    
    }
  })
})

window.addEventListener('load', () => {
  removeLefts.forEach(removeLeft => {
    if (window.innerWidth < 871) {
      removeLeft.classList.remove('left-side');
      removeLeft.classList.add('top-side');    
    }
  })
})