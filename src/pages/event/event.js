const fs = require('fs')
const path = require('path')
const handlebars = require('handlebars')
const esbuild = require('esbuild')
const options = require('../../../esbuild.config.json')

// name page
const namePage = 'event'

// path file page
const pathfile = `/public/pages/${namePage}/index.html`

// render function page
async function render(props) {
  const html = fs.readFileSync(
    path.resolve(__dirname, `${namePage}.hbs`),
    'utf8'
  )
  const script = fs.readFileSync(
    path.resolve(__dirname, `${namePage}.script.js`),
    'utf8'
  )
  const transformScript = await esbuild.transform(script, options)
  const bundle = transformScript.code !== '' ? `\n<script>${transformScript.code}</script>` : ''
  const template = handlebars.compile(html.replace('{{$script}}', bundle))
  handlebars.registerPartial(`${namePage}Page`, template)
  return template(props)
}

async function renderPage(payload = {}) {
  fs.mkdirSync(`${process.cwd()}/public/pages/${namePage}`, { recursive: true })
  // Render Page
  fs.writeFileSync(
    `${process.cwd()}${pathfile}`,
    `${await render(payload)}`
  )
}

exports.renderPage = renderPage
