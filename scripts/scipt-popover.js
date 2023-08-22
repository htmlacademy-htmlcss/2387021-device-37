let cartButton = document.querySelector('.cart-button');
let popover = document.querySelector('.popover-cart');

cartButton.onclick = function (evt) {
  evt.preventDefault();
  popover.classList.toggle('popover-closed');
};

let deleteButtons = document.querySelectorAll('.delete-popover-button');
let list = document.querySelector('.popover-cart-list');
let items = document.querySelectorAll('.popover-cart-item');
let cart = document.querySelector('.cart-counter');


let product = document.querySelector('.popover-product-amount');
let sum = document.querySelector('.popover-sum-amount');

deleteButtons[0].onclick = function () {
  list.removeChild(items[0]);
  product.textContent--;
  cart.textContent--;
  sum.textContent -= 1000;
}

deleteButtons[1].onclick = function () {
  list.removeChild(items[1]);
  product.textContent--;
  cart.textContent--;
  sum.textContent -= 1000;
}

if (product < 1) {
  product.textContent = 'Корзина пуста';
  sum.textContent = '';
}
