function split(params) {
  const text = params.text || ''
  const words = text.split(' ')
  return { words: words }
}

function reverse(params) {
  const words = params.words || []
  const reversed = words.map(word => word.split('').reverse().join(''))
  return { words: reversed }
}

function join(params) {
  const words = params.words || []
  const text = words.join(' ')
  return { text: text }
}

function fail(params) {
  if (params.fail) {
    throw new Error('stopping sequence and returning.')
  }

  return params
}

function end(params) {
  return { message: 'sequence finished.' }
}
