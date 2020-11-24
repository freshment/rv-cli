
const sao = require('sao')
const path = require('path')

module.exports = (projectName) => {
  const generator = path.resolve(__dirname)
  const outDir = path.resolve(process.cwd(), projectName)
  sao({
    generator,
    outDir
  }).run()
    .catch(err => {
      console.trace(err)
      process.exit(1)
    })
}