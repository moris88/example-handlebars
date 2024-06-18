function multiautocompleteSearch(event, parentElement) {
    event.preventDefault()
    document.querySelector(`#${parentElement}`).classList.remove('noshow')
    document.querySelector(`#${parentElement}`).classList.add('show')
    const item = document.querySelector(`#${parentElement}-multiautocomplete-input`).value
    if (item === '') return
    document.querySelectorAll(`.${parentElement}-multiautocomplete-element`).forEach(element => {
        if (!element.textContent.toLocaleLowerCase().trim().includes(item.toLocaleLowerCase().trim())) {
            element.classList.add('!hidden')
        } else {
            if (element.classList.contains('!hidden'))
                element.classList.remove('!hidden')
        }
    })
}
function multiautocompleteSearchClick(event, parentElement, item, classname) {
    event.preventDefault()
    const parent = document.querySelector(`#${parentElement}-multiautocomplete-input`)
    parent.value = item

    if (item === '') return

    let sanitizedItem = item.toLocaleLowerCase().trim().replace(/[ ,.()]/g, '')
    if (/^\d/.test(sanitizedItem)) {
        sanitizedItem = 'item' + sanitizedItem
    }

    const filter = document.querySelector('#list-filters')
    if (filter.children.length > 0) {
        const isDuplicate = Array.from(filter.children).some(child => child.outerText === item)
        if (isDuplicate) {
            const element = document.querySelector(`#${sanitizedItem}`)
            filter.removeChild(element)
            return
        }
    }
    filter.innerHTML += `
    <li class="${classname}" id=${sanitizedItem} onclick="deleteFilter('${sanitizedItem}')">
        ${item}
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-x-lg" viewBox="0 0 16 16">
                <path
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
        </span>
    </li>
    `

    const children = document.querySelectorAll(`.${parentElement}-multiautocomplete-element`)
    children.forEach(element => {
        if (element.outerText === item) {
            const checkedElement = element.querySelector('input')
            console.log(checkedElement)
            checkedElement.checked = !checkedElement.checked
        }
    })
}

function deleteFilter(item) {
    const filter = document.querySelector('#list-filters')
    const element = document.querySelector(`#${item}`)
    filter.removeChild(element)
}

document.addEventListener('click', function (event) {
    if (!event.target.closest('.multiautocomplete-content') && !event.target.closest('.multiautocomplete-element') && !event.target.closest('.multiautocomplete-input')) {
        const contents = document.querySelectorAll('.multiautocomplete-content')
        contents.forEach(content => {
            content.classList.remove('show')
            content.classList.add('noshow')
        })
    }
})
