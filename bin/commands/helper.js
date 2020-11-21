
const {
  getFileList,
  getFilePath
} = require('./utils')

const {
  map,
  applySpec
} = require('../../lib/lang')

const getChoice = (dir) => getFileList(dir).map(applySpec({
  name: map,
  value: getFilePath(dir),
}))

exports.getChoice = getChoice