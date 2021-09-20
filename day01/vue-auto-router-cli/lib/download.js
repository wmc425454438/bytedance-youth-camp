const {promisify} = require('util');

module.exports.clone = async function() {
    const download = promisify(require('download-git-repo'));
    const ora = require('ora');
    const process = ora(``);
    process.start();
    await download();
    process.succeed();
}