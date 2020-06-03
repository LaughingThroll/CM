import { show } from './animate'
import { wrap, isNull } from '../utils/utils'
// index
const modelList = Array.from(document.querySelectorAll('.model-list'))
const headerContainerLive = document.getElementsByClassName('header')[0].children[0].children
const headerContainer = document.getElementsByClassName('header')[0].children[0]
const homePage = document.querySelector('#home')
const mainCollections = document.querySelector('.main-collections')

// first-design
const endModelContacts = document.querySelector('.end-model__contacts')
const endModelImage = document.querySelector('.end-model__image')

// fourth-design
const jsPortfolioModel0003Gallery = document.getElementById('js-portfolio-model-0003__gallery') 

const portfolioModel0003GalleryOne = document.querySelector('.portfolio-model-0003__gallery-one')


// LessWidth 
export function mediaWidthLess1120() {
  if (window.innerWidth <= 1120) {
    endModelContacts.insertAdjacentElement('beforeend', endModelImage)
  }
}
export function mediaWidthLess815() {
  const headerInner = document.getElementsByClassName('header__inner')[0]

  if (window.innerWidth <= 815 && headerInner === undefined) {
    wrap(headerContainer, 'div', 'header__inner')

    headerContainerLive[0].insertAdjacentHTML('afterbegin', `
      <div class="header__btn">
      </div>
      `)

    mainCollections.insertAdjacentHTML('afterbegin', `<div class="coll-list"></div>`)

    const collList = document.getElementsByClassName('coll-list')[0]
    modelList.forEach(el => {
      
      collList.insertAdjacentElement('afterbegin', el)
    })
    // animation collList
    const headerMenu = document.getElementsByClassName('header__btn')[0]
    headerMenu.addEventListener('click', function () {

      this.classList.toggle('header__btn--active')
      collList.classList.toggle('coll-list--active')

      if (collList.classList.contains('coll-list--active')) {

        modelList.forEach(el => show(el, 'translate'))

        homePage.style.overflow = 'hidden'

      } else {
        homePage.style.overflow = 'scroll'
      }
    })
  }
}

export function mediaWidthLess600() {
  
  const jsPortfolioModel0003GalleryImg = Array.from(document.getElementById('js-portfolio-model-0003__gallery').children) 
  
  if(window.innerWidth <= 600 && jsPortfolioModel0003GalleryImg.length !== 0) {    
      jsPortfolioModel0003GalleryImg.forEach(img => portfolioModel0003GalleryOne.insertAdjacentElement('afterbegin', img))
      
  }
}

// MoreWidth
export function mediaWidthMore1120() {
  if (window.innerWidth > 1120) {
    endModelContacts.insertAdjacentElement('beforebegin', endModelImage)
  }
}

export function mediaWidthMore815() {
  const collList = document.getElementsByClassName('coll-list')[0]
  const mainCollectionInner = document.getElementsByClassName('main-collections__inner')
  const logo = document.querySelector('.header__logo')

  if (window.innerWidth > 815 && collList !== undefined) {

    Array.from(collList.children).reverse().forEach((el, i) => {
      mainCollectionInner[0].children[i].insertAdjacentElement(i === 0 ? 'beforeend' : 'afterbegin', el)
    })

    headerContainer.insertAdjacentElement('beforeend', logo)
    collList.remove()
    document.getElementsByClassName('header__inner')[0].remove()
  }
}

export function mediaWidthMore600() {
  

  if(window.innerWidth > 600 && jsPortfolioModel0003Gallery.children.length !== 4) {

    Array.from(portfolioModel0003GalleryOne.children).forEach((img, i) => {
      if (i < 4) {
        jsPortfolioModel0003Gallery.insertAdjacentElement('afterbegin', img)
      } 
      
    })
  }
}





