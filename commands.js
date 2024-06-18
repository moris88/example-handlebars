const yargs = require('yargs')
const fs = require('fs')
const path = require('path')
const colors = require('ansi-colors')

const { log } = console

yargs.command({
    command: 'component',
    describe: 'Creazione Template Component',
    builder: {
        name: {
            describe: 'nome del component',
            demandOption: true,
            type: 'string'
        }
    },
    handler(args) {
        log('start component command!')
        if (!args?.name) {
            log('Error: name is required!')
            return
        }
        generateComponent(args.name)
    }
})

yargs.command({
    command: 'page',
    describe: 'Creazione Template Page',
    builder: {
        name: {
            describe: 'nome del page',
            demandOption: true,
            type: 'string'
        }
    },
    handler(args) {
        log('start page command!')
        if (!args?.name) {
            log('Error: name is required!')
            return
        }
        generatePage(args.name)
    }
})

log('start yargs...')
yargs.parse()

function generateComponent(name) {
    log(`component name: ${name}`)
    try {
        fs.mkdir(path.join(__dirname, `./src/components/${name}`), (err) => {
            if (err) {
                log(colors.bgRed(colors.white(err)))
            }
            else {
                log(colors.cyan('Directory created successfully!'))
                log(colors.cyan('Creating files...'))
                fs.writeFileSync(
                    `./src/components/${name}/${name}.js`,
                    codeTemplateComponentJs(name)
                )
                fs.writeFileSync(
                    `./src/components/${name}/${name}.hbs`,
                    codeTemplateHandlebars(name, 'component')
                )
                fs.writeFileSync(
                    `./src/components/${name}/${name}.css`,
                    `/*${name.toUpperCase()} CSS*/`
                )
                fs.writeFileSync(
                    `./src/components/${name}/${name}.script.js`,
                    '/*insert javacript code*/'
                )
                log(colors.bgGreen(colors.white('Component created!')))
            }
        })

    } catch (error) {
        log(colors.bgRed(colors.white(error)))
    }
}

function generatePage(name) {
    log(`page name: ${name}`)
    try {
        fs.mkdir(path.join(__dirname, `./src/pages/${name}`), (err) => {
            if (err) {
                log(colors.bgRed(colors.white(err)))
            }
            else {
                log(colors.cyan('Directory created successfully!'))
                log(colors.cyan('Creating files...'))
                fs.mkdir(path.join(__dirname, './public'), () => { })
                fs.writeFileSync(
                    `./src/pages/${name}/${name}.js`,
                    codeTemplatePageJs(name)
                )
                fs.writeFileSync(
                    `./src/pages/${name}/${name}.hbs`,
                    codeTemplateHandlebars(name, 'page')
                )
                fs.writeFileSync(
                    `./src/pages/${name}/${name}.css`,
                    `/*${name.toUpperCase()} CSS*/`
                )
                fs.writeFileSync(
                    `./src/pages/${name}/${name}.script.js`,
                    '/*insert javacript code*/'
                )
                log(colors.bgGreen(colors.white('Page created!')))
            }
        })

    } catch (error) {
        log(colors.bgRed(colors.white(error)))
    }
}

function codeTemplateHandlebars(name, type) {
    return `<!-- ${type === 'component' ? 'COMPONENT' : 'PAGE'} ${name.toUpperCase()} HTML -->
${type === 'component' ? '' : `
{{#extend "index"}}
{{#content "body"}}
`}
<div>
    <h1>${name.toUpperCase()} ${type === 'component' ? 'COMPONENT' : 'PAGE'}</h1>
</div>

<script />
${type === 'component' ? '' : `
{{/content}}
{{/extend}}
`}
`
}

function codeTemplateComponentJs(name) {
    return `const fs = require('fs')
const path = require('path')
const handlebars = require('handlebars')
const esbuild = require('esbuild')
const options = require('../../../esbuild.config')

// name component
const nameComponent = '${name}'

// render function component
async function render(props) {
    const html = fs.readFileSync(
        path.resolve(__dirname, \`\${nameComponent}.hbs\`),
        'utf8'
    )
    const script = fs.readFileSync(
        path.resolve(__dirname, \`\${nameComponent}.script.js\`),
        'utf8'
    )
    const transformScript = await esbuild.transform(script, options)
    const bundle = transformScript.code !== '' ? \`\n<script>\${transformScript.code}</script>\` : ''
    const template = handlebars.compile(html.replace('<script />', bundle))
    handlebars.registerPartial(\`\${nameComponent} Component\`, template)
    return template(props)
}

exports.render = render
`
}

function codeTemplatePageJs(name) {
    return `const fs = require('fs')
const path = require('path')
const handlebars = require('handlebars')
const esbuild = require('esbuild')
const options = require('../../../esbuild.config')

// name page
const namePage = '${name}'

// path file page
const pathfile = \`/public/pages/\${namePage}/index.html\`

// render function page
async function render(props) {
    const html = fs.readFileSync(
        path.resolve(__dirname, \`\${namePage}.hbs\`),
        'utf8'
    )
    const script = fs.readFileSync(
        path.resolve(__dirname, \`\${namePage}.script.js\`),
        'utf8'
    )
    const transformScript = await esbuild.transform(script, options)
    const bundle = transformScript.code !== '' ? \`\n<script>\${transformScript.code}</script>\` : ''
    const template = handlebars.compile(html.replace('<script />', bundle))
    handlebars.registerPartial(\`\${namePage}Page\`, template)
    return template(props)
}

async function renderPage(payload = {}) {
    fs.mkdirSync(\`\${process.cwd()}/public/pages/\${namePage}\`, { recursive: true })
    // Render Page
    fs.writeFileSync(
        \`\${process.cwd()}\${pathfile}\`,
        \`\${await render(payload)}\`
    )
}

exports.renderPage = renderPage
`
}
