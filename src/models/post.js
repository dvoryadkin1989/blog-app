const fs = require('fs');

const readPostsFromFilesystem = () => {
    console.log(123 + "" + process.cwd());
    return JSON.parse(fs.readFileSync("../../resources/database.json"));
};

module.exports = readPostsFromFilesystem();