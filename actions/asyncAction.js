function main(args) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ done: true })
    }, 2000)
  })
}
