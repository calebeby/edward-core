const {spawn} = require('child_process')

const say = text => new Promise(resolve => spawn('flite', ['-t', `"${text}"`]).on('exit', resolve))
const espeak = text => new Promise(resolve => spawn('espeak', [`"${text}"`]).on('exit', resolve))

Promise.resolve()
  .then(() => say('hello. I am Edward, speaking through flite'))
  .then(() => say('How are you today'))
  .then(() => espeak('hello. I am Edward, speaking through espeak'))
  .then(() => espeak('How are you today'))
