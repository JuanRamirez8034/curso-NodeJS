const path = require('path');

const filePath = path.join('root', 'folder1', 'folder2');
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
