const fs = require('fs');
const path = require('path');
const data = fs.readFileSync('mc_base64.txt', 'utf8');
const base64Data = data.split(',')[1];
const targetPath = path.join('public', 'games', 'minecraft.jpg');
fs.writeFileSync(targetPath, Buffer.from(base64Data, 'base64'));
console.log('Saved image to ' + targetPath);
