const openButtonAsideMenu = document.querySelector(".header__burger-button ");
const closeButtonMenu= document.querySelectorAll(".icon--close-btn");
const asideMenu = document.querySelector(".aside");
const overlayAside =  document.querySelector(".overlay--aside");





const keyEscapeCloseAsideMenu = function(evt){
  if (evt.keyCode == 27) {
    if(modalActive == true){
      return  false;
    }
    else{
        asideMenu.classList.remove("aside--active");
        overlayAside.classList.remove("overlay--active");
        document.removeEventListener("keydown", keyEscapeCloseAsideMenu)
        openButtonAsideMenu.addEventListener('click', openAsideMenu);
      }
    }
  }


const closeAsideMenu = function (){
  if(modalActive == true){
    return false;
  }
    else{
    asideMenu.classList.remove("aside--active");
    overlayAside.classList.remove("overlay--active");
    overlayAside.removeEventListener('click', closeAsideMenu);
    closeButtonMenu.forEach((closeButtons) => closeButtons.removeEventListener(`click`, openAsideMenu));
    openButtonAsideMenu.addEventListener('click', openAsideMenu);
    openButtonAsideMenu.addEventListener('click', openAsideMenu);
  }

}

const openAsideMenu = function(){
  asideMenu.classList.add("aside--active");
  overlayAside.classList.toggle("overlay--active");
  document.addEventListener("keydown", keyEscapeCloseAsideMenu);
  overlayAside.addEventListener('click', closeAsideMenu);
  closeButtonMenu.forEach((closeButtons) => closeButtons.addEventListener(`click`, closeAsideMenu));
  openButtonAsideMenu.removeEventListener('click', openAsideMenu);
  modalActive = false;

}








openButtonAsideMenu.addEventListener('click', openAsideMenu);



