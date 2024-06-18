document.addEventListener('DOMContentLoaded', function () {
    let index = 0
    const intervalTime = 3000
    let interval = setInterval(showNextItem, intervalTime)

    const itemCarousel = document.querySelector('.items-carousel')
    const items = Array.from(itemCarousel.children)
    const prevBtn = document.getElementById('prevBtn')
    const nextBtn = document.getElementById('nextBtn')

    function showItem(indexToShow) {
        items.forEach((item, i) => {
            item.classList.toggle('carousel-show', i === indexToShow)
            item.classList.toggle('carousel-hidden', i !== indexToShow)
        })
    }

    function showNextItem() {
        index = (index + 1) % items.length
        showItem(index)
    }

    function showPrevItem() {
        index = (index - 1 + items.length) % items.length
        showItem(index)
    }

    prevBtn.addEventListener('click', () => {
        clearInterval(interval)
        showPrevItem()
        interval = setInterval(showNextItem, intervalTime)
    })

    nextBtn.addEventListener('click', () => {
        clearInterval(interval)
        showNextItem()
        interval = setInterval(showNextItem, intervalTime)
    })

    showItem(index)
})

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

window.addEventListener('load', function () {
    const track = document.querySelector('.carousel-track')
    const items = Array.from(track.children)
    const itemWidth = items[0].getBoundingClientRect().width

    let currentIndex = 0

    // Set initial position of each item
    items.forEach((item, index) => {
        item.style.left = itemWidth * index + 'px'
    })

    function moveToNext() {
        // Move to the next item
        currentIndex++
        track.style.transform = `translateX(-${itemWidth * currentIndex}px)`

        // Reset the position when reaching the end
        if (currentIndex >= items.length) {
            currentIndex = 0
            track.style.transition = 'none'
            track.style.transform = 'translateX(0)'
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease-in-out'
            }, 0)
        }
    }

    // Move to the next item every 2 seconds
    setInterval(moveToNext, 2000)
})