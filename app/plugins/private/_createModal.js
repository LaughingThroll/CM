function noop() {}

function _createModalFooter(buttons = []) {
  if (buttons.length === 0) {
    return document.createElement('div')
  }
  const wrap = document.createElement('div')
  wrap.classList.add('modal-footer')

  buttons.forEach(btn => {
    const $btn = document.createElement('button')
    $btn.textContent = btn.text
    $btn.setAttribute('class', `${btn.className}`)
    $btn.onclick = btn.handler || noop
    wrap.appendChild($btn)
  })


  return wrap
}

export default function _createModal(options) {
  const modal = document.createElement('div')
  modal.classList.add('modal')
  modal.insertAdjacentHTML('afterbegin', `
  <div class="modal-overlay"> 
    <div class="modal-window">
      <div class="modal-header">
        <div class="modal-header__title">
          ${options.title || 'title'} 
        </div>
        ${ options.closable ? ' <div class="modal-header__close"></div>' : ''}
      </div>
      <div class="modal-body">

        <p>${options.content || 'Empty content'}</p>

      </div>
    
    </div> 
    </div>
  `)
  const footer = _createModalFooter(options.footerButtons)
  
  modal.querySelector('.modal-body').insertAdjacentElement('afterend', footer)
  document.body.appendChild(modal)
  return modal
}
