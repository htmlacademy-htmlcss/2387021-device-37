let delivery = document.querySelector('.advantages-description-delivery');
let guarantee = document.querySelector('.advantages-description-gurantee');
let credit = document.querySelector('.advantages-description-credit');

let deliveryButton = document.querySelector('.delivery-button');
let guaranteeButton = document.querySelector('.guarantee-button');
let creditButton = document.querySelector('.credit-button');

let leftItems = document.querySelectorAll('.advantages-item');
let rightItems = document.querySelectorAll('.advantages-description-item');

let deliveryItem = document.querySelector('.advantages-delivery');
let guaranteeItem = document.querySelector('.advantages-guarantee');
let creditItem = document.querySelector('.advantages-credit');

deliveryButton.onclick = function() {
  for (leftItem of leftItems) {
    leftItem.classList.remove('advantages-item-active')
  };
  deliveryItem.classList.add('advantages-item-active');
  for (rightItem of rightItems) {
    rightItem.classList.remove('advantages-description-item-active')
  }
  delivery.classList.add('advantages-description-item-active');
};

guaranteeButton.onclick = function() {
  for (leftItem of leftItems) {
    leftItem.classList.remove('advantages-item-active')
  };
  guaranteeItem.classList.add('advantages-item-active');
  for (rightItem of rightItems) {
    rightItem.classList.remove('advantages-description-item-active')
  }
  guarantee.classList.add('advantages-description-item-active');
};

creditButton.onclick = function() {
  for (leftItem of leftItems) {
    leftItem.classList.remove('advantages-item-active')
  };
  creditItem.classList.add('advantages-item-active');
  for (rightItem of rightItems) {
    rightItem.classList.remove('advantages-description-item-active')
  }
  credit.classList.add('advantages-description-item-active');
};
