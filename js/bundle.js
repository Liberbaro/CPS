!function(e){var n={};function t(r){if(n[r])return n[r].exports;var c=n[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(r,c,function(n){return e[n]}.bind(null,c));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";t.r(n);t(2),t(3),t(4),t(5),t(6)},function(e,n,t){},function(e,n){var t,r,c,o=window.matchMedia("(min-width:768px)"),i=document.querySelector(".swiper-container--brands"),a=document.querySelector(".swiper-container--price"),u=document.querySelector(".swiper-container--technics"),s={spaceBetween:16,slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0},a11y:{enabled:!1}},l=!1,d=function(){if(o.matches){if(!l)return!1;t.destroy(!0,!0),r.destroy(!0,!0),c.destroy(!0,!0),l=!1}else{if(l)return!1;t=new Swiper(i,s),(r=new Swiper(a,s)).width=260,r.height=200,c=new Swiper(u,s),l=!0}};document.addEventListener("DOMContentLoaded",d),o.addEventListener("change",d)},function(e,n){var t=document.querySelector(".read-more--brands"),r=document.querySelector(".brands__list--brands"),c=document.querySelector(".read-more--technic"),o=document.querySelector(".brands__list--technics"),i=document.querySelector(".read-more--article"),a=document.querySelector(".article__text-inner");c.addEventListener("click",(function(){this.classList.toggle("read-more--hide"),o.classList.toggle("brands--open"),o.classList.contains("brands--open")?this.innerText="Скрыть":this.innerText="Показать все"})),i.addEventListener("click",(function(){this.classList.toggle("read-more--hide"),a.classList.toggle("article__text-inner--open"),a.classList.contains("article__text-inner--open")?this.innerText="Скрыть":this.innerText="Читать далее"})),t.addEventListener("click",(function(){this.classList.toggle("read-more--hide"),r.classList.toggle("brands--open"),r.classList.contains("brands--open")?this.innerText="Скрыть":this.innerText="Показать все"}))},function(e,n){var t=document.querySelector(".modal--feedback"),r=document.querySelector(".modal--call"),c=document.querySelector(".overlay--modal"),o=document.querySelectorAll(".icon--feedback"),i=document.querySelectorAll(".icon--call"),a=document.querySelectorAll(".modal__close-btn"),u=function(){r.classList.remove("modal--open"),t.classList.remove("modal--open"),c.classList.remove("overlay--active"),c.removeEventListener("click",v),a.forEach((function(e){return e.removeEventListener("click",f)})),i.forEach((function(e){return e.addEventListener("click",l)})),o.forEach((function(e){return e.addEventListener("click",d)})),document.removeEventListener("keydown",m)},s=function(e){e.classList.add("modal--open"),i.forEach((function(e){return e.removeEventListener("click",l)})),o.forEach((function(e){return e.removeEventListener("click",d)})),c.classList.add("overlay--active"),c.addEventListener("click",v),a.forEach((function(e){return e.addEventListener("click",f)})),document.addEventListener("keydown",m)},l=function(){return s(r)},d=function(){return s(t)},f=function(){return u()},m=function(e){if(27!=e.keyCode)return!1;u()},v=function(){return u()};i.forEach((function(e){return e.addEventListener("click",l)})),o.forEach((function(e){return e.addEventListener("click",d)}))},function(e,n){var t=document.querySelector(".menu"),r=document.querySelector(".overlay--menu"),c=document.querySelector(".header__burger-button "),o=document.querySelector(".menu__header-menu"),i=document.querySelector(".modal--feedback"),a=document.querySelector(".modal--call"),u=function(){t.classList.add("menu--active"),r.classList.toggle("overlay--active"),r.addEventListener("click",m),c.removeEventListener("click",l),o.addEventListener("click",d),document.addEventListener("keydown",f)},s=function(){t.classList.remove("menu--active"),r.classList.remove("overlay--active"),r.removeEventListener("click",m),document.removeEventListener("keydown",f),o.removeEventListener("click",d),c.addEventListener("click",l)},l=function(){return u()},d=function(){s()},f=function(e){if(27!=e.keyCode||a.classList.contains("modal--open")||i.classList.contains("modal--open"))return!1;s()},m=function(){return s()};c.addEventListener("click",l)}]);
//# sourceMappingURL=bundle.js.map