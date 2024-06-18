// insert javascript code here
function openModal() {
    document.querySelector('#content-modal').classList.add('show-modal')
    document.querySelector('#backdrop-modal').classList.remove('modal-deactive')
    document.querySelector('#backdrop-modal').classList.add('modal-active')
}
function closeModal() {
    document.querySelector('#content-modal').classList.remove('show')
    document.querySelector('#backdrop-modal').classList.add('modal-deactive')
    document.querySelector('#backdrop-modal').classList.remove('modal-active')
}
