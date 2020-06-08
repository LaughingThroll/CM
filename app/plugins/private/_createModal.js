export default function _createModal(options) {
  const modal = document.createElement('div')
  modal.classList.add('modal')
  modal.insertAdjacentHTML('afterbegin', `
  <div class="modal-overlay"> 
    <div class="modal-window">
      <div class="modal-header">
        <div class="modal-header__title">
          My Title 
        </div>
        <div class="modal-header__close">&times;</div>
      </div>
      <div class="modal-body">

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corporis ut blanditiis. Est, voluptate quibusdam quidem aliquid perferendis similique error porro iste assumenda eius aperiam expedita maxime, eveniet nesciunt cum? Nulla non hic, ipsum ipsam porro possimus nam inventore quam eum in. Qui accusamus laudantium quasi, incidunt nostrum magni est.</p>

      </div>
      <div class="modal-footer">
        <button class="btn btn--succses modal-footer__btn">Ok</button>
        <button class="btn btn--cancel modal-footer__btn">Cancel</button>
      </div>
    </div> 
    </div>
  `)
  document.body.appendChild(modal)
  return modal
}