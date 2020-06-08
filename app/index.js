import modal from './plugins/modal'


const myModal = modal()
// myModal.open()
const btn = document.querySelector('.btn')
btn.addEventListener('click', function() {
  myModal.open()
})
