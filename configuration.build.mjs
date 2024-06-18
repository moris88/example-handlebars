import c from 'ansi-colors'
import concurrently from 'concurrently'

const { log: logger, clear } = console

clear()

const { result: run } = concurrently(
    [
        {
            command: 'npm run lint',
            name: 'lint',
            prefixColor: 'blue'
        },
        {
            command: 'npm run build:css',
            name: 'tailwind',
            prefixColor: 'blue'
        },
        {
            command: 'npm run build:handlebars',
            name: 'pages',
            prefixColor: 'green'
        }
    ],
    {
        prefix: '[build]',
        killOthers: ['failure', 'success'],
        restartTries: 3,
        maxProcesses: 3
    }
)

try {
    logger(`
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▀▄░█▀▄▄▀█░▄▄▀██▄██░▄▄████░▄▄▀█░██░██▄██░██░▄▀██
██░█░█░█░██░█░▀▀▄██░▄█▄▄▀████░▄▄▀█░██░██░▄█░██░█░██
██░███░██▄▄██▄█▄▄█▄▄▄█▄▄▄████░▀▀░██▄▄▄█▄▄▄█▄▄█▄▄███
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
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