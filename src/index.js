import parse from './parsers.js';
import makeTree from './buildTree.js';
import formatTree from './formatters/index.js';

const generateDiff = (filePath1, filePath2, format = 'stylish') => {
  const obj1 = parse(filePath1);
  const obj2 = parse(filePath2);

  const tree = makeTree(obj1, obj2);

  return formatTree(tree, format);
};

export default generateDiff;
