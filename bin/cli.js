#!/usr/bin/env node

const cac = require('cac')
const create = require('./commands/create')
const template = require('./commands/template')

const cli = cac('rv-cli')

cli
  .command('create <projectName>', 'create project')
  .action((projectName) => {
    create(projectName)
  })

cli
  .command('template <projectName>', 'create template')
  .action((projectName) => {
    template(projectName)
  })
  
cli.help()

cli.parse()