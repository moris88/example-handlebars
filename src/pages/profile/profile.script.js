function toggleDropdown(nameDropdawn) {
    var dropdownContent = document.getElementById(nameDropdawn)
    dropdownContent.classList.toggle('show')
}

// Chiudi il dropdown se si fa clic fuori da esso
/*
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
*/

function editProfile() {
    document.querySelector('#content-modal').classList.add('show-modal-edit')
    document.querySelector('#backdrop-modal').classList.remove('modal-edit-deactive')
    document.querySelector('#backdrop-modal').classList.add('modal-edit-active')
}
function closeEditProfile() {
    document.querySelector('#content-modal').classList.remove('show-modal-edit')
    document.querySelector('#backdrop-modal').classList.add('modal-edit-deactive')
    document.querySelector('#backdrop-modal').classList.remove('modal-edit-active')
}

function sendUpdate(event) {
    event.preventDefault()
    event.stopPropagation()
    const data = {}
    event.target.querySelectorAll('textarea').forEach(el => {
        data[el.name] = el.value
    })
    event.target.querySelectorAll('input').forEach(input => {
        data[input.name] = input.type === 'radio' || input.type === 'checkbox' ? input.checked : input.value 
    })
    console.log(data)
    fetch('/profile/1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => {
        alert(`Update sent ${JSON.stringify(data)}`)
    }).catch(error => {
        alert(`Error ${JSON.stringify(error)}`)
    }).finally(() => {
        closeEditProfile()
    })
}