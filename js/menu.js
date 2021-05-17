// Change slide automatically

let counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 6){
    counter = 1;
  }
}, 5000);

// Open Menus (expanded versions) on click

const openMenuPizza = document.querySelector('.open-pizza-btn');
const openMenuPostre = document.querySelector('.open-postres-btn');
const openMenuFastFood = document.querySelector('.open-fast-food-btn');
const openMenuPasta = document.querySelector('.open-pasta-btn');
const openMenuVarios = document.querySelector('.open-varios-btn');
const openMenuMeat = document.querySelector('.open-meat-btn');

const closeMenuPizza = document.querySelector('.close-pizza-btn');
const closeMenuPostre = document.querySelector('.close-postre-btn');
const closeMenuFastFood = document.querySelector('.close-fast-food-btn');
const closeMenuPasta = document.querySelector('.close-pasta-btn');
const closeMenuVarios = document.querySelector('.close-varios-btn');
const closeMenuMeat = document.querySelector('.close-meat-btn');

const modalPizza = document.querySelector('.modal-pizza');
const modalPostre = document.querySelector('.modal-postre');
const modalFastFood = document.querySelector('.modal-fast-food');
const modalPasta = document.querySelector('.modal-pasta');
const modalVarios = document.querySelector('.modal-varios');
const modalMeat = document.querySelector('.modal-meat');

const darkBgr = document.querySelector('.dark-bgr');

openMenuPizza.addEventListener('click', () => {
    modalPizza.classList.add('modal-active');
    darkBgr.classList.add('dark-active');
})
closeMenuPizza.addEventListener('click', () => {
    modalPizza.classList.remove('modal-active');
    darkBgr.classList.remove('dark-active');
})
darkBgr.addEventListener('click', () => {
    modalPizza.classList.remove('modal-active');
    modalPostre.classList.remove('modal-active');
    modalFastFood.classList.remove('modal-active');
    modalPasta.classList.remove('modal-active');
    modalVarios.classList.remove('modal-active');
    modalMeat.classList.remove('modal-active');
    darkBgr.classList.remove('dark-active');
})

openMenuPostre.addEventListener('click', () => {
  modalPostre.classList.add('modal-active');
  darkBgr.classList.add('dark-active');
})
closeMenuPostre.addEventListener('click', () => {
  modalPostre.classList.remove('modal-active');
  darkBgr.classList.remove('dark-active');
})

openMenuFastFood.addEventListener('click', () => {
  modalFastFood.classList.add('modal-active');
  darkBgr.classList.add('dark-active');
})
closeMenuFastFood.addEventListener('click', () => {
  modalFastFood.classList.remove('modal-active');
  darkBgr.classList.remove('dark-active');
})

openMenuPasta.addEventListener('click', () => {
  modalPasta.classList.add('modal-active');
  darkBgr.classList.add('dark-active');
})
closeMenuPasta.addEventListener('click', () => {
  modalPasta.classList.remove('modal-active');
  darkBgr.classList.remove('dark-active');
})

openMenuVarios.addEventListener('click', () => {
  modalVarios.classList.add('modal-active');
  darkBgr.classList.add('dark-active');
})
closeMenuVarios.addEventListener('click', () => {
  modalVarios.classList.remove('modal-active');
  darkBgr.classList.remove('dark-active');
})

openMenuMeat.addEventListener('click', () => {
  modalMeat.classList.add('modal-active');
  darkBgr.classList.add('dark-active');
})
closeMenuMeat.addEventListener('click', () => {
  modalMeat.classList.remove('modal-active');
  darkBgr.classList.remove('dark-active');
})