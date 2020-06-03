import Swiper from 'swiper';
import { 
  mediaWidthLess1120, 
  mediaWidthLess815, 
  mediaWidthLess600, 
  mediaWidthMore1120, 
  mediaWidthMore815,
  mediaWidthMore600 
} from './modules/breakpoints'
// import onWheel from './modules/onWheel'
import { isNull, limitationsSymbols } from './utils/utils'
const speedSlide = 700

const currentModel = document.querySelector('.current-model__slider')
const homePage = document.querySelector('#home')

const modelPage = document.querySelector('.model-page')
const modelPage0000 = document.querySelector('.model-page-0000')

const jsAboutDescr = document.querySelectorAll('.js-about-descr')

// fourth-design
const jsPortfolioModel0003Gallery = document.querySelector('#js-portfolio-model-0003__gallery')

let currentModelSwiper
const configSwiper = {
  navigation: {
    nextEl: '.current-model__arrow-next',
    prevEl: '.current-model__arrow-prev',
  },
  speed: speedSlide,
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
  keyboard: true,
  // allowTouchMove: false
  allowTouchMove: false
}

isNull(currentModel, () => {
  currentModelSwiper = new Swiper(currentModel, configSwiper)
})



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


// ========================================= WHEEL ==================================

isNull(modelPage, () => {
  window.addEventListener('wheel', onWheel)
})

function onWheel(e) {

  if (e.deltaY >= 0) {
      currentModelSwiper.slideNext(speedSlide, false)
  } else {
    currentModelSwiper.slidePrev(speedSlide, false)
  }

  removeEventListener('wheel', onWheel)
  setTimeout(() => {
    window.addEventListener('wheel', onWheel)
  }, 1000)
}
// TODO modalHelper on space
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space' || e.repeat) {
    removeEventListener('wheel', onWheel)
  }
})

window.addEventListener('keyup', (e) => {
  if (e.code === 'Space') {
    alert('DOING MODAL HELPER')
    window.addEventListener('wheel', onWheel)
  }
})
// FUTURE work with touchscreen
let timerTouch
window.addEventListener('touchstart', function(e) {
  timerTouch = setTimeout(() => {
    // currentModelSwiper.destroy()
   
    // currentModelSwiper.destroy()
    // currentModelSwiper = new Swiper(currentModel, configSwiper)
    // currentModelSwiper.init()
    // console.log(configSwiper)
  }, 800)
  
}) 
window.addEventListener('touchmove', () => {
  clearTimeout(timerTouch)
})
window.addEventListener('touchend', () => {
  clearTimeout(timerTouch)
})