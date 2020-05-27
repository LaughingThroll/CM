import Swiper from 'swiper';
import { mediaWidthLess815, mediaWidthMore815, mediaWidthLess1120, mediaWidthMore1120 } from './modules/breakpoints'
import { isNull } from './utils/utils'

const currentModel = document.querySelector('.current-model__slider')
const homePage = document.querySelector('#home')


const modelPage0000 = document.querySelector('.model-page-0000')

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
  spaceBetween: 300,
}

isNull(currentModel, () => new Swiper(currentModel, configSwiper))


// BREAKPOINT - WIDTH
isNull(modelPage0000, () => {
  mediaWidthLess1120()
  window.addEventListener('resize', mediaWidthLess1120)
  window.addEventListener('resize', mediaWidthMore1120)
})

isNull(homePage, () => {
  mediaWidthLess815()
  window.addEventListener('resize', mediaWidthLess815)
  window.addEventListener('resize', mediaWidthMore815)
})


// FUTURE work with touchscreen
window.addEventListener('touchstart', function(e) {
  
  
}) 

window.addEventListener('touchmove', function(e) {
  // console.log(e)
})