const fs = require('fs')
const path = require('path');
const mongoose = require('mongoose')

/**
 * 加载器
 * @param {*} dir 文件夹 
 * @param {*} cb 
 */
function load(dir, cb) {
    const url = path.resolve(__dirname, dir);
    const files = fs.readdirSync(url)
    files.forEach(filename => {
        filename = filename.replace('.js', '');
        const file = require(url + '/' + filename);
        cb(filename, file);
    })
}

const loadModel = config => app => {
    mongoose.connect(config.db.url, config.db.options)
    const conn = mongoose.connection;
    conn.on('error', () => console.error('链接失败'))
    load('../model', (filename, {schema}) => {
        console.log('load model:' + filename, shcema)
        app.$model[filename] = mongoose.model(filename, schema)
    })
}


module.exports = {
    loadModel
}