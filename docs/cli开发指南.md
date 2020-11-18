
# cli开发指南
本项目使用cac作为命令行工具，sao作为脚手架工具。

## 快速创建模板

### 1. 链接至本地global.node_modules
在该项目根目录下运行以下命令。
```bash
npm link
```

### 2. 执行cli命令
```bash
rv-cli create 项目名称
```

## 命令行相关
命令行相关功能代码在`bin/cli.js`下，可创建不同的命令便于用户使用。

### 创建新命令
```javascript
cli
  .command('create <projectName>', 'create project')
  .action((projectName) => {
    create(projectName)
  })
```

## 选项配置
选项配置在`bin/commands/saofile.js`下，可为用户提供不同的选项用于生成模板代码。

