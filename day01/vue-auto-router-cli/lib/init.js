// 打印欢迎页面
const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))

module.exports = async name => {
    // 欢迎打印界面
    clear()
    const data = await figlet('byteDance yyds');
    log(data)

    // 项目模板
    log('创建项目' + name)
    // await clone('github:su37j')
}