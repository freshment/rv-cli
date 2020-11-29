import './assets/common.scss'
import catImg from './assets/img/cat-jjc.jpg'

const imgTag = document.createElement('img')
imgTag.src = catImg
document.body.appendChild(imgTag)

console.log('catImt:', catImg)

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
