const menu = document.querySelector(".menu");
const overlayMenu =  document.querySelector(".overlay--menu");
const openMenuBtn = document.querySelector(".header__burger-button ");
const closeMenuBtn= document.querySelectorAll(".icon--close-btn");



const openMenu = function() {
  menu.classList.add("menu--active");
  overlayMenu.classList.toggle("overlay--active");
  overlayMenu.addEventListener("click", overlayMenuClickHandler);
  openMenuBtn.removeEventListener("click", openMenuBtnClickHandler);
  closeMenuBtn.forEach((closeButtons) => closeButtons.addEventListener(`click`, closeMenuBtnClickHandler));
  document.addEventListener("keydown", escapeKeyDowunClickHandler);
  modalActive = false;
}



const closeMenu = function () {
  menu.classList.remove("menu--active");
  overlayMenu.classList.remove("overlay--active");
  overlayMenu.removeEventListener("click", overlayMenuClickHandler);
  document.removeEventListener("keydown", escapeKeyDowunClickHandler)
  closeMenuBtn.forEach((closeButtons) => closeButtons.removeEventListener(`click`, closeMenuBtnClickHandler));
  openMenuBtn.addEventListener("click", openMenuBtnClickHandler);
}

const openMenuBtnClickHandler = () => {  openMenu() };
const closeMenuBtnClickHandler = () => {
  if ( modalActive == true ) {
    return false;
  }  else {
    closeMenu()
  }
};
const escapeKeyDowunClickHandler  = (evt) => {
  if ( evt.keyCode == 27 && modalActive == false ) {
    closeMenu()
  }
  else {
    return false;
  }
}
const overlayMenuClickHandler  = () => {  closeMenu() };





openMenuBtn.addEventListener("click", openMenuBtnClickHandler);



