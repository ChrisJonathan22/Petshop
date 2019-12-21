const mobile_menu_icon = document.querySelector('.mobile-menu-icon');
const mobile_menu_drawer = document.querySelector('.mobile-menu-drawer');
const mobile_menu_items = document.querySelector('.mobile-menu-items');


mobile_menu_icon.addEventListener('click', () => {
    mobile_menu_drawer.classList.toggle('show-drawer');
    mobile_menu_items.classList.toggle('show-menu-items');
}, false);