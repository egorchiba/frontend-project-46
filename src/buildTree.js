import _ from 'lodash';

const makeTree = (obj1, obj2) => {
  const keysObj = { ...obj1, ...obj2 };
  const keys = Object.keys(keysObj);
  const sortedKeys = _.sortBy(keys);
  const diffTree = sortedKeys.map((prop) => {
    if ((typeof obj1[prop] === 'object') && (typeof obj2[prop] === 'object')) {
      return { key: prop, status: 'nested', children: makeTree(obj1[prop], obj2[prop]) };
    } else if (obj2[prop] === undefined) {
      return { key: prop, value: obj1[prop], status: 'removed' };
    } else if (obj1[prop] === undefined) {
      return { key: prop, value: obj2[prop], status: 'added' };
    } else if (obj1[prop] === obj2[prop]) {
      return { key: prop, value: obj1[prop], status: 'unchanged' };
    } else if (obj1[prop] !== obj2[prop]) {
      return {
        key: prop, oldValue: obj1[prop], newValue: obj2[prop], status: 'updated',
      };
    }
  });

  return diffTree;
};

export default makeTree;
