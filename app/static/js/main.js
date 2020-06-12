import Swiper from 'swiper';
import { styleManager } from './modules/styleManager'
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
const SPEEDSLIDE = 700

const currentModelSlide = document.querySelector('.current-model__slider')
const currentModelItem = document.querySelectorAll('.current-model-item')
const homePage = document.querySelector('#home')

const modelItem = Array.from(document.querySelectorAll('.model-item'))
const modelListLi = Array.from(document.getElementsByClassName('model-list')).reduce((acc, el) => acc.concat(...el.children), [])

const modelPage = document.querySelector('.model-page')
const modelPage0000 = document.querySelector('.model-page-0000')
const seeLink = document.querySelector('.see-link')

const jsAboutDescr = document.querySelectorAll('.js-about-descr')

// fourth-design
const jsPortfolioModel0003Gallery = document.querySelector('#js-portfolio-model-0003__gallery')

let currentModelSlideSwiper
const configSwiper = {
  navigation: {
    nextEl: '.current-model__arrow-next',
    prevEl: '.current-model__arrow-prev',
  },
  speed: SPEEDSLIDE,
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

const arrAnimationArrow = [modelItem, modelListLi]

// ========================================= Mobile ==================================

isNull(modelPage, () => {
  // ------------------------------------------ WHEEl -------------------
  window.addEventListener('wheel', onWheel)

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    currentModelItem.forEach(el => {
      el.addEventListener('scroll', mobileScroll)
    })
  }


  function onWheel(e) {
    if (currentModelSlideSwiper.isBeginning || currentModelSlideSwiper.isEnd) {
      removeEventListener('wheel', mobileScroll)
    }
    if (e.deltaY >= 0) {
      currentModelSlideSwiper.slideNext(SPEEDSLIDE, false)
    } else {
      currentModelSlideSwiper.slidePrev(SPEEDSLIDE, false)
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
      currentModelSlideSwiper.slideNext(SPEEDSLIDE, false)

    } else if (this.scrollTop === 0) {
      currentModelSlideSwiper.slidePrev(SPEEDSLIDE, false)
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
})


// ================================================== ModelList ===========================================
isNull(document.querySelector('.about-model-list'), () => {
  const aboutModelListItem = Array.from(document.querySelector('.about-model-list').children)

  aboutModelListItem.forEach((el, index) => {
    let paddingNumber = +el.textContent.match(/\d+/g).join('')

    if (index === 0) {
      el.style.paddingLeft = `${paddingNumber = 110}px`
    }
    el.style.paddingLeft = `${paddingNumber > 170 ? paddingNumber - 30 : paddingNumber}px`

    styleManager.add(`li.about-model-list__item:nth-child(${++index})::before`, `width:${paddingNumber > 170 ? paddingNumber - 40 : paddingNumber - 10}px`)
  })
})
// ==================================================== AnimationArrow =====================================

arrAnimationArrow.forEach(parent => {
  isNull(parent, () => {
    parent.forEach(el => {
      const cssRules = Array.from(document.styleSheets[2].cssRules)
      let beforeFlag = el.className === 'model-item'

      el.addEventListener('mouseenter', arrowAnimationMouseenter)

      el.addEventListener('mouseleave', arrowAnimationMouseleave)


      function arrowAnimationMouseenter(e) {
        cssRules.length = 0
        // beforeFlag ? el.classList.add('slideXBefore') : el.classList.add('slideX')
        styleManager.add(`[data-animation_arrow_id="${e.target.dataset.animation_arrow_id}"]${beforeFlag ? '::before' : ''}`, 'animation: slideX 0.5s ease-out forwards;')
      }

      function arrowAnimationMouseleave(e) {
        // beforeFlag ? el.classList.remove('slideXBefore') : el.classList.remove('slideX')
        styleManager.add(`[data-animation_arrow_id="${e.target.dataset.animation_arrow_id}"]${beforeFlag ? '::before' : ''}`, 'animation: reverseSlideX 0.3s ease-out;')
      }
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        el.removeEventListener('mouseenter', arrowAnimationMouseenter)
        el.removeEventListener('mouseleave', arrowAnimationMouseleave)
      }
    })
  })
})


// =================================================== AnimationSeeLink ===========================


if (homePage) {
  seeLink.classList.remove('see-link--open')
  seeLink.classList.add('see-link--close')
} else {
  seeLink.classList.remove('see-link--close')
  seeLink.classList.add('see-link--open')
}



