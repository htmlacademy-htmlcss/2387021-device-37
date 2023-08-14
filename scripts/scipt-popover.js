let cartButton = document.querySelector('.cart-button');
let popover = document.querySelector('.popover-cart');

cartButton.onclick = function (evt) {
  evt.preventDefault();
  popover.classList.toggle('popover-closed');
};
