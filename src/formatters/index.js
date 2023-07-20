import makeStylish from './stylish.js';

const formatTree = (tree, format) => {
  const formatters = {
    stylish: makeStylish(tree),
  };
  return !formatters[format] ? new Error(`Unknow format: ${format}!`) : formatters[format];
};

export default formatTree;