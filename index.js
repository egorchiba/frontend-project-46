import _ from 'lodash';
import parse from './parsers.js';

export default (filepath1, filepath2) => {
    const obj1 = parse(filepath1);
    const obj2 = parse(filepath2);
    const keysObj = {};
    const keys = Object.keys(Object.assign(keysObj, obj1, obj2));
    const sortedKeys = _.sortBy(keys);
    let result = '\n';
    sortedKeys.forEach((key) => {
      if (obj1[key] === obj2[key]) {
        result = `${result}    ${key}: ${obj1[key]}\n`;
      } else {
        if (Object.hasOwn(obj1, key)) {
          result = `${result}  - ${key}: ${obj1[key]}\n`;
        }
        if (Object.hasOwn(obj2, key)) {
          result = `${result}  + ${key}: ${obj2[key]}\n`;
        }
      }
    });
    return result;
  };