const Home = require('./pages/home/home')
const Home_no_login = require('./pages/home_no_login/home_no_login')
const Login = require('./pages/login/login')
const Events = require('./pages/events/events')
const EventsAll = require('./pages/events_all/events_all')
const Event = require('./pages/event/event')
const News = require('./pages/news/news')
const SingleNews = require('./pages/single_news/single_news')
const Profile = require('./pages/profile/profile')
const ProfileEvents = require('./pages/profile_events/profile_events')
const ProfileEventsSave = require('./pages/profile_events_save/profile_events_save')
const DirectoryAlumni = require('./pages/directory_alumni/directory_alumni')
const DirectoryNotables = require('./pages/directory_notables/directory_notables')
const DirectoryGruppi = require('./pages/directory_gruppi/directory_gruppi')
const DirectoryGruppoPartecipate = require('./pages/directory_gruppo_partecipate/directory_gruppo_partecipate')
const DirectoryGruppoNoPartecipate = require('./pages/directory_gruppo_no_partecipate/directory_gruppo_no_partecipate')
const DirectoryGruppoLoading = require('./pages/directory_gruppo_loading/directory_gruppo_loading')
const DirectoryGruppiMy = require('./pages/directory_gruppi_my/directory_gruppi_my')
const Page404 = require('./pages/page404/page404')

const { log, error } = console

;(async function() {
  try {
    log('--> Initialize component main...')
    // initialize component main
    require('./main/index').initialize()
    log('--> Render components...')
    // render components
    await require('./components/index').renders()

    log('--> Start getJsonPayloads...')
    // payload is an object that contains all the data that will be passed to the pages
    const { payload } = require('./config')

    log('--> Render pages...')
    // render pages
    await Home_no_login.renderPage({
      ...payload.navbar,
      login: false,
      ...payload.home
    })
    await Home.renderPage({ ...payload.navbar, login: true, ...payload.home })
    await Login.renderPage({
      ...payload.navbar,
      login: false
    })
    await Events.renderPage({
      ...payload.navbar,
      login: true,
      navItems: payload.navbar.navItems.map((item) =>
        item.name === 'Eventi' ? { ...item, active: true } : item
      ),
      ...payload.events
    })
    await EventsAll.renderPage({
      ...payload.navbar,
      login: true,
      navItems: payload.navbar.navItems.map((item) =>
        item.name === 'Eventi' ? { ...item, active: true } : item
      ),
      ...payload.events
    })
    await Event.renderPage({
      ...payload.navbar,
      login: true,
      navItems: payload.navbar.navItems.map((item) =>
        item.name === 'Eventi' ? { ...item, active: true } : item
      ),
      ...payload.event
    })
    await News.renderPage({
      ...payload.navbar,
      login: true,
      navItems: payload.navbar.navItems.map((item) =>
        item.name === 'News' ? { ...item, active: true } : item
      ),
      ...payload.news
    })
    await SingleNews.renderPage({
      ...payload.navbar,
      login: true,
      navItems: payload.navbar.navItems.map((item) =>
        item.name === 'News' ? { ...item, active: true } : item
      ),
      ...payload.singleNews
    })
    await Profile.renderPage({
      ...payload.navbar,
      login: true,
      navItems: payload.navbar.navItems,
      ...payload.profile
    })
    await ProfileEvents.renderPage({
      ...payload.navbar,
      login: true,
      navItems: payload.navbar.navItems,
      ...payload.profile
    })
    await ProfileEventsSave.renderPage({
      ...payload.navbar,
      login: true,
      navItems: payload.navbar.navItems,
      ...payload.profile
    })
    await DirectoryAlumni.renderPage({
      ...payload.navbar,
      login: true,
      navItems: payload.navbar.navItems.map((item) =>
        item.name === 'Alumni' || item.name === 'Directory' ? { ...item, active: true } : item
      ),
      ...payload.alumni
    })
    await DirectoryNotables.renderPage({
      ...payload.navbar,
      login: true,
      navItems: payload.navbar.navItems.map((item) =>
        item.name === 'Notables' || item.name === 'Directory' ? { ...item, active: true } : item
      ),
      ...payload.notables
    })
    await DirectoryGruppi.renderPage({
      ...payload.navbar,
      login: true,
      navItems: payload.navbar.navItems.map((item) =>
        item.name === 'Gruppi' || item.name === 'Directory' ? { ...item, active: true } : item
      ),
      ...payload.gruppi
    })
    await DirectoryGruppoPartecipate.renderPage({
      ...payload.navbar,
      login: true,
      navItems: payload.navbar.navItems.map((item) =>
        item.name === 'Gruppi' || item.name === 'Directory' ? { ...item, active: true } : item
      ),
      ...{
        ...payload.gruppo,
        subscriber: 'partecipante'
      }
    })
    await DirectoryGruppoNoPartecipate.renderPage({
      ...payload.navbar,
      login: true,
      navItems: payload.navbar.navItems.map((item) =>
        item.name === 'Gruppi' || item.name === 'Directory' ? { ...item, active: true } : item
      ),
      ...{
        ...payload.gruppo,
        subscriber: 'non partecipante'
      }
    })
    await DirectoryGruppoLoading.renderPage({
      ...payload.navbar,
      login: true,
      navItems: payload.navbar.navItems.map((item) =>
        item.name === 'Gruppi' || item.name === 'Directory' ? { ...item, active: true } : item
      ),
      ...{
        ...payload.gruppo, 
        subscriber: 'in attesa'
      }
    })
    await DirectoryGruppiMy.renderPage({
      ...payload.navbar,
      login: true,
      navItems: payload.navbar.navItems.map((item) =>
        item.name === 'Gruppi' || item.name === 'Directory' ? { ...item, active: true } : item
      ),
      ...payload.gruppi
    })
    await Page404.renderPage()
  } catch (err) {
    error(err)
    process.exit(1)
  }
})()
