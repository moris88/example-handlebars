import c from 'ansi-colors'
import concurrently from 'concurrently'

const { log: logger } = console

const { result: run } = concurrently(
    [
        {
            command:
                'npx tailwindcss -i ./src/global.css -o ./public/style.css --watch',
            name: 'watch-tailwindcss',
            prefixColor: 'blue'
        },
        {
            command: 'npx nodemon ./src/index.js --ext hbs,js,css --ignore public/*',
            name: 'nodemon-handlebars',
            prefixColor: 'green'
        },
        {
            command: 'npx nodemon ./server/index.js --ext html,css --ignore src/*',
            name: 'nodemon-server',
            prefixColor: 'yellow'
        }
    ],
    {
        prefix: '[dev]',
        killOthers: ['failure', 'success'],
        restartTries: 3,
        maxProcesses: 4
    }
)

try {
    logger(`
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▀▄░█▀▄▄▀█░▄▄▀██▄██░▄▄████░▄▄▀█░▄▄█▀███▀██
██░█░█░█░██░█░▀▀▄██░▄█▄▄▀████░██░█░▄▄██░▀░███
██░███░██▄▄██▄█▄▄█▄▄▄█▄▄▄████░▀▀░█▄▄▄███▄████
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
`)

    logger(c.bgBlue(c.white('Run dev commands...')))
    run.then(
        () => {
            process.exit(0)
        },
        () => {
            process.exit(1)
        }
    )
} catch (error) {
    logger(error)
    process.exit(1)
}