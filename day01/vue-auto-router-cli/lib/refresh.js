// 读文件列表
// 凭代码 模板渲染的方式
const fs = require('fs')
const handlebars = require('handlers')
const chalk = require('chalk');

module.exports = async () => {
    // 获取列表
    const list = fs
            .readdirSync('./src/views')
            .filter((v) => v !== "Home.vue")
            .map(v => ({
                name: v.replace(".vue", "").toLowerCase(),
                file: v,
            }));



    compile({list}, './src/router.js', './template/router.js.hbs')
    compile({list}, './src/App.vue', './template/App.vue.hbs')


    function compile(meta, filePath, tmeplatePath) {
        if(fs.existsSync(tmeplatePath)) {
            const content = fs.readFileSync(tmeplatePath).toString();
            const result = handlebars.compile(content)(meta)
            fs.writeFileSync(filePath, result);
            console.log(chalk.green(`${filePath} 创建成功`))
        }
    }
                
};