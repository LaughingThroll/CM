export function isNull(el, callback) {
  if (el !== null) {
    callback()
  }
}

export function createElement(el = 'div', attrClass) {
  let div = document.createElement(el)
  div.classList.add(attrClass)
}

const wrap = (target, wrapEl = 'div', className = '') => {
  const wrapper = document.createElement(wrapEl)
  wrapper.classList.add(className)
  Array.from(target.children).forEach(el => wrapper.appendChild(el)) 
  target.appendChild(wrapper)

}
export {wrap}  

export function raf(fn) { 
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      fn()
    })
  })
}

let limitationsSymbols = (el, numSym) => el.textContent = el.textContent.substr(0, numSym)
export {limitationsSymbols}