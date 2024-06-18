const handlebars = require('handlebars')

/**
 * function equal
 * @param {*} arg1 
 * @param {*} arg2 
 * @returns 
 */
function equal(arg1, arg2) {
    if (!arg1 || !arg2) return false
    return arg1 === arg2
}

/**
 * function disequal
 * @param {*} arg 
 * @param  {...any} args 
 * @returns 
 */
function disequal(arg, ...args) {
    if (!arg || !args) return false
    return !args.includes(arg)
}

/**
 * function formatDate
 * @param {*} options 
 * @returns 
 */
function formatDate(options) {
    const dateString = options.fn(this)
    if (dateString === '') return new handlebars.SafeString('<div></div>')
    const dateArray = dateString.split('/')
    const date = new Date(dateArray[2], dateArray[1] - 1, dateArray[0])
    const day = date.getDate()
    const monthString = {
        0: 'Gen',
        1: 'Feb',
        2: 'Mar',
        3: 'Apr',
        4: 'Mag',
        5: 'Giu',
        6: 'Lug',
        7: 'Ago',
        8: 'Set',
        9: 'Ott',
        10: 'Nov',
        11: 'Dic'
    }
    return new handlebars.SafeString(
        `<div class="flex flex-col"><span class="monthContainer">${monthString[date.getMonth()]}</span><span class="dayContainer">${day}</span></div>`
    )
}

/**
 * function link
 * @param {*} baseUrl 
 * @param {*} url 
 * @returns 
 */
function link(baseUrl, url) {
    if (!baseUrl) return ''
    const result = `href="${baseUrl}${url ?? ''}"`
    return new handlebars.SafeString(result)
}

function json(context) {
    return JSON.stringify(context)
}

function truncate(str, len) {
    if (str === '') return new handlebars.SafeString('')
    if (str === undefined || str === null) return new handlebars.SafeString('')
    if (typeof str !== 'string') return new handlebars.SafeString('')
    if (str.length >= len) {
        return new handlebars.SafeString(`${str.substring(0, len)}...`)
    }
    return new handlebars.SafeString(str)
}

function setHelpers() {
    // Register handlebars helpers
    handlebars.registerHelper('truncate', truncate)
    handlebars.registerHelper('equal', equal)
    handlebars.registerHelper('deq', disequal)
    handlebars.registerHelper('format', formatDate)
    handlebars.registerHelper('link', link)
    handlebars.registerHelper('json', json)
}

exports.setHelpers = setHelpers