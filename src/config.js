const fs = require('fs')

function getJsonPayloads(nameFile) {
  return JSON.parse(fs.readFileSync(`./src/payloads/${nameFile}.json`, 'utf-8'))
}

const { error } = console

let payload = {}

try {
  const navbar = getJsonPayloads('navbar')

  const home = getJsonPayloads('home')
  const events = getJsonPayloads('events')
  const event = getJsonPayloads('event')
  const news = getJsonPayloads('news')
  const singleNews = getJsonPayloads('single_news')
  const profile = getJsonPayloads('profile')
  const alumni = getJsonPayloads('alumni')
  const gruppi = getJsonPayloads('gruppi')
  const gruppo = getJsonPayloads('gruppo')
  const notables = getJsonPayloads('notables')

  payload = {
    navbar,
    home,
    events,
    event,
    news,
    singleNews,
    profile,
    alumni,
    gruppi,
    gruppo,
    notables
  }
} catch (err) {
  error(err)
  process.exit(1)
}

exports.payload = payload
