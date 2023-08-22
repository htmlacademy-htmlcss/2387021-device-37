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



let input = document.querySelector('.email-input');
let help = document.querySelector('.field-help')

if (input.invalid = true) {
  help.classList.add('field-error');
} else {
  help.classList.remove('field-error');
}
