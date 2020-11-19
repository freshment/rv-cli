
const fs = require('fs')
const path = require('path')

const templateRoot = path.resolve(__dirname, '../../template')

exports.templateRoot = templateRoot

const getFileList = root => fs.readdirSync(root)

exports.getFileList = getFileList

const getFilePath = root => fileName => path.join(root, fileName)

exports.getFilePath = getFilePath

const getFile = fileName => dir => 
  require(path.resolve(dir, fileName))

exports.getFile = getFile
