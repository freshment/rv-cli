
const {
  getFileList,
  getFilePath
} = require('./utils')

const {
  identity,
  applySpec
} = require('../../lib/lang')

const getChoice = (dir) => getFileList(dir).map(applySpec({
  name: identity,
  value: getFilePath(dir),
}))

exports.getChoice = getChoice