const {spawn} = require('child_process')

const assertBetween = (min, val, max, label) => {
  if (min <= val && val <= max) {
    return
  }
  throw new Error(
    `${label ? label + ' ' : ''}${val} is not between ${min} and ${max}`
  )
}

module.exports = (text, opts = {}) =>
  new Promise((resolve, reject) => {
    var args = [`"${text}"`]
    var {volume, pitch, speed, language, voiceVariant} = opts
    if (volume !== undefined) {
      assertBetween(0, volume, 200, 'volume')
      args.push(`-a${volume}`)
    }
    if (pitch !== undefined) {
      assertBetween(0, pitch, 99, 'pitch')
      args.push(`-p${pitch}`)
    }
    if (speed !== undefined) {
      assertBetween(0, speed, Infinity, 'speed')
      args.push(`-s${speed}`)
    }
    if (language !== undefined || voiceVariant !== undefined) {
      if (!language) {
        language = ''
      }
      if (!voiceVariant) {
        voiceVariant = ''
      } else {
        voiceVariant = '+' + voiceVariant
      }
      args.push(`-v${language}${voiceVariant}`)
    }
    console.log(['espeak', ...args].join(' '))
    const espeakProcess = spawn('espeak', args)
    espeakProcess.on(
      'exit',
      code => (code === 0 ? resolve() : reject(code))
    )
    espeakProcess.stderr.on(
      'data',
      message => console.error(message.toString())
    )
  })
