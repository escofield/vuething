export default function(name) {
  var evt = document.createEvent('Event')
  evt.initEvent(name, true, true)
  return evt
}
