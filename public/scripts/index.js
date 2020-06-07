const modal = document.querySelector('#modal')
const searchBtn = document.querySelector('#page-home main a')
const closeBtn = document.querySelector('#modal a')

searchBtn.addEventListener("click", () => {
  modal.classList.remove('hide')
})

closeBtn.addEventListener('click', () => {
  modal.classList.add('hide')
})