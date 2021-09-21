(async () => {
    const mysql = require('mysql2/promise')

const cfg = {
    host: 'localhost',
    user: 'root',
    password: 'kaikeba',
    database: 'kaikeba'
}

const connect = await mysql.createConnection(cfg)

let ret = await connect.execute(`CREATE TABLE IF NOT EXISTS test (
    id INT NOT NULL AUTO_INCREAMENT,
    message VARCHAR(45) NULL,
    PRIMARY KEY (id))`);

console.log('create', ret);

// ret = await connect.execute("insert", ret);

// ret = await connect.execute(`SELECT * FROM test`)
// const [rows, fields] = await connect.execute();
// console.log('select', JSON.stringify(rows));
})();