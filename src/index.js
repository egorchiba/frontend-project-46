import path from 'path';
import { readFileSync } from 'node:fs';
import parse from './parsers.js';
import buildTree from './buildTree.js';
import formatTree from './formatters/index.js';

const getPath = (filename) => path.resolve(process.cwd(), filename);
const getFileType = (filename) => path.extname(filename).slice(1);
const getFileData = (filePath) => readFileSync(filePath, 'utf-8');

const generateDiff = (filepath1, filepath2, format = 'stylish') => {
  const fileData1 = getFileData(getPath(filepath1));
  const fileData2 = getFileData(getPath(filepath2));
  const fileType1 = getFileType(filepath1);
  const fileType2 = getFileType(filepath2);
  const obj1 = parse(fileData1, fileType1);
  const obj2 = parse(fileData2, fileType2);

  const tree = buildTree(obj1, obj2);

  return formatTree(tree, format);
};

export default generateDiff;
