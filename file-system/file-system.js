const fs = require('fs/promises');
const print = require('../tree-function/tree-function');

const readDirectories = async (path, level, step = 0) => {
  const name = path.split('/').at(-1);
  const result = { name, items: [], directories: 0, files: 0 };
  try {
    step++;
    if (level < step) return result;
    const directories = await fs.readdir(path)
    for await (item of directories) {
      const stat = await fs.stat(`${path}/${item}`)
      if (stat.isDirectory()) {
        const dir = await readDirectories(`${path}/${item}`, level, step);
        result.items.push(dir);
        result.directories += dir.directories + 1;
        result.files += dir.files
      } else {
        result.items.push({ name: item });
        result.files++;
      }
    }
    return result;
  } catch(error) {
    console.error(error)
  }
}

const printCountOfItems = ({ files, directories }) => {
  console.log(`${files} files, ${directories} directories`);
}

const printAllInfo = (tree) => {
  print(tree);
  printCountOfItems(tree);
}


const path = process.argv[2] || 'file-system/example';
const level = process.argv[3] || 2;


readDirectories(path, level).then(tree => printAllInfo(tree));
