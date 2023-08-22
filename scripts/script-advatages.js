let delivery = document.querySelector('.advantages-description-delivery');
let guarantee = document.querySelector('.advantages-description-gurantee');
let credit = document.querySelector('.advantages-description-credit');
let deliveryButton = document.querySelector('.delivery-button');
let guaranteeButton = document.querySelector('.guarantee-button');
let creditButton = document.querySelector('.credit-button');

let deliveryItem = document.querySelector('.advantages-delivery');
let guaranteeItem = document.querySelector('.advantages-guarantee');
let creditItem = document.querySelector('.advantages-credit');

deliveryButton.onclick = function() {
  delivery.classList.add('advantages-description-item-active');
  deliveryItem.classList.add('advantages-item-active');
  guarantee.classList.remove('advantages-description-item-active');
  guaranteeItem.classList.remove('advantages-item-active');
  credit.classList.remove('advantages-description-item-active');
  creditItem.classList.remove('advantages-item-active');
};

guaranteeButton.onclick = function() {
  delivery.classList.remove('advantages-description-item-active');
  deliveryItem.classList.remove('advantages-item-active');
  guarantee.classList.add('advantages-description-item-active');
  guaranteeItem.classList.add('advantages-item-active');
  credit.classList.remove('advantages-description-item-active');
  creditItem.classList.remove('advantages-item-active');
};

creditButton.onclick = function() {
  delivery.classList.remove('advantages-description-item-active');
  deliveryItem.classList.remove('advantages-item-active');
  guarantee.classList.remove('advantages-description-item-active');
  guaranteeItem.classList.remove('advantages-item-active');
  credit.classList.add('advantages-description-item-active');
  creditItem.classList.add('advantages-item-active');
};
