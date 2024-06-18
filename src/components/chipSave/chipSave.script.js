/*insert javacript code*/
function save(event) {
    event.stopPropagation()
    event.preventDefault()
    let parentElement = null
    const dataSetParent = event.target.getAttribute('data-set') || ''
    if (dataSetParent === 'save-button') {
        parentElement = event.target
    }
    if (dataSetParent === 'save-icon' || dataSetParent === 'save-text') {
        parentElement = event.target.parentElement
    }
    if (parentElement === null) return
    if (parentElement.classList.contains('text-primary') && parentElement.classList.contains('border-primary')) {
        parentElement.classList.remove('text-primary')
        parentElement.classList.remove('border-primary')
        parentElement.classList.remove('hover:bg-red-50')
        parentElement.classList.add('hover:text-primary')
        parentElement.classList.add('hover:border-primary')
        parentElement.classList.add('text-black')
        parentElement.classList.add('border-black')
    } else {
        parentElement.classList.add('text-primary')
        parentElement.classList.add('border-primary')
        parentElement.classList.add('hover:bg-red-50')
        parentElement.classList.remove('hover:text-primary')
        parentElement.classList.remove('hover:border-primary')
        parentElement.classList.remove('text-black')
        parentElement.classList.remove('border-black')
    }
    const childNodes = parentElement.childNodes

    childNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const dataSet = node.getAttribute('data-set') || ''
            if (dataSet === 'save-icon') {
                if (node.classList.contains('text-primary')) {
                    node.setAttribute('fill', 'none')
                    node.setAttribute('stroke', 'currentColor')
                    node.classList.remove('text-primary')
                    node.classList.add('text-black')
                } else {
                    node.setAttribute('fill', 'currentColor')
                    node.setAttribute('stroke', 'none')
                    node.classList.add('text-primary')
                    node.classList.remove('text-black')
                }
            }
            if (dataSet === 'save-text') {
                if (node.textContent === 'Salva') {
                    node.textContent = 'Salvato'
                } else {
                    node.textContent = 'Salva'
                }
            }
        }
    })
}
