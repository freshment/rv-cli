<<<<<<< HEAD
const fn = () => { console.log(1) }
let test = 1
test = 2
const TEST = 3
=======
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
>>>>>>> master
