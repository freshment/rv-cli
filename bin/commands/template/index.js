


const sao = require('sao')
const path = require('path')
const {
  templateRoot
} = require('../utils')

module.exports = (projectName) => {
  const generator = path.resolve(__dirname)
  const outDir = path.resolve(templateRoot, projectName)
  sao({
    generator,
    outDir
  }).run()
    .catch(err => {
      console.trace(err)
      process.exit(1)
    })
}