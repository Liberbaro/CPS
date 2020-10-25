const readMore = document.querySelector(".read-more--brands");
const brandsList = document.querySelector(".brands__list--brands");

const readMoreArticle = document.querySelector(".read-more--article");
const articleText = document.querySelector(".article__text-inner");

const readMoreTechnic = document.querySelector(".read-more--technic");
const technicList = document.querySelector(".brands__list--technics");


const showMore = function() {
  this.classList.toggle('read-more--hide');
  brandsList.classList.toggle('brands--open');
  if (brandsList.classList.contains('brands--open')) {
    this.innerText = 'Скрыть';
  }
  else{
    this.innerText = 'Показать все';
  }
};

const showMoreTechnic = function() {
  this.classList.toggle('read-more--hide');
  technicList.classList.toggle('brands--open');
  if (technicList.classList.contains('brands--open')) {
    this.innerText = 'Скрыть';
  }
  else{
    this.innerText = 'Показать все';
  }
};

const showMoreArctile = function() {
  this.classList.toggle('read-more--hide');
  articleText.classList.toggle('article__text-inner--open');
  if (articleText.classList.contains('article__text-inner--open')) {
    this.innerText = 'Скрыть';
  }
  else{
    this.innerText = 'Читать далее';
  }
};


readMoreTechnic.addEventListener('click', showMoreTechnic);

readMoreArticle.addEventListener('click', showMoreArctile);

readMore.addEventListener('click', showMore);



