import _ from 'lodash';

const addSpace = (depth) => ' '.repeat((depth * 4) - 2);

const getString = (data, depth) => {
    if (!_.isPlainObject(data)) {
      return `${data}`;
    }
    const str = Object.entries(data)
      .map(([key, value]) => `${addSpace(depth)}  ${key}: ${getString(value, depth + 1)}`);
    return `{\n${str.join('\n')}\n${addSpace(depth - 1)}  }`;
  };

const makeStylish = (tree) => {
    const iter = (obj, depth = 1) => obj.map((node) => {
      const {
        key, value, newValue, oldValue, children, status,
      } = node;
  
      switch (status) {
        case 'added':
          return `${addSpace(depth)}+ ${key}: ${getString(value, depth + 1)}`;
        case 'deleted':
          return `${addSpace(depth)}- ${key}: ${getString(value, depth + 1)}`;
        case 'unchanged':
          return `${addSpace(depth)}  ${key}: ${getString(value, depth + 1)}`;
        case 'updated': {
          const str1 = `${addSpace(depth)}- ${key}: ${getString(oldValue, depth + 1)}`;
          const str2 = `${addSpace(depth)}+ ${key}: ${getString(newValue, depth + 1)}`;
          return `${str1}\n${str2}`;
        }
        case 'nested':
          return `${addSpace(depth)}  ${key}: {\n${iter(children, depth + 1)}\n${addSpace(depth)}  }`;
        default:
          throw new Error(`Unknow ${type}!`);
        }
    }).join('\n');
    return `{\n${iter(tree)}\n}`;
};

export default makeStylish;