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
import { isNull, limitationsSymbols, raf } from './utils/utils'
const speedSlide = 700

const currentModelSlide = document.querySelector('.current-model__slider')
const currentModelItem = document.querySelectorAll('.current-model-item')
const homePage = document.querySelector('#home')

const modelPage = document.querySelector('.model-page')
const modelPage0000 = document.querySelector('.model-page-0000')

const jsAboutDescr = document.querySelectorAll('.js-about-descr')

// fourth-design
const jsPortfolioModel0003Gallery = document.querySelector('#js-portfolio-model-0003__gallery')

let currentModelSlideSwiper
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
  allowTouchMove: false
}

isNull(currentModelSlide, () => {
  currentModelSlideSwiper = new Swiper(currentModelSlide, configSwiper)
  currentModelSlideSwiper.on('slideChange', function () {
    let regExp = /\s(model-page--vertical|model-page--horizontal|model-page--horizontal-mode-1|model-page--horizontal-mode-2)$/gi
    modelPage.className = modelPage.className.replace(regExp, '')
    switch (this.realIndex) {
      case 0: return modelPage.classList.add('model-page--vertical')
      case 1: return modelPage.classList.add('model-page--horizontal')
      case 2: return modelPage.classList.add('model-page--horizontal-mode-1')
      case 3: return modelPage.classList.add('model-page--horizontal-mode-2')
    }
  })
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
  // Mobile
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    currentModelItem.forEach(el => {
      el.addEventListener('scroll', mobileScroll)
    })
  }
})

function onWheel(e) {
  if (currentModelSlideSwiper.isBeginning || currentModelSlideSwiper.isEnd) {
    removeEventListener('wheel', mobileScroll)
  }
  if (e.deltaY >= 0) {
    currentModelSlideSwiper.slideNext(speedSlide, false)
  } else {
    currentModelSlideSwiper.slidePrev(speedSlide, false)
  }

  removeEventListener('wheel', onWheel)
  setTimeout(() => {
    window.addEventListener('wheel', onWheel)
  }, 1000)
}
// BUG
// HAVE SMALL PROBLEM WITH SCROLL MOBILE
// WHEN I SWIPE SLIDE AFTER SWITCHING SLIDER MUST WAIT SCROLL EVENT 
// BUT I CANT ADD LISTENER SWIPE BECAUSE ITS HAVE WORK FOR ALL 
// AND I DONT KNOW HOW RESOLVE ITS PROBLEM 
function mobileScroll() {
  if (currentModelSlideSwiper.isBeginning || currentModelSlideSwiper.isEnd) {
    removeEventListener('scroll', mobileScroll)
  }
  if (this.scrollTop >= this.scrollHeight - this.clientHeight) {
    currentModelSlideSwiper.slideNext(speedSlide, false)

  } else if (this.scrollTop === 0) {
    currentModelSlideSwiper.slidePrev(speedSlide, false)
  }
}
// TODO modalHelper on space
window.addEventListener('keydown', (e) => {
  e.preventDefault()
  if (e.code === 'Space' && e.repeat) {
    removeEventListener('wheel', onWheel)
  }
})

window.addEventListener('keyup', (e) => {
  e.preventDefault()
  if (e.code === 'Space') {
    alert('DOING MODAL HELPER')
    window.addEventListener('wheel', onWheel)
  }
})






