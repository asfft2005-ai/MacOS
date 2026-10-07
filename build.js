const fs=require('fs');
const path=require('path');
const dir=__dirname;
const template=fs.readFileSync(path.join(dir,'index.html'),'utf8');
const scripts=[1,2,3].map(i=>fs.readFileSync(path.join(dir,`part${i}.js`),'utf8')).join('\n');
const marker='<script src="part1.js"></script>\n  <script src="part2.js"></script>\n  <script src="part3.js"></script>';
if(!template.includes(marker)) throw new Error('Loader marker not found');
fs.writeFileSync(path.join(dir,'svgtiger-standalone.html'),template.replace(marker, '<script>\n'+scripts+'\n</script>'));
console.log('Built svgtiger-standalone.html');
