const modalChatMenu = document.querySelector(".modal--feedback");
const modalCallMenu = document.querySelector(".modal--call");
const overlayModal =  document.querySelector(".overlay--modal");
const openButtonsChatMenu = document.querySelectorAll(".icon--feedback");
const openButtonsCallMenu = document.querySelectorAll(".icon--call");
const closeButtonMenu= document.querySelectorAll(".modal > .icon--close-btn");




const closeModalMenu = function () {
  modalCallMenu.classList.remove("modal--open");
  modalChatMenu.classList.remove("modal--open");
  overlayModal.classList.remove("overlay--active");
  overlayModal.removeEventListener("click",  overlayModalClickHandler);
  closeButtonMenu.forEach((closeButtons) => closeButtons.removeEventListener(`click`,  closeButtonMenuClickHandler));
  openButtonsCallMenu.forEach((button) => button.addEventListener("click", openButtonsCallMenuClickHandler ));
  openButtonsChatMenu.forEach((button) => button.addEventListener("click", openButtonsChatMenuClickHandler ));
  document.removeEventListener("keydown", escapeKeyDownModalClickHandler);
}





const openModalMenu =function (modalName){
  modalName.classList.add("modal--open");
  openButtonsCallMenu.forEach((button) => button.removeEventListener("click", openButtonsCallMenuClickHandler));
  openButtonsChatMenu.forEach((button) => button.removeEventListener("click", openButtonsChatMenuClickHandler));
  overlayModal.classList.add("overlay--active");
  overlayModal.addEventListener("click",  overlayModalClickHandler);
  closeButtonMenu.forEach((closeButtons) => closeButtons.addEventListener(`click`, closeButtonMenuClickHandler));
  document.addEventListener("keydown", escapeKeyDownModalClickHandler);
}





const  openButtonsCallMenuClickHandler = () =>  openModalMenu(modalCallMenu) ;
const  openButtonsChatMenuClickHandler = () =>  openModalMenu(modalChatMenu) ;
const closeButtonMenuClickHandler = () =>  closeModalMenu();
const escapeKeyDownModalClickHandler  = (evt) => {
  if ( evt.keyCode == 27 ) {
    closeModalMenu()
  }
  else {
    return false;
  }
};
const overlayModalClickHandler  = () =>  closeModalMenu();



openButtonsCallMenu.forEach((button) => button.addEventListener("click", openButtonsCallMenuClickHandler ));
openButtonsChatMenu.forEach((button) => button.addEventListener("click", openButtonsChatMenuClickHandler ));
