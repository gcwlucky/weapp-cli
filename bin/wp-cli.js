#!/usr/bin/env node --harmony
'use strict'

const action = require('../index'),
    program = require('commander'),
    yargs = require('yargs');

let argv = yargs.options('v', {
    describe: '指定版本号',
    type: 'string'
}).options('d', {
    describe: '上传代码时的备注',
    type: 'string'
}).options('p', {
    describe: '打开项目路径',
    type: 'string'
}).argv;

// 定义当前版本
program.version(require('../package').version)

// 定义使用方法
program.usage('<command>')

// 定义命令
program.command('o')
    .alias('open')
    .description('打开工具。可选：-p(项目路径)，如wa o E:\\work_space\\weapp')
    .option('-p', '项目路径')
    .action(function () {
        action.open(argv);
    });

program.command('l')
    .alias('login')
    .description('登录。')
    .action(function () {
        action.login(argv);
    });

program.command('p')
    .alias('preview')
    .description('预览。')
    .action(function () {
        action.preview(argv);
    });

program.command('u')
    .alias('upload')
    .description('上传代码。默认按当前时间（yyyyMMddhh）作为版本号，按当前分支最新一条git log作为备注。可选：-v(版本号)，-d(备注)，如wa u v v.1.0.0 d "upload test"')
    .option('-v', '指定版本号')
    .option('-d', '上传代码时的备注')
    .action(function () {
        // console.log(argv)
        action.upload(argv);
    });

program.parse(process.argv)

