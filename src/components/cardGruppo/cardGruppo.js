const fs = require('fs')
const path = require('path')
const handlebars = require('handlebars')
const esbuild = require('esbuild')
const options = require('../../../esbuild.config')

// name component
const nameComponent = 'cardGruppo'

// render function component
async function render(props) {
    const html = fs.readFileSync(
        path.resolve(__dirname, `${nameComponent}.hbs`),
        'utf8'
    )
    const script = fs.readFileSync(
        path.resolve(__dirname, `${nameComponent}.script.js`),
        'utf8'
    )
    const transformScript = await esbuild.transform(script, options)
    const bundle = transformScript.code !== '' ? `
<script>${ transformScript.code }</script>` : ''
    const template = handlebars.compile(html.replace('<script />', bundle))
    handlebars.registerPartial(`${nameComponent}Component`, template)
    // Helpers Register
    return template(props)
}

exports.render = render
