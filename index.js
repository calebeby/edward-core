const {spawn} = require('child_process')

const say = text => new Promise(resolve => spawn('flite', ['-t', `"${text}"`]).on('exit', resolve))
const espeak = text => new Promise(resolve => spawn('espeak', [`"${text}"`]).on('exit', resolve))

say('hello. I am Edward, speaking through flite')
  .then(() => say('How are you today'))
  .then(() => espeak('Now this is espeak'))
