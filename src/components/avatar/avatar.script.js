function openMenuAvatar() {
    const menu = document.querySelector('#dropdown-menu-id')
    // aggiungi classe per mostrare il menu
    menu.classList.remove('opacity-0', 'invisible', '-translate-y-2', 'scale-95')
    menu.classList.add('opacity-100', 'visible', 'translate-y-0', 'scale-100')

    const icon = document.querySelector('.dropdown-navbar-icon-avatar')
    icon.classList.add('turntop')

    // se tocco fuori dal pulsante chiudi il menu
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.dropdown-navbar-avatar')) {
            menu.classList.remove('opacity-100', 'visible', 'translate-y-0', 'scale-100')
            menu.classList.add('opacity-0', 'invisible', '-translate-y-2', 'scale-95')
            icon.classList.remove('turntop')
        }
    })
}

// TEST
function logout() {
    // test logout
    fetch('http://localhost:3001/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        if (data.message === 'SUCCESS') {
            if (localStorage.getItem('token')) {
                localStorage.removeItem('token')
            }
            window.location.href = '/external'
        }
    })
}