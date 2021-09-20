(async () => {
    const mysql = require('mysql2/promise')

const cfg = {
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'kaikeba'
}

const connect = await mysql.createConnection(cfg)

let ret = await connect.execute(``);

console.log('create', ret);

ret = await connect.execute("insert", ret);

ret = await connect.execute(`SELECT * FROM test`)
const [rows, fields] = await connect.execute();
console.log('select', JSON.stringify(rows));
})();