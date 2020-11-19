
const {
  templateRoot,
  getFileList,
  getFilePath
} = require('./utils')

const {
  map,
  applySpec
} = require('./lang')

const getChoice = (dir) => getFileList(dir).map(applySpec({
  name: map,
  value: getFilePath(dir),
}))

const getTemplateChoice = getChoice(templateRoot)

exports.getTemplateChoice = getTemplateChoice