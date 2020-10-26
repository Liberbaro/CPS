const swiperWidth = window.matchMedia("(min-width:768px)");
const brandsContainer = document.querySelector(".swiper-container--brands");
const priceContainer = document.querySelector(".swiper-container--price");
const technicsContainer = document.querySelector(".swiper-container--technics");


const swiperProperties = {
  spaceBetween : 16,
  slidesPerView : "auto",
  pagination : {
    el : ".swiper-pagination",
    clickable : true
  },
  a11y: {
    enabled: false,
  }

}


let newSwiperBrands;
let newSwiperPrice;
let newSwiperTechnics;
let swiperOn = false;




const checkWidthDocumentHandler = function() {
  if (swiperWidth.matches) {
    if (!swiperOn) {
      return false;
    }
      newSwiperBrands.destroy(true, true);
      newSwiperPrice.destroy(true, true);
      newSwiperTechnics.destroy(true, true);
      swiperOn = false;
    }   else {
    if (swiperOn) {
      return false;
    }
newSwiperBrands = new Swiper( brandsContainer, swiperProperties );
newSwiperPrice = new Swiper( priceContainer, swiperProperties);
newSwiperPrice.width = 260,
newSwiperPrice.height = 200;
newSwiperTechnics = new Swiper( technicsContainer, swiperProperties);
swiperOn  = true;
    }
};


document.addEventListener("DOMContentLoaded", checkWidthDocumentHandler);
swiperWidth.addEventListener( "change", checkWidthDocumentHandler);
