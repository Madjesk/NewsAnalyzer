//Главная
export const MAX_CARDS_IN_ROW = 3;
export const NEWS_API_KEY = '3e58ae54326846cdb22aad6b526122e5';
export const NEWS_URL = 'https://praktikum.tk/news/v2/everything?'
export const form = document.querySelector('.search__form');
export const input = document.querySelector('.search__input');
export const cardsContainer = document.querySelector('.results__cards-container');
export const resultsContainer = document.querySelector('.results__container');
export const preloader =  document.querySelector('.preloader');
export const error = document.querySelector('.error');
export const empty = document.querySelector('.empty');
export const resultsHeader = document.querySelector('.results__header')
export const buttonMore = document.querySelector('.results__button-more')
export const buttonForm = document.querySelector('.search__button');
export const errorForm = document.querySelector('.search__error');
export const defaultPhoto = 'https://avatars.mds.yandex.net/get-pdb/231404/faf2b8ed-3cc3-4107-b658-7a4da6a9485e/s1200?webp=false';

//О Проекте
export const urlGit = 'https://api.github.com/repos/BarabanovKlim/NewsAnalyzer/commits';
export const commitsContainer = document.querySelector('.swiper-wrapper');
export const options = {
    direction: 'horizontal',
    centeredSlides: true,
    loop: true,
    speed: 200,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      625: {
        slidesPerView: 2,
        spaceBetween: 10
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 16
      },
  
      950: {
        slidesPerView: 3,
        spaceBetween: 10
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 10
      },

      1440: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    }
  }

//Аналитика
export const request = document.querySelector('.request__word');
export const requestsPerWeek = document.querySelector('.request__total');  
export const headlinesMentions = document.querySelector('.request__mentions'); 
export const mounth = document.querySelector('.board__mounth');
export const datesColumn = document.querySelector('.board__dates-column');
export const boardRow = document.querySelector('.board__row');
export const progress = document.querySelector('.board__progress-bar');
export const daysColumn = document.querySelector('.board__days-column');
export const daysOfWeek = document.querySelector('.board__day');
export const progressColumn = document.querySelector('.board__progress-bar');