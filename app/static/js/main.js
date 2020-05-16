import Swiper from 'swiper';
import {isNull} from './utils/isNull' 

const currentModel = document.querySelector('.current-model__slider')
const configSwiper = {
  navigation: {
    nextEl: '.current-model__arrow-next',
    prevEl: '.current-model__arrow-prev',
  },
  pagination: {
    el: '.current-model__pagination',
    bulletClass: 'current-model__pagination-dot',
    clickable: true,
    renderBullet(index) {
      return `<button class="current-model__pagination-dot">0${index + 1}</button>`;
    },
    bulletActiveClass: 'current-model__pagination-dot--active'
  },
  direction: 'vertical',
  spaceBetween: 150,	
}

isNull(currentModel, () => new Swiper(currentModel, configSwiper))

