import $ from '../base'
import _createModal from './private/_createModal'


export default $.modal = function (options) {
  const $modal = _createModal(options)
  const $modalWindow = document.querySelector('.modal-window')
  const $modalBody = document.querySelector('.modal-body')

  let closing = false
  let destroy = false

  const modal = {
    open() {
      if (destroy) {
        return console.log('Destroyed')
      }
      !closing && $modal.classList.add('modal--open')
    },
    close() {
      closing = true
      $modal.classList.remove('modal--open')
      $modal.classList.add('modal--hide')
      $modal.addEventListener('transitionend', _modalHandleAnimationClose)
    },

  
  }

  function _modalHandleAnimationClose () {
    $modal.classList.remove('modal--hide')

    if (typeof options.onClose === 'function') {
      options.onClose()
    }

    removeEventListener('transitionend', _modalHandleAnimationClose)
    closing = false
  }

  const _closeEventListeners = (e) => {
    if (e.target.classList.contains('modal-overlay') ||
      e.target.classList.contains('modal-header__close') ||
      e.target.classList.contains('btn')) {
      modal.close()
    }
    e.stopPropagation()
  }

  $modal.addEventListener('click', _closeEventListeners)

  $modalWindow.style.width = options.width || '400px'




  return Object.assign(modal, {
    destroy() {
      
      $modal.removeEventListener('click', _closeEventListeners)
      $modal.remove()
      destroy = true
    },
    setContent(html) {
      $modalBody.innerHTML = html
    },
  })
}

