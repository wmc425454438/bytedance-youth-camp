
// /api/user GET
// /api/user/1 GET
// /api/users POST PUT DELETE

const Koa = require('koa');
const app = new Koa()


// 注册路由
const config = require('./conf');
const { loadModel } = require('./framework/loader')
console.log(app);
loadModel(config)(app)


// [user , order]

const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
const restful = require('./framework/router')
app.use(restful)

app.listen(3000, () => {
    console.log('Server at 3000');
})