function sleep () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('data')
    }, 1000)
  })
}

async function wait () {
  const data = await sleep()
  console.log(data)
}
