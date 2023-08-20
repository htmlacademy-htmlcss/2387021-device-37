let menuButton = document.querySelector('.menu-item-catalog-link');
let itemCatalog = document.querySelector('.nav-menu-item-catalog');

menuButton.onclick = function(evt) {
  evt.preventDefault();
  itemCatalog.classList.toggle('has-submenu');
};
