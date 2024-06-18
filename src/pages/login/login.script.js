const form = document.getElementById('form-login')
function handleForm(event) {
    event.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    login(email, password)
}
form.addEventListener('submit', handleForm)

// TEST
async function login(email, password) {
    const token = localStorage.getItem('token')
    if (token) {
        window.location.href = '/'
        return
    }
    // test login
    await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then(res => res.json()).then(data => {
        if (data.message === 'SUCCESS') {
            localStorage.setItem('token', 'token')
            window.location.href = '/'
        } else {
            window.alert(data.error || 'Errore durante il login!!!')
        }
    })
}