!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";t.r(n);t(2),t(3),t(4),t(5),t(6)},function(e,n,t){},function(e,n){var t,r,o,c=window.matchMedia("(min-width:768px)"),i=document.querySelector(".swiper-container--brands"),a=document.querySelector(".swiper-container--price"),s=document.querySelector(".swiper-container--technics"),u={spaceBetween:16,slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0},a11y:{enabled:!1}},l=!1,d=function(){if(c.matches){if(!l)return!1;t.destroy(!0,!0),r.destroy(!0,!0),o.destroy(!0,!0),l=!1}else{if(l)return!1;t=new Swiper(i,u),(r=new Swiper(a,u)).width=260,r.height=200,o=new Swiper(s,u),l=!0}};document.addEventListener("DOMContentLoaded",d),c.addEventListener("change",d)},function(e,n){var t=document.querySelector(".read-more--brands"),r=document.querySelector(".brands__list--brands"),o=document.querySelector(".read-more--technic"),c=document.querySelector(".brands__list--technics"),i=document.querySelector(".read-more--article"),a=document.querySelector(".article__text-inner");o.addEventListener("click",(function(){this.classList.toggle("read-more--hide"),c.classList.toggle("brands--open"),c.classList.contains("brands--open")?this.innerText="Скрыть":this.innerText="Показать все"})),i.addEventListener("click",(function(){this.classList.toggle("read-more--hide"),a.classList.toggle("article__text-inner--open"),a.classList.contains("article__text-inner--open")?this.innerText="Скрыть":this.innerText="Читать далее"})),t.addEventListener("click",(function(){this.classList.toggle("read-more--hide"),r.classList.toggle("brands--open"),r.classList.contains("brands--open")?this.innerText="Скрыть":this.innerText="Показать все"}))},function(e,n){var t=document.querySelector(".modal--feedback"),r=document.querySelector(".modal--call"),o=document.querySelector(".overlay--modal"),c=document.querySelectorAll(".icon--feedback"),i=document.querySelectorAll(".icon--call"),a=document.querySelectorAll(".modal > .icon--close-btn"),s=function(){r.classList.remove("modal--open"),t.classList.remove("modal--open"),o.classList.remove("overlay--active"),o.removeEventListener("click",v),a.forEach((function(e){return e.removeEventListener("click",m)})),i.forEach((function(e){return e.addEventListener("click",l)})),c.forEach((function(e){return e.addEventListener("click",d)})),document.removeEventListener("keydown",f)},u=function(e){e.classList.add("modal--open"),i.forEach((function(e){return e.removeEventListener("click",l)})),c.forEach((function(e){return e.removeEventListener("click",d)})),o.classList.add("overlay--active"),o.addEventListener("click",v),a.forEach((function(e){return e.addEventListener("click",m)})),document.addEventListener("keydown",f)},l=function(){return u(r)},d=function(){return u(t)},m=function(){return s()},f=function(e){if(27!=e.keyCode)return!1;s()},v=function(){return s()};i.forEach((function(e){return e.addEventListener("click",l)})),c.forEach((function(e){return e.addEventListener("click",d)}))},function(e,n){var t=document.querySelector(".menu"),r=document.querySelector(".overlay--menu"),o=document.querySelector(".header__burger-button "),c=document.querySelector(".menu__header-menu > .icon--close-btn"),i=document.querySelector(".modal--feedback"),a=document.querySelector(".modal--call"),s=function(){t.classList.add("menu--active"),r.classList.toggle("overlay--active"),r.addEventListener("click",f),o.removeEventListener("click",l),c.addEventListener("click",d),document.addEventListener("keydown",m)},u=function(){t.classList.remove("menu--active"),r.classList.remove("overlay--active"),r.removeEventListener("click",f),document.removeEventListener("keydown",m),c.removeEventListener("click",d),o.addEventListener("click",l)},l=function(){return s()},d=function(){a.classList.contains("modal--open")&&i.classList.contains("modal--open")||u()},m=function(e){if(27!=e.keyCode||a.classList.contains("modal--open")||i.classList.contains("modal--open"))return!1;u()},f=function(){return u()};o.addEventListener("click",l)}]);
//# sourceMappingURL=bundle.js.map