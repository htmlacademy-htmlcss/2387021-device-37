let menuButton = document.querySelector('.menu-item-button');
let itemCatalog = document.querySelector('.nav-menu-item-catalog');

menuButton.onclick = function() {
  itemCatalog.classList.toggle('has-submenu');
};
