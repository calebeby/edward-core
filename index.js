const {spawn} = require('child_process')

const say = text => new Promise(resolve => spawn('flite', ['-t', `"${text}"`]).on('exit', resolve))

say('hello. I am Edward')
  .then(() => say('I have finished saying the previous clause'))
  .then(() => say('How are you today'))
