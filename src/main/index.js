const fs = require('fs')
const path = require('path')
const handlebars = require('handlebars')
const layouts = require('handlebars-layouts')
const { error } = console

function initialize() {
    fs.access(`${process.cwd()}/public`, fs.constants.F_OK, (err) => {
        if (err) {
            error(err)
            fs.mkdirSync(`${process.cwd()}/public`, { recursive: true })
        }
    })
    fs.rmdirSync(`${process.cwd()}/public/pages`, { recursive: true })
    fs.mkdirSync(`${process.cwd()}/public/pages`, { recursive: true })
    handlebars.registerHelper(layouts(handlebars))
    const html = fs.readFileSync(
        path.resolve(__dirname, 'index.hbs'),
        'utf8'
    )
    handlebars.registerPartial('index', html)
    return
}

exports.initialize = initialize