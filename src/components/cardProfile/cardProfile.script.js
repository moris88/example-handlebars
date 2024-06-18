function logout() {
    // test logout
    fetch('http://localhost:3001/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        if (data.message === 'SUCCESS') {
            window.location.href = '/'
        }
    })
}