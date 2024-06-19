const { log, error } = console

try {
    const express = require('express')
    const path = require('path')
    const bodyParser = require('body-parser')
    const app = express()

    const url = 'http://localhost'
    const port = 3002

    log('--> Start Server...')

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(express.static(path.join(__dirname, '../public')))

    app.post('/login', (req, res) => {
        if (!req?.body) {
            log('login ERROR!!!')
            res.status(400).json({ message: 'ERROR', error: 'Email o Password mancanti...' })
            return
        }
        const { email, password } = req.body
        if (!email || !password) {
            log('login ERROR!!!')
            res.status(400).json({ message: 'ERROR', error: 'Email o Password mancanti...' })
            return
        }
        log('login SUCCESS!!!')
        res.status(200).json({ message: 'SUCCESS' })
    })

    app.get('/login', (_, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/login' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.post('/logout', (_, res) => {
        log('logout SUCCESS!!!')
        res.status(200).json({ message: 'SUCCESS' })
    })

    app.get('/', (_, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/home' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.get('/external', (_, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/home_no_login' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.get('/news', (_, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/news' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.get('/news/:id', (_, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/single_news' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.get('/events', (_, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/events' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.get('/events/:id', (_, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/event' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.get('/events/my/all', (_, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/events_all' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.get('/events/my/recommended', (_, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/events_all' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.get('/news/:id', (_, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/single_news' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.get('/profile/:id', (req, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/profile' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.post('/profile/:id', (req, res) => {
        if (!req?.body) {
            log('profile ERROR!!!')
            res.status(400).json({ message: 'ERROR', error: 'Dati mancanti...' })
        }
        const { description, city, phone, email, email2, freelance, role, share, employed } = req.body
        log({ description, city, phone, email, email2, freelance, role, share, employed })
        if (!email) {
            log('profile ERROR!!!')
            res.status(400).json({ message: 'ERROR', error: 'Dati mancanti...' })
        } else {
            log('profile SUCCESS!!!')
            res.status(200).json({ message: 'SUCCESS', profile: req.body })
        }
    })

    app.get('/profile/:id/events_save', (req, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/profile_events_save' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.get('/profile/:id/events', (req, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/profile_events' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.get('/directory/alumni', (req, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/directory_alumni' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.get('/directory/gruppi', (req, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/directory_gruppi' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.get('/directory/gruppi/all/my', (req, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/directory_gruppi_my' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.get('/directory/gruppi/:id', (req, res) => {
        const { participate, isLoading } = req.query
        if (participate === 'true') {
            res.sendFile('index.html', { root: __dirname + '/../public/pages/directory_gruppo_partecipate' }, (err) => {
                if (err) {
                    error('Error sending file:', err)
                    res.status(err.status || 500).send('Error sending file: ' + err.message)
                }
            })
        } else if (participate === 'false' && isLoading === 'false') {
            res.sendFile('index.html', { root: __dirname + '/../public/pages/directory_gruppo_no_partecipate' }, (err) => {
                if (err) {
                    error('Error sending file:', err)
                    res.status(err.status || 500).send('Error sending file: ' + err.message)
                }
            })
        } else {
            res.sendFile('index.html', { root: __dirname + '/../public/pages/directory_gruppo_loading' }, (err) => {
                if (err) {
                    error('Error sending file:', err)
                    res.status(err.status || 500).send('Error sending file: ' + err.message)
                }
            })
        }
    })

    app.get('/directory/notables', (req, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/directory_notables' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.all('*', (_, res) => {
        res.sendFile('index.html', { root: __dirname + '/../public/pages/page404' }, (err) => {
            if (err) {
                error('Error sending file:', err)
                res.status(err.status || 500).send('Error sending file: ' + err.message)
            }
        })
    })

    app.listen(port, () => {
        log(`--> Server listening on ${url}:${port}`)
    })
} catch (err) {
    error('Error Server:', err)
    process.exit(1)
}