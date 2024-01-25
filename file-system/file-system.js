const fs = require('fs/promises');
const print = require('../tree-function/tree-function');

const readDirectories = async (path, level, step = 0) => {
  const name = path.split('/').at(-1);
  const result = { name, items: [] };
  try {
    step++;
    if (level < step) return result;
    const directories = await fs.readdir(path)
    for await (item of directories) {
      const stat = await fs.stat(`${path}/${item}`)
      if (stat.isDirectory()) {
        const dir = await readDirectories(`${path}/${item}`, level, step);
        result.items.push(dir);
      } else {
        result.items.push({ name: item });
      }
    }
    return result;
  } catch(error) {
    console.error(error)
  }
}

const path = process.argv[2] || 'file-system/example';
const level = process.argv[3] || 2;


readDirectories(path, level).then(tree => print(tree));
