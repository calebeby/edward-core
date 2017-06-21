const espeak = require('./espeak')
const EventEmitter = require('events')

const edward = new class Edward extends EventEmitter {
  constructor() {
    super()
  }

  say(text) {
    console.log(text)
    return espeak(text, {
      language: 'mb-en1',
      speed: 220,
      pitch: 50
    })
  }

  shooCat() {
    return this.say('Go away Koby. Shoo')
  }
}()

Promise.resolve()
  .then(() => edward.say('Hello. I am Edward'))
  .then(() => edward.shooCat())
  .then(() => edward.say('It is to be sunny throughout the rest of the week'))
