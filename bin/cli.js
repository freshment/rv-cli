#!/usr/bin/env node

const cac = require('cac')
const create = require('./commands/create')

const cli = cac('rv-cli')

cli
  .command('create <projectName>', 'create project')
  .action((projectName) => {
    create(projectName)
  })
  
cli.help()

cli.parse()