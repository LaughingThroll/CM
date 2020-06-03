import Swiper from 'swiper';
import { 
  mediaWidthLess1120, 
  mediaWidthLess815, 
  mediaWidthLess600, 
  mediaWidthMore1120, 
  mediaWidthMore815,
  mediaWidthMore600 
} from './modules/breakpoints'
import { isNull, limitationsSymbols } from './utils/utils'

const currentModel = document.querySelector('.current-model__slider')
const homePage = document.querySelector('#home')


const modelPage0000 = document.querySelector('.model-page-0000')

const jsAboutDescr = document.querySelectorAll('.js-about-descr')

// fourth-design
const jsPortfolioModel0003Gallery = document.querySelector('#js-portfolio-model-0003__gallery')


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

jsAboutDescr.forEach(content => isNull(content, () => limitationsSymbols(content, 400)))


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

isNull(jsPortfolioModel0003Gallery, () => {
  
  mediaWidthLess600()
  window.addEventListener('resize', mediaWidthLess600)
  window.addEventListener('resize', mediaWidthMore600)
})
// FUTURE work with touchscreen
window.addEventListener('touchstart', function(e) {
  
  
}) 

window.addEventListener('touchmove', function(e) {
  // console.log(e)
})