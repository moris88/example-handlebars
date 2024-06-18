// insert javascript code here
function onclickGruppo(event, gruppo) {
    event.preventDefault()
    const participate = gruppo.subscriber === 'partecipante' ? true : false
    const isLoading = gruppo.subscriber === 'in attesa' ? true : false
    window.location.href = `/directory/gruppi/1?participate=${participate}&isLoading=${isLoading}`
}

function partecipa(event) {
    event.stopPropagation()
    alert('Partecipa')
}