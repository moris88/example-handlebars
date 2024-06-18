// al caricamento della pagina nascondere due div 
window.addEventListener('load', function () {
    document.getElementById('event-my-1').classList.remove('hidden')
    hiddenMy(1)
})
function hiddenMy(current) {
    switch (current) {
        case 3:
            document.getElementById('event-my-1').classList.add('hidden')
            document.getElementById('event-my-2').classList.add('hidden')
            break
        case 2:
            document.getElementById('event-my-1').classList.add('hidden')
            document.getElementById('event-my-3').classList.add('hidden')
            break
        case 1:
            document.getElementById('event-my-2').classList.add('hidden')
            document.getElementById('event-my-3').classList.add('hidden')
            break
    }
}
function prevMy(e) {
    e.stopPropagation()
    const pagination = document.getElementById('pagination-my')
    let current = parseInt(pagination.value)

    if (current > 1) {
        pagination.value = current - 1
        document.getElementById(`event-my-${current - 1}`).classList.remove('hidden')
        hiddenMy(current - 1)
    }
}
function nextMy(e) {
    e.stopPropagation()
    const pagination = document.getElementById('pagination-my')
    let current = parseInt(pagination.value)
    if (current < 3) {
        pagination.value = current + 1
        document.getElementById(`event-my-${current + 1}`).classList.remove('hidden')
        hiddenMy(current + 1)
    }
}
// al caricamento della pagina nascondere due div 
window.addEventListener('load', function () {
    document.getElementById('event-recommended-1').classList.remove('hidden')
    hiddenRecommended(1)
})
function hiddenRecommended(current) {
    switch (current) {
        case 3:
            document.getElementById('event-recommended-1').classList.add('hidden')
            document.getElementById('event-recommended-2').classList.add('hidden')
            break
        case 2:
            document.getElementById('event-recommended-1').classList.add('hidden')
            document.getElementById('event-recommended-3').classList.add('hidden')
            break
        case 1:
            document.getElementById('event-recommended-2').classList.add('hidden')
            document.getElementById('event-recommended-3').classList.add('hidden')
            break
    }
}
function prevRecommended(e) {
    e.stopPropagation()
    const pagination = document.getElementById('pagination-racommended')
    let current = parseInt(pagination.value)

    if (current > 1) {
        pagination.value = current - 1
        document.getElementById(`event-recommended-${current - 1}`).classList.remove('hidden')
        hiddenRecommended(current - 1)
    }
}
function nextRecommended(e) {
    e.stopPropagation()
    const pagination = document.getElementById('pagination-racommended')
    let current = parseInt(pagination.value)
    if (current < 3) {
        pagination.value = current + 1
        document.getElementById(`event-recommended-${current + 1}`).classList.remove('hidden')
        hiddenRecommended(current + 1)
    }
}