import {raf} from '../utils/utils'

export function show(el, name) {
  let animate = {
    enter: `${name}-enter`,
    enterActive: `${name}-enter-active`,
    enterTo: `${name}-enter-to`,
  }

  function handler() {
    el.classList.remove(animate.enterActive)
    el.classList.remove(animate.enterTo)
    el.removeEventListener('animationend', handler)
  }

  el.style.display = 'block' 
  el.classList.add(animate.enter)

  raf(function() {
    el.classList.add(animate.enterActive)
    el.classList.add(animate.enterTo)
    el.classList.remove(animate.enter)
  })

  el.addEventListener('animationend', handler)
}
// export function hide(el, name) {
//   let animate = {
//     leave: `${name}-leave`,
//     leaveActive: `${name}-leave-active`,
//     leaveTo: `${name}-leave-to`,
//   }

//   function handler() {
//     el.classList.remove(animate.leaveActive)
//     el.classList.remove(animate.leaveTo)
//     el.removeEventListener('animationend', handler)
//   }

  
//   el.classList.add(animate.leave)

//   raf(function() {
//     el.classList.add(animate.leaveActive)
//     el.classList.add(animate.leaveTo)
//     el.classList.remove(animate.leave)
//     el.style.display = 'none' 
//   })

  
//   el.addEventListener('animationend', handler)
// }

