// 打印欢迎页面
const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))
const open = require('open')

const spawn = async(...args) => {
    
    const {spawn} = require('child_process')
    return new Promise(resolve => {
        const proc = spawn(...args)

        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
        proc.on('close', () => {
            resolve();
        });
    });
}

module.exports = async name => {
    // 欢迎打印界面
    clear()
    const data = await figlet('first figlet');
    // figlet.text('byteDanceyyds', {
    //     font: 'Ghost',
    //     horizontalLayout: 'default',
    //     verticalLayout: 'default',
    //     width: 80,
    //     whitespaceBreak: true
    // }, function(err, data) {
    //     if (err) {
    //         console.log('Something went wrong...');
    //         console.dir(err);
    //         return;
    //     }
    //     log(data);
    // });
    log(data)

    // 项目模板
    log('创建项目' + name)
    // await clone('github:su37j')

    log('安装依赖...')
    // await spawn('npm', ['install'], {cwd: `./${name}`});
    // log(chalk.green(`安装完成`));

    open('http://localhost:8080')
    // await spawn('npm', ['run', 'serve'], {cwd: `./${name}`})
}