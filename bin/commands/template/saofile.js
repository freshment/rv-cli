const {
  getChoice
} = require('../helper')

const path = require('path')

const {
  templateRoot
} = require('../constant')

const shell = require('shelljs')

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
        message: '选择脚手架模板',
        type: 'list',
        pageSize: 15,
        choices: getChoice(templateRoot),
        default: 'base-template'
      }
    ]
  },
  actions(){
    const { templateDir } = this.answers
    const actions = [
      {
        type: 'add',
        files: '**',
        templateDir,
      },
    ]
    return actions
  } ,
  async completed() {
    const userDir = path.join(process.cwd(), this.answers.name)
    const templateDir = path.join(templateRoot, this.answers.name)
    shell.ln('-sf', templateDir , userDir)
  }
}

module.exports = opt