import Swiper from 'swiper';
import { isNull, wrap } from './utils/utils'

const currentModel = document.querySelector('.current-model__slider')
const modelList = Array.from(document.querySelectorAll('.model-list'))
const headerContainerLive = document.getElementsByClassName('header')[0].children[0].children
const headerContainer = document.getElementsByClassName('header')[0].children[0]
const homePage = document.querySelector('#home')

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
// BREAKPOINT - WIDTH

isNull(homePage, () => {

  

  window.addEventListener('resize', () => {

    const headerInner = document.getElementsByClassName('header__inner')[0]

    if (window.innerWidth <= 815 && headerInner === undefined) {
      wrap(headerContainer, 'div', 'header__inner')
      
      headerContainerLive[0].insertAdjacentHTML('afterbegin', `
      <div class="header__btn">
      </div>
      <div class="coll-list"></div>
      `)

      const collList = document.getElementsByClassName('coll-list')[0]
      modelList.forEach(el => {
        collList.insertAdjacentElement('afterbegin', el)
      })
      const headerMenu = document.getElementsByClassName('header__btn')[0]
      headerMenu.addEventListener('click', function() {
        this.classList.toggle('header__btn--active')
        collList.classList.toggle('coll-list--active')
      })
    }
  })

  window.addEventListener('resize', () => {

    const collList = document.getElementsByClassName('coll-list')[0]
    const mainCollectionInner = document.getElementsByClassName('main-collections__inner')
    const logo = document.querySelector('.header__logo')

    if (window.innerWidth > 815 && collList !== undefined) {

      Array.from(collList.children).forEach((el, i) => {
        mainCollectionInner[0].children[i].insertAdjacentElement('beforeend', el)
      })
      
      headerContainer.insertAdjacentElement('beforeend', logo)
      document.getElementsByClassName('header__inner')[0].remove()

    }

  })


})
