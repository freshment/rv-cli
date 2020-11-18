
const path = require('path')
const templateDir = path.resolve(__dirname, '../../template/vue-project')

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
      }
    ]
  },
  actions: [
    {
      type: 'add',
      files: '**',
      templateDir
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore'
      }
    }
  ]
}

module.exports = opt