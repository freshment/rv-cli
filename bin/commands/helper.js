
const {
  templateRoot,
  getFileList,
  getFilePath
} = require('./utils')

const {
  map,
  applySpec
} = require('./lang')

const getTemplateChoice = () => getFileList(templateRoot).map(applySpec({
  name: map,
  value: getFilePath(templateRoot),
}))

exports.getTemplateChoice = getTemplateChoice