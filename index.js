const espeak = require('./espeak')
const EventEmitter = require('events')

const edward = new class Edward extends EventEmitter {
  constructor() {
    super()
  }

  say(text) {
    console.log(text)
    return espeak(text, {
      language: 'en',
      speed: 130,
      voiceVariant: 'm3',
      pitch: 35
    })
  }

  shooCat() {
    return this.say('Go away Koby. Shoo')
  }
}()

Promise.resolve()
  // .then(() => edward.say('Hello. I am Edward'))
  .then(() => edward.shooCat())
