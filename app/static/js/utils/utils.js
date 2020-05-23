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