import { show } from './animate'
import { wrap } from '../utils/utils'

const modelList = Array.from(document.querySelectorAll('.model-list'))
const headerContainerLive = document.getElementsByClassName('header')[0].children[0].children
const headerContainer = document.getElementsByClassName('header')[0].children[0]
const homePage = document.querySelector('#home')
const mainCollections = document.querySelector('.main-collections')

// LessWidth
export function mediaWidthLess815() {
  const headerInner = document.getElementsByClassName('header__inner')[0]

  if (window.innerWidth <= 815 && headerInner === undefined) {
    wrap(headerContainer, 'div', 'header__inner')

    headerContainerLive[0].insertAdjacentHTML('afterbegin', `
      <div class="header__btn">
      </div>
      `)
      
    mainCollections.insertAdjacentHTML('afterbegin', `<div class="coll-list"></div>` )  

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
// MoreWidth
export function mediaWidthMore815() {
  const collList = document.getElementsByClassName('coll-list')[0]
  const mainCollectionInner = document.getElementsByClassName('main-collections__inner')
  const logo = document.querySelector('.header__logo')

  if (window.innerWidth > 815 && collList !== undefined) {

    Array.from(collList.children).forEach((el, i) => {
      mainCollectionInner[0].children[i].insertAdjacentElement('beforeend', el)
    })

    headerContainer.insertAdjacentElement('beforeend', logo)
    collList.remove()
    document.getElementsByClassName('header__inner')[0].remove()
    

  }

}
