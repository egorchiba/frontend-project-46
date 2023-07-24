import path from 'path';
import parse from './parsers.js';
import buildTree from './buildTree.js';
import formatTree from './formatters/index.js';

const generateDiff = (filePath1, filePath2, format = 'stylish') => {
  const normalizedFilePath1 = path.resolve(process.cwd(), filePath1);
  const normilizedFilePath2 = path.resolve(process.cwd(), filePath2);
  const obj1 = parse(normalizedFilePath1);
  const obj2 = parse(normilizedFilePath2);

  const tree = buildTree(obj1, obj2);

  return formatTree(tree, format);
};

export default generateDiff;
