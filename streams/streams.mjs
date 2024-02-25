import fs from 'fs';
import { Transform } from 'stream';

const letterRegex = /[а-яА-Яa-zA-Z ]/;

const updateFile = async (inputFileName) => {
  const readStream = fs.createReadStream(`./input/${inputFileName}`);
  const writeStream = fs.createWriteStream(`./output/${inputFileName}`);

  const filterText = new Transform({
    transform(chunk, encoding, callback) {
      const words = chunk.toString().split(/\n| /);
      if (words.length) {
        const data = words
          ?.map((el) => el.split('').filter((letter) => letterRegex.test(letter)).join(''))
          .filter(Boolean)
          .join(' ');
        callback(undefined, data);
      } else callback('File doesn\'t contain words.');
    },
  });

  const transformToObject = new Transform({
    transform(chunk, encoding, callback) {
      const words = chunk.toString().split(' ');
      if (words.length) {
        const obj = {};
        words.sort().forEach((el) => {
          obj[el] = obj[el] ? obj[el] + 1 : 1;
        });
        callback(undefined, JSON.stringify(obj));
      } else callback('Data can\'t be transformed to object');
    },
  });

  const transformToArray = new Transform({
    transform(chunk, encoding, callback) {
      const obj = JSON.parse(chunk.toString());
      if (Object.keys(obj).length) {
        const arr = Object.values(obj).join(', ');
        callback(undefined, `[${arr}]`);
      } else callback('Data can\'t be transformed to array');
    },
  });

  readStream
    .pipe(filterText)
    .pipe(transformToObject)
    .pipe(transformToArray)
    .pipe(writeStream);
};

updateFile('1.txt').catch((err) => console.error(err));

export default updateFile;
