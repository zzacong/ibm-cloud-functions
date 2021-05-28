const openwhisk = require('openwhisk')

function main(params) {
  if (params.password !== 'secret') {
    throw new Error('Password incorrect!')
  }

  const ow = openwhisk()
  return ow.actions.invoke({
    name: 'hello',
    blocking: true,
    result: true,
    params: params,
  })
}
