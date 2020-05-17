import '../../node_modules/swiper/css/swiper.min.css';
import Swiper from 'swiper';
import "../style/about.css";

const swiper = new Swiper('.swiper-container', {
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

    768: {
      slidesPerView: 2,
      spaceBetween: 8
    },

    1440: {
      slidesPerView: 4,
      spaceBetween: 16
    }
  }
})