import $ from '../base'
import _createModal from './private/_createModal'




export default $.modal = function(options) {
  const $modal = _createModal(options)
  const $overlay = document.querySelector('.modal-overlay')
  let closing = false
  const _modalHandleAnimationClose = () => {
    $modal.classList.remove('modal--hide')
    removeEventListener('transitionend', _modalHandleAnimationClose )
    closing = true
  }
  
  $overlay.addEventListener('click', function() {
    event.stopPropagation()
    // $.modal().close()
  })



  return {
    open() {
      !closing && $modal.classList.add('modal--open')
    },
    close() {
      closing = true
      $modal.classList.remove('modal--open')
      $modal.classList.add('modal--hide')
      document.querySelector('.modal').addEventListener('transitionend', _modalHandleAnimationClose)
    },
    
    destroy() {

    }
  }
}

