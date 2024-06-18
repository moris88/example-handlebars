const helpers = require('./helpers')
const Avatar = require('./avatar/avatar')
const AvatarList = require('./avatarList/avatarList')
const Button = require('./button/button')
const Calendar = require('./calendar/calendar')
const CardAlumno = require('./cardAlumno/cardAlumno')
const CardEvent = require('./cardEvent/cardEvent')
const CardNews = require('./cardNews/cardNews')
const CardProfile = require('./cardProfile/cardProfile')
const CardGruppo = require('./cardGruppo/cardGruppo')
const Chip = require('./chip/chip')
const ChipSave = require('./chipSave/chipSave')
const FormatDate = require('./formatDate/formatDate')
const Input = require('./input/input')
const MultiAutocomplete = require('./multiautocomplete/multiautocomplete')
const ModalEditProfile = require('./modalEditProfile/modalEditProfile')
const ModalAlumno = require('./modalAlumno/modalAlumno')
const Navbar = require('./navbar/navbar')

// Register helpers
helpers.setHelpers()
async function renders() {
  // Render components
  await AvatarList.render()
  await Button.render()
  await Avatar.render()
  await Chip.render()
  await ChipSave.render()
  await FormatDate.render()
  await Input.render()
  await MultiAutocomplete.render()
  await Calendar.render()
  await CardGruppo.render()
  await CardAlumno.render()
  await CardEvent.render()
  await CardNews.render()
  await CardProfile.render()
  await ModalEditProfile.render()
  await ModalAlumno.render()
  await Navbar.render()
}

exports.renders = renders