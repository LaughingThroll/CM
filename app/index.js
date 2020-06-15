import modal from './plugins/modal'


const myModal = modal({
  title: 'string',
  footerButtons: [
    {
      text: 'Ok', 
      className: 'btn btn--succses modal-footer__btn', 
      handler() {
        console.log('Yeaaa')
      }
    },
  ]
 
})

const btnCreate = document.querySelector('.btn-create')
const btnDestroy = document.querySelector('.btn-destroy')

btnCreate.addEventListener('click', function() {
  myModal.open()
})

btnDestroy.addEventListener('click', () => {
  myModal.destroy()
})

// myModal.onOpen(() => {
//   console.log('Start')
// })

// myModal.onClose(() => {
//   console.log('Final')
// })


