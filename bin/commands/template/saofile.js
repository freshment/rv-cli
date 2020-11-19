const {
  getTemplateChoice
} = require('../helper')

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
        choices: getTemplateChoice(),
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
  } 
}

module.exports = opt