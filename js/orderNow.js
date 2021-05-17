if (document.readyState == 'loading') {
   document.addEventListener('DOMContentLoaded', ready)
} else {
   ready()
}

function ready() {
   let removeCartItemButtons = document.querySelectorAll('.btn-danger')
   removeCartItemButtons.forEach(button => {
      button.addEventListener('click', removeCartItem);
   });

   let quantityInputs = document.querySelectorAll('.cart-quantity-input')
   quantityInputs.forEach(quantityInput => {
      quantityInput.addEventListener('change', quantityChanged);
   });

   let addToCartButtons = document.querySelectorAll('.shop-item-button')
   addToCartButtons.forEach(addToCartButton => {
      addToCartButton.addEventListener('click', addToCartClicked);
   });

   document.querySelectorAll('.btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
   alert('Gracias por probar nuestro menu')
   let cartItems = document.querySelectorAll('.cart-items')[0]
   while (cartItems.hasChildNodes()) {
       cartItems.removeChild(cartItems.firstChild)
   }
   updateCartTotal()
}

function removeCartItem(event) {
   let buttonClicked = event.target
   let cartItem = buttonClicked.parentElement.parentElement
   gsap.fromTo(cartItem, {opacity:1, y:'0%'}, 
                         {opacity:0, y:'100%', duration:0.5, onComplete: function() {
      cartItem.remove()
      updateCartTotal()
   }})
   let shopItems = document.querySelectorAll('.shop-item')
   shopItems.forEach(shopItem => {
      shopItem.classList.remove('low-opacity');
   });
}

function quantityChanged(event) {
   let input = event.target
   if (isNaN(input.value) || input.value <= 0) {
       input.value = 1
   }
   updateCartTotal()
}

function addToCartClicked(event) {
   let button = event.target
   let shopItem = button.parentElement.parentElement
   shopItem.classList.add('low-opacity')
   gsap.fromTo(shopItem, {rotation: -360}, {duration:1, rotation: 0})
   let title = shopItem.querySelectorAll('.shop-item-title')[0].innerText
   let price = shopItem.querySelectorAll('.shop-item-price')[0].innerText
   let imageSrc = shopItem.querySelectorAll('.shop-item-image')[0].src
   addItemToCart(title, price, imageSrc)
   updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
   let cartRow = document.createElement('div')
   cartRow.classList.add('cart-row')
   let cartItems = document.querySelectorAll('.cart-items')[0]
   let cartItemNames = cartItems.querySelectorAll('.cart-item-title')
   for (let i = 0; i < cartItemNames.length; i++) {
       if (cartItemNames[i].innerText == title) {
           alert('Este item ya ha sido añadido')
           return
       }
   }
   let cartRowContents = `
       <div class="cart-item cart-column">
           <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
           <p class="cart-item-title">${title}</p>
       </div>
       <p class="cart-price cart-column">${price}</p>
       <div class="cart-quantity cart-column">
           <input class="cart-quantity-input" type="number" value="1">
           <ion-icon class="btn-danger" name="close-outline"></ion-icon>
       </div>`
   cartRow.innerHTML = cartRowContents
   cartItems.append(cartRow)
   cartRow.querySelectorAll('.btn-danger')[0].addEventListener('click', removeCartItem)
   cartRow.querySelectorAll('.cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
   let cartItemContainer = document.querySelectorAll('.cart-items')[0]
   let cartRows = cartItemContainer.querySelectorAll('.cart-row')
   let total = 0
   for (let i = 0; i < cartRows.length; i++) {
       let cartRow = cartRows[i]
       let priceElement = cartRow.querySelectorAll('.cart-price')[0]
       let quantityElement = cartRow.querySelectorAll('.cart-quantity-input')[0]
       let price = parseFloat(priceElement.innerText.replace('$', ''))
       let quantity = quantityElement.value
       total = total + (price * quantity)
   }
   total = Math.round(total * 100) / 100
   document.querySelectorAll('.cart-total-price')[0].innerText = '$ ' + total
}

//Cart Code
const openCart = document.querySelector('.cart-c');
const cartCenter = document.querySelector('.cart-center');

openCart.addEventListener('click', () => {
   cartCenter.classList.toggle('cart-visible')
});