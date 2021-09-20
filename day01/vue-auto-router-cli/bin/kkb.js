#!/usr/bin/env node
const program = require('commander')
// 策略模式
program.version(require('../package').version);
program.command('init <name>')
    .description('init project')
    .action(require('../lib/init'));
// console.log(process.argv)
program.parse(process.argv);
// console.log('hellow cli ...')