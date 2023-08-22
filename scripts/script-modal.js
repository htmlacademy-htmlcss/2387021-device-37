let modalContainer = document.querySelector('.modal-container');
let closeButton = document.querySelector('.modal-close-button');
let modalOpen = document.querySelector('.rare-commodity-button');

closeButton.onclick = function() {
  modalContainer.classList.add('modal-closed');
};

modalOpen.onclick = function() {
  modalContainer.classList.remove('modal-closed');
};

let minusButton = document.querySelector('.minus-button');
let plusButton = document.querySelector('.plus-button');
let quantityInput = document.querySelector('.quantity-input');

minusButton.onclick = function() {
  if (quantityInput.value < 1) {
    quantityInput.value = quantityInput.value;
  } else {
    quantityInput.value--;
  }
};

plusButton.onclick = function() {
  quantityInput.value++;
};
