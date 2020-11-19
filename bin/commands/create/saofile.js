
const path = require('path')
const fs = require('fs')
const templateRoot = path.resolve(__dirname, '../../../template')

const applySpec = mapObj => obj => Object.keys(mapObj)
    .reduce((res, key) => {
      res[key] = mapObj[key](obj)
      return res
    }, {})

const getFileList = root => fs.readdirSync(root)

const getFilePath = root => fileName => path.join(root, fileName)

const getFile = fileName => dir => 
  require(path.resolve(dir, fileName))

const mapProp = prop => x => x[prop]
const map = x => x

const res = getFileList(templateRoot).map(applySpec({
  name: map,
  value: getFilePath(templateRoot),
}))

const opt = {
  prompts() {
    return [
      {
        name: 'name',
        message: '创建项目的名称',
        default: this.outFolder,
        filter: val => val.toLowerCase()
      },
      {
        name: 'description',
        message: '创建项目的描述',
      },
      {
        name: 'templateDir',
        messsage: '选择脚手架模板',
        type: 'list',
        pageSize: 15,
        choices: res,
        default: 'base-template'
      }
    ]
  },
  actions(){
    const { templateDir } = this.answers
    console.log(templateDir)
    const actions = [
      {
        type: 'add',
        files: '**',
        templateDir,
      },
    ]
    return actions
  } 
}

module.exports = opt