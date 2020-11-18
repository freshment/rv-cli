
# 代码提交规范

对提交日志规范化的好处：
- 方便检索关键信息
- 生成Change Log

本项目使用`Commit Message`规范，并通过`Commitizen`简化提交流程。
具体的规范与流程详见参考资料，该文档只针对常见的场景简要说明。

## 提交格式
`Commit Message`要求提交包含以下格式：
- Header（必填）
- Body
- Footer
即要求Header为必填，Body与Footer不做强制要求。

总体结构如下：

```
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```

### Header
Header由以下三个部分组成：
- type（必填）：提交类型，在下文有详细说明。
- scope：用于说明本次提交影响的范围，可根据功能模块划分、业务模块划分，视情况而定。
- subject（必填）：用于对本次提交的简要说明，类似commit中的message。

#### type
type用以区分本次提交的类型，常用的有以下8种选项：
- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style：格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动
- perf：优化代码

## Commitizen辅助工具
Commitizen是符合Commit Message规范的提交工具，用于简化提交流程。
集成后，提交时将`git commit -m 'message'`改为`git cz`提交进行提交。
`git cz`会出现选项，并帮助我们生成符合`Commit Message`规范的日志记录。

### Commitizen安装与初始化
```
npm install -g commitizen # 安装Commitizen
commitizen init cz-conventional-changelog --save --save-exact # 初始化提交格式
```


## 参考资料
- [Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

