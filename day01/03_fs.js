// const fs = require('fs');
// const fs = require('fs').promises;

// const data = fs.readFileSync('./conf.js');
// console.log('data', data.toString());


// fs.readFile('./conf.js', (err, data) => {
//     // 错误优先的回调
//     if (err) throw err;
//     console.log(data.toString());
// });

(async => {
    const fs = require('fs');
    const { promisify } = require('util');
    const readFile = promisify(fs.readFile);
    const data = await readFile('./conf.js');
    console.log(data.toString());
})()



