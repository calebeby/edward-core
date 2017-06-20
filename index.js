const {spawn} = require('child_process')

const say = text => new Promise(resolve => spawn('flite', ['-t', `"${text}"`]).on('exit', resolve))

say('hello. I am Edward')
