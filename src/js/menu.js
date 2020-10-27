const menu = document.querySelector(".menu");
const overlayMenu =  document.querySelector(".overlay--menu");
const openMenuBtn = document.querySelector(".header__burger-button ");
const closeMenuBtn= document.querySelector(".menu__header-menu");
const modalChatMenu = document.querySelector(".modal--feedback");
const modalCallMenu = document.querySelector(".modal--call");



const openMenu = function() {
  menu.classList.add("menu--active");
  overlayMenu.classList.toggle("overlay--active");
  overlayMenu.addEventListener("click", overlayMenuClickHandler);
  openMenuBtn.removeEventListener("click", openMenuBtnClickHandler);
  closeMenuBtn.addEventListener(`click`, closeMenuBtnClickHandler);
  document.addEventListener("keydown", escapeKeyDownClickHandler);
}



const closeMenu = function () {
  menu.classList.remove("menu--active");
  overlayMenu.classList.remove("overlay--active");
  overlayMenu.removeEventListener("click", overlayMenuClickHandler);
  document.removeEventListener("keydown", escapeKeyDownClickHandler)
  closeMenuBtn.removeEventListener(`click`, closeMenuBtnClickHandler);
  openMenuBtn.addEventListener("click", openMenuBtnClickHandler);
}

const openMenuBtnClickHandler = () =>  openMenu();
const closeMenuBtnClickHandler = () => {
    closeMenu()
};
const escapeKeyDownClickHandler = (evt) => {
  if ( evt.keyCode == 27 &&  !modalCallMenu.classList.contains("modal--open") &&  !modalChatMenu.classList.contains("modal--open")) {
    closeMenu()
  }
  else {
    return false;
  }
};
const overlayMenuClickHandler  = () =>  closeMenu() ;


openMenuBtn.addEventListener("click", openMenuBtnClickHandler);



