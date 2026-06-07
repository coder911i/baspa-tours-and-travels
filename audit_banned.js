const fs = require('fs');
const path = require('path');

const banned = [
  'Ascend',
  'Embark',
  'curated',
  'Lorem',
  'bespoke',
  'unforgettable',
  'seamless',
  'world-class',
  'Dreams Meet',
  '91XXXXXXXXXX'
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (
      file.endsWith('.ts') ||
      file.endsWith('.tsx') ||
      file.endsWith('.css') ||
      file.endsWith('.js') ||
      file.endsWith('.json')
    ) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');
console.log(`Auditing ${files.length} files...`);

let foundCount = 0;
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  banned.forEach(term => {
    const regex = new RegExp(term, 'i');
    if (regex.test(content)) {
      console.log(`Found Banned Term '${term}' in: ${file}`);
      foundCount++;
    }
  });
});

console.log(`Audit complete. Found ${foundCount} violations.`);
